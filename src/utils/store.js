const raw = require('../assets/data/aidflows.json');

const first = raw[0];

const allHeaders = Object.keys(first);

const locations = raw.map(k => {
	return {
		name: k['Nom du projet'],
		objectives: k['Objectifs du projet'],
		implementers: k["Partenaires d'exécution"],
		donors: k['Bailleurs'],
		ministry: k['Ministère de tutelle'],
		startDate: k['Date de début'],
		endDate: k['Date de clôture'],
		pillar: k['Pilier'],
		component: k['Composante'],
		primarySector: k['Secteur principal'],
		totalUSD: k['Montant du projet USD'],
		usd2017: k['Décaissements 2017 USD'],
		projectedUSD2017: k['Prévision de décaissements 2017 USD'],
		projectedUSD2018: k['Prévision de décaissements 2018 USD'],
		projectedUSD2019: k['Prévision de décaissements 2019 USD'],
		bangui: k['Bangui'],
		ombellaMPoko: k["Ombella-M'Poko"],
		lobaye: k['Lobaye'],
		nanaMambere: k['Nana-Mambéré'],
		mambereKadei: k['Mambéré-Kadéï'],
		sanghaMbaere: k['Sangha-Mbaéré'],
		ouham: k['Ouham'],
		ouhamPende: k['Ouham-Pendé'],
		ouaka: k['Ouaka'],
		kemo: k['Kemo'],
		nanaGrebizi: k['Nana-Grébizi'],
		baminguiBangoran: k['Bamingui-Bangoran'],
		vakaga: k['Vakaga'],
		hauteKotto: k['Haute-Kotto'],
		basseKotto: k['Basse-Kotto'],
		mbomou: k['Mbomou'],
		hautMbomou: k['Haut-Mbomou'],
	};
});

const locationNames = [
	'Bangui',
	"Ombella-M'Poko",
	'Lobaye',
	'Nana-Mambéré',
	'Mambéré-Kadéï',
	'Sangha-Mbaéré',
	'Ouham',
	'Ouham-Pendé',
	'Ouaka',
	'Kemo',
	'Nana-Grébizi',
	'Bamingui-Bangoran',
	'Vakaga',
	'Haute-Kotto',
	'Basse-Kotto',
	'Mbomou',
	'Haut-Mbomou',
];

const locationHeaders = [];

const locationTable = locations.reduce((r, o) => {
	let exc = [
		'name',
		'objectives',
		'implementers',
		'donors',
		'ministry',
		'startDate',
		'endDate',
		'pillar',
		'component',
		'primarySector',
		'totalUSD',
		'usd2017',
		'projectedUSD2017',
		'projectedUSD2018',
		'projectedUSD2019',
	];
	Object.keys(o).forEach(k => {
		if (o[k] && !exc.includes(k)) {
			r.push({
				location: k,
				locationValue: o[k],
				name: o.name,
				objective: o.objectives,
				implementers: o.implementers,
				donors: o.donors,
				ministry: o.ministry,
				startDate: o.startDate,
				endDate: o.endDate,
				pillar: o.pillar,
				component: o.component,
				primarySector: o.primarySector,
				totalUSD: o.totalUSD,
			});
		}
	});
	return r;
}, []);

export {
	locations,
	raw,
	allHeaders,
	locationNames,
	locationTable,
	locationHeaders,
};
