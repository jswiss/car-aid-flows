 <!--home page-->
<template>
  <div>
    <div id="topmost" class="columns is-mobile">
      <div class="column is-2 buffer"></div>
      <div class="column is-8">
        <p class="is-2 title">l'exercice de cartographie de l'aide</p>
        <p>
          En 2017, les flux d'aide en RCA ont été suivis dans le cadre d’un exercice biannuel de cartographie. La première campagne a eu lieu de fin mars à fin mai 2017, et la seconde de début octobre à fin novembre 2017. Les données présentées couvrent la période janvier à septembre 2017, à savoir les neuf premiers mois de la première année de mise en œuvre du RCPCA. La mise en ligne de ces données doit contribuer à un progrès significatif dans l'amélioration de la transparence de l'aide, ce qui permettra d'améliorer la coordination. Les données sur l'aide devraient également se révéler utiles pour surveiller les principes d'efficacité de l'aide.
        </p>
        <br>
        <p>
          Ce site présente quelques-unes des principales conclusions de l'exercice de cartographie de l'aide mené en 2017. Des données et des analyses supplémentaires seront fournies dans un rapport 2017 sur les flux d'aide en RCA (à paraître). Une analyse synthétique est déjà contenue dans le rapport de la revue annuelle 2017 du RCPCA. L'exercice de cartographie a été effectué par la Cellule de suivi de l’aide du Secrétariat du RCPCA. Un soutien analytique a été fourni par la Banque mondiale et les Nations Unies. 
        </p>
        <br>
      </div>
      <div class="column is-2"></div>
    </div>
    <div>
      <p id="support">Développé avec le support de la Banque mondiale.</p>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
  	name: 'About',
  };
</script>

<style scoped>
  .callout-box {
  	border: 1px solid #8d8d8d;
  	margin: 2%;
  	padding: 0% 2% 1% 2%;
  	box-shadow: 1px 1px 3px #c6c6c6;
  	background-color: #dcdcdc;
  }

  p {
  	text-align: justify;
  }
  #topmost {
  	margin-top: 20px;
  }
  .buffer {
  	margin: 20px;
  }

  #support {
  	text-align: center;
  	margin: 2%;
  	font-size: 11px;
  	color: gray;
  }
</style>
