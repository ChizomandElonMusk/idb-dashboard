<template>
    <div class="safe-area-top">
      
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminNavBar',


    methods: {
      logOut() {
        if(process.client) {
          localStorage.removeItem('token')
          window.location = './'
        }
      },

      checkToken() {
        if(process.client) {
          let token = localStorage.getItem('token')
          if (token === null) {
            // this.$router.push('./')
          }
        }
      }
    },

    mounted() {
      M.AutoInit();
      

      
    },

    created() {
      // this.checkToken()
    }
  }
  
  </script>
  
  <style scoped>
  ::placeholder {
    color: red;
  }
  </style>