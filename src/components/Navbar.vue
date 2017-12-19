<template lang="html">
  <nav class="nav has-shadow" >
    <div class="nav-left">
      <router-link class="nav-item" to="/">
        <img src="../assets/images/car-flag.png" alt="CAR Flag">
      </router-link>
      <router-link class="nav-item is-brand" to="/">
        Flux d'aide de la RCA
      </router-link>
      <router-link class="nav-item is-tab" to="/charts/pillar-count-chart">
        <i class="fa fa-dashboard"></i>Graphiques
      </router-link>
      <router-link class="nav-item is-tab" to="/table">
        <i class="fa fa-list-alt"></i>Tableau
      </router-link>
      <router-link class="nav-item is-tab" to="/about">
        <i class="fa fa-info-circle"></i>Information
      </router-link>
      <router-link class="nav-item is-tab" to="/documents-rcpca">
        <i class="fa fa-file-text"></i>Documents RCPCA
      </router-link>
    </div>
    <div class="nav-right">
      <a 
        class="nav-item is-tab report" href="https://s3.eu-central-1.amazonaws.com/car-downloads/RCPCA+final+A4_FR.pdf"
      >
Télécharger le rapport</a>
    </div>
  </nav>
</template>
<script type="text/javascript">
  export default {
  	name: 'navbar',
  };
</script>

<style scoped>
  .is-tab {
  	text-indent: 10px;
  }

  .is-brand {
  	font-weight: bold;
  }

  .nav {
  	position: fixed !important;
  	top: 0;
  	left: 0;
  	right: 0;
  	z-index: 1030;
  	margin-bottom: 40px;
  }

  .report {
  	font-weight: bold;
  }
</style>
