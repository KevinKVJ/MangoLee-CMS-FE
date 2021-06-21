<template>
  <!-- <div id="nav">
    <router-link to="/"></router-link>
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view/>
</template>

<style lang="scss">
  @import url(./assets/css/reset.css);
  @import url(./assets/fonts/font.css);
  @import url(./assets/font-awesome-4.7.0/css/font-awesome.min.css);
  // @import './assets/font-awesome-4.7.0/scss/font-awesome.scss';

  #app{
    font: inherit;
  }

  html{
    font-size: 62.5% * 10;
    font-family: 'Poppins-Regular', sans-serif;
  }
  // body,html{
    //   min-width:280px;
  //   min-height: 560px;
  // }

  body{
    font-size: 16px;
    width: 100vw;
    height: 100vh;
  }

</style>
