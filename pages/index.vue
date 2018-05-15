<template>
  <main>
    <section class="section-1">
      <vue-headroom>
      <ul class="ul-nav">
        <li class="li-logo">
          <img src="~/assets/images/sleep-logo.png" alt=" Logo" class="logo">
        </li>
        <a class="a" href="#" v-jump="{to: 'section-2'}">
        <li class="li-user-nav">Products</li></a>
        <a class="a" href="#" v-scroll-to="'#section-3'">
        <li class="li-user-nav">About</li></a>
        <a class="a" href="#" v-scroll-to="'#section-4'">
        <li class="li-user-nav">Contact</li></a>        
        <li class="nav-spacer-right"> </li>
      </ul>
      </vue-headroom>

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
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad reiciendis dignissimos vel assumenda dolor. Amet aspernatur ducimus facere numquam nesciunt, magnam maiores, non reiciendis corporis deleniti sint autem nihil quaerat soluta perspiciatis modi quidem ipsum ut dolorem laborum porro laboriosam ex. Quibusdam corrupti delectus distinctio quasi, libero temporibus in placeat aliquam possimus, quisquam repellat nisi quia laudantium excepturi dolor commodi dignissimos quidem eveniet nobis. A, amet rem similique earum molestias nostrum maiores asperiores ratione cupiditate tenetur quis iure, recusandae nemo! Cum quia accusamus consequatur, maxime earum cupiditate. Nesciunt, quo perspiciatis? Similique non pariatur vero numquam quae voluptatem quod? Aut iure ut porro voluptatem accusantium harum optio dolore libero mollitia corrupti. Consequuntur doloribus incidunt dolorum non est cumque accusantium velit eos ipsum provident quisquam, voluptatum itaque molestias quaerat architecto repellendus! Commodi temporibus cumque, ipsa odio alias repellat cupiditate iusto ut eos quaerat velit nesciunt omnis sit ab, laboriosam natus harum ducimus nostrum illum sed, pariatur molestiae debitis consequuntur dolorem. Rem minus velit facilis hic, laborum dolorem rerum. Atque eius, obcaecati autem ipsam quibusdam, facere saepe minus sunt iusto laborum minima repellat quod nesciunt eum vero necessitatibus nemo excepturi explicabo corrupti veritatis in modi a exercitationem distinctio? Tempore numquam nostrum est harum!</h1>

    </section>

    <section id="section-3" class="section-3">

    </section>

    <section id="section-4" class="section-4">

    </section>

  </main>
</template>


<script>

</script>
