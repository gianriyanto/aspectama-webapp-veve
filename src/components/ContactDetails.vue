<template>
  <div id="ContactDetails">
    <span class="phone">
      62 877 4102 9750
    </span>
    <span class="slash"> / </span>
    <a class="email" href="mailto:consult@aspectamalsut.co.id">
      admin@aspectamalsut.co.id
    </a>
  </div>
</template>

<script>
export default {
  name: "ContactDetails",
}
</script>

<style lang="scss" scoped>

@media only screen and (min-width: 769px) {

  #ContactDetails {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .phone {
      font-family: "Gilroy Regular", serif;
      font-size: 13px;
      color: black;
    }

    .email {
      font-family: "Gilroy Regular", serif;
      font-size: 13px;
      color: black;
      cursor: pointer;
      transition: all .35s ease-in-out;

      &:hover {
        opacity: 0.8;
        color: #3389f6;
      }
    }

    .slash {
      font-family: "Gilroy Regular", serif;
      font-size: 13px;
      color: #292929;
    }
  }
}

@media only screen and (max-width: 768px) {

  #ContactDetails{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .phone{
      font-family: "Gilroy Regular", serif;
      font-size: 14px;
      color: #1f1f1f;
      margin-bottom: 5px;
    }

    .email{
      font-family: "Gilroy Regular", serif;
      font-size: 14px;
      color: #1f1f1f;
      margin-bottom: 5px;
    }

    .slash{
      display: none;
    }
  }
}

</style>