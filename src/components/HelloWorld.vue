<template>
    <div class="hello">
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.api.login('hanyun', '123456').then((data) => {
      console.log(data)
      this.storage.setItem('issuer', data.data.issuer)
      this.storage.setItem('token', data.data.token)
    })
    this.api.index()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
