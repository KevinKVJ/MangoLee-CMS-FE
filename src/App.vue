<template>
  <!-- <div id="nav">
    <router-link to="/"></router-link>
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view/>
</template>

<style lang="scss">
  @import url(./assets/fonts/font.css);

  *{
    font-family: 'Poppins-Regular', sans-serif;
  }
  html{
    font-size: 62.5% * 10;
  }
  body,html{
    min-width:280px;
    min-height: 560px;
  }
</style>
