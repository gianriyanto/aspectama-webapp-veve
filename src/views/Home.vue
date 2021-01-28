<template>
  <section id="Home">
    <div class="main-wrapper">
      <TopBar id="TopBar"/>
      <div class="body-wrapper">
        <transition appear name="fade">
          <span class="header-container">
            <span class="header-text"> Hi! I'm <span class="highlight-name"> Veve. </span> </span>
            <span class="header-text"> Your education counselor. </span>
          </span>
        </transition>
        <span class="subheader-container">
          <h2 class="subheader-text-0"> I help architect a personalised education blueprint for aspiring professionals like you. </h2>
          <h2 class="subheader-text-1"> Find out how I can help, I’d love to hear from you. </h2>
        </span>
        <CallToAction id="CallToAction"/>
        <MosaicTiles id="MosaicTiles"/>
      </div>
      <BottomBar id="BottomBar"/>
      <BottomBar id="BottomBarMobile"/>
    </div>
    <transition appear name="fade">
      <SideBar id="SideBar"/>
    </transition>
    <FloatingActionButton id="FloatingActionButton"/>
  </section>
</template>

<script>

import TopBar from "@/components/TopBar";
import MosaicTiles from "@/components/MosaicTiles";
import BottomBar from "@/components/BottomBar";
import SideBar from "@/components/SideBar";
import CallToAction from "@/components/CallToAction";
import FloatingActionButton from "@/components/FloatingActionButton";

export default {
  name: "Home",
  components: {
    FloatingActionButton,
    CallToAction,
    SideBar,
    BottomBar,
    MosaicTiles,
    TopBar
  }
}
</script>

<style lang="scss" scoped>

@import "/src/styles/animations.scss";

@media only screen and (min-width: 769px) {

  #Home {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    .main-wrapper {
      width: 74%;
      height: 96%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: auto 0;

      #TopBar {
        width: 95%;
        height: 75px;
      }

      .body-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: auto 0;
        height: 90%;
        padding-bottom: 50px;

        .header-container {
          display: flex;
          flex-direction: column;
          height: fit-content;
          width: 600px;
          text-align: center;


          .header-text {
            margin: 0;
            font-family: "Bw Modelica Bold", serif;
            font-size: 37px;
            color: #1f1f1f;
            letter-spacing: -1px;
            line-height: 1.2;

            .highlight-name {
              color: #5675e7;
            }
          }
        }

        .subheader-container {
          padding-top: 12px;
          display: flex;
          flex-direction: column;
          height: fit-content;
          width: fit-content;
          text-align: center;

          .subheader-text-0, .subheader-text-1 {
            margin: 0;
            font-family: "Gilroy Light", serif;
            font-size: 14px;
            color: #1f1f1f;
            line-height: 1.7;
          }
        }

        #CallToAction {
          padding-top: 2vh;
          width: fit-content;
          height: fit-content;
          border: thin solid white;
        }

        #MosaicTiles {
          padding-top: 4vh;
          width: 60%;
          min-width: 640px;
          max-width: 700px;
          height: 40%;
          min-height: 280px;
          max-height: 300px
        }
      }

      #BottomBar {
        margin-top: auto;
        width: 95%;
        height: 30px;
      }
    }

    #SideBar {
      width: 24%;
      min-width: 320px;
      height: 93%;
      padding: 15px 0;
      margin: 0 15px;
    }
  }
  #FloatingActionButton{
    display: none;
  }
}

@media only screen and (max-width: 768px) {

  #Home {
    z-index: 1;
    display: flex;
    flex-direction: column;
    height: fit-content;

    .main-wrapper {
      position: fixed;
      z-index: 1;
      height: 100vh;
      overflow-y: scroll;

      #TopBar {
        margin-top: 7vh;
      }

      .body-wrapper {

        .header-container {
          margin: 5vh auto 0;
          display: flex;
          flex-direction: column;
          height: fit-content;
          width: 95%;
          text-align: center;

          .header-text {
            margin: 0;
            font-family: "Gilroy SemiBold", serif;
            font-size: 31px;
            color: #1f1f1f;
            letter-spacing: 0;
            line-height: 1.15;

            .highlight-name {
              color: #5675e7;
            }
          }
        }

        .subheader-container {
          padding-top: 12px;
          display: flex;
          flex-direction: column;
          height: fit-content;
          width: 80%;
          margin: 0 auto;
          text-align: center;

          .subheader-text-0 {
            margin: 0;
            font-family: "Gilroy Regular", serif;
            font-size: 17px;
            color: #393939;
            line-height: 1.5;
          }

          .subheader-text-1 {
            display: none;
            margin: 0;
            font-family: "Gilroy Regular", serif;
            font-size: 17px;
            color: #393939;
            line-height: 1.5;
          }
        }

        #CallToAction {
          padding-top: 4vh;
          width: 90%;
          height: 40vh;
          margin: 0 auto;
        }

        #MosaicTiles {
          padding-top: 3vh;
          padding-bottom: 2vh;
        }
      }

      #BottomBarMobile{
        margin: 5vh auto 0 auto;
      }
    }
  }

  #SideBar{
    position: sticky;
    z-index: 2;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    padding: 15px 0;
    margin: 100vh auto 0 auto;
  }

  #FloatingActionButton{

  }
}

</style>