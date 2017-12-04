import moment from 'moment';
import { excelToJsDate } from '../utils/helpers';
const d3 = Object.assign({}, require('d3-array'), require('d3-collection'));

const SET_TABLE = (state, data) => {
	state.tableData = state.rawData.map(o => {
		return {
			'Nom du projet': o['Nom du projet'],
			'Date de début': o['Date de début'],
			'Date de clôture': o['Date de clôture'],
			Pilier: o.Pilier,
			Composante: o.Composante,
			'Secteur principal': o['Secteur principal'],
			Bailleurs: o.Bailleurs,
			"Partenaires d'exécution": o["Partenaires d'exécution"],
			'Montant du projet en devise': o['Montant du projet en devise'],
			'Décaissements 2017 en devise': o['Décaissements 2017 en devise'],
			'Prévision de décaissements 2017-2019 USD':
				o['Prévision de décaissements 2017-2019 USD'],
		};
	});
	state.tableData.forEach(d => {
		if (d['Date de début'] !== null) {
			d['Date de début'] = moment(excelToJsDate(d['Date de début'])).format(
				'YYYY - MM'
			);
		}
		if (d['Date de clôture'] !== null) {
			d['Date de clôture'] = moment(excelToJsDate(d['Date de clôture'])).format(
				'YYYY - MM'
			);
		}
	});
};
const SET_XAF = (state, data) => {
	state.xafTable = state.tableData.map(o => {
		return {
			'Nom du projet': o['Nom du projet'],
			'Date de début': o['Date de début'],
			'Date de clôture': o['Date de clôture'],
			Pilier: o.Pilier,
			Composante: o.Composante,
			'Secteur principal': o['Secteur principal'],
			Bailleurs: o.Bailleurs,
			"Partenaires d'exécution": o["Partenaires d'exécution"],
			'Montant du projet en devise':
				o['Montant du projet en devise'] * state.xaf,
			'Décaissements 2017 en devise':
				o['Décaissements 2017 en devise'] * state.xaf,
			'Prévision de décaissements 2017-2019 USD':
				o['Prévision de décaissements 2017-2019 USD'] * state.xaf,
		};
	});
};
const SET_EUR = (state, data) => {
	state.eurTable = state.tableData.map(o => {
		return {
			'Nom du projet': o['Nom du projet'],
			'Date de début': o['Date de début'],
			'Date de clôture': o['Date de clôture'],
			Pilier: o.Pilier,
			Composante: o.Composante,
			'Secteur principal': o['Secteur principal'],
			Bailleurs: o.Bailleurs,
			"Partenaires d'exécution": o["Partenaires d'exécution"],
			'Montant du projet en devise':
				o['Montant du projet en devise'] * state.eur,
			'Décaissements 2017 en devise':
				o['Décaissements 2017 en devise'] * state.eur,
			'Prévision de décaissements 2017-2019 USD':
				o['Prévision de décaissements 2017-2019 USD'] * state.eur,
		};
	});
};
const SET_COLUMNS = (state, data) => {
	state.tableColumns = [
		'Nom du projet',
		'Date de début',
		'Date de clôture',
		'Pilier',
		'Composante',
		'Secteur principal',
		'Bailleurs',
		"Partenaires d'exécution",
		'Montant du projet en devise',
		'Décaissements 2017 en devise',
		'Prévision de décaissements 2017-2019 USD',
	];
};
const SET_TREEMAP_YEAR = (state, data) => {
	state.treemapYear = data;
};
const SET_CLEAN_TREE = (state, data) => {
	state.cleanTree = state.rawData.map(k => {
		return {
			project: k['Nom du projet'],
			pillar: k['Pilier'],
			component: k['Composante'],
			sector: k['Secteur principal'],
			totalUSD: k['Montant du projet USD'],
			usd2017: k['Décaissements 2017 USD'],
			projectedUSD2018:
				k['Prévision de décaissements 2017 USD'] +
				k['Prévision de décaissements 2018 USD'],
			projectedUSD2019: k['Prévision de décaissements 2019 USD'],
		};
	});
};
const SET_TREEMAP = (state, data) => {
	if (state.treemapYear === 2017) {
		state.treemap = state.tree2017;
	} else if (state.treemapYear === 2018) {
		state.treemap = state.tree2018;
	} else {
		state.treemap = state.tree2019;
	}
};
const SET_TREES = (state, data) => {
	state.tree2017.values = d3
		.nest()
		.key(d => d.pillar)
		.key(d => d.component)
		.key(d => d.sector)
		.key(d => d.project)
		.rollup(d => d3.sum(d, d => d.usd2017))
		.entries(state.cleanTree);
	state.tree2017 = [
		{
			name: 2017,
			children: state.tree2017.values.map(pillar => {
				return {
					name: pillar.key,
					children: pillar.values.map(component => {
						return {
							name: component.key,
							children: component.values.map(sector => {
								return {
									name: sector.key,
									children: sector.values.map(project => {
										return {
											name: project.key,
											value: project.value,
											url: `http://localhost:7775/projects/${project.key}`,
										};
									}),
								};
							}),
						};
					}),
				};
			}),
		},
	];
	state.tree2018.values = d3
		.nest()
		.key(d => d.pillar)
		.key(d => d.component)
		.key(d => d.sector)
		.key(d => d.project)
		.rollup(d => d3.sum(d, d => d.projectedUSD2018))
		.entries(state.cleanTree);
	state.tree2018 = [
		{
			name: 2018,
			children: state.tree2018.values.map(pillar => {
				return {
					name: pillar.key,
					children: pillar.values.map(component => {
						return {
							name: component.key,
							children: component.values.map(sector => {
								return {
									name: sector.key,
									children: sector.values.map(project => {
										return {
											name: project.key,
											value: project.value,
											url: `http://localhost:7775/projects/${project.key}`,
										};
									}),
								};
							}),
						};
					}),
				};
			}),
		},
	];
	state.tree2019.values = d3
		.nest()
		.key(d => d.pillar)
		.key(d => d.component)
		.key(d => d.sector)
		.key(d => d.project)
		.rollup(d => d3.sum(d, d => d.projectedUSD2019))
		.entries(state.cleanTree);
	state.tree2019 = [
		{
			name: 2019,
			children: state.tree2019.values.map(pillar => {
				return {
					name: pillar.key,
					children: pillar.values.map(component => {
						return {
							name: component.key,
							children: component.values.map(sector => {
								return {
									name: sector.key,
									children: sector.values.map(project => {
										return {
											name: project.key,
											value: project.value,
											url: `http://localhost:7775/projects/${project.key}`,
										};
									}),
								};
							}),
						};
					}),
				};
			}),
		},
	];
};

export default {
	SET_TABLE,
	SET_COLUMNS,
	SET_EUR,
	SET_XAF,
	SET_TREEMAP_YEAR,
	SET_CLEAN_TREE,
	SET_TREEMAP,
	SET_TREES,
};
