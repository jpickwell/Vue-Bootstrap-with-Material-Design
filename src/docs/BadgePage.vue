<template>
  <container class="text-center mt-5">
    <row between>
      <badge>Default</badge>
      <badge color="primary-color">Primary</badge>
      <badge color="success-color">Success</badge>
      <badge color="info-color">Info</badge>
      <badge color="warning-color">Warning</badge>
      <badge color="danger-color">Danger</badge>
    </row>
    <row around class="mt-5">
      <badge tag="a" href="#" color="primary-color">Primary</badge>
      <badge tag="a" href="#" color="secondary-color">Secondary</badge>
      <badge tag="a" href="#" color="success-color">Success</badge>
      <badge tag="a" href="#" color="danger-color">Danger</badge>
      <badge tag="a" href="#" color="warning-color">Warning</badge>
      <badge tag="a" href="#" color="info-color">Info</badge>
    </row>
    <row start class="mt-5">
      <badge pill color="pink">Pink</badge>
      <badge pill color="light-blue">Light blue</badge>
      <badge pill color="indigo">Indigo</badge>
      <badge pill color="purple">Purple</badge>
      <badge pill color="orange">Orange</badge>
      <badge pill color="green">Green</badge>
    </row>
    <row center class="mt-5">
      <badge></badge>
      <badge color="primary-color"><fa-icon :icon="['fab', 'facebook-f']"></fa-icon></badge>
      <badge color="success-color"><fa-icon :icon="['fab', 'snapchat-ghost']"></fa-icon></badge>
      <badge color="info-color"><fa-icon icon="anchor"></fa-icon></badge>
      <badge color="warning-color"><fa-icon :icon="['far', 'sun']"></fa-icon></badge>
      <badge color="danger-color"><fa-icon icon="battery-three-quarters"></fa-icon></badge>
    </row>
    <row around class="mt-5">
      <badge pill color="pink"><fa-icon icon="wheelchair"></fa-icon></badge>
      <badge pill color="light-blue"><fa-icon :icon="['far', 'heart']"></fa-icon></badge>
      <badge pill color="indigo"><fa-icon icon="bullhorn"></fa-icon></badge>
      <badge pill color="purple"><fa-icon :icon="['far', 'comments']"></fa-icon></badge>
      <badge pill color="orange"><fa-icon icon="coffee"></fa-icon></badge>
      <badge pill color="green"><fa-icon icon="user"></fa-icon></badge>
    </row>
    <row between class="mt-5">
      <badge color="indigo"><fa-icon :icon="['fab', 'android']" size="2x"></fa-icon></badge>
      <badge color="cyan"><fa-icon icon="cog" size="2x"></fa-icon></badge>
      <badge color="orange"><fa-icon :icon="['fab', 'btc']" size="2x"></fa-icon></badge>
      <badge pill color="teal"><fa-icon icon="heart" size="2x"></fa-icon></badge>
      <badge pill color="green"><fa-icon :icon="['fab', 'apple']" size="2x"></fa-icon></badge>
      <badge pill color="purple"><fa-icon icon="users" size="2x"></fa-icon></badge>
    </row>
  </container>
</template>

<script>
import { Badge, Container, Row } from 'mdbvue';

export default {
  name: 'BadgePage',
  components: {
    Badge,
    Container,
    Row
  }
};
</script>

<style scoped>
</style>
