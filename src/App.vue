<template>
  <v-app>
    <v-content>
      <v-row>
        <v-col cols="6">
          <tone1></tone1>
        </v-col>
        <v-col cols="6">
          <twinkle></twinkle>
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import tone1 from "./components/tone1";
import twinkle from "./components/twinkle";
export default {
  name: "App",
  components: {
    tone1,
    twinkle
  },
  data: () => ({
    //
  })
};
</script>
