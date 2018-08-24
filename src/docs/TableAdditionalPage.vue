<template>
  <div class="mt-5 pt-5 mx-3">
    <h3>Table with buttons</h3>
    <br />
    <tbl btn responsive striped>
      <tbl-head>
        <tr>
          <th>#</th>
          <th>thead col 1</th>
          <th>thead col 2</th>
          <th>thead col 3</th>
        </tr>
      </tbl-head>
      <tbl-body>
        <tr scope="row">
          <td>1</td>
          <td>tbody col 1</td>
          <td>
            <button type="button" class="btn btn-indigo btn-sm m-0">Button</button>
          </td>
          <td>tbody col 3</td>
        </tr>
        <tr scope="row">
          <td>2</td>
          <td>
            <button type="button" class="btn btn-indigo btn-sm m-0">Button</button>
          </td>
          <td>tbody col 2</td>
          <td>tbody col 3</td>
        </tr>
        <tr scope="row">
          <td>3</td>
          <td>tbody col 1</td>
          <td>tbody col 2</td>
          <td>
            <button type="button" class="btn btn-indigo btn-sm m-0">Button</button>
          </td>
        </tr>
      </tbl-body>
    </tbl>

    <h3>Table with checkboxes</h3>
    <br />
    <tbl responsive striped>
      <tbl-head>
        <tr>
          <th>#</th>
          <th>thead col 1</th>
          <th>thead col 2</th>
          <th>thead col 3</th>
        </tr>
      </tbl-head>
      <tbl-body>
        <tr scope="row">
          <td>1</td>
          <td>tbody col 1</td>
          <td>
            <!-- Default unchecked -->
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="tableDefaultCheck1">
                <label class="custom-control-label" for="tableDefaultCheck1">Check</label>
            </div>
          </td>
          <td>tbody col 3</td>
        </tr>
        <tr scope="row">
          <td>2</td>
          <td>
            <!-- Default unchecked -->
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="tableDefaultCheck2">
                <label class="custom-control-label" for="tableDefaultCheck2">Check</label>
            </div>
          </td>
          <td>tbody col 2</td>
          <td>tbody col 3</td>
        </tr>
        <tr scope="row">
          <td>3</td>
          <td>tbody col 1</td>
          <td>tbody col 2</td>
          <td>
            <!-- Default unchecked -->
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="tableDefaultCheck3">
                <label class="custom-control-label" for="tableDefaultCheck3">Check</label>
            </div>
          </td>
        </tr>
      </tbl-body>
    </tbl>

    <h3>Table with icons</h3>
    <br />
    <tbl btn responsive striped>
      <tbl-head>
        <tr>
          <th>#</th>
          <th><fa-icon aria-hidden="true" class="mr-2 blue-text" icon="leaf"></fa-icon> thead col 1</th>
          <th><fa-icon aria-hidden="true" class="mr-2 teal-text" icon="leaf"></fa-icon> thead col 2</th>
          <th><fa-icon aria-hidden="true" class="mr-2 indigo-text" icon="leaf"></fa-icon> thead col 3</th>
        </tr>
      </tbl-head>
      <tbl-body>
        <tr>
          <th scope="row">1</th>
          <td><fa-icon aria-hidden="true" class="mr-2 grey-text" :icon="['far', 'gem']"></fa-icon> Cell 1</td>
          <td><fa-icon aria-hidden="true" class="mr-2 grey-text" icon="download"></fa-icon> Cell 2</td>
          <td><fa-icon aria-hidden="true" class="mr-2 grey-text" icon="book"></fa-icon> Cell 3</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td><fa-icon aria-hidden="true" class="mr-2 grey-text" icon="graduation-cap"></fa-icon> Cell 4</td>
          <td><fa-icon aria-hidden="true" class="mr-2 grey-text" icon="gift"></fa-icon> Cell 5</td>
          <td><fa-icon aria-hidden="true" class="mr-2 grey-text" icon="image"></fa-icon> Cell 6</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td><fa-icon aria-hidden="true" class="mr-2 grey-text" icon="magic"></fa-icon> Cell 7</td>
          <td><fa-icon aria-hidden="true" class="mr-2 grey-text" icon="table"></fa-icon> Cell 8</td>
          <td><fa-icon aria-hidden="true" class="mr-2 grey-text" :icon="['far', 'edit']"></fa-icon> Cell 9</td>
        </tr>
      </tbl-body>
    </tbl>

    <h3>Table with panel</h3>
    <br />
    <!-- Table with panel -->
    <div class="card card-cascade narrower">

      <!--Card image-->
      <div class="view view-cascade gradient-card-header blue-gradient narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center">

          <div>
              <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                  <fa-icon class="mt-0" icon="th-large"></fa-icon>
              </button>
              <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                  <fa-icon class="mt-0" icon="columns"></fa-icon>
              </button>
          </div>

          <a href="" class="white-text mx-3">Table name</a>

          <div>
              <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                  <fa-icon class="mt-0" icon="pencil-alt"></fa-icon>
              </button>
              <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                  <fa-icon class="mt-0" icon="times"></fa-icon>
              </button>
              <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                  <fa-icon class="mt-0" icon="info-circle"></fa-icon>
              </button>
          </div>

      </div>
      <!--/Card image-->

      <div class="px-4">

        <div class="table-wrapper">
          <!--Table-->
          <tbl class="table table-hover mb-0">

            <!--Table head-->
            <tbl-head>
              <tr>
                <th>
                  <input class="form-check-input" type="checkbox" id="checkbox">
                  <label class="form-check-label label-table mr-2" for="checkbox"></label>
                </th>
                <th class="th-lg">
                  First Name
                </th>
                <th class="th-lg">
                  Last Name
                </th>
                <th class="th-lg">
                  Username
                </th>
                <th class="th-lg">
                  Username
                </th>
                <th class="th-lg">
                  Username
                </th>
                <th class="th-lg">
                  Username
                </th>
              </tr>
            </tbl-head>
            <!--Table head-->

            <!--Table body-->
            <tbl-body>
              <tr>
                <th scope="row">
                  <input class="form-check-input" type="checkbox" id="checkbox1">
                  <label class="form-check-label label-table" for="checkbox1"></label>
                </th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">
                  <input class="form-check-input" type="checkbox" id="checkbox2">
                  <label class="form-check-label label-table" for="checkbox2"></label>
                </th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">
                  <input class="form-check-input" type="checkbox" id="checkbox3">
                  <label class="form-check-label label-table" for="checkbox3" ></label>
                </th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">
                  <input class="form-check-input" type="checkbox" id="checkbox4">
                  <label class="form-check-label label-table" for="checkbox4"></label>
                </th>
                <td>Paul</td>
                <td>Topolski</td>
                <td>@P_Topolski</td>
                <td>Paul</td>
                <td>Topolski</td>
                <td>@P_Topolski</td>
              </tr>
              <tr>
                <th scope="row">
                  <input class="form-check-input" type="checkbox" id="checkbox5">
                  <label class="form-check-label label-table" for="checkbox5"></label>
                </th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbl-body>
            <!--Table body-->
          </tbl>
          <!--Table-->
        </div>

      </div>

    </div>
    <!-- Table with panel -->
  
  </div>
</template>

<script>
import { Tbl, TblBody, TblHead } from 'mdbvue';

export default {
  name: 'TableAdditionalPage',
  components: {
    Tbl,
    TblBody,
    TblHead
  }
};
</script>

<style scoped>
</style>
