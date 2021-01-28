<template>
  <div id="CallToAction">
    <button class="contact-button" v-on:click="goToSite('https://wa.me/+6281232012145')">
      <font-awesome-icon class="whatsapp-icon" :icon="['fab', 'whatsapp']" />
      <span class="button-label">
        Contact Me
      </span>
    </button>
    <button class="get-started-button" v-scroll-to="{ el: '#SideBar', easing: [.2, .80, .30, 1],duration: 1500}">
      <span class="button-label">
        Get Started
      </span>
    </button>
    <button class="my-card-button">
      <span class="button-label">
        Take my card
      </span>
    </button>
    <button class="testimony-button">
      <span class="button-label">
        Client Stories
      </span>
    </button>
    <span class="scroll-container">
      <chevrons-down-icon size="1.5x" class="scroll-icon"></chevrons-down-icon>
    </span>
  </div>
</template>

<script>

import { ChevronsDownIcon } from 'vue-feather-icons'

export default {
  name: "CallToAction",
  components: {
    ChevronsDownIcon
  },
  methods: {
    goToSite(url) {
      window.open(url, '_blank');
    }
  },
}
</script>

<style lang="scss" scoped>

@media only screen and (min-width: 769px) {

  #CallToAction {
    display: flex;
    flex-direction: row;

    .contact-button {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      height: 41px;
      width: 150px;
      background-image: linear-gradient(to right, #45bfa3, #33b5a6);
      border-radius: 30px;
      transition: all .4s ease-in-out;
      box-shadow: 1px 3px 20px rgba(125, 128, 126, 0.5);

      .whatsapp-icon {
        align-self: center;
        font-size: 20px;
        color: white;
        padding-left: 10px;
      }

      .button-label {
        align-self: center;
        padding-top: 3px;
        font-family: "Gilroy Regular", serif;
        font-size: 13px;
        letter-spacing: 0.3px;
        color: white;
      }

    &:hover{
      opacity: 0.9;
    }
  }
  .testimony-button{
    align-self: center;
    margin-left: 20px;
    height: 41px;
    width: fit-content;
    background-color: transparent;
    border: thin solid transparent;

      .button-label {
        font-family: "Gilroy SemiBold", serif;
        font-size: 15px;
        color: #1f1f1f;
        transition: all .3s ease-in-out;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
  .get-started-button, .my-card-button, .scroll-container{
    display: none;
  }
}

@media only screen and (max-width: 768px) {

  #CallToAction{
    display: flex;
    flex-direction: column;

    .get-started-button{
      align-self: center;
      height: 51px;
      width: 210px;
      background-image: linear-gradient(to right top, #758fec, #5294e3);
      border-radius: 8px;
      margin-bottom: 2vh;
      box-shadow: 0 8px 15px 0 rgba(93, 103, 239, 0.3);

      .button-label{
        font-family: "Gilroy Medium", serif;
        font-size: 16px;
        color: white;
      }
    }
    .my-card-button{
      align-self: center;
      height: 50px;
      width: 210px;
      background-color: transparent;
      border: thin solid #5c99e3;
      border-radius: 8px;
      margin-bottom: 15vh;
      box-shadow: 0 8px 15px 0 rgba(49, 50, 64, 0.1);

      .button-label{
        font-family: "Gilroy SemiBold", serif;
        font-size: 16px;
        color: #5c99e3;
      }
    }

    .scroll-container{
      align-self: center;
      background-color: transparent;

      .scroll-icon{
        font-size: 25px;
        color: #868686;
      }
    }

    .contact-button{
      display: none;
    }

    .testimony-button{
      display: none;
    }
  }

}

</style>