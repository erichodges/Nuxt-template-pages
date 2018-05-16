<template>
  <main>
    <Nav />
    <section class="section-1">
      

      <div class="section-1__heading">      
        <h1 class="title">
          Trouble sleeping?
        </h1>
        <h2 class="subtitle">
          Try a customized sleep therapy
        </h2>
        <div class="links">
          <a
            href="#"
            v-scroll-to="'#section-2'"
            class="button--green">Get Started
          </a>          
        </div>
      </div>
      <div class="down-arrow-div  ">
        <a href="#" v-scroll-to="'#section-2'">
          <svg class="down-arrow" fill="#FFFFFF" height="40" viewBox="0 0 24 24" width="40"        xmlns="http://www.w3.org/2000/svg">
          <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>
          <path d="M0-.75h24v24H0z" fill="none"/>
        </svg>
        </a>
        
      </div>
    </section>

    <section id="section-2" class="section-2">
      

    </section>

    <section id="section-3" class="section-3">

    </section>

    <section id="section-4" class="section-4">

    </section>

  </main>
</template>


<script>
  import Nav from '@/components/Nav'

  export default {
    components: {
      Nav
    }
  }
</script>


