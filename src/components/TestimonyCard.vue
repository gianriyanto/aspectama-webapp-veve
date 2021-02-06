<template>
  <div class="testimony-card">
    <span class="testimony-header">
      {{ testimony.header }}
    </span>
    <span class="testimony-body">
      {{ testimony.message }}
    </span>
    <span class="testimony-footer">
      <img class="client-image" :src="require(`@/assets/clients/${ testimony.imageURL }`)" alt=""/>
      <span class="client-info">
        <span class="client-name">
          {{ testimony.client }}
        </span>
        <span class="client-university">
          {{ testimony.university }}
        </span>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "TestimonyCard",
  props: ['testimonyData'],
  data() {
    return {
      testimony: this.testimonyData,
    }
  },
}
</script>

<style lang="scss" scoped>

.testimony-card{
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: #f8f8f8;
  border-radius: 15px;
  height: fit-content;
  width: 600px;
  margin-bottom: 40px;

  .testimony-header{
    font-family: 'Gilroy SemiBold', serif;
    font-size: 25px;
    letter-spacing: -1px;
    padding-bottom: 30px;
  }
  .testimony-body{
    font-family: 'Bw Modelica Light', serif;
    font-size: 15px;
    letter-spacing: -0.5px;
    padding-bottom: 30px;
    line-height: 1.5;
  }
  .testimony-footer{
    display: flex;
    flex-direction: row;
    align-items: center;

    .client-image{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 15px;
    }

    .client-info{
      display: flex;
      flex-direction: column;

      .client-name{
        font-family: 'Gilroy Regular', serif;
        font-size: 16px;
      }
      .client-university{
        font-family: 'Gilroy Light', serif;
        font-size: 16px;
      }
    }

  }
}

</style>