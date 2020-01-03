<template>
  <div class="swiper_div">
    <van-swipe :autoplay="3000" class="wrapper">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img class="swiper_slide" :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
// v-lazy="image" 

export default {
  data() {
    return {
      images: [
        "https://static.zongheng.com/upload/recommend/44/0e/440e976ad47e5b56e60581cdaefa3d3a.jpeg",
        "https://static.zongheng.com/upload/recommend/16/8b/168b0b73d01ea1b70d8d3d8cc0fbb9a4.jpeg",
        "https://static.zongheng.com/upload/recommend/de/4e/de4e421dda82d12372ad01f8871eb9da.jpeg",
        "https://static.zongheng.com/upload/recommend/da/cc/dacc7595a0bacefdce69c8ad69f60111.jpeg"
      ]
    };
  }
};
</script>

<style lang="scss">
.swiper_div {
  width: 100%;
  height: 150px;
  background: #ccc;
  .wrapper {
    width: 100%;
    height: 100%;
  }
}
.swiper_slide {
  height: 150px;
  width: 100%;
}

.van-swipe__indicators {
  left: 300px;
}
</style>