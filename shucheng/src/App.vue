<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页</router-link> 
      <router-link to="/about">分类</router-link>
      <router-link to="/paihang">排行</router-link>
      <router-link to="/shujia">书架</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('../public/css/reset.scss');
body{
  font-size: calc(100/750*100vw);
}
#app {
  width: 100%;
  height: 100%;
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  font-size: 15px;
}

#nav {
  width: 100%;
  height: 40px;
  background: #ccc;
  display: flex;
  flex-direction: row;

  a {
    flex: 1;
    text-align: center;
    line-height: 40px;
    font-weight: bold;
    color: #2c3e50;
    background: hsla(214, 14%, 10%, 0.76);
    color: #868181;

    &.router-link-exact-active {
      // color: #42b983;
      color: #fff;
    }
  }
}
</style>
