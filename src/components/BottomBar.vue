<template>
  <div>
    <div id="BottomBar">
      <SocialLinks/>
      <ContactDetails/>
    </div>
    <div id="BottomBarMobile">
      <button class="get-started-button" v-scroll-to="{ el: '#SideBar', easing: [.2, .80, .30, 1],duration: 1500}">
        <span class="button-label">
          Get Started
        </span>
      </button>
      <SocialLinks/>
      <ContactDetails/>
    </div>
  </div>
</template>

<script>
import SocialLinks from "@/components/SocialLinks";
import ContactDetails from "@/components/ContactDetails";
export default {
  name: "BottomBar",
  components: {
    ContactDetails,
    SocialLinks
  },
}
</script>

<style lang="scss" scoped>

@media only screen and (min-width: 769px) {

  #BottomBar {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    #SocialLinks {
      width: 110px;
    }

    #ContactDetails {
      width: 290px;
    }
  }

  #BottomBarMobile {
    display: none;
  }
}

@media only screen and (max-width: 768px) {

  #BottomBar{
    display: none;
  }

  #BottomBarMobile {
    width: 95%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .get-started-button{
      align-self: center;
      height: 51px;
      width: 100%;
      background-image: linear-gradient(to right, #262626, #5a5a5a);
      border-radius: 8px;
      margin-bottom: 6vh;
      box-shadow: 0 8px 15px 0 rgba(191, 193, 212, 0.3);
      padding-top: 4px;

      .button-label{
        font-family: "Gilroy Medium", serif;
        font-size: 16px;
        color: white;
      }
    }

    #SocialLinks {
      width: 60%;
      margin-bottom: 4vh;
    }

    #ContactDetails {
      width: 100%;
      margin-bottom: 20vh;
    }
  }
}

</style>