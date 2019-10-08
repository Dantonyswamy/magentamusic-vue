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
              notes C4,E4,G4,B4
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
import Tone from "tone";
export default {
  methods: {
    playtone() {
      synth.triggerAttackRelease("C4", "4n", "8n");
      synth.triggerAttackRelease("E4", "8n", Tone.Time("4n") + Tone.Time("8n"));
      synth.triggerAttackRelease("G4", "16n", "2n");
      synth.triggerAttackRelease(
        "B4",
        "16n",
        Tone.Time("2n") + Tone.Time("8t")
      );
      synth.triggerAttackRelease(
        "G4",
        "16",
        Tone.Time("2n") + Tone.Time("8t") * 2
      );
      synth.triggerAttackRelease("E4", "2n", "0:3");
    }
  }
};
</script>
