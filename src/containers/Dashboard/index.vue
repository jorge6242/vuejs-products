<template>
  <div>
    <Gallery />
    <Modal v-show="statusModal" />
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { Component, Prop, Vue } from "vue-property-decorator";

import Gallery from "../../components/Gallery/index.vue";
import Modal from "../../components/Modal/index.vue";

@Component({
  components: {
    Gallery,
    Modal
  },
  computed: {
    ...mapGetters(["statusModal"])
  }
})
export default class Dashboard extends Vue {
  created() {
    console.log("created");
  }

  beforeCreate() {
    console.log("beforeCreate");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
