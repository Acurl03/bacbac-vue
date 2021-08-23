<template>
  <div class="login-register my-3">
    <div class="status">
      <!-- 會員:{{ userName }} -->
    </div>
    <div class="login-register-tab">
      <button
        class="tabs"
        :class="{ 'tab-active': tab_index === index }"
        v-for="(item, index) in tab"
        :key="item.id"
        @click="onTab(index)"
      >
        {{ item.des }}
      </button>
    </div>
    <div id="login-area" v-show="tab_index === 0">
      <!-- v-on 綁定<form>元素的 submit 事件，.prevent後綴防止原生方法產生頁面重整，而改用自定的login method。 -->
      <form @submit.prevent="login">
        <div class="input-group">
          <label for="">帳號</label>
          <input
            type="text"
            value
            placeholder="請輸入使用者名稱"
            v-model="userName"
            required
          />
        </div>
        <div class="input-group">
          <label for="">密碼</label>
          <input
            type="text"
            value
            placeholder="請輸入密碼（4數字）"
            v-model="password"
            required
          />
        </div>
        <button type="submit" class="btn btn-block login_btn">登入</button>
      </form>
    </div>
    <div id="register-area" v-show="tab_index === 1">
      <form @submit.prevent="register">
        <div class="input-group">
          <div class="label">帳號</div>
          <input
            type="text"
            value
            placeholder="使用者名稱"
            v-model="newUserName"
            required
          />
        </div>
        <div class="input-group">
          <div class="label">密碼</div>
          <input
            type="text"
            value
            placeholder="請輸入密碼"
            v-model="newPassword"
            required
          />
        </div>
        <!-- <div class="input-group">
          <div class="label">確認密碼</div>
          <input type="text" value placeholder="請輸入密碼">
        </div> -->
        <button type="submit" class="btn btn-block register_btn">註冊</button>
      </form>
    </div>
  </div>
</template>
<script>
// import login from '../../static/login.json';
// import axios from 'axios'
export default {
  name: "LoginRegister",
  props: ["member"],
  data() {
    return {
      newUserName: "",
      newPassword: "",
      userName: "",
      password: "",
      isLogin: "",
      tab_index: 0,
      tab: [
        { id: 0, des: "會員登入" },
        { id: 1, des: "註冊" },
      ],
    };
  },
  // mounted() {
  //   let url = "/login.json";
  //   this.$axios.get(url).then((res) => {
  //     console.log(res.data.contact);
  //     this.members = res.data.contact;
  //   });
  // },

  methods: {
    register() {
      sessionStorage.setItem("userName", this.newUserName);
      sessionStorage.setItem("password", this.newPassword);
      // console.log(sessionStorage.userName);
      this.newUserName = "";
      this.newPassword = "";
      alert("註冊成功，請登入會員");
      this.tab_index = 0
    },
    login() {
      if (
        this.userName == sessionStorage.userName &&
        this.password == sessionStorage.password
      ) {
        sessionStorage.setItem("token", "ImLogin");
        this.$router.push("/");
        this.isLogin = true;
        alert("登入成功");
        this.$emit("pushUserName", this.userName, this.isLogin);
      } else {
        this.userName = "",
        this.password = "", 
        alert("登入失敗");
      }
    },
    onTab(index) {
      this.tab_index = index;
    },
  },
};
</script>

<style>
@import "../assets/css/login_register.css";
</style>