<template>
  <div class="about">
    <header>猫眼电影</header>
    <div id="nav">nav</div>
  </div>
</template>
<style lang="scss">
@import url("../../public/css/reset.scss");
body {
  // width: 100%;
  // height: 100%;
  // background: #ccc;
  font-size: calc(100 / 750 * 100vw);
}
.about {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  background: #ccc;
}
header {
  width: 100%;
  height: 50px;
  background: red;
  text-align: center;
  color: #fff;
  font-size: 20px;
  line-height: 50px;
  font-weight: 500;
}
#nav {
  flex: 1;
  overflow: auto;
  background: lavender;
}
</style>
