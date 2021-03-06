<script>
import classNames from 'classnames';
import includes from 'lodash.includes';
import waves from '../mixins/waves';

const MdInput = {
  mixins: [waves],

  props: {
    active: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: String,
      default: null
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    errorMsg: {
      type: String,
      default: null
    },
    filled: {
      type: Boolean,
      default: false
    },
    gap: {
      type: Boolean,
      default: false
    },
    iconClass: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    },
    inline: {
      type: Boolean,
      default: false
    },
    inputClass: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    labelColor: {
      type: String,
      default: null
    },
    maxlength: {
      type: [String, Number],
      default: null
    },
    name: {
      type: String,
      required: true
    },
    navInput: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null
    },
    successMsg: {
      type: String,
      default: null
    },
    tag: {
      type: String,
      default: 'input'
    },
    type: {
      type: String,
      default: 'text'
    },
    valid: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      default: ''
    },
    waves: {
      type: Boolean,
      default: false
    },
    wavesFixed: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      innerChecked: this.checked,
      innerRadio: '',
      innerValue: this.value,
      isTouched: this.active
    };
  },

  computed: {
    className() {
      const names = ['form-control', this.inputClass];

      if (this.valid) {
        names.push('validate valid');
      }

      if (this.invalid) {
        names.push('validate invalid');
      }

      switch (this.type) {
        case 'checkbox':
          if (!this.gap) {
            names.push('form-check-input');
          }

          break;

        case 'radio':
          names.push('form-check-input');
          break;

        // no default
      }

      if (this.filled) {
        names.push('filled-in');
      }

      if (this.gap) {
        names.push('with-gap');
      }

      return classNames(...names);
    },

    iconClasses(){
      const names = ['prefix'];

      if (this.isTouched) {
        names.push('active');
      }

      return classNames(...names);
    },

    labelClass () {
      const names = [];

      if (this.placeholder || this.isTouched || this.innerValue !== '') {
        names.push('active');
      }

      if (this.disabled) {
        names.push('disabled');
      }

      if (includes(['checkbox', 'radio'], this.type)) {
        names.push('form-check-label mr-5');
      }

      if (this.labelColor) {
        names.push(`text-${this.labelColor}`);
      }

      return classNames(...names);
    },

    wrapperClass () {
      const names = [];

      switch (this.type) {
        case 'checkbox':
        case 'radio':
          names.push(this.inline ? 'form-check' : 'form-check my-3');
          break;

        default:
          names.push('md-form');
      }

      if (this.size) {
        names.push(`form-${this.size}`);
      }

      if (this.waves) {
        names.push('ripple-parent');
      }

      return classNames(...names);
    }
  },

  methods: {
    blur() {
      this.isTouched = false;

      // styles for navbar input
      if (this.navInput) {
        this.$el.firstElementChild.style.borderColor = '#fff';
      }
    },

    handleChange (e) {
      this.$emit('input', e.target.value);

      switch (this.type) {
        case 'checkbox':
          this.innerChecked = e.target.checked;
          break;

        case 'email':
        case 'password':
        case 'text':
          this.innerValue = e.target.value;
          break;

        // no default
      }

      this.$forceUpdate();
    },

    focus() {
      this.isTouched = true;

      if (!this.disabled) {
        this.$refs.input.focus();
      }

      // styles for navbar input
      if (this.navInput) {
        this.$el.firstElementChild.style.borderColor = 'transparent';
        this.$el.firstElementChild.style.boxShadow = 'none';
      }
    },

    handleKeyUp (e) {
      this.$emit('keyup', e);
    }
  }
};

export default MdInput;
export { MdInput as mdbInput };
</script>

<template>
  <div :class="wrapperClass">
    <slot
      :class="iconClasses"
      name="prefix"
    />
    <component
      ref="input"
      :autocomplete="autocomplete"
      :checked="checked"
      :class="className"
      :disabled="disabled"
      :id="id"
      :is="tag"
      :maxlength="maxlength"
      :name="name"
      :placeholder="placeholder"
      :type="type"
      :value="value"
      @blur="handleBlur"
      @change="handleChange"
      @click="wave"
      @focus="handleFocus"
      @input="handleChange"
      @keyup="handleKeyUp"
    >
    </component>
    <label
      v-if="label"
      ref="label"
      :class="labelClass"
      :for="id"
      @click="handleFocus"
    >
      {{ label }}
    </label>
    <slot />
  </div>
</template>

<style scoped>
.navbar .md-form {
  margin-bottom: 0;
  margin-top: 0;
}
</style>
