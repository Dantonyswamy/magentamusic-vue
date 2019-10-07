<template>
  <v-container fluid>
    <v-col cols="12">
      <v-row align="center" justify="center">
        <v-card class="mx-auto" max-width="400">
          <v-card-text>
            <div>Web experiment with</div>
            <p class="display-1 text--primary">
              To•ne•JS
            </p>
            <p>
              trying to make it happen on VueJS template. Hopefully it works!
            </p>
            <div class="text--primary">
              click the play button to hear .<br />
              "Twinkle Twinkle little star" music
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="green" @click="playtone">
              Play
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-col>
  </v-container>
</template>
<script>
import { synth } from "@/plugins/tone";
export default {
  methods: {
    playtone() {
      synth.triggerAttackRelease("C4", 0.5, 0);
      synth.triggerAttackRelease("E4", 0.5, 1);
      synth.triggerAttackRelease("G4", 0.5, 2);
      synth.triggerAttackRelease("B4", 0.5, 3);
    }
  }
};
</script>
