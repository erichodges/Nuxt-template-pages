<template>
  <vue-headroom>
    <nav>
      <ul class="ul-nav">
        <li class="li-logo">
          <img src="~/assets/images/sleep-logo.png" alt=" Logo" class="logo">
        </li>
        <li class="li-user-nav">
          <a class="a" href="#" v-scroll-to="'#section-2'">
            Products<svg class="nav-chevron" fill="currentColor" height="20" viewBox="0 0 17 17" width="22" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>
            <path d="M0-.75h24v24H0z" fill="none"/>
            </svg>
          </a>
          <div>
            <ul>
              <li><a href="#">widget 1</a></li>
              <li><a href="#">widget 2</a></li>
              <li><a href="#">widget 3</a></li>
             
            </ul>
          </div>
        </li>

        <li class="li-user-nav">
          <a class="a" href="#" v-scroll-to="'#section-3'">
          About</a>
        </li>

        <li class="li-user-nav">
          <a class="a" href="#" v-scroll-to="'#section-4'">
          Contact</a>
        </li>        

        <li class="nav-spacer-right"> </li>
      </ul>
    </nav>
  </vue-headroom>
</template>

<script>

</script>

<style lang="scss" scoped>

nav {
  overflow: hidden;
  display: block;

}

.nav-chevron {
  

  &:hover {
    fill: #fff;
  }
}

nav ul {
  margin: 0;
  padding: 0;

  list-style-type: none;
  transition: all 0.2s;
  
}

nav ul li {
  display: inline-block;
  list-style-type: none;
  
  -webkit-transition: all 0.2s;
   -moz-transition: all 0.2s;
   -ms-transition: all 0.2s;
   -o-transition: all 0.2s;
  transition: all 0.2s; 
 }

nav > ul > li > a > .caret {
  border-top: 4px solid #aaa;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  content: "";
  display: inline-block;
  height: 0;
  width: 0;
  vertical-align: middle;

  -webkit-transition: color 0.1s linear;
  -moz-transition: color 0.1s linear;
  -o-transition: color 0.1s linear;
    transition: color 0.1s linear; 
}

nav > ul > li > a {
    text-decoration: none;
  }

nav > ul > li:hover {
  background-color: transparent;
}

nav > ul > li:hover > a {
  color: rgb( 255, 255, 255 );
}

nav > ul > li:hover > a > .caret {
  border-top-color: rgb( 255, 255, 255 );
}

nav > ul > li > div {
  background-color: transparent;
  border-top: 0;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.055);
  display: none;
  margin: 0;
  opacity: 0;
  position: absolute;
  width: 165px;
  visibility: hidden;
  transition: opacity 0.2s;

  padding-top: 1rem;
}

 nav > ul > li:hover > div {
  display: block;
  opacity: 1;
  visibility: visible;

  
}

nav > ul > li > div ul > li {
  display: block;
  padding-left: .5rem;
  padding-bottom: 1rem;
  font-weight: 300;
}

nav > ul > li > div ul > li > a {
  color: rgb(192, 190, 190);
  display: block;
  
  text-decoration: none;

  
}

nav > ul > li > div ul > li:hover > a {
  color: #fff;
}

.a {
  color: rgb(192, 190, 190);

  > nav-chevron:hover {
    fill: #fff
  }
}

</style>
