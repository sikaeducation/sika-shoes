<template>
  <div id="home-page">
    <header class="hero-header">
      <img src="https://media.bizj.us/view/img/11379549/rothys*800xx662-374-0-56.jpg" alt="Hero" />
      <h2>Shoes just got cool again.</h2>
    </header>
    <p>
      Shoes. Everybody wants them. The problem is, no one can figure out
      where to buy them! That's why we created Sika Shoes. All you need to
      do is get the key from Gary, go down to the basement, unlock the door,
      plug in the computer, and order some shoes. Let's get shoes on our feet!
    </p>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style lang="scss">
@import "@/styles/_colors.scss";
@import "@/styles/_sizes.scss";
@import "@/styles/_typography.scss";

#home-page {
  font-size: $font-xxl;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  .hero-header {
    margin-bottom: $xxxl;
    text-align: center;
    img {
    }
    h2 {
      @include hero-font-1;
      margin-top: -$xl;
      color: $contrast-color-5;
      text-align: center;
      z-index: 10;
    }
  }
  p {
    max-width: 600px;
    line-height: 1.5;
  }
}
</style>
