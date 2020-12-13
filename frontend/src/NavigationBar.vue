<template>
<nav class="navigation-bar">
  <ul>
    <li v-for="link in links" :key="link.slug">
      <a
        @click.prevent="navigate(link.slug)"
        :href="link.url"
        :class="{ active: currentPage == link.slug }"
        >{{link.label}}</a>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
  name: 'NavigationBar',
  props: {
    currentPage: String,
  },
  methods: {
    navigate(destination) {
      this.$emit('navigate', destination);
    },
  },
  computed: {
    links() {
      return [{
        slug: 'home-page',
        label: 'Home',
        url: '#',
      }, {
        slug: 'product-page',
        label: 'Products',
        url: '#',
      }, {
        slug: 'about-page',
        label: 'About',
        url: '#',
      }];
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/_sizes.scss";

.navigation-bar {
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
</style>
