<template>
  <div class="product">
    <div class="product__image"><img :src="product.imgUrl" /></div>
    <div class="product__description">{{ product.name }}</div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from "vuex";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  computed: {
    ...mapGetters(["product"])
  }
})
export default class Product extends Vue {
  private product!: object;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.product
    padding: 10px
    border: 1px solid #2980b9
    border-radius: 10px
    .product__image
        padding: 20px
        img
          width: 100px
          heigth: 100px
</style>
