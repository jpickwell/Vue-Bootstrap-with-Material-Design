<script>
import classNames from 'classnames';
import waves from '../mixins/waves';

const Btn = {
  mixins: [waves],

  props: {
    action: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'default'
    },
    darkWaves: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    },
    floating: {
      type: Boolean,
      default: false
    },
    gradient: {
      type: String,
      default: null
    },
    outline: {
      type: String,
      default: null
    },
    rounded: {
      type: Boolean,
      default: false
    },
    save: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: null
    },
    tag: {
      type: String,
      default: 'button'
    },
    transparent: {
      type: Boolean,
      default: false
    },
    waves: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    className() {
      return classNames(
        this.floating ? 'btn-floating' : 'btn',
        this.outline ? 'btn-outline-' + this.outline : this.flat ? 'btn-flat' : this.transparent ? '' : 'btn-' + this.color,
        this.size ? 'btn-' + this.size : '',
        this.block ? 'btn-block' : '',
        this.disabled ? 'disabled' : '',
        this.gradient ? this.gradient + '-gradient' : '',
        this.rounded ? 'btn-rounded' : '',
        this.action ? 'btn-action' : '',
        this.save ? 'btn-save' : '',
        this.active ? 'active' : '',
        this.waves ? 'ripple-parent' : ''
      );
    }
  }
};

export default Btn;
export { Btn as mdbBtn };
</script>

<template>
  <component
    :class="className"
    :is="tag"
    @click="wave"
  >
    <slot name="prefix" />
    <slot />
    <slot name="suffix" />
  </component>
</template>

<style scoped>
</style>
