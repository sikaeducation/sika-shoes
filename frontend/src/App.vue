<template>
  <div id="the-app">
    <h1>Sika Shoes</h1>
    <NavigationBar
      :currentPage="currentPage"
      @navigate="navigate"
    />
    <main>
      <component :is="currentPage" :data="currentPageProps" />
    </main>
  </div>
</template>

<script>
import HomePage from '@/HomePage.vue';
import ProductPage from '@/ProductPage.vue';
import AboutPage from '@/AboutPage.vue';
import NavigationBar from '@/NavigationBar.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    ProductPage,
    AboutPage,
    NavigationBar,
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
@import "@/styles/_sizes.scss";

#the-app {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: $xl;
  h1 {
    @include heading-font-1;
  }
  main {
    max-width: 800px;
  }
}
</style>
