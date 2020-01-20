<template>
  <div class="product">
    <div class="product__image"><img :src="img" /></div>
    <div class="product__description">{{ name }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Item extends Vue {
  @Prop() private name!: string;
  @Prop() private img!: string;
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
