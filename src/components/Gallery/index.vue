<template>
  <div class="gallery">
    <div>Shooping Cart</div>
    <div class="gallery__products">
      <div
        v-for="product in products"
        v-bind:key="product.name"
        @click="selectedProduct(product)"
      >
        <Item :name="product.name" :img="product.imgUrl" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Item from "../Item/index.vue";
import Product from "../Product/index.vue";

import { GetProducts } from "../../api/product";

@Component({
  components: {
    Item,
    Product
  }
})
export default class Gallery extends Vue {
  public products: Object = [];

  created() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const { data } = await GetProducts();
      this.products = data;
    } catch (error) {
      return error;
    }
  }

  selectedProduct(data: object) {
    console.log("data ", data);
    this.$store.dispatch("setProduct", data);
    this.$store.dispatch("updateModal", {
      show: true,
      content: Product
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.gallery
    .gallery__products
        margin-top: 10px
        display: flex
        justify-content: space-around
</style>
