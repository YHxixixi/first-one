<template>
  <div class="wrapper_three">
    <div class="three_div">
      <li
        v-for="(item,index) in list "
        :key="index"
        :class="item.class?'action_i':''"
        @click="clickTab(index)"
      >
        <van-icon :name="item.name" />
        <span>{{item.title}}</span>
      </li>
    </div>
    <div class="two_div">
      <div>
        <span
          @click="clickTwo(index)"
          :class="item.check?'action_span':''"
          v-for="(item,index) in list2"
          :key="index"
        >{{item.name}}</span>
      </div>
    </div>
    <div class="main_div">
      <ul>
        <li>
        <span>dsfdsfdsf</span>
        <div>
        <span>申请人</span>
        <span>申请人</span>
        <span>申请人</span>
        <span>申请人</span>
        </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import {Icon} from 'vant'
// <span class="action_span">加班</span>
// <span>休假</span>
//  <li v-for="(item,index) in list3" :key="index">

//  </li>
export default {
  data() {
    return {
      list: [
        {
          name: "clock",
          title: "待处理",
          class: true
        },
        {
          name: "question",
          title: "已发起",
          class: false
        },
        {
          name: "checked",
          title: "已处理",
          class: false
        }
      ],
      list2: [
        {
          name: "加班",
          check: true
        },
        {
          name: "休假",
          check: false
        }
      ],
      list3: [
        {
          id: "1sdf54s6d4",
          name: "猪猪",
          type: "双休日加班",
          data: "2019/5/22",
          time: 2.0
        },
        {
          id: "2s1dfa35sd",
          name: "狗狗",
          type: "节假日加班",
          data: "2019/5/22",
          time: 9.0
        },
        {
          id: "d5e2s6gdfr",
          name: "屁屁",
          type: "双休日加班",
          data: "2019/5/22",
          time: 3.0
        },
        {
          id: "4ew5sfasdf321",
          name: "黑蛋",
          type: "双休日加班",
          data: "2019/5/22",
          time: 8.0
        }
      ]
    };
  },
  methods: {
    clickTab(index) {
      this.list.forEach(item => {
        item.class = false;
      });
      this.list[index].class = true;
    },
    clickTwo(index) {
      this.list2.forEach(item => {
        item.check = false;
      });
      this.list2[index].check = true;
    }
  }
};
</script>
<style lang="scss">
.wrapper_three {
  width: 100vw;
  height: 100vh;
  // background: #ccc;
  display: flex;
  flex-direction: column;
}

.three_div {
  width: 100%;
  height: 100px;
  // background: #ccc;
  list-style: none;
  display: flex;
  flex-direction: row;
  li {
    flex: 1;
    text-align: center;
    // border: 1px solid #000;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ccc;
    i {
      font-size: 50px;
    }
  }
  .action_i {
    color: rgba(4, 104, 4, 0.829);
  }
}

.two_div {
  width: 100%;
  height: 80px;
  background: #f0ecec;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  div {
    width: 260px;
    height: 40px;
    border: 1px solid rgba(4, 104, 4, 0.829);
    border-radius: 80px;
    display: flex;
    flex-direction: row;
    span {
      flex: 1;
      text-align: center;
      line-height: 40px;
      border-radius: 80px;
      font-size: 15px;
      font-weight: 500;
    }
    .action_span {
      background: rgba(4, 104, 4, 0.829);
      color: #fff;
    }
  }
}

.main_div {
  flex: 1;
  overflow: auto;
  ul {
    // width: 100%;
    // height: 100%;
    background: #ccc;

    li {
      width: 100%;
      height: 150px;
      background: lavender;
      margin: 10px 0;
    }
  }
}
</style>