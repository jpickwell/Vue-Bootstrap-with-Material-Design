<template>
  <div
    :id="id"
    class="collapse navbar-collapse"
  >
    <slot></slot>
  </div>
</template>

<script>
const NavbarCollapse = {
  props: {
    id: {
      type: String,
      default: 'navbarSupportedContent'
    }
  }
};

export default NavbarCollapse;
export { NavbarCollapse as mdbNavbarToggler };
</script>

<style scoped>
.show-navbar {
  animation: slideDown .3s ease-in;
  animation-fill-mode: forwards;
}
.hide-navbar {
  animation: slideUp .3s ease-out;
  animation-fill-mode: forwards;
}
@keyframes slideDown {
  0% {
    max-height: 0;
  }
  100% {
    max-height: 500px;
  }
}
@keyframes slideUp {
  0% {
    max-height: 500px;
  }
  100% {
    max-height: 0;
  }
}
</style>

