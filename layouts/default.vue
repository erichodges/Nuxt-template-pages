<template>
  <div class="first-div">
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
  .first-div { 
      height: 100vh; 
  align-items: center;
  text-align: center;

    background-image: linear-gradient(
    to bottom, rgba($color-grey-light-1, .3),
    rgba($color-grey-light-2, .9)), url('~/assets/images/AdobeStock_78149176_Preview.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

</style>
