<template>
  <v-container fluid>
    <v-col cols="12">
      <v-row align="center" justify="center">
        <v-card class="mx-auto" max-width="400">
          <v-card-text>
            <div>To•ne•JS web experiment with</div>
            <p class="display-1 text--primary">
              Sample
            </p>
            <p>
              Playing a sequence of notes with different durations
            </p>
            <div class="text--primary">
              click the play button to hear .<br />
              notes: ["C4", "C4", "C4"]<br />
              duration:['0','0:2',"0:2:2.5"]<br />
              bpm: 120<br />
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="green" @click="startSyn">
              Play
            </v-btn>
            <v-btn text color="red" @click="stopSyn">
              Stop
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
      synth: new Tone.Synth().toMaster()
    };
  },
  created() {
    Tone.Transport.schedule(time => {
      this.triggerSynth(time);
    }, 0);
    Tone.Transport.schedule(time => {
      this.triggerSynth2(time);
    }, "0:2");
    Tone.Transport.schedule(time => {
      this.triggerSynth2(time);
    }, "0:2:2.5");

    Tone.Transport.bpm.value = 120;
    Tone.Transport.loop = true;
    Tone.Transport.setLoopPoints(0, "1m");
  },

  methods: {
    triggerSynth(time) {
      this.synth.triggerAttackRelease("C4", "8n", time);
    },
    triggerSynth2(time) {
      this.synth.triggerAttackRelease("Eb2", "8n", time);
    },

    startSyn() {
      Tone.Transport.start();
    },
    stopSyn() {
      Tone.Transport.stop();
    }
  }
};
</script>
