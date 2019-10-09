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
import Tone from "tone";
export default {
  data() {
    return {
      synth: ""
    };
  },
  created() {
    this.synth = new Tone.Synth().toMaster();
    Tone.Transport.bpm.value = 400;
  },
  methods: {
    playtone() {
      this.synth.triggerAttackRelease("C4", "4n", "8n");
      this.synth.triggerAttackRelease(
        "E4",
        "8n",
        Tone.Time("4n") + Tone.Time("8n")
      );
      this.synth.triggerAttackRelease("G4", "16n", "2n");
      this.synth.triggerAttackRelease(
        "B4",
        "16n",
        Tone.Time("2n") + Tone.Time("8t")
      );
      this.synth.triggerAttackRelease(
        "G4",
        "16",
        Tone.Time("2n") + Tone.Time("8t") * 2
      );
      this.synth.triggerAttackRelease("E4", "2n", "0:3");
    },

    simple() {
      this.synth.triggerAttackRelease("C4", "8n");
    },
    melody() {
      Tone.Transport.schedule(this.synth.triggerAttackRelease("C2", "8n", 0));
      Tone.Transport.schedule(
        this.synth.triggerAttackRelease("C2", "8n", "0:2")
      );
      Tone.Transport.schedule(
        this.synth.triggerAttackRelease("C2", "8n", "0:2:2.5")
      );
      Tone.Transport.loopEnd = "1m";
      Tone.Transport.loop = true;
    }
  }
};
</script>
