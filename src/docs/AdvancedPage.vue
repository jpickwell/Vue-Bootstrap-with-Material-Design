<template>
  <container>
    <row>
      <column md="8" class="mx-auto">
        <jumbotron class="mt-5">
          <h1><fa-icon class="grey-text" icon="code"></fa-icon> Advanced</h1>
          <ul class="list-unstyled example-components-list">
            <!-- FREE -->
            <h6>FREE</h6>
            <a href="#/advanced/carousel"><li>Carousel <fa-icon icon="angle-right"></fa-icon></li></a>
            <a href="#/advanced/chart"><li>Charts <fa-icon icon="angle-right"></fa-icon></li></a>
            <a href="#/advanced/collapse"><li>Collapse <fa-icon icon="angle-right"></fa-icon></li></a>
            <a href="#/advanced/datatable"><li>Datatable <fa-icon icon="angle-right"></fa-icon></li></a>
            <a href="#/advanced/modal"><li>Modal <fa-icon icon="angle-right"></fa-icon></li></a>
            <a href="#/advanced/popover"><li>Popover <fa-icon icon="angle-right"></fa-icon></li></a>
            <a href="#/advanced/table-pagination"><li>Table pagination <fa-icon icon="angle-right"></fa-icon></li></a>
            <a href="#/advanced/table-scroll"><li>Table Scroll <fa-icon icon="angle-right"></fa-icon></li></a>
            <a href="#/advanced/table-search"><li>Table Search <fa-icon icon="angle-right"></fa-icon></li></a>
            <a href="#/advanced/table-sort"><li>Table Sort <fa-icon icon="angle-right"></fa-icon></li></a>
            <a href="#/advanced/tooltip"><li>Tooltip <fa-icon icon="angle-right"></fa-icon></li></a>
            <a href="#/advanced/validation"><li>Validation <fa-icon icon="angle-right"></fa-icon></li></a>
            <a href="#/advanced/videocarousel"><li>Video Carousel <fa-icon icon="angle-right"></fa-icon></li></a>
          </ul>
        </jumbotron>
      </column>
    </row>
  </container>
</template>

<script>
import { Column, Container, Jumbotron, Row } from 'mdbvue';

export default {
  name: 'AdvancedPage',
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
