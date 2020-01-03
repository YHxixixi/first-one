<template>
  <div class="book_div">
    <ul>
      <li>
        <img src alt />
        <div class="content">
          <h3 class="bookname">书名</h3>
          <span>sdjflksdjfklsdjfksdfjlkjeifjoiejdksjflksdfjskld</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookData: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http.get("/api/data").then(res => {
        this.bookData = res.data;
        console.log(this.bookData);
      });
    }
  }
};
</script>

<style lang='scss'>
.book_div {
  width: 100%;
  height: 100%;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    list-style: none;
    flex-direction: column;
    padding: 10px;
    li {
      // flex: 1;
      height: 120px;
      border: 1px solid #000;
      margin: 5px 0;
      padding: 5px;
      display: flex;
      flex-direction: row;
      img {
        background: pink;
        width: 100px;
        height: 107px;
      }
      // .bookname {
      // }
      .content{
       width: 230px;
        background: lavender;
        padding: 0 5px;
        h3{
          font-size: 18px;
          font-weight: 600;
        }
      }
    }
  }
}
</style>