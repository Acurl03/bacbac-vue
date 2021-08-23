<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <div class="slide__card">
        <img
          :src="item.imgUrl"
          class="card__img"
        />
        <div class="card__body">
          <h3>{{ item.bodyContent }}</h3>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: "swiper-grab-cursor",
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',

        // slidesPerView: 2.2,
        centeredSlides: true,
        // spaceBetween: 30,
        loop: true,
        breakpoints: {

          // when window width is <= 2560px
          2560: {
            slidesPerView: 2.5,
            spaceBetween: 100,
          },
          // when window width is >= 1920px
          1920: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
          // when window width is >= 1000px
          1200: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
          // when window width is >= 320px
          768: {
            slidesPerView: 1.8,
            spaceBetween: 15,
          },
          
        },
      },
      swiperList: [
        {
          id: "1",
          imgUrl: require("../assets/img/01-index/02-main/03-news/swiper1.jpg"),
          bodyContent: "最暖聖誕 新年｜白白 X 海裡魚HelloFish",
        },
        {
          id: "2",
          imgUrl: require("../assets/img/01-index/02-main/03-news/swiper2.jpg"),
          bodyContent: "可愛雙倍｜白白綠郵+白白綠郵mini",
        },
        {
          id: "3",
          imgUrl: require("../assets/img/01-index/02-main/03-news/swiper3.jpg"),
          bodyContent: "與大家一起並肩作戰｜白白 X Toyzeroplus",
        },
        {
          id: "4",
          imgUrl: require("../assets/img/01-index/02-main/03-news/swiper4.jpg"),
          bodyContent: "蓋出自己的城市吧｜白白 X 記帳城市",
        },
        {
          id: "5",
          imgUrl: require("../assets/img/01-index/02-main/03-news/swiper5.png"),
          bodyContent: "收納袋｜白白 X TTF",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("../assets/css/swiper_custom.css");
</style>
  

  
