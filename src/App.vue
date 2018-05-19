<template>
  <div id="app" @mousemove="onMouseMove" @mouseout="onMouseOut">
    <Tracker :message="message"/>
  </div>
</template>

<script>
import Tracker from './components/Tracker.vue'

export default {
  name: 'App',
  components: {
    Tracker
  },
  data: function () {
    return {
      message: '[...., ....]'
    };
  },
  methods: {
    onMouseMove: function (ev) {
      this.message = `[${ev.x.pad(4)}, ${ev.y.pad(4)}]`;
    },
    onMouseOut: function () {
      this.message = '[...., ....]';
    }
  }
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
}
</style>
