  <template lang="html">
    <div id="chart-menu">
      <div class="columns is-mobile">
        <div class="outline">
          <router-link class="nav-item" to="/charts/pillar-count-chart" >
            <div id="chart-selector-1" class="column">
              <span>
                <i class="fa fa-bar-chart fa-4x"></i>
              </span>
              <h4 class="sidebar-title">
                Piliers et
                <br>
                composantes
              </h4>
            </div>
          </router-link>
        </div>
        <div class="outline">
          <router-link class="nav-item" to="/charts/pillars-components-2017" >
            <div id="chart-selector-2" class="column">
              <i class="fa fa-bar-chart fa-4x"></i>
              <h4 class="sidebar-title">
                2017
                <br>
                Décaissements
              </h4>
            </div>
          </router-link>
        </div>
      </div>
      <div class="columns">
        <div class="outline">
          <router-link class="nav-item" to="/charts/treemap-2017" >
            <div id="chart-selector-3" class="column">
              <i class="fa fa-th fa-4x"></i>
              <h4 class="sidebar-title">
                Treemap 2017
              </h4>
            </div>
          </router-link>
        </div>
        <div class="outline">
          <router-link class="nav-item" to="/charts/treemap-2018" >
            <div id="chart-selector-4" class="column">
              <i class="fa fa-th fa-4x"></i>
              <h4 class="sidebar-title">
                Treemap 2018
              </h4>
            </div>
          </router-link>
        </div>
      </div>
      <div class="columns">
        <div class="outline">
          <router-link class="nav-item" to="/charts/treemap-2019" >
            <div id="chart-selector-5" class="column">
              <i class="fa fa-th fa-4x"></i>
              <h4 class="sidebar-title">
                Treemap 2019
              </h4>
            </div>
          </router-link>
        </div>
          <div class="outline">
            <router-link class="nav-item" to="/charts/budget-support">
              <div id="chart-selector-6" class="column">
                <i class="fa fa-bar-chart fa-4x"></i>
                <h4 class="sidebar-title">
                 Appui budgétaire
                 <br>
                 2016 et 2017
                </h4>
              </div>
            </router-link>
          </div>
      </div>
      <div class="columns">
        <div class="outline">
          <router-link class="nav-item" to="/charts/disbursement-rate" >
            <div id="chart-selector-7" class="column">
              <i class="fa fa-bar-chart fa-4x"></i>
              <h4 class="sidebar-title">
                Taux de
                <br>
                décaissement
              </h4>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </template>

<script type="text/javascript">
  export default {
  	name: 'ChartsTabs',
  };
</script>

  <style scoped>
  .outline {
  	/*border: 1px solid rgba(0, 209, 178, 0.7);*/
  	margin: 1px;
  }

  .sidebar-title {
  	font-size: 14px;
  }

  #chart-menu {
  	margin: 1% 0 0 0;
  }
  .fa-4x {
  	font-size: 5em !important;
  }

  i {
  	width: 80px;
  	height: 80px;
  }
</style>
