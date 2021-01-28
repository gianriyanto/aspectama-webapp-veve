<template>
  <div id="SideBar">
    <div class="my-image-container">
      <span class="image">
        <span class="label"> ET </span>
      </span>
    </div>
    <div class="content-wrapper">
      <div class="header-container">
        <span class="header-text">
          Let's get started.
        </span>
      </div>
      <Typeform id="Typeform"/>
    </div>
  </div>
</template>

<script>
import Typeform from "@/components/Typeform";

export default {
  name: "SideBar",
  components: {
    Typeform,
  }
}
</script>

<style lang="scss" scoped>

@media only screen and (min-width: 768px) {

  #SideBar {
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    background-color: #f6f6f6;
    height: fit-content;

    .my-image-container {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-self: center;
      width: 91%;
      height: 55px;

      .image {
        display: flex;
        width: 55px;
        height: 100%;
        border-radius: 50%;
        background-color: #ececec;

        .label {
          padding-top: 5px;
          padding-left: 2px;
          margin: auto;
          font-family: "Gilroy Bold", serif;
          font-size: 20px;
          letter-spacing: 2px;
          color: #d2d2d2;
        }
      }
    }

    .content-wrapper {
      display: flex;
      flex-direction: column;
      width: 87%;
      height: 100%;
      margin: 0 auto;

      .header-container {
        padding-left: 2px;
        display: flex;
        flex-direction: column;
        height: fit-content;

        .header-text {
          font-family: "Bw Modelica Bold", serif;
          font-size: 24px;
          color: #1f1f1f;
          letter-spacing: -1px;
          line-height: 1.2;
        }
      }

      #Typeform {
        padding-top: 10px;
        height: fit-content;
        flex-grow: 1;
      }
    }
  }
}

@media only screen and (max-width: 768px) {

  #SideBar {
    display: flex;
    flex-direction: column;
    border-radius: 35px 35px 0 0;
    background-image: linear-gradient(to bottom, #eaeaea, #ffffff);

    .my-image-container {
      display: none;
    }

    .content-wrapper {
      padding-top: 30px;
      padding-bottom: 20px;
      display: flex;
      flex-direction: column;
      width: 87%;
      height: 100%;
      margin: 0 auto;

      .header-container {
        padding-left: 2px;
        display: flex;
        flex-direction: column;
        height: fit-content;

        .header-text {
          font-family: "Bw Modelica Bold", serif;
          font-size: 24px;
          color: #1f1f1f;
          letter-spacing: -0.5px;
          line-height: 1.2;
        }
      }

      #Typeform {
        padding-top: 15px;
        width: 100%;
        height: fit-content;
        flex-grow: 1;
      }
    }
  }

}

</style>