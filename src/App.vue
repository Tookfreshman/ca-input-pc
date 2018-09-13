<template>
  <div id="app">
      <ca-input @getFile="aa" inputType="file" :fileVerify="verifyFile" :fileType="fileType" :maxSize="maxSize"></ca-input>
  </div>
</template>

<script>
import caInput from './myPlugins/caInput/caInput.vue'
export default {
  name: 'App',
  data()  {
      return {
          verifyFile: true,
          fileType: [3],
          maxSize: 2,
      }
  },
  mounted() {

  },
  methods: {
      aa(val){
          console.log(val);
      }
  },
  components: {
    caInput
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
