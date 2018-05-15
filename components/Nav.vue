<template>
  <vue-headroom>
      <ul class="ul-nav">
        <li class="li-logo">
          <img src="~/assets/images/sleep-logo.png" alt=" Logo" class="logo">
        </li>
        <a class="a" href="#" v-scroll-to="'#section-2'">
        <li class="li-user-nav">Products</li></a>
        <a class="a" href="#" v-scroll-to="'#section-3'">
        <li class="li-user-nav">About</li></a>
        <a class="a" href="#" v-scroll-to="'#section-4'">
        <li class="li-user-nav">Contact</li></a>        
        <li class="nav-spacer-right"> </li>
      </ul>
      </vue-headroom>
</template>