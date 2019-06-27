<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/lists/ali.png"
            height="300px"
          >
            <v-layout
              column
              fill-height
            >
              <v-card-title>
                
              </v-card-title>

              <v-spacer></v-spacer>

              <v-card-title class="white--text pl-3 pt-5">
                <div class="display-2 pl-1 pt-5">Ali Conners</div>
              </v-card-title>
            </v-layout>
          </v-img>

          <v-list two-line>
            <v-list-tile >
              <v-list-tile-action>
                <v-icon color="indigo">phone</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>(650) 555-1234</v-list-tile-title>
                <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
              </v-list-tile-content>

            </v-list-tile>

            <v-list-tile >
              <v-list-tile-action>
                 <v-icon color="indigo">work</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>(323) 555-6789</v-list-tile-title>
                <v-list-tile-sub-title>Work</v-list-tile-sub-title>
              </v-list-tile-content>

            </v-list-tile>

            <v-divider inset></v-divider>

            <v-list-tile >
              <v-list-tile-action>
                <v-icon color="indigo">mail</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>aliconnors@example.com</v-list-tile-title>
                <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile >
              <v-list-tile-action>
                 <v-icon color="indigo">calendar_today</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>20/12/2019</v-list-tile-title>
                <v-list-tile-sub-title>birthday</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider inset></v-divider>

            <v-list-tile >
              <v-list-tile-action>
                <v-icon color="indigo">location_on</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>1400 Main Street</v-list-tile-title>
                <v-list-tile-sub-title>Orlando, FL 79938</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
 </v-container> 
</template>
<script>
import People from "../services/People";

export default {
   name:'people',
   data(){
      return{
          peplos:null
      }
   },
   mounted(){
       People.listarPeople()
       .then(response =>console.table(response.data))
       .catch(error=>console.log(error))
       .finally(()=>console.log('Finalizado'))          
   }
}
</script>
