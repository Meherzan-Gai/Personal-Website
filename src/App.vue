<template>
  <div id="app" class="backgroundSettings">
    <navbar-header
    :pages="pages"
    ></navbar-header>
    <h1 class="header"> Hi! I'm Meherzan Gai!</h1>
    <p>Click around to find out more about me</p>

  </div>

  <router-view></router-view>
  
</template>



<script>
import NavbarHeader from './components/NavbarHeader.vue';


export default {

  components: {
    NavbarHeader,
  },
  data () {
    return{
      pages: [
        {
          link: {
            text: "About",
            url: 'about.html',
          }
        }
      ]
    }

  }
  
}
</script>

<style>


</style>
