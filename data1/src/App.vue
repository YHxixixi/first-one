<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">

//   font-size: calc(100 / 750 * 100vw);

// <router-link to="/">Home</router-link> |
// <router-link to="/about">About</router-link>
#app {
  width: 100%;
  height: 100%;
  background: #ccc;
  display: flex;
  flex-direction: column;
}
// header{
//   width: 100%;
//   height: 50px;
//   background: red;
// }
#nav {
  // flex: 1;
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
