<template>
 <v-app>
    <v-app-bar app color='primary' dark>
      <v-toolbar-title>VueDersCalismasi</v-toolbar-title>
        <v-spacer></v-spacer>
      <v-btn>Home</v-btn>
      <v-btn>Login</v-btn>
    </v-app-bar>
    <v-content>
      <v-card width='400' class='mx-auto mt-5'> 
      <v-card-title>
        <h1 class='display-1'>Login</h1>
        </v-card-title>

         <v-card-text>
           <v-form>
              <v-text-field 
              label='Username'
              prepend-icon="mdi-account-circle"   
              />
              <v-text-field 
              prepend-icon='mdi-lock'
              :type="showPassword ? 'text': 'password'"
              label='Password '
              :append-icon="showPassword ?  'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword=!showPassword"
              />      
           </v-form>
         </v-card-text>
         <v-divider></v-divider>
         <v-card-actions>
           <v-btn color='success'>Register</v-btn>
           <v-spacer></v-spacer>
           <v-btn color='info'>Login</v-btn>
         </v-card-actions>
       </v-card>
    </v-content>
    
    <v-footer
      absolute
      class="font-weight-medium"
      color='info'
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify-VueDers</strong>
      </v-col>
    </v-footer>
  </v-app>

  </template>

  <script>
export default {
  name :'App',
  data:()=>({
    showPassword:false
  }),

};

</script>