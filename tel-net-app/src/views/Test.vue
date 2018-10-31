<template>
  <div class="test">
    <h1>Welcome To Tel-Net Demo</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { routerService } from '../services/router.service';
@Component({
  components: {}
})
export default class Test extends Vue {}
</script>
<style lang="scss">
body {
  background: #fff;
  text-align: center;
  color: #111;
  font-family: open-sans;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  color: #111;
  font-weight: 100;
}
</style>