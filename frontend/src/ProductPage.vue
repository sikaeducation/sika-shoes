<template>
  <div id="product-page">
    <h2>Products</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        <div class="product-listing">
          <div class="image-container"><img :src="product.imageUrl" :alt="product.name" /></div>
          <h3>{{product.name}}</h3>
          <p>{{product.description}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductPage',
  props: {
    data: Object,
  },
  computed: {
    products() {
      return this.data.products;
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/_typography.scss";

#product-page {
  h2 {
    @include heading-font-2;
    margin-bottom: $xxl;
  }
  .product-listing {
    margin-bottom: $xxxxl;
    .image-container {
      display: flex;
      justify-content: center;
      margin-bottom: $xl;
      img {
        width: 75%;
      }
    }
    h3 {
      margin-bottom: $large;
      @include heading-font-3;
    }
    p {
      font-size: $font-xxl;
      line-height: 1.5;
    }
  }
}
</style>
