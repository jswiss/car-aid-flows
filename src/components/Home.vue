<!--home page-->
<template>
  <div id="topmost" class="columns is-gapless is-mobile">  
    <div class="column is-4">
      <div class="field">
        <p class="main-text">
          Le RCPCA est le Plan National de Relèvement et de Consolidation de la Paix de la République Centrafricaine (RCA). Le RCPCA couvre la période 2017-2021. Le rapport de synthèse du RCPCA a été approuvé par le Gouvernement en octobre 2016 et présenté aux partenaires de la RCA le 17 novembre 2016 lors de la Conférence de Bruxelles. 
          <br>
          <br>
          Ce site présente les données du suivi de l’aide extérieure pour l’année 2017 pour la RCA. Les données ont été collectées lors de l’exercice de cartographie de l’aide qui a eu lieu à fin 2017, en vue d’alimenter le rapport de la revue annuelle de la première année du RCPCA. Les données ont été récoltées par l’Unité de suivi de l’aide du Secrétariat du RCPCA. En savoir plus sur l'exercice de cartographie de l'aide.
          <br>
          <br>
          L’arborescence de cette page permet d’explorer les projets de relèvement, consolidation de la paix et développement par piliers, composantes et secteurs du RCPCA. Elle n’inclut pas l’aide humanitaire d’urgence, qui fait l’objet du Plan de réponse humanitaire et dont les données sont accessibles sur la base <a href="https://fts.unocha.org/countries/43/summary/2017" target="_blank">FTS d’OCHA</a>.
        </p>
      </div>
    </div>
    <div class="column">
      <project-map></project-map>
      <div>
        <p id="support">Développé avec le support de la Banque mondiale.</p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import ProjectMap from './charts/ProjectMap';
  export default {
  	name: 'home',
  	components: {
  		ProjectMap,
  	},
  	mounted() {
  		this.$store.dispatch('LOAD_RAW');
  	},
  };
</script>

<style scoped>
  .disclaimer-text {
  	margin-left: 2%;
  	font-style: italic;
  	font-size: 12px;
  	color: gray;
  }
  #topmost {
  	margin-top: 25px;
  }
  .control {
  	margin-left: 20px;
  }
  .field {
  	margin: 1%;
  }
  #support {
  	text-align: center;
  	margin: 2%;
  	font-size: 11px;
  	color: gray;
  }
  .main-text {
  	font-size: 16px;
  	/*text-align: justify;*/
  	line-height: 1.5;
  	margin: 2%;
  	margin-top: 2%;
  	font-weight: 400;
  }
</style>