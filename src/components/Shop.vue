<template>
  <div class="shop">
    <header class="banner">
      <img src="../assets/img/02-products/banner.jpg" alt="" />
    </header>
    <div class="products container" id="products">
      <div class="row sorts justify-content-center">
        <button
          class="type_btn"
          type="button"
          :class="{ 'tab-active': cate_index === index }"
          v-for="(item, index) in cate"
          :key="index"
          @click="changeCategory(index)"
        >
          {{ item.des }}
        </button>
      </div>
      <div class="row" id="product_content">
        <div
          class="col-lg-3 col-md-4 col-6"
          v-for="content in contents"
          :key="content.id"
        >
          <div class="product_card">
            <div class="product_img">
              <img :src="content.imageURL" alt="" />
            </div>
            <div class="product_body">
              <h3 class="pt-2">{{ content.name }}</h3>
              <div class="price mb-2 pl-1">NT${{ content.price }}</div>
              <div class="product_quantity d-flex justify-content-around">
                <div class="addchart">
                  <b-button type="button" @click="addToCart(content);showAlert();">
                    <font-awesome-icon icon="shopping-cart" />
                  </b-button>
                </div>

                <b-alert
                  class="d-flex flex-column justify-content-center align-content-center"
                  :show="dismissCountDown"
                  @dismissed="dismissCountDown = 0"
                  @dismiss-count-down="countDownChanged"
                >
                  <img
                    src="../assets/img/02-products/success.gif"
                    alt=""
                  />
                  <p>加入商品成功 !</p>
                </b-alert>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Shop",
  data() {
    return {
      contents: [],
      cate_index: 0,
      cate: [
        { id: 0, des: "全部" },
        { id: 1, des: "玩具" },
        { id: 2, des: "文具用品" },
        { id: 3, des: "衣著用品" },
      ],
      dismissSecs: 2,
      dismissCountDown: 0,
    };
  },
  // created() {
  //   this.sortProduct();
  // },
  mounted() {
    this.sortProduct();
  },
  // mounted() {
  //   this.$axios
  //     .get("https://run.mocky.io/v3/c7eddc4c-fb92-42c0-b3ec-cd80580921f5")
  //     .then((res) => {
  //       this.contents = res.data.contents;
  //       // console.log(this);
  //     })
  //     .catch((error) => console.log(error));
  // },

  methods: {
    // eslint-disable-next-line no-unused-vars
    // getProductInfo() {

    //   this.$axios
    //     .get("https://run.mocky.io/v3/c7eddc4c-fb92-42c0-b3ec-cd80580921f5")
    //     .then((res) => {
    //       this.contents = res.data.contents;

    //     });
    // },
    changeCategory(index) {
      this.cate_index = index;
      this.sortProduct();
      // this.cate_index = index;

      // this.sortProduct();
      //getProducts 是取得商品的方法
    },
    sortProduct() {
      // this.$axios
      //   .get("https://run.mocky.io/v3/c7eddc4c-fb92-42c0-b3ec-cd80580921f5")
      //   .then((res) => {
      //     this.contents = res.data.contents
      //     // console.log(this);
      //   })
      //   .catch((error) => console.log(error))
      const url =
        "https://run.mocky.io/v3/bd464f65-c21f-4835-b87f-cdaac376072d";

      this.$axios.get(url).then((response) => {
        if (this.cate_index !== 0) {
          let filterPro = response.data.contents.filter((item) => {
            return item.sort == this.cate_index;
          });

          this.contents = filterPro;
        } else {
          // eslint-disable-next-line
          this.contents = response.data.contents;
        }
      });
    },
    addToCart(content) {
      this.$emit("pushProduct", content);
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>

<style>
@import "../assets/css/shop.css";
</style>