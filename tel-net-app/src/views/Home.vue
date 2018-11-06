<template>
  <div class="home">
     <v-flex sm12 md8 offset-md2 lg6 offset-lg3>
             <v-alert
        :value="true"
        type="error"
v-if="hasError"
      >
       {{errorMessage}}
      </v-alert>
        <v-card>
          <div class="card-header-block" >
            <img src="@/assets/brand.png" class="brand"/>
               <h3 class="headline mb-0 text-xs-center">Mikrotik Connection Demo</h3>
          </div>
             <v-form ref="form" v-model="valid" lazy-validation>
          <div class="form-container">
             <v-text-field v-model="host" :rules="hostRules" label="Host" required ></v-text-field>
             <v-text-field v-model="username" :rules="usernameRules" label="Username" required></v-text-field>
            <v-text-field v-model="password" label="Password" ></v-text-field>
          </div>
          <v-card-actions>  
             <v-flex xs12 sm4 offset-sm4>
            <v-btn block color="info" class="text-xs-center" :disabled="!valid" @click="submit">Connect</v-btn><br/>
             </v-flex>
          </v-card-actions>
           </v-form>
        </v-card>
      </v-flex>
      <br/>
      <p class="text-xs-center">Prav &copy; 2018</p>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Watch, Vue } from 'vue-property-decorator';
import { timer, Observable, Subscription } from 'rxjs';
import { DeviceModel } from '../models/device.model';
import { deviceService } from '../services/device.service';
import router from '../router';
import axios from 'axios';
@Component({
  data: () => ({
    valid: true,
    hasError: false,
    errorMessage: '',
    host: '',
    hostRules: [(v: any) => !!v || 'Host is required'],
    username: '',
    usernameRules: [(v: any) => !!v || 'Username is required'],
    password: ''
  }),
  methods: {
    submit() {
      if ((this.$refs.form as any).validate()) {
        let ctx = {
          host: this.host,
          user: this.username,
          password: this.password
        };
        deviceService.connect(ctx).then((result: any) => {
          console.log(result);
          if (result.data.Success) {
            router.push('dashboard');
          } else {
            this.hasError = result.data.Success;
            this.errorMessage = result.data.Message;
          }
        });
      }
    }
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss">
@import '../styles/animations';
html {
  overflow: hidden;
}
.home {
  margin-top: 10vh;
  padding: 32px;
  overflow: hidden;
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