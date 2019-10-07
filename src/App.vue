<template>
  <v-app>
    <v-content>
      <music />
      <tone></tone>
    </v-content>
  </v-app>
</template>

<script>
import music from "./components/music";
import tone from "./components/tone";

export default {
  name: "App",
  components: {
    music,
    tone
  },
  data: () => ({
    //
  })
};
</script>
