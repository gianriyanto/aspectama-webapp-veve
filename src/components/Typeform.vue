<template>
  <div id="Typeform" :key="componentKey">
    <ProgramSelection id="ProgramSelection" v-bind:selectionData="programs"/>

    <div class="input-card" v-bind:class="{'isvalid-border': name.isValid}">
      <span class="prompt">
        Let's start with your name
      </span>
      <span class="input">
        <inline-input v-bind:inputData="name"/>
      </span>
    </div>

    <div class="disabled-card" v-if="!name.isValid">
      <span class="prompt">
        You're most interested to study
      </span>
      <span class="input">
        Interested major or course
      </span>
    </div>
    <div class="input-card" v-bind:class="{'isvalid-border': course.isValid}" v-else>
      <span class="prompt">
        You're most interested to study
      </span>
      <span class="input">
        <inline-input v-bind:inputData="course"/>
      </span>
    </div>

    <div class="disabled-card" v-if="!course.isValid || !name.isValid">
      <span class="prompt">
        And travel abroad to
      </span>
      <span class="input">
        Preferred city or country?
      </span>
    </div>
    <div class="input-card" v-bind:class="{'isvalid-border': country.isValid}" v-else>
      <span class="prompt">
        And travel abroad to
      </span>
      <span class="input">
        <inline-input v-bind:inputData="country"/>
      </span>
    </div>

    <div class="disabled-card" v-if="!country.isValid || !course.isValid || !name.isValid">
      <span class="prompt">
        Cool! It's best to reach you at
      </span>
      <span class="input">
        Type your phone number
      </span>
    </div>
    <div class="input-card" v-bind:class="{'isvalid-border': contact.isValid}" v-else>
      <span class="prompt">
        Cool! It's best to reach you at
      </span>
      <span class="input">
        <inline-input v-bind:inputData="contact"/>
      </span>
    </div>
    <transition appear name="fade">
      <div class="footer-container">
        <span v-if="country.isValid && course.isValid && name.isValid && contact.isValid" class="footer-text">
          Thanks <span class="highlight-name"> {{ name.input.split(' ')[0] }}! </span> chat soon.
        </span>
        <span v-else-if="showValidateError && !isFormValid" class="error-text">
          Please make sure you've filled out everything.
        </span>
      </div>
    </transition>
    <div class="button-container">
      <button class="clear-button" @click="handleClear()">
        <span class="button-label">
          Clear
        </span>
      </button>
      <button :class="buttonStyle" @click="handleSubmit">
        <span class="button-label">
          {{ buttonLabel }}
        </span>
      </button>
    </div>

  </div>
</template>

<script>
import ProgramSelection from "@/components/ProgramSelection";
import InlineInput from "@/components/InlineInput";
import emailjs from 'emailjs-com';

export default {
  name: "Typeform",
  components: {
    InlineInput,
    ProgramSelection,
  },
  data() {
    return {
      componentKey: 0,
      programs: [{programName: 'Pre-uni Pathway', isSelected: false, imageURL:'team_work.svg'}, {programName: 'Under Graduate', isSelected: false, imageURL:'career_-2.svg'}, {programName: 'Post Graduate', isSelected: false, imageURL:'knowledge_.svg'} ],
      selectedProgram: '',
      name: {prompt: 'Your full name', input: 'Your full name', edit: false, isValid: false},
      course: {prompt: 'Interested major or course', input: 'Interested major or course', edit: false, isValid: false},
      country: {prompt: 'Preferred city or country?', input: 'Preferred city or country?', edit: false, isValid: false},
      contact: {prompt: "Type your phone number", input: "Type your phone number", edit: false, isValid: false},
      buttonLabel: "Submit",
      buttonStyle: "submit-button",
      showValidateError: false,
      isFormValid: true,
    }
  },
  methods: {
    handleSubmit(){
      this.validateForm()
      this.getSelectedProgram();
      if (this.isFormValid && this.buttonLabel === "Submit"){
        emailjs.send(
            "service_6v0gp13",
            "template_ys6wc7t",
            {
              name: this.name.input,
              program: this.selectedProgram,
              course: this.course.input,
              country: this.country.input,
              contact: this.contact.input
            }
        );
        this.showValidateError = false;
        this.buttonLabel = 'Submitted!';
        this.buttonStyle = 'submitted-button';
      }
    },
    handleClear: function(){
      this.buttonLabel = 'Submit';
      this.buttonStyle = 'submit-button';
      this.showValidateError = false;
      this.clearForm();
    },
    clearForm: function(){
      this.componentKey += 1;
      this.programs = [{programName: 'Pre-uni Pathway', isSelected: false, imageURL:'team_work.svg'}, {programName: 'Under Graduate', isSelected: false, imageURL:'career_-2.svg'}, {programName: 'Post Graduate', isSelected: false, imageURL:'knowledge_.svg'} ];
      this.name = {prompt: 'Your full name', input: 'Your full name', edit: false, isValid: false};
      this.course = {prompt: 'Interested major or course', input: 'Interested major or course', edit: false, isValid: false};
      this.country = {prompt: 'Preferred city or country?', input: 'Preferred city or country?', edit: false, isValid: false};
      this.contact = {prompt: "Type your phone number", input: "Type your phone number", edit: false, isValid: false};
    },
    getSelectedProgram: function(){
      for (let i = 0; i < this.programs.length; i++) {
        if (this.programs[i].isSelected === true) {
          this.selectedProgram = this.programs[i].programName;
          break
        }
      }
    },
    validateForm: function() {
      if (this.selectedProgram && this.name.isValid && this.course.isValid && this.country.isValid && this.contact.isValid) {
        this.isFormValid = true
        this.showValidateError = false
      } else {
        this.isFormValid = false
        this.showValidateError = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>

@import "/src/styles/animations.scss";

@media only screen and (min-width: 769px) {

  #Typeform {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    #ProgramSelection {
      height: 160px;
      width: 100%;
      margin-bottom: 1.5vh;
    }

    .input-card {
      align-self: center;
      margin-bottom: 1.5vh;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 7px 20px;
      width: 86%;
      height: 62px;
      border-radius: 7px;
      border: 1px solid #dddddd;
      background-color: white;
      transition: all .4s ease-in-out;

      .prompt {
        font-family: "Bw Modelica Bold", serif;
        font-size: 14px;
        color: #434343;
      }
    }

    .isvalid-border {
      border: 1px solid #85cdbc;
    }

    .disabled-card {
      align-self: center;
      margin-bottom: 1.5vh;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 7px 20px;
      width: 86%;
      height: 62px;
      border-radius: 7px;
      border: 1px solid rgba(112, 91, 91, 0.1);
      background-color: white;
      opacity: 0.7;

      .prompt {
        font-family: "Bw Modelica Bold", serif;
        font-size: 14px;
        color: #d7d7d7;
      }

      .input {
        font-family: "Bw Modelica Regular", serif;
        font-size: 14px;
        color: #d7d7d7;
      }
    }

    .footer-container {
      margin: 0 auto;
      padding-top: 5px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      min-height: fit-content;

      .footer-text {
        font-family: "Bw Modelica Light", serif;
        font-size: 14px;
        color: #1f1f1f;

        .highlight-name {
          font-family: "Bw Modelica Bold", serif;
        }
      }
      .error-text {
        font-family: "Bw Modelica Regular", serif;
        font-size: 12px;
        color: #ca6767;
      }
    }

    .button-container {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      height: 37px;

      .clear-button {
        height: 100%;
        width: fit-content;
        border-radius: 8px;
        background-color: transparent;

        .button-label {
          font-family: "Bw Modelica Medium", serif;
          font-size: 13px;
          color: #5d5d5d;
          transition: all .3s ease-in-out;

          &:hover {
            color: #5675e7;
            opacity: 0.9;
          }
        }
      }

      .submit-button {
        margin-left: 15px;
        height: 100%;
        width: 38%;
        background-image: linear-gradient(to right top, #3f75ff, #6aacff);
        border-radius: 8px;
        transition: all .3s ease-in-out;
        filter: drop-shadow(1px 3px 5px rgb(145, 172, 200));

        .button-label {
          font-family: "Bw Modelica Medium", serif;
          font-size: 11px;
          color: white;
        }

        &:hover {
          opacity: 0.9;
        }
      }

      .submitted-button {
        margin-left: 15px;
        height: 40px;
        width: 38%;
        background-color: #e2e2e2;
        border: thin solid #d6d6d6;
        border-radius: 8px;
        transition: all .3s ease-in-out;
        filter: drop-shadow(1px 3px 10px rgba(96, 88, 88, 0.1));

        .button-label {
          font-family: "Bw Modelica Medium", serif;
          font-size: 11px;
          color: #1ab081;
        }

        &:hover {
          opacity: 0.9;
        }
      }
    }
  }

}

@media only screen and (max-width: 768px) {

  #Typeform {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    #ProgramSelection {
      height: 160px;
      width: 99%;
      margin-bottom: 2vh;
    }

    .input-card {
      align-self: center;
      margin-bottom: 2vh;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 7px 20px;
      width: 86%;
      height: 62px;
      border-radius: 7px;
      border: 1px solid #dddddd;
      background-color: white;
      transition: all .4s ease-in-out;

      .prompt {
        font-family: "Bw Modelica Bold", serif;
        font-size: 14px;
        color: #434343;
      }
    }

    .isvalid-border {
      border: 1px solid #85cdbc;
    }

    .disabled-card {
      align-self: center;
      margin-bottom: 2vh;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 7px 20px;
      width: 86%;
      height: 62px;
      border-radius: 7px;
      border: 1px solid rgba(112, 91, 91, 0.1);
      background-color: white;
      opacity: 0.7;

      .prompt {
        font-family: "Bw Modelica Bold", serif;
        font-size: 14px;
        color: #d7d7d7;
      }

      .input {
        font-family: "Bw Modelica Regular", serif;
        font-size: 14px;
        color: #d7d7d7;
      }
    }

    .footer-container {
      margin: 0 auto;
      padding-left: 5px;
      padding-top: 5px;
      display: flex;
      flex-direction: column;
      height: 40px;

      .footer-text {
        font-family: "Bw Modelica Light", serif;
        font-size: 14px;
        color: #1f1f1f;

        .highlight-name {
          font-family: "Bw Modelica Bold", serif;
        }
      }
      .error-text {
        font-family: "Bw Modelica Regular", serif;
        font-size: 12px;
        color: #ca6767;
      }
    }

    .button-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 45px;

      .clear-button {
        width: 48%;
        border-radius: 8px;
        border: thin solid lightgrey;
        background-color: transparent;

        .button-label {
          font-family: "Bw Modelica Medium", serif;
          font-size: 13px;
          color: #5d5d5d;
        }
      }

      .submit-button {
        width: 48%;
        background-image: linear-gradient(to right top, #3f75ff, #6aacff);
        border-radius: 8px;

        .button-label {
          font-family: "Bw Modelica Medium", serif;
          font-size: 13px;
          color: white;
        }
      }

      .submitted-button {
        margin-left: 15px;
        height: 40px;
        width: 38%;
        background-color: #e2e2e2;
        border: thin solid #d6d6d6;
        border-radius: 8px;

        .button-label {
          font-family: "Bw Modelica Medium", serif;
          font-size: 11px;
          color: #1ab081;
        }
      }
    }
  }

}

</style>