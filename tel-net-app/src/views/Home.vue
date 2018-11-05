<template>
  <div class="home">
     <v-flex sm12 md4 offset-md4>
        <v-card>
          <div class="card-header-block" >
            <img src="@/assets/brand.png" class="brand"/>
               <h3 class="headline mb-0 text-xs-center">Mikrotik Connection Demo</h3>
          </div>
          <div class="form-container">
            <v-form v-model="valid">
             <v-text-field v-model="host" :rules="hostRules" label="Host" required></v-text-field>
             <v-text-field v-model="username" :rules="usernameRules" label="Username" required></v-text-field>
            <v-text-field v-model="password" :rules="passwordRules" label="Password" required></v-text-field>
        </v-form>
          </div>
          <v-card-actions>  
             <v-flex xs12 sm4 offset-sm4>
            <v-btn block color="info" class="text-xs-center">Connect</v-btn><br/>
             </v-flex>
          </v-card-actions>
        </v-card>
      </v-flex>
      <br/>
      <p class="text-xs-center">Prav &copy; 2018</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { timer, Observable, Subscription } from 'rxjs';
import router from '../router';
@Component({
  name: 'Home',
  created: () => {},
  methods: {
    navigate() {
      router.push({ name: 'test' });
    }
  },
  data: () => ({
    valid: false,
    host: '',
    hostRules: [(v: any) => !!v || 'Host is required'],
    username: '',
    usernameRules: [(v: any) => !!v || 'Username is required'],
    password: '',
    passwordRules: [(v: any) => !!v || 'Password is required']
  })
})
export default class Home extends Vue {}
</script>
<style lang="scss">
@import '../styles/animations';
.home {
  margin-top: 25vh;
  padding: 32px;
  @include animate-css(slideInUp);
  .card-header-block {
    padding: 16px;
    position: relative;
    background: #236bb2;
    min-height: 180px;
  }
  .form-container {
    padding: 16px 32px;
  }
  .brand {
    display: block;
    width: 60px;
    margin: auto;
    margin-top: 5%;
  }
  p {
    font-weight: lighter;
  }
}
</style>