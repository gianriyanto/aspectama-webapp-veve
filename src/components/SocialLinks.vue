<template>
  <div id="SocialLinks">
    <a class="link"
       v-on:click="goToSite('http://aspectamaalsut.co.id')">
      <globe-icon size="1.5x" class="icon"></globe-icon>
    </a>
    <a class="link"
       v-on:click="goToSite('https://goo.gl/maps/Kiy9Y93i1RmriBij7')">
      <MapIcon size="1.5x" class="icon"></MapIcon>
    </a>
    <a class="link"
       v-on:click="goToSite('https://www.facebook.com/Aspectama-AlamSutera-288109908569927/')">
      <facebook-icon size="1.5x" class="icon"></facebook-icon>
    </a>
    <a class="link"
       v-on:click="goToSite('https://www.instagram.com/aspectamaalamsutera/?hl=en')">
      <instagram-icon size="1.5x" class="icon"></instagram-icon>
    </a>
  </div>
</template>

<script>
import { InstagramIcon } from 'vue-feather-icons'
import { FacebookIcon } from 'vue-feather-icons'
import { GlobeIcon } from 'vue-feather-icons'
import { MapIcon } from 'vue-feather-icons'

export default {
  name: "SocialLinks",
  components: {
    FacebookIcon,
    InstagramIcon,
    GlobeIcon,
    MapIcon
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

  #SocialLinks {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .icon {
      color: #3c3c3c;
      transition: all .35s ease-in-out;

      &:hover {
        opacity: 0.8;
        color: #3389f6;
      }
    }

    .link {
      font-family: "Bw Modelica Bold", serif;
      font-size: 13px;
      color: #292929;
      cursor: pointer;
    }
  }
}

@media only screen and (max-width: 768px) {

  #SocialLinks {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .icon {
      color: #76a8dd;
      font-size: 17px;
    }

    .link {
      font-family: "Bw Modelica Bold", serif;
      font-size: 13px;
      color: #292929;
      cursor: pointer;
    }
  }
}

</style>