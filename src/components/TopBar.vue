<template>
  <div id="TopBar">
    <span class="logo-container"
       v-on:click="goToSite('http://aspectamaalsut.co.id')">
      <img class="logo-image"
           src="@/assets/logo/AspectamaLogo.png" alt="">
    </span>
    <button class="myCard-button">
      <a class="button-label" :href="`${publicPath}VeveNicolen_NameCard.png`" target="_blank">
        Take my card
      </a>
    </button>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  methods: {
    goToSite(url) {
      window.open(url, '_blank');
    }
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 769px) {
  #TopBar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .logo-container {
      padding-top: 3px;
      cursor: pointer;

      .logo-image {
        height: 55px;
        width: auto;
      }
    }

    .myCard-button {
      height: 42px;
      width: 120px;
      background-color: transparent;
      border: thin solid #6e6e6e;
      border-radius: 9px;
      position: relative;

      .button-label {
        position: relative;
        font-family: "Bw Modelica Bold", serif;
        font-size: 12px;
        color: #353535;
        z-index: 2;
      }

      &:after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: linear-gradient(to right, #c8dffd, #c7d1ff);
        border-radius: 9px;
        transition: all 0.35s;
      }

      &:hover {
        color: #fff;
        opacity: 1;
      }

      &:hover:after {
        width: 100%;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  #TopBar{
    width: 95%;
    height: 75px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .logo-container{
      cursor: pointer;

      .logo-image{
        height: 50px;
        width: auto;
      }
    }

    .myCard-button{
      display: none;
    }
  }
}

</style>