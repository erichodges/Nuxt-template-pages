<template>
  <main>    
    <section class="section-1">    

      <div class="section-1__heading">           
        <h1 class="title"> 
          <!-- {{ items.fields.h1 }} -->
          Nuxt Template Pages
         
        </h1>
        <h2 class="subtitle">
          <!-- {{ items.fields.h2 }} -->
          A nice subtitle goes here...
        </h2>
        </div>
        <div class="links">
          <a
            href="#"
            v-scroll-to="'#section-2'"
            class="button--green">Get Started
          </a>          
        </div>
      <!-- </div> -->
      <div class="down-arrow-div ">
        <a href="#" v-scroll-to="'#section-2'">
          <svg class="down-arrow bounce" fill="#FFFFFF" height="60" viewBox="0 0 24 24" width="60" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>
          <path d="M0-.75h24v24H0z" fill="none"/>
        </svg>
        </a>        
      </div>

    </section>

    <section id="section-2" class="section-2">
      {{ items.fields.bodyText_1 }}

    </section>

    <section id="section-3" class="section-3">

    </section>

    <section id="section-4" class="section-4">
      <form action="https://formspree.io/your@email.com"
        method="POST">
        Name <input type="text" name="name">
        email <input type="email" name="_replyto">
        <input type="submit" value="Send">
      </form>
    </section>
    

  </main>
</template>


<script>

  import {createClient} from '~/plugins/contentful.js'

  const client = createClient()

  export default {
  // make use of your env variables 
    asyncData ({env}) {
      return Promise.all([
        client.getEntries({
         // provide all other query parameters from env variable
      
         content_type: env.LAYOUT_CT_ID
        })
      ]).then(([entries]) => {
        // return data that should be available
        // in the template
        return {
         //access the items object of your JSON response
          items: entries.items[0]
        }
        
      }).catch(console.error)
    }
  }



  // export default {
  //   asyncData({ params, error, $axios }) {
  //     return $axios
  //       .get("https://nuxt-template.cdn.prismic.io/api/v2")
  //       .then(res => {
  //         console.log(res);
  //         return { params };
  //       })
  //   }
  // };
  
</script>


