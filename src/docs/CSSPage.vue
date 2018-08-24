<template>
  <container>
    <row>
      <column md="8" class="mx-auto">
        <jumbotron class="mt-5">
          <h1><fa-icon class="grey-text" :icon="['fab', 'css3']"></fa-icon> CSS</h1>
          <ul class="list-unstyled example-components-list">
            <h6>FREE</h6>
            <a href="#/css/hover"><li>Hover effects <fa-icon icon="angle-right"></fa-icon></li></a>
            <a href="#/css/icons"><li>Icons <fa-icon icon="angle-right"></fa-icon></li></a>
            <a href="#/css/jumbotron"><li>Jumbotron <fa-icon icon="angle-right"></fa-icon></li></a>
            <a href="#/css/masks"><li>Masks <fa-icon icon="angle-right"></fa-icon></li></a>
            <a href="#/css/table"><li>Table <fa-icon icon="angle-right"></fa-icon></li></a>
            <a href="#/css/table-additional"><li>Table Additional <fa-icon icon="angle-right"></fa-icon></li></a>
            <a href="#/css/table-responsive"><li>Table Responsive <fa-icon icon="angle-right"></fa-icon></li></a>
          </ul>
        </jumbotron>
      </column>
    </row>
  </container>
</template>

<script>
import { Column, Container, Jumbotron, Row } from 'mdbvue';

export default {
  name: 'CSSPage',
  components: {
    Column,
    Container,
    Jumbotron,
    Row
  }
};
</script>

<style scoped>
.example-components-list {
  padding-top: 20px;
}

.example-components-list li {
  padding: 10px;
  background-color: white;
  border-bottom: 1px solid #f7f7f7;
  transition: .3s;
}

.example-components-list h6 {
  padding: 20px 10px 5px 10px;
  color: grey;
}

.example-components-list li:hover {
  background-color: #fafafa;
}

.example-components-list svg {
  float: right;
  padding-top: 3px;
}
</style>
