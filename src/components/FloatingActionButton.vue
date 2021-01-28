<template>
 <div id="FloatingActionButton" v-on:click="goToSite('https://wa.me/+6281232012145')">
   <font-awesome-icon class="whatsapp-icon" :icon="['fab', 'whatsapp']" />
 </div>
</template>

<script>
export default {
  name: "FloatingActionButton",
  methods: {
    goToSite(url) {
      window.open(url, '_blank');
    }
  },
}
</script>

<style lang="scss" scoped>

#FloatingActionButton{
  position: fixed;
  z-index: 3;
  display: flex;
  width: 57px;
  height: 57px;
  border-radius: 50%;
  bottom: 15px;
  right: 15px;
  background-image: linear-gradient(to right, #45bfa3, #33b5a6);
  box-shadow: 0 8px 32px 0 rgba(49, 50, 64, 0.4);

  .whatsapp-icon{
      margin: auto;
      font-size: 33px;
      color: white;
  }
}

</style>