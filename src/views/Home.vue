<template>
  <div class="home">
    <section class="banner">
      <img
        class="banner_bg"
        src="../assets/img/01-index/02-main/01-banner/banner520.jpg"
        alt="banner"
      />
      <img
        class="middle_logo"
        src="../assets/img/01-index/02-main/01-banner/logo.png"
        alt="logo"
      />
    </section>
    <section class="about_us container position-relative" id="about">
      <div class="title">
        <h2 class="g_fs_36">About</h2>
        <p class="g_fs_14 g_fw_700">關於插畫家 Darylhochi與白白日記</p>
      </div>
      <div class="row author_content mb-5 mx-0">
        <div class="col-md-4  author_introduction">
          <div class="little_title">
            <img
              src="../assets/img/01-index/02-main/02-about_us/author_intro.png"
              alt=""
            />
            <span class="g_fs_18">Darylhochi</span>
          </div>
          <p>
            一個名字經常被寫錯和讀錯的香港人，喜愛繪畫，攝影和觀察的她，是一名設計師也是插畫師。
          </p>
        </div>
        <div class="col-md-4  author_experience">
          <div class="little_title">
            <img
              src="../assets/img/01-index/02-main/02-about_us/author_experi.png"
              alt=""
            />
            <span class="g_fs_18">經歷</span>
          </div>
          <p>
            畢業於香港理工大學平面設計系，作品曾於《新假期》的《好生活》和《明報》的《星期日生活》刊登，亦參與過＜poetic
            shower＞和＜Macaroon Duet＞等插畫展。
          </p>
        </div>
        <div class="col-md-4 author_interest">
          <div class="little_title">
            <img
              src="../assets/img/01-index/02-main/02-about_us/author_interst.png"
              alt=""
            />
            <span class="g_fs_18">興趣</span>
          </div>
          <p>
            Drawing / Sketching / Illustration / Reading / Day Dreaming / Bear
          </p>
        </div>
      </div>
      <div class="about_bacbac row justify-content-center mx-0">
        <div class="bacbac_content col-8">
          <div class="little_title">
            <img
              class="title_deco"
              src="../assets/img/01-index/02-main/02-about_us/bac_intro.png"
              alt="關於白白"
            />
            <span class="g_fs_18">白白日記的故事</span>
          </div>
          <p>
            白白是一群流浪到城市的北極熊，溫暖的白白有些調皮的個性帶給人們很多快樂跟希望。白白還有其他好朋友，分別是企鵝先生跟黑熊：企鵝先生喜歡跟白白一起四處遊玩、調皮搗蛋，是個小壞壞；黑熊則是暖心好朋友，害羞的牠總在角落默默關心好朋友們。<br />
            「白白日記」角色多元，個性鮮明，跟著白白及好朋友們一起發現生活中的種種確幸，也希望藉著北極熊、企鵝及黑熊來喚起大家對環保的重視。
          </p>
        </div>
        <img
          class="bottom_deco position-absolute"
          src="../assets/img/01-index/02-main/02-about_us/bottom_deco.png"
          alt="企鵝與黑黑"
        />
      </div>
    </section>
    <section class="swiper_news" id="news">
      <div class="news_title">
        <h2 class="g_fs_36">News</h2>
        <p class="g_fs_14 g_fw_700">最新消息</p>
      </div>
      <news_swiper></news_swiper>
    </section>
    <section
      class="line_store target_web" :style="{backgroundImage:'url('+require('@/assets/img/01-index/02-main/05-line_store/line_store_bg.jpg')+')'}">
      <div class="container-lg">
        <div class="row">
          <div class="col-md-6 col-12 d-flex">
            <div
              class="d-flex flex-column align-items-center align-items-md-start my-auto mx-auto mx-md-0"
            >
              <div class="title g_fs_36 mt-md-0 mt-5">LINE Sticker</div>
              <div class="content g_fs_14">
                靜態貼圖、動態貼圖、訊息貼圖、表情貼、主題販售中
              </div>
              <div class="line_btn" style="background-color: #9cdce5;">
                <a class="g_fs_14" href="https://store.line.me/search/zh-Hant?q=%E7%99%BD%E7%99%BD%E6%97%A5%E8%A8%98" target="_blank">
                  GO TO LINE STORE
                  <font-awesome-icon icon="external-link-alt" class="g_fs_14" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-6 offset-3 offset-md-0">
            <img
              class="line_img"
              src="../assets/img/01-index/02-main/05-line_store/right_bac2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <section class="yoda_factory target_web" :style="{backgroundImage:'url('+require('@/assets/img/01-index/02-main/06-yoda_factory/yoda_factory_bg.jpg')+')'}">
      <div class="container-lg">
        <div class="row ">
          <div class="col-6 offset-3 offset-md-0 order-10 order-md-0">
            <img class="yoda_factory_img " src="../assets/img/01-index/02-main/06-yoda_factory/left_bac.jpg" alt="">
          </div>
          <div class="col-md-6 col-12 d-flex flex-column align-content-center">
            <div class="d-flex flex-column align-items-center align-items-md-start my-auto mx-auto mx-md-0">
              <div class="title g_fs_36 mt-md-0 mt-5">YODA FACTORY</div>
              <div class="content g_fs_14 px-md-0 px-5">Yoko和Daryl兩名現役設計師兼插畫師兩個人四隻手所運作的小型工房，涉及插畫、產品和印刷等範疇</div>
              <div class="yoda_btn" style="background-color: #ffffff;">
                <a class="g_fs_14" href="https://business.facebook.com/yodafactory/about/" target="_blank">
                  GO TO YODA FACTORY
                  <font-awesome-icon icon="external-link-alt" class="g_fs_14" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="contacts container">
      <div class="title">
        <h2 class="g_fs_36">Contacts</h2>
        <p class="g_fs_14 g_fw_700">聯絡Darylhochi</p>
      </div>
      <div class="row contacts_content mb-3 mx-0">
        <div class="col-md-4 contacts_email">
          <div class="little_title">
            <img src="../assets/img/01-index/02-main/07-contacts/003.png" alt="">
            <span class="g_fs_18">信箱</span>
          </div>
          <p>wliao@bloomingma.com.tw<br>插畫及設計相關合作洽談</p>
        </div>
        <div class="col-md-4  contacts_phone">
          <div class="little_title">
            <img src="../assets/img/01-index/02-main/07-contacts/009.png" alt="">
            <span class="g_fs_18">電話</span>
          </div>
          <p>02 2545 9268<br>快速的找到我<br>有關當前正在銷售的商品的查詢，請直接聯繫產品上列出的商品製造商。</p>
        </div>
        <div class="col-md-4  contacts_facebook">
          <div class="little_title">
            <img src="../assets/img/01-index/02-main/07-contacts/023.png" alt="">
            <span class="g_fs_18">Facebook</span>
          </div>
          <p>m.me/darylhochi.illustrations<br>我幾乎無法回答，但我讀了一切。謝謝</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import news_swiper from '@/components/NewsSwiper.vue'

export default {
  name: "Home",
  components: {
    news_swiper
  },
  
};
</script>
<style>
@import "../assets/css/home.css";
</style>
