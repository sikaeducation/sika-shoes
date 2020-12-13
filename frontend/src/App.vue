<template>
  <div id="the-app">
    <h1>Sika Shoes</h1>
    <nav class="navigation-bar">
      <ul>
        <li><a href="#" class="active">Home</a></li>
        <li><a href="#" class="">Products</a></li>
        <li><a href="#" class="">About</a></li>
      </ul>
    </nav>
    <main>
      <div id="home-page">
        <header class="hero-header">
          <img src="https://media.bizj.us/view/img/11379549/rothys*800xx662-374-0-56.jpg" alt="Hero">
          <h2>Shoes just got cool again.</h2>
        </header>
        <p>
          Shoes. Everybody wants them. The problem is, no one can figure out where to buy them!
          That's why we created Sika Shoes. All you need to do is get the key from Gary, go down
          to the basement, unlock the door, plug in the computer, and order some shoes. Let's
          get shoes on our feet!
        </p>
      </div>
      <div id="product-page">
        <h2>Products</h2>
        <ul>
          <li>
            <div class="product-listing">
              <div class="image-container"><img src="https://images-na.ssl-images-amazon.com/images/I/51b%2BfaJAyJL._AC_UY395_.jpg" alt="Airwalks"></div>
              <h3>Airwalks</h3>
              <p>Time-travel to 1997 and let's go Skateboarding!</p>
            </div>
          </li>
          <li>
            <div class="product-listing">
              <div class="image-container"><img src="https://m.media-amazon.com/images/I/71E5vDK4ucL._AC_UL1500_.jpg" alt="Xelero"></div>
              <h3>Xelero</h3>
              <p>
                You can make fun of these shoes all you want, but I can't even
                hear you from up here on these clouds I'm walking on.
              </p>
            </div>
          </li>
          <li>
            <div class="product-listing">
              <div class="image-container"><img src="https://cdn.shopify.com/s/files/1/0877/4986/products/002_ChiliRed_pdp_A.jpg?v=1596060959" alt="Rothy's"></div>
              <h3>Rothy's</h3>
              <p>Did you know you can put these in the washing machine?</p>
            </div>
          </li>
        </ul>
      </div>
      <div id="about-page">
        <p>
          Sika Shoes is a small, fictional company that's commited to doing business
          the old-fashioned way: By making it all up.
        </p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
</style>
