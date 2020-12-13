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
      products: [],
    };
  },
  created() {
    fetch('http://localhost:8091/products')
      .then((response) => response.json())
      .then((response) => {
        this.products = response.products;
      });
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
