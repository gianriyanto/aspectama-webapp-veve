<template>
  <div id="app">
    <div id="wrapper">
      <Home id="Home"/>
    </div>
  </div>
</template>

<script>
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="scss">

#app {
  background-image: linear-gradient(to right top, white, white);
  min-height: 740px;
  overflow-y: hidden;
  overflow-x: hidden;

  #wrapper{
    width: 100%;
    min-width: 100vw;
    height: 100%;
    min-height: 100vh;
  }

  button{
    cursor: pointer;
    text-decoration: none;
    outline: none;
    border: 0;
  }

  a {
    color: transparent;
    text-decoration: none;
    a:visited {
      text-decoration: none;
      color: transparent;
    }
  }
}

html, body {
  margin: 0 !important;
  padding: 0 !important;
}

@media only screen and (max-width: 768px) {

  #wrapper{
    width: 100%;
    height: fit-content;
  }
}

@font-face {
  font-family: "Gilroy Bold";
  src: local("Gilroy Bold"),
  url(./assets/fonts/Gilroy/Gilroy-Bold.ttf) format("truetype");
}
@font-face {
  font-family: "Gilroy Medium";
  src: local("Gilroy Medium"),
  url(./assets/fonts/Gilroy/Gilroy-Medium.ttf) format("truetype");
}
@font-face {
  font-family: "Gilroy Regular";
  src: local("Gilroy Regular"),
  url(./assets/fonts/Gilroy/Gilroy-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Gilroy SemiBold";
  src: local("Gilroy SemiBold"),
  url(./assets/fonts/Gilroy/Gilroy-SemiBold.ttf) format("truetype");
}
@font-face {
  font-family: "Gilroy Heavy";
  src: local("Gilroy Heavy"),
  url(./assets/fonts/Gilroy/Gilroy-Heavy.ttf) format("truetype");
}
@font-face {
  font-family: "Gilroy Light";
  src: local("Gilroy Light"),
  url(./assets/fonts/Gilroy/Gilroy-Light.ttf) format("truetype");
}
@font-face {
  font-family: "Gilroy Thin";
  src: local("Gilroy Thin"),
  url(./assets/fonts/Gilroy/Gilroy-Thin.ttf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica ExtraBold";
  src: local("Bw Modelica ExtraBold"),
  url(./assets/fonts/BwModelica/BwModelica-ExtraBold.ttf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Bold";
  src: local("Bw Modelica Bold"),
  url(./assets/fonts/BwModelica/BwModelica-Bold.otf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Medium";
  src: local("Bw Modelica Medium"),
  url(./assets/fonts/BwModelica/BwModelica-Medium.otf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Regular";
  src: local("Bw Modelica Regular"),
  url(./assets/fonts/BwModelica/BwModelica-Regular.otf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Light";
  src: local("Bw Modelica Light"),
  url(./assets/fonts/BwModelica/BwModelica-Light.otf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Thin";
  src: local("Bw Modelica Thin"),
  url(./assets/fonts/BwModelica/BwModelica-Thin.otf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Hairline";
  src: local("Bw Modelica Hairline"),
  url(./assets/fonts/BwModelica/BwModelica-Hairline.otf) format("truetype");
}

</style>
