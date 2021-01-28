<template>
  <div id="InlineInput">
    <label v-if="field.edit">
      <input
          class="input-editing"
          v-model="field.input"
          v-on:blur="field.edit=false; onChangeText(field.input); $emit('update')"
          v-on:keyup.enter="$event.target.blur()"
          v-focus>
    </label>
    <div v-else class="input-card">
      <div :class="applyInputStyle(field.input)">
        <label @click="onEditText"> {{field.input}} </label>
        <transition appear name="fade">
          <check-circle-icon v-if="field.isValid" size="1x" class="check-icon"/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { CheckCircleIcon } from 'vue-feather-icons'

export default {
  field: "InlineInput",
  props: ['inputData'],
  components: {
    CheckCircleIcon,
  },
  data() {
    return {
      field: this.inputData,
    }
  },
  methods: {
    onEditText: function() {
      this.field.input = '';
      this.field.edit = true;
    },
    onChangeText: function(input) {
      //check if name input is valid
      if (input === '') {
        this.field.input = this.field.prompt;
        this.field.edit = false;
        this.field.isValid = false;
      } else {
        this.field.input = input.charAt(0).toUpperCase() + input.slice(1);
        this.field.isValid = true;
      }
    },
    applyInputStyle: function(input) {
      return [(input.length>0 && input !== this.field.prompt) ? 'input-has-value-style' : 'input-no-value-style']
    }
  },
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="scss" scoped>

#InlineInput{
  font-family: "Bw Modelica Regular", serif;
  font-size: 14px;

  .input-editing{
    font-family: "Bw Modelica Regular", serif;
    font-size: 14px;
    color: #5f5f5f;
    width: 98%;
    border: transparent;
    outline: transparent;
    background-color: transparent;
    border-bottom: thin solid #a3cfc4;
  }

  .input-card{
    display: flex;
    flex-direction: row;
  }
  .check-icon{
    padding-left: 3px;
    transform: translateY(2px);
    font-size: 14px;
    color: #16a075;
    flex-grow: 1;
  }
  .input-has-value-style{
    color: #458fcf;
  }
  .input-no-value-style{
    color: #b2b3b7;
    width: fit-content;
  }
}
.fade-enter-active {
  transition: all 0.3s ease-in-out;
}
.fade-leave-active {
  transition: all 0.3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}

</style>