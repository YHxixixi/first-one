<template>
  <div class="home">
    <!--zheshi 首页-->
    <SwiperBar />
    <!--首页头条 -->
    <div class="home_fenlei">
      <div class="fenlei_fluid_1">免费专区</div>
      <div class="fenlei_fluid_2">女频精选</div>
    </div>
    <div class="bookData">
    <BookData/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SwiperBar from "../components/Swiper";
import BookData from '../components/BookBar'
export default {
  name: "home",
  components: {
    // HelloWorld
    SwiperBar,
    BookData
  }
};
</script>
<style lang="scss">
.home_fenlei {
  width: 100%;
  // height: 50px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 0.25rem;
  .fenlei_fluid_1 {
    background: -webkit-linear-gradient(left top, #82a9e1, #7297c1);
    // background-color: #6d95bf #7297c1;
    height: 2.5rem;
    line-height: 2.5rem;
    border-radius: 0.3rem;
    margin: 0 0.25rem;
    color: #fff;
    text-align: center;
    -webkit-box-flex: 1;
    box-sizing: border-box;
    flex: 1;
    a {
      color: #fff;
      text-decoration: none;
      color: #888;
      em {
        background-position: -6.65rem 0;
        width: 1.2rem;
        display: inline-block;
        height: 1rem;
        vertical-align: -0.3rem;
        margin-right: 0.45rem;
        // background: url(../images/icon.png) no-repeat;
        background-size: 12.5rem;
        font-style: normal;
      }
    }
  }
  .fenlei_fluid_2 {
    background: -webkit-linear-gradient(left top, #d4b8d6, #c39cc9);
    height: 2.5rem;
    line-height: 2.5rem;
    border-radius: 0.3rem;
    margin: 0 0.25rem;
    color: #fff;
    text-align: center;
    flex: 1;
    box-sizing: border-box;
  }
}

.bookData{
  width: 100%;
  // height: 500px;
  background: #ccc;
}
</style>
