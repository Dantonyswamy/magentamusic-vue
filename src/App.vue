<template>
  <v-app>
    <v-content>
      <v-row align="center" justify="center">
        <v-col>
          <tone2></tone2>
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
//import tone1 from "./components/tone1";
import tone2 from "./components/tone2";
export default {
  name: "App",
  components: {
    // tone1,
    tone2
  },
  data: () => ({
    //
  })
};
</script>
