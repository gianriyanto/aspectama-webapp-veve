<template>
  <div id="ProgramSelection">
    <span class="header-text">
      Pick a program level
    </span>
    <div class="selection-container">
      <span class="program-card"
            v-bind:class="{ 'selected-program-card blue': programs[0].isSelected }"
            @click="selectProgram(programs[0].programName)">
        <span class="label">
          {{ programs[0].programName }}
        </span>
        <img class="image" :src="require(`@/assets/images/${programs[0].imageURL}`)" alt=""/>
      </span>
      <span class="program-card"
            v-bind:class="{ 'selected-program-card red': programs[1].isSelected }"
            @click="selectProgram(programs[1].programName)">
        <span class="label">
          {{ programs[1].programName }}
        </span>
        <img class="image" :src="require(`@/assets/images/${programs[1].imageURL}`)" alt=""/>
      </span>
      <span class="program-card"
            v-bind:class="{ 'selected-program-card green': programs[2].isSelected }"
            @click="selectProgram(programs[2].programName)">
        <span class="label">
          {{ programs[2].programName }}
        </span>
        <img class="image" :src="require(`@/assets/images/${programs[2].imageURL}`)" alt=""/>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgramSelection",
  props: ['selectionData'],
  data() {
    return {
      programs: this.selectionData,
      cardStyle: ['blue-card', 'red-card', 'black-card']
    }
  },
  methods: {
    selectProgram: function(selectedProgram) {
      for (let i = 0; i < this.programs.length; i++) {
        this.programs[i].isSelected = selectedProgram === this.programs[i].programName;
      }
    }
  }
}
</script>

<style lang="scss" scoped>

@media only screen and (min-width: 769px) {
  #ProgramSelection {
    display: flex;
    flex-direction: column;
    align-self: center;

    .header-text {
      padding-left: 2px;
      font-family: "Bw Modelica Bold", serif;
      font-size: 13px;
      color: #4a4a4a;
      height: fit-content;
    }

    .selection-container {
      padding-top: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      flex-grow: 1;

      .program-card {
        cursor: pointer;
        width: 31%;
        border-radius: 7px;
        display: flex;
        flex-direction: column;
        text-align: left;
        background-color: white;
        border: thin solid #dddddd;
        opacity: 1;
        transition: all .3s ease-in-out;

        .label {
          padding: 11px 11px 0 11px;
          font-family: "Bw Modelica Bold", serif;
          color: #2b2b2b;
          line-height: 1.4;
          font-size: 0.8vw;
        }

        .image {
          flex-grow: 1;
          height: 60px;
        }

        &:hover {
          opacity: 0.6;
        }
      }

      .selected-program-card {
        opacity: 1;

        &:hover {
          opacity: 1;
        }
      }

      .blue {
        background-color: #92c9ee;
        border: thin solid #92c9ee;
      }

      .red {
        background-color: #ffb3c1;
        border: thin solid #ffb3c1;
      }

      .green {
        background-color: #86ded1;
        border: thin solid #86ded1;
      }
    }
  }
}

@media only screen and (max-width: 768px) {

  #ProgramSelection{
    display: flex;
    flex-direction: column;
    align-self: center;

    .header-text{
      padding-left: 2px;
      font-family: "Bw Modelica Bold", serif;
      font-size: 13px;
      color: #4a4a4a;
      height: fit-content;
    }

    .selection-container{
      padding-top: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      flex-grow: 1;

      .program-card{
        cursor: pointer;
        width: 31%;
        border-radius: 7px;
        display: flex;
        flex-direction: column;
        text-align: left;
        background-color: white;
        border: thin solid #dddddd;
        opacity: 1;
        transition: all .3s ease-in-out;

        .label{
          padding: 11px 11px 0 11px;
          font-family: "Bw Modelica Bold", serif;
          color: #2b2b2b;
          line-height: 1.4;
          font-size: 12px;
        }

        .image{
          flex-grow: 1;
          height: 60px;
        }

        &:hover{
          opacity: 0.6;
        }
      }

      .selected-program-card{
        opacity: 1;

        &:hover{
          opacity: 1;
        }
      }
      .blue{
        background-color: #92c9ee;
        border: thin solid #92c9ee;
      }

      .red{
        background-color: #ffb3c1;
        border: thin solid #ffb3c1;
      }

      .green{
        background-color: #86ded1;
        border: thin solid #86ded1;
      }
    }
  }
}

</style>