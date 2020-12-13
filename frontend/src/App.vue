<template>
  <div id="the-app">
    <h1>Sika Shoes</h1>
    <nav>
      <ul>
        <li>
          <a
            @click.prevent="navigate('home-page')"
            href="#"
            :class="{ active: homeIsActive }"
          >Home</a>
        </li>
        <li>
          <a
            @click.prevent="navigate('product-page')"
            href="#"
            :class="{ active: productIsActive }"
          >Products</a>
        </li>
        <li>
          <a
            @click.prevent="navigate('about-page')"
            href="#"
            :class="{ active: aboutIsActive }"
          >About</a>
        </li>
      </ul>
    </nav>
    <main>
      <component :is="currentPage" :data="currentPageProps" />
    </main>
  </div>
</template>

<script>
import HomePage from '@/HomePage.vue';
import ProductPage from '@/ProductPage.vue';
import AboutPage from '@/AboutPage.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    ProductPage,
    AboutPage,
  },
  data() {
    return {
      currentPage: 'home-page',
      currentPageProps: {},
    };
  },
  methods: {
    navigate(destination) {
      const pageProps = {
        'home-page': {},
        'product-page': {
          products: this.products,
        },
        'about-page': {},
      };
      this.currentPageProps = pageProps[destination];
      this.currentPage = destination;
    },
  },
  computed: {
    homeIsActive() {
      return this.currentPage === 'home-page';
    },
    productIsActive() {
      return this.currentPage === 'product-page';
    },
    aboutIsActive() {
      return this.currentPage === 'about-page';
    },
    products() {
      return [{
        id: 1,
        name: 'Airwalks',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51b%2BfaJAyJL._AC_UY395_.jpg',
        description: 'Time-travel to 1997 and let\'s go Skateboarding!',
      }, {
        id: 2,
        name: 'Xelero',
        imageUrl: 'https://m.media-amazon.com/images/I/71E5vDK4ucL._AC_UL1500_.jpg',
        description: 'You can make fun of these shoes all you want, but I can\'t even hear you from up here on these clouds I\'m walking on.',
      }, {
        id: 3,
        name: 'Rothy\'s',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0877/4986/products/002_ChiliRed_pdp_A.jpg?v=1596060959',
        description: 'Did you know you can put these in the washing machine?',
      }];
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/_reset.scss";
@import "@/styles/_typography.scss";
@import "@/styles/_colors.scss";

#the-app {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: $xl;
  h1 {
    @include heading-font-1;
  }
  nav {
    ul {
      display: flex;
      flex-flow: row wrap;
      margin-bottom: $baseline;
      li + li {
        margin-left: $large;
      }
      :not(.active) {
        text-decoration: none;
      }
      .active {
        text-decoration: underline;
      }
    }
  }
  main {
    max-width: 800px;
  }
  #about-page {
    font-size: $font-xxxl;
  }
}
</style>
