<template>
  <div class="dashboard">
    <v-navigation-drawer clipped fixed v-model="drawer" app>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>logout</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Disconnect</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  
    <v-toolbar color="info" app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Mikrotik Demo </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex>
            <v-card>
              <div class="card-header-block">
                <h3 class="headline mb-0 text-xs-center">Ping Address</h3>
              </div>
              <v-form ref="form" v-model="valid" lazy-validation>
                <div class="form-container">
                  <v-text-field v-model="host" :rules="hostRules" label="Address" required></v-text-field>
                </div>
                <v-card-actions>
                  <v-flex xs12 sm4 offset-sm4>
                    <v-btn block color="info" class="text-xs-center" :disabled="!valid" @click="submit">Connect</v-btn><br/>
                  </v-flex>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card>
              <div class="card-header-block">
                <h3 class="headline mb-0 text-xs-center">Add User</h3>
              </div>
              <v-form ref="form" v-model="valid" lazy-validation>
                <div class="form-container">
                  <v-text-field v-model="host" :rules="hostRules" label="Host" required></v-text-field>
                  <v-text-field v-model="username" :rules="usernameRules" label="Username" required></v-text-field>
                  <v-text-field v-model="password" :rules="passwordRules" label="Password" required></v-text-field>
                </div>
                <v-card-actions>
                  <v-flex xs12 sm4 offset-sm4>
                    <v-btn block color="info" class="text-xs-center" :disabled="!valid" @click="submit">Connect</v-btn><br/>
                  </v-flex>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card>
              <div class="card-header-block">
                <h3 class="headline mb-0 text-xs-center">Ping Device</h3>
              </div>
              <v-form ref="form" v-model="valid" lazy-validation>
                <div class="form-container">
                  <v-text-field v-model="host" :rules="hostRules" label="Host" required></v-text-field>
                  <v-text-field v-model="username" :rules="usernameRules" label="Username" required></v-text-field>
                  <v-text-field v-model="password" :rules="passwordRules" label="Password" required></v-text-field>
                </div>
                <v-card-actions>
                  <v-flex xs12 sm4 offset-sm4>
                    <v-btn block color="info" class="text-xs-center" :disabled="!valid" @click="submit">Connect</v-btn><br/>
                  </v-flex>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script lang="ts">
  import {
    Component,
    Emit,
    Prop,
    Watch,
    Vue,
  } from 'vue-property-decorator';
  import {
    timer,
    Observable,
    Subscription,
  } from 'rxjs';
  @Component({
    data: () => ({
      drawer: true,
    }),
    props: {
      source: String,
    },
  })
  export default class Dashboard extends Vue {}
</script>
<style lang="scss">
  @import '../styles/animations';
  .dashboard {
    .flex {
      padding: 16px;
    }
    .v-card {
      padding: 16px;
    }
  }
</style>