<template>
  <div class="home">
    <img class="branding" src="../assets/brand.png"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { timer, Observable, Subscription } from 'rxjs';
import router from '../router';
@Component({
  name: 'Home',
  created: () => {
         router.push({ name: 'test' });
  },
  destroyed: () => {},
  methods: {
    navigate() {
      router.push({ name: 'test' });
    }
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
body {
  background: #3f966c;
  text-align: center;
  color: #ffffff;
  font-family: open-sans;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  color: #fff;
  font-weight: 100;
}
.home {
  margin-top: 40vh;
}

.branding {
  animation: pulsate 2s infinite;
  width: 150px;
}

@keyframes pulsate {
  0% {
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    -o-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);
  }

  50% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -o-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  100% {
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    -o-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);
  }
}
</style>