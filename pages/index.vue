<template>
  <main>
    <section class="section-1">
      <ul class="ul-nav">
        <li class="li-logo">
          <img src="~/assets/images/logo.png" alt="Trillo Logo" class="logo">
        </li>
        
        <li class="li-user-nav">Products</li>
        <li class="li-user-nav">About</li>
        <li class="li-user-nav contact-menu-item">Contact</li>
        <li class="nav-spacer-right"> </li>
      </ul>

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
            target=""
            class="button--green">Get Started
          </a>          
        </div>
      </div>
      <div class="down-arrow">
        <a href="#" v-scroll-to="'#section-2'">
          <svg fill="#FFFFFF" height="40" viewBox="0 0 24 24" width="40"        xmlns="http://www.w3.org/2000/svg">
          <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>
          <path d="M0-.75h24v24H0z" fill="none"/>
        </svg>
        </a>
        
      </div>
    </section>

    <section class="section-2">
      
      
    </section>
  </main>
</template>


<script>
var Vue = require('vue');
var VueScrollTo = require('vue-scrollto');

// You can also pass in the default options
Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: 0,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })


</script>
