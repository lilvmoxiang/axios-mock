<template>
  <div id="app">
   
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
  	return {
  		routes:this.$router.options.routes
  	}
  }
}
</script>

<style>
#app {
  width:100%;
  height:100%;
}
</style>


