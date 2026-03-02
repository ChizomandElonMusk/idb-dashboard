<template>
  <div>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
    <nav>
      <div class="nav-wrapper red">
        <ul id="nav-mobile" class="hide-on-med-and-down">
          <li>
            <a href="./dashboard" class="white-text">
              Dashboard
              <i class="material-icons left">dashboard</i>
            </a>
          </li>
          <li>
            <a href="./all-forms" class="white-text">
              All Forms
              <i class="material-icons left">receipt</i>
            </a>
          </li>
          
        </ul>
        <form @submit.prevent>
          <div class="input-field right">
            <input id="search" type="search" required>
            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
            <i class="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'NavBar',

    mounted() {
        this.$M.AutoInit();
      }
}

</script>

<style scoped>
::placeholder {
  color: #fff;
}
</style>