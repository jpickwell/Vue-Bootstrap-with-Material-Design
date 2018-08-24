<template>
  <div :class="wrapperClass">
    <slot :class="iconClasses" name="prefix"></slot>
    <component
      v-model="innerValue"
      ref="input"
      :class="textareaClass"
      :disabled="disabled"
      :is="tag"
      :placeholder="placeholder"
      :rows="rows"
      :type="type"
      @blur="blur"
      @focus="focus"
      @input="onChange"
    >
    </component>
    <label v-if="label" :class="labelClass" ref="label" @click="focus">
      {{label}}
    </label>
    <slot></slot>
  </div>
</template>

<script>
import classNames from 'classnames';

const MdTextarea = {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    iconClass: {
      type: String
    },
    label: {
      type: String
    },
    placeholder: {
      type: String
    },
    rows: {
      type: Number
    },
    tag: {
      type: String,
      default: 'textarea'
    },
    type: {
      type: String,
    },
    value: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      innerValue: this.value,
      isTouched: false
    };
  },

  computed: {
    iconClasses() {
      return classNames(
        'prefix',
        this.isTouched && 'active',
        this.iconClass
      );
    },
    labelClass() {
      return classNames(
        (this.isTouched || this.placeholder || this.innerValue !== '') && 'active',
        this.disabled && 'disabled'
      );
    },
    textareaClass() {
      return classNames(
        'form-control md-textarea'
      );
    },
    wrapperClass() {
      return classNames(
        'md-form'
      );
    }
  },
  methods: {
    blur() {
      this.isTouched = false;
      this.$refs.input.blur();
    },

    focus() {
      if (this.label && !this.disabled) {
        this.isTouched = true;
        this.$refs.input.focus();
      }
    },

    onChange(e) {
      this.$emit('input', e.target.value);
      this.innerValue = e.target.value;
    }
  }
};

export default MdTextarea;
export { MdTextarea as mdbTextarea };
</script>

<style scoped>
</style>
