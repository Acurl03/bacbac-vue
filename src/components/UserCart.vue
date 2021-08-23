<template>
  <div class="user_cart container-lg py-5">
    <h1>我的購物車</h1>

    <div class="shopping-cart">
      <div class="column-labels">
        <label class="product-image">圖片</label>
        <label class="product-details">商品</label>
        <label class="product-price">價格</label>
        <label class="product-quantity">數量</label>
        <label class="product-removal">刪除</label>
        <label class="product-line-price">小計</label>
      </div>

      <div class="product" v-for="item in inCart" :key="item.id">
        <div class="product-image">
          <img :src="item.imageURL" />
        </div>
        <div class="product-details">
          <div class="product-title">{{ item.name }}</div>
        </div>
        <div class="product-price">{{ item.price }}</div>
        <div class="product-quantity">
          <button type="button" class="decrease" @click="decreaseVal(item)">
            -</button
          ><input type="text" v-model="item.quantity" /><button
            type="button"
            class="increase"
            @click="increaseVal(item)"
          >
            +
          </button>
        </div>
        <div class="product-removal">
          <div class="remove-product" @click="removeItem(item)"></div>
        </div>
        <div class="product-line-price">{{ item.price * item.quantity }}</div>
      </div>
      <div class="totals">
        <div class="totals-item">
          <label>小計</label>
          <div class="totals-value" id="cart-subtotal">{{ totalPrice }}</div>
        </div>
        <div class="totals-item">
          <label>運費</label>
          <div class="totals-value" id="cart-shipping">0(免運費)</div>
        </div>
        <div class="totals-item totals-item-total">
          <label>總計</label>
          <div class="totals-value" id="cart-total">{{ totalPrice }}</div>
        </div>
      </div>
      <router-link to="/finish">
        <button class="checkout_btn" @click="clearCart(emptyCart)">下單購買</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["inCart"],
  data() {
    return {
      emptyCart: [],
    }
  },
  computed: {
    totalPrice() {
      let allPrice = 0;
      this.inCart.forEach((element) => {
        allPrice += element.price * element.quantity;
      });
      return allPrice;
    },
  },
  methods: {
    decreaseVal(item) {
      item.quantity--;
      // 商品數量低於零刪除
      if (item.quantity <= 0) {
        item.quantity = 1;
      }
    },
    increaseVal(item) {
      item.quantity++;
    },
    // 移除商品
    removeItem(item) {
      let removeIndex = this.inCart.findIndex((cartItem) => {
        return cartItem.id === item.id;
      });
      this.inCart.splice(removeIndex, 1);
    },
    clearCart(emptyCart) {
      this.$emit('clearCart', emptyCart)
    },
  },
};
</script>

<style scoped>
@import "../assets/css/user_cart.css";
</style>