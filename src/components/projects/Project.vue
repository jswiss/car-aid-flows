<template lang="html">
  <div id="topmost" class="container">
    <!--<div class="block">
      <a href="#" class="button is-primary" @click="printPage">Print Page</a>
    </div>-->
    <div id="print-area">
      <div id="title">
        <a id="title-link" :href="project['Liens vers site internet ou documents du projet']">
          <h1 id="project-title" class="title is-1"> {{ project['Nom du projet'] }}</h1>
        </a>
      </div>
      <div class="info-box">
        <div class="info-title">
          <h3 class="title is-3">Information sommaire</h3>
        </div>
        <div id="basic-info" class="info-box">
          <div id="dates" class="columns is-mobile">
            <div class="column is-5" id="start-date">
              <h4 class="title is-4 is-bold">Date de début:</h4>
              <p class="date-text">{{ project['Date de début'] || 'n/a' }}</p>
            </div>
            <div class="column is-2"></div>
            <div class="column is-5" id="end-date">
              <h4 class="title is-4">Date de clôture:</h4>
              <p class="date-text">{{ project['Date de clôture'] }}</p>
            </div>
          </div>
          <div id="dates" class="columns is-mobile">
            <div class="column is-3">
              <h4 class="title is-5 is-bold"><span class="ndp">Composante du RCPCA:</span></h4>
              <p class="pillar">{{ project['Composante'] }}</p>
            </div>
            <div class="column is-3">
              <h4 class="title is-5 is-bold"><span class="ndp">Pilier du RCPCA:</span></h4>
              <p class="pillar">{{ project['Pilier'] }}</p>
            </div>
            <div class="column is-3">
              <h4 class="title is-5 is-bold"><span class="ndp">Secteur principal:</span></h4>
              <p class="pillar">{{ project['Secteur principal'] }}</p>
            </div>
            <div class="column is-3">
              <h4 class="title is-5 is-bold"><span class="ndp">Liens vers d'autres secteurs:</span></h4>
              <p class="pillar">{{ project["Liens vers d'autres secteurs"] || 'n/a' }}</p>
            </div>
          </div>
          <div id="desc" class="columns is-mobile">
            <div class="column is-5" id="description">
              <h4 class="title is-4 is-bold">Objectifs du projet:</h4>
              <p class="desc-text">{{ project['Objectifs du projet'] || 'n/a' }}</p>
            </div>
            <div class="column is-2"></div>
            <div class="column is-4" id="project-website">
              <h4 class="title is-4">Site web du projet:</h4>
              <a v-bind:href="project['Liens vers site internet ou documents du projet']"><p class="url">{{ project['Liens vers site internet ou documents du projet'] || 'n/a'}}</p></a>
            </div>
          </div>
        </div>
        <div class="info-title">
          <h3 class="title is-3">L'information financière</h3>
        </div>
        <div id="financial-info" class="info-box">
          <div id="value" class="columns is-mobile">
            <div class="column is-3" id="project-value">
              <h4 class="title is-5 is-bold"><strong>Montant du projet (XAF)</strong>:</h4>
              <p id="total-value" class="desc-text">FCFA {{ project['Montant du projet XAF'] | currency }}</p>
              <p id="total-value-small" class="desc-text-small">€ {{ project['Montant du projet XAF'] / xafToEur | currency }}</p>
              <p id="total-value-small" class="desc-text-small">$ {{ project['Montant du projet XAF'] / usd | currency }}</p>
            </div>
            <div class="column is-3">
              <h4 class="title is-6 is-bold"><span class="disb">Décaissements 2017:</span></h4>
              <p class="year-disb">FCFA {{ project['Décaissements 2017 XAF'] | currency }}</p>
              <p id="total-value-small" class="desc-text-small">€ {{ project['Décaissements 2017 XAF'] / xafToEur | currency }}</p>
              <p id="total-value-small" class="desc-text-small">$ {{ project['Décaissements 2017 XAF'] / usd | currency }}</p>
            </div>
            <div class="column is-3">
              <h4 class="title is-6 is-bold"><span class="disb">Prévision de décaissements 2018:</span></h4>
              <p class="year-disb">FCFA {{ project['Prévision de décaissements 2018 XAF'] + project['Prévision de décaissements 2017 XAF'] | currency }}</p>
              <p id="total-value-small" class="desc-text-small">€ {{ project['Décaissements 2018 XAF'] / xafToEur | currency }}</p>
              <p id="total-value-small" class="desc-text-small">$ {{ project['Décaissements 2018 XAF'] / usd | currency }}</p>
            </div>
            <div class="column is-3">
              <h4 class="title is-6 is-bold"><span class="disb">Prévision de décaissements 2019:</span></h4>
              <p class="year-disb">FCFA {{ project['Prévision de décaissements 2019 XAF'] | currency }}</p>
              <p id="total-value-small" class="desc-text-small">€ {{ project['Décaissements 2019 XAF'] / xafToEur | currency }}</p>
              <p id="total-value-small" class="desc-text-small">$ {{ project['Décaissements 2019 XAF'] / usd | currency }}</p>
            </div>
          </div>
        </div>
        <div class="info-title">
          <h3 class="title is-3">Bailleurs de fonds et exécutants</h3>
        </div>
        <div id="basic-info" class="info-box">
          <div id="funder" class="columns is-mobile">
            <div class="column is-5">
              <h4 class="title is-4 is-bold"><span class="donor">Agence de reportage:</span></h4>
              <p class="funder">{{ project['Agence de reportage'] || 'n/a' }}</p>
            </div>
            <div class="column is-2"></div>
            <div class="column is-5">
              <h4 class="title is-4 is-bold"><span class="imp">Partenaires d'exécution:</span></h4>
              <p class="implementer" id="implementer">{{ project["Partenaires d'exécution"] || 'n/a' }}</p>
            </div>
          </div>
          <div id="implementer" class="columns is-mobile">
            <div class="column is-5">
              <h4 class="title is-4 is-bold"><span class="donor">Bailleurs:</span></h4>
              <p class="funder">{{ project['Bailleurs'] || 'n/a' }}</p>
            </div>
            <div class="column is-2"></div>
            <div class="column is-5">
              <h4 class="title is-4 is-bold"><span class="imp">Ministère de tutelle:</span></h4>
              <p class="implementer" id="imp-category">{{ project['Ministère de tutelle'] || 'n/a' }}</p>
            </div>
          </div>
        </div>
        <div class="info-title">
          <h3 class="title is-3">Themes transversaux</h3>
        </div>
        <div id="basic-info" class="info-box">
          <div id="focuses" class="columns is-mobile">
            <div class="column is-4">
              <h4 class="title is-4 is-bold"><span class="focus">Atténuer les déséquilibres régionaux:</span></h4>
              <p class="proj-focus">{{ project['Atténuer les déséquilibres régionaux'] || 'n/a' }}</p>
            </div>
            <div class="column is-4">
              <h4 class="title is-4 is-bold"><span class="focus">Promouvoir l'égalité des genres:</span></h4>
              <p class="proj-focus">{{ project["Promouvoir l'égalité des genres"] || 'n/a' }}</p>
            </div>
            <div class="column is-4">
              <h4 class="title is-4 is-bold"><span class="focus">Renforcer la transparence et la redevabilité:</span></h4>
              <p class="proj-focus">{{ project['Renforcer la transparence et la redevabilité'] || 'n/a' }}</p>
            </div>
          </div>
          <div id="focuses" class="columns is-mobile">
            <div class="column is-4">
              <h4 class="title is-4 is-bold"><span class="focus">Accroître les capacités nationales:</span></h4>
              <p class="proj-focus">{{ project['Accroître les capacités nationales'] || 'n/a' }}</p>
            </div>
            <div class="column is-4">
              <h4 class="title is-4 is-bold"><span class="focus">Promouvoir l'inclusion des jeunes:</span></h4>
              <p class="proj-focus">{{ project["Promouvoir l'inclusion des jeunes"] || 'n/a' }}</p>
            </div>
            <div class="column is-4">
              <h4 class="title is-4 is-bold"><span class="focus">Environnement et exploitation durable des ressources:</span></h4>
              <p class="proj-focus">{{ project['Environnement et exploitation durable des ressources'] || 'n/a' }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import moment from 'moment';
  import store from '../../store';
  import { excelToJsDate } from '../../utils/helpers';
  const projects = store.state.rawData;

  export default {
  	name: 'Project',
  	data() {
  		return {
  			projects: projects,
  			project: null,
  			eur: this.$store.state.eur,
  			usd: this.$store.state.usd,
  			xafToEur: this.$store.state.xafToEur,
  		};
  	},
  	methods: {
  		fetchData() {
  			const projectName = this.$route.params.projectName;
  			function findProject(project) {
  				return project['Nom du projet'] === projectName;
  			}
  			this.project = projects.find(findProject);
  			console.log(this.project);
  		},
  		printPage(el) {
  			window.print();
  		},
  		dateFormat() {
  			this.projects.forEach(d => {
  				if (d['Date de début'] !== null) {
  					d['Date de début'] = moment(excelToJsDate(d['Date de début'])).format(
  						'MMM, YYYY'
  					);
  				}
  				if (d['Date de clôture'] !== null) {
  					d['Date de clôture'] = moment(
  						excelToJsDate(d['Date de clôture'])
  					).format('MMM, YYYY');
  				}
  			});
  		},
  	},
  	mounted() {
  		this.dateFormat();
  		this.fetchData();
  	},
  	watch: {
  		$route: 'fetchData',
  	},
  	beforeCreate() {
  		this.dateFormat();
  	},
  };
</script>

<style scoped>
  #title {
  	margin-top: 20px;
  }
  #pillars {
  	margin-top: 1%;
  }
  .title {
  	margin-bottom: 2px;
  }
  .year-row {
  	font-weight: bold;
  }
  #table-allocation {
  	margin-top: 2%;
  }
  .info-box {
  	border: 1px solid #8d8d8d;
  	margin: 2%;
  	padding: 0% 2% 1% 2%;
  	box-shadow: 1px 1px 3px #c6c6c6;
  }
  .info-title {
  	margin-top: 2%;
  }
  #total-value {
  	font-weight: bold;
  }
  #total-value-small,
  .pillar {
  	font-size: 13px;
  }
  #value {
  	margin-top: 1%;
  }
  #funder {
  	margin-top: 1%;
  }
  #focuses {
  	margin-top: 1%;
  }
  #dates {
  	margin-top: 1%;
  }
  @media print {
  	#pillars {
  		margin-top: 1%;
  	}
  	.title {
  		margin-bottom: 2px;
  	}
  	.year-row {
  		font-weight: bold;
  	}
  	#table-allocation {
  		margin-top: 2%;
  	}
  	.info-box {
  		border: 1px solid #8d8d8d;
  		margin: 2%;
  		padding: 0% 2% 1% 2%;
  		box-shadow: 1px 1px 3px #c6c6c6;
  	}
  	.info-title {
  		margin-top: 2%;
  	}
  	#total-value {
  		font-weight: bold;
  	}
  	#value {
  		margin-top: 1%;
  	}
  	#funder {
  		margin-top: 1%;
  	}
  	#focuses {
  		margin-top: 1%;
  	}
  }
  template {
  	margin: 70px;
  }
  #topmost {
  	margin-top: 50px;
  }
  #title-link {
  	color: black;
  	text-decoration: none;
  }
</style>
