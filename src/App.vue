<template>
  <v-app>
    <v-content>
      <music />
    </v-content>
  </v-app>
</template>

<script>
import music from "./components/music";

export default {
  name: "App",
  components: {
    music
  },
  data: () => ({
    //
  })
};
</script>
