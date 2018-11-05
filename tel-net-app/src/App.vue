<template>
  <div id="app">
    <v-app dark>
         <router-view/>
   </v-app>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Vuetify from 'vuetify';
Vue.use(Vuetify);
@Component({})
export default class Home extends Vue {}
</script>
<style lang="scss">
@import 'styles/style';
</style>
