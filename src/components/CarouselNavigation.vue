<script>
const CarouselNavigation = {
  props: {
    testimonial: {
      type: Boolean,
      default: false
    },
    top: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    prev() {
      this.$emit('changeSlide', { slideIndex: 'prev' });
    },

    next() {
      this.$emit('changeSlide', { slideIndex: 'next' });
    }
  }
};

export default CarouselNavigation;
export { CarouselNavigation as mdbCarouselControl };
</script>

<template>
  <div>
    <div v-if="top" class="controls-top">
      <a class="btn-floating" @click.prevent="prev">
        <slot name="prev">
          <strong>&lt;</strong>
        </slot>
      </a>
      <a class="btn-floating" @click.prevent="next">
        <slot name="next">
          <strong>&gt;</strong>
        </slot>
      </a>
    </div>
    <div v-else-if="testimonial">
      <a class="carousel-control carousel-item-prev left" @click.prevent="prev">
        <span class="icon-prev" aria-hidden="true"></span>
        <span class="sr-only">Prev</span>
      </a>
      <a class="carousel-control carousel-item-next right" @click.prevent="next">
        <span class="icon-next" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div v-else>
      <a class="carousel-control-prev" @click.prevent="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Prev</span>
      </a>
      <a class="carousel-control-next" @click.prevent="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
</style>
