<template>
  <div id="app" class="nav_footer">
    <!-- 電腦版 上選單 -->
    <header class="header_nav nav_pc sticky-top">
      <nav class="d-flex align-items-center justify-content-around px-3">
        <router-link to="/" class="logo d-inline-flex px-3">
          <img src="./assets/img/01-index/01-navbar/logo.png" alt="bac logo" />
        </router-link>
        <div class="d-flex w-100 justify-content-end px-5">
          <ul class="links d-flex">
            <li id="hover_eeffect">
              <router-link to="/about">關於白白日記</router-link>
            </li>
            <li id="hover_eeffect">
              <router-link to="/news">最新消息</router-link>
            </li>
            <li class="mr-5" id="hover_eeffect">
              <router-link to="/shopping">線上購物</router-link>
            </li>
          </ul>
          <div class="member_cart_area d-flex">
            <router-link
              to="/login"
              class="icon d-flex align-items-center px-4"
              id="login"
              v-if="isLogin === false"
            >
              <font-awesome-icon icon="user" />
            </router-link>
            <div
              v-else-if="isLogin === true"
              class="member_area d-flex align-items-center mr-4"
            >
              <p class="mx-2">Hi,{{ userName }}</p>
              <a href="" @click.prevent="logout">登出</a>
            </div>

            <section id="mini_cart">
              <router-link to="/user_cart" class="icon" id="cart">
                <div
                  class="cart_cursor"
                  @click="checkCart"
                  @mouseenter="showMiniCartList"
                  @mouseleave="closeMiniCartList"
                >
                  <font-awesome-icon icon="shopping-cart" />
                  <span>({{ totalCount }})</span>
                </div>
              </router-link>
              <transition name="fade">
                <div
                  id="min_cart_list"
                  class="check_wrapper"
                  v-show="cartShow"
                  @mouseenter="showMiniCartList"
                  @mouseleave="closeMiniCartList"
                >
                  <div id="check">
                    <div
                      class="empty d-flex justify-content-center mb-3"
                      v-if="inCart.length === 0"
                    >
                      您的購物車中沒有商品
                    </div>
                    <table id="check_table" v-else-if="inCart.length !== 0">
                      <thead>
                        <tr>
                          <th>商品名稱</th>
                          <th>數量</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="cartItem in inCart" :key="cartItem.id">
                          <th>{{ cartItem.name }}</th>
                          <td>{{ cartItem.quantity }}</td>
                        </tr>
                      </tbody>
                    </table>
                    <span class="checkout" v-if="inCart.length !== 0">
                      <router-link to="/user_cart">
                        <div @click="checkCart">前往結帳</div>
                      </router-link>
                    </span>
                  </div>
                </div>
              </transition>
            </section>
          </div>
        </div>
      </nav>
    </header>
    <!-- 手機版 上選單 -->
    <header class="header_nav nav_mb sticky-top">
      <nav class="d-flex align-items-center justify-content-between px-3 py-2">
        <button
          type="button"
          class="btn d-flex h-100"
          id="mobile_headerMenu_toggle"
          @click="showMenu"
        >
          <font-awesome-icon icon="bars" />
        </button>

        <router-link to="/" class="logo d-inline-flex px-3">
          <img src="./assets/img/01-index/01-navbar/logo.png" alt="bac logo" />
        </router-link>
        <section class="mb_mini_cart">
          <router-link
            to="/user_cart"
            class="cart_btn d-flex align-items-center"
          >
            <div
              class="cart_cursor"
              @click="checkCart"
              @mouseenter="showMiniCartList"
              @mouseleave="closeMiniCartList"
            >
              <font-awesome-icon icon="shopping-cart" />
              <span class="cart_count">{{ totalCount }}</span>
            </div>
          </router-link>
          <transition name="fade2">
            <div
              id="mb_min_cart_list"
              class="mb_check_wrapper"
              v-show="cartShow"
              @mouseenter="showMiniCartList"
              @mouseleave="closeMiniCartList"
            >
              <div id="mb_check">
                <div
                  class="empty d-flex justify-content-center mb-3"
                  v-if="inCart.length === 0"
                >
                  您的購物車中沒有商品
                </div>
                <table id="mb_check_table" v-else-if="inCart.length !== 0">
                  <thead>
                    <tr>
                      <th>商品名稱</th>
                      <th>數量</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="cartItem in inCart" :key="cartItem.id">
                      <th>{{ cartItem.name }}</th>
                      <td>{{ cartItem.quantity }}</td>
                    </tr>
                  </tbody>
                </table>
                <span class="checkout" v-if="inCart.length !== 0">
                  <router-link to="/user_cart">
                    <div @click="checkCart">前往結帳</div>
                  </router-link>
                </span>
              </div>
            </div>
          </transition>
        </section>
      </nav>
    </header>
    <!-- 手機版 側選單 -->
    <aside class="nav_mb_content" v-show="mbNavShow">
      <nav class="bg-white w-75 position-relative">
        <ul>
          <li @click="routerSus">
            <router-link :to="{ path: '/login' }" v-if="isLogin === false"
              >登入 / 註冊</router-link
            >
            <div class="d-flex" v-else-if="isLogin === true">
              <p class="ml-2">Hi, {{ userName }}</p>
              <p class="hover_effect" @click.prevent="logout">登出</p>
            </div>
          </li>
          <li @click="routerSus">
            <router-link to="/">Home</router-link>
          </li>
          <li @click="routerSus">
            <router-link to="/about">關於白白日記</router-link>
          </li>
          <li @click="routerSus">
            <router-link to="/news">最新消息</router-link>
          </li>
          <li @click="routerSus">
            <router-link to="/shopping">線上購物</router-link>
          </li>
        </ul>
      </nav>
      <div
        class="nav_mb_content_close position-relative col p-0"
        @click="closeMenu"
      >
        <font-awesome-icon icon="times" class="xicon position-absolute m-2" />
      </div>
    </aside>
    <router-view
      @pushUserName="getUserName(arguments)"
      @pushProduct="getProduct"
      :inCart="myCart"
      @clearCart="nullCart"
    ></router-view>
    <footer style="background-color: #0a1017">
      <div class="decoration">
        <img
          src="./assets/img/01-index/03-footer/star.jpg"
          alt=""
          style="width: 100%"
        />
      </div>
      <div class="belong container">
        <div class="row">
          <div class="col-6">
            <a
              class="text-decoration-none"
              style="color: rgba(255, 255, 255, 0.5)"
              >白白日記</a
            >
          </div>
          <div class="col-6">
            <p class="text-right" style="color: rgba(255, 255, 255, 0.5)">
              © Darylvhochi 2021
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isLogin: false,
      mbNavShow: false,
      cartShow: false,
      userName: "",
      inCart: [],
      myCart: [],
    };
  },
  computed: {
    // 購物車內數量計算
    totalCount() {
      let allCount = 0;
      if (this.inCart !== []) {
        this.inCart.forEach((item) => {
          allCount += item.quantity;
        });
      }
      return allCount;
    },
  },
  // 側邊菜單出現背景不動
  watch: {
    mbNavShow(val) {
      if (val) {
        document.documentElement.style.overflow = "hidden";
      } else {
        document.documentElement.style.overflow = "auto";
      }
    },
  },

  methods: {
    // 取得線上購物頁面外傳的商品資料，並送到迷你購物車裡
    getProduct(item) {
      let alreadyIndex = this.inCart.findIndex((good) => {
        return good.id === item.id;
      });
      // 如果不存在則添加
      if (alreadyIndex === -1) {
        let newCartItem = {};
        newCartItem.id = item.id;
        newCartItem.name = item.name;
        newCartItem.price = item.price;
        newCartItem.imageURL = item.imageURL;
        let newQuantity = 1;
        newCartItem.quantity = newQuantity;

        this.inCart.push(newCartItem);
      } else {
        // 如果存在則數量加一
        this.inCart[alreadyIndex].quantity++;
      }
    },
    // 傳迷你購物車的商品資料到結帳畫面
    checkCart() {
      this.myCart = this.inCart;
    },
    // 接會員區域的資料，陣列中第一是使用者名稱，第二是登入狀態
    getUserName(arrArg) {
      this.userName = arrArg[0];
      this.isLogin = arrArg[1];
    },

    // 漢堡標
    showMenu() {
      this.mbNavShow = true;
    },
    closeMenu() {
      this.mbNavShow = false;
    },
    // mb時，側邊選單點擊router-link後，關閉菜單
    routerSus() {
      this.mbNavShow = false;
    },
    // 登出
    logout() {
      sessionStorage.removeItem("token");
      this.isLogin = false;
      if (this.$route.path != "/") {
        this.$router.push("/");
      }
    },
    // 移動到購物車圖示顯示迷你購物清單，並可前往結帳頁面
    showMiniCartList() {
      this.cartShow = true;
    },

    // 移出購物車時，mini購物清單延遲消失
    closeMiniCartList() {
      this.cartShow = false;
      if (this.cartShow) {
        this.cartShow = true;
      } else {
        this.cartShow = false;
        setTimeout(() => {}, 500);
      }
    },
    // 清空購物車
    nullCart(nullArr) {
      this.inCart = nullArr;
    },
  },
};
</script>

<style scoped>
@import "./assets/css/app.css";
</style>
