<template>
  <div class="div-with-background">
    <Nav />
    <nuxt/>
    <Footer />
  </div>
</template>


<script>
  import Nav from '@/components/Nav'
  import Footer from '@/components/Footer'
  

  export default {
    components: {
      Nav,
      Footer,
      
    }
  }
</script>

<style lang="scss">
  .div-with-background { 
    height: 100vh;     
    background-image: url('~/assets/images/anders-jilden-108186-unsplash.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

</style>
