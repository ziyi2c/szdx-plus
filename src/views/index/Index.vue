<template>
  <div class="container">
    <div class="info">
      <img :src="picInfo" alt="" />
    </div>
    <div class="tag-left-top">
      <img :src="picLeftTop" alt="" />
    </div>
    <div class="tag-left-bottom">
      <img :src="picLeftBottom" alt="" />
    </div>
    <div class="tag-right-top">
      <div class="box">
        <img :src="picRightTop1" alt="" />
        <img :src="picRightTop2" alt="" />
      </div>
    </div>
    <div class="tag-right-bottom">
      <img :src="picRightBottom" alt="" />
    </div>
    <div class="tag-center">
      <img :src="picCenter" alt="" />
    </div>
  </div>
</template>

<script>
import info from '@/assets/index/u14.png';
import center from '@/assets/index/u13.png';
import leftTop from '@/assets/index/u10.png';
import leftBottom from '@/assets/index/u12.png';
import rightTop1 from '@/assets/index/u2.png';
import rightTop2 from '@/assets/index/u3.png';
import rightBottom from '@/assets/index/u11.png';
export default {
  data() {
    return {
      picInfo: info,
      picCenter: center,
      picLeftTop: leftTop,
      picLeftBottom: leftBottom,
      picRightTop1: rightTop1,
      picRightTop2: rightTop2,
      picRightBottom: rightBottom
    };
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  position: relative;
  // background-image: url('@/assets/index/u1.png');
  background-color: #84d5f8;
  .info {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%) scale(2);
  }
  .tag-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .tag-left-top,
  .tag-left-bottom,
  .tag-right-top,
  .tag-right-bottom {
    position: absolute;
    transform: scale(0.7);
  }
  .tag-left-top {
    top: 0;
    left: 0;
    img {
      max-width: 550px;
    }
    // width: ;
  }
  .tag-left-bottom {
    bottom: 0;
    left: 0;
    img {
      max-width: 550px;
    }
  }
  .tag-right-top {
    top: 0;
    right: 0;
    img {
      max-width: 550px;
    }
    .box {
      display: flex;
      flex-flow: column;
    }
  }
  .tag-right-bottom {
    bottom: 0;
    right: 0;
    img {
      max-width: 300px;
    }
  }
}
</style>
