<template>
  <v-app>
    <v-content>
      <v-row align="center" justify="center">
        <v-col>
          <tone2></tone2>
          <v-divider inset></v-divider>
          <v-btn @click="takati = true">Next</v-btn>
          <div v-show="takati">
            <takati></takati>
          </div>
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
//import tone1 from "./components/tone1";
import tone2 from "./components/tone2";
import takati from "./components/takati";
export default {
  name: "App",
  components: {
    // tone1,
    tone2,
    takati
  },
  data: () => ({
    takati: false
  })
};
</script>
