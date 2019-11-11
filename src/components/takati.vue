<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <!--First Music Card -->
      <v-col cols="4">
        <v-card class="mx-auto" max-width="400">
          <v-card-text>
            <div>To•ne•JS web experiment with flamenco zapteado</div>
            <p class="display-1 text--primary">
              Ta
            </p>
            <p>
              Playing a zapateo element
            </p>
            <div class="text--primary">
              click the play button to hear .<br />
              notes: A suitable octave note to be constructed<br />
              duration of holded and release: ??<br />
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
      </v-col>
      <!--End of First music card -->
      <!--Second Music Card -->
      <v-col cols="4">
        <v-card class="mx-auto" max-width="400">
          <v-card-text>
            <div>To•ne•JS web experiment with flamenco zapteado</div>
            <p class="display-1 text--primary">
              Ka
            </p>
            <p>
              Playing a zapateo element
            </p>
            <div class="text--primary">
              click the play button to hear .<br />
              notes: A suitable octave note to be constructed<br />
              duration of holded and release: ??<br />
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
      </v-col>
      <!--End of second music card -->
      <!--Third Music Card -->
      <v-col cols="4">
        <v-card class="mx-auto" max-width="400">
          <v-card-text>
            <div>To•ne•JS web experiment with flamenco zapteado</div>
            <p class="display-1 text--primary">
              Ti
            </p>
            <p>
              Playing a zapateo element
            </p>
            <div class="text--primary">
              click the play button to hear .<br />
              notes: A suitable octave note to be constructed<br />
              duration of holded and release: ??<br />
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
      </v-col>
      <!--End of third music card -->
    </v-row>
    <v-row align="center" justify="center">
      <!--Fourth Music Card -->
      <v-col cols="4">
        <v-card class="mx-auto" max-width="400">
          <v-card-text>
            <div>To•ne•JS web experiment with flamenco zapteado</div>
            <p class="display-1 text--primary">
              Ta.Ka.Ti
            </p>
            <p>
              Playing a zapateo element
            </p>
            <div class="text--primary">
              click the play button to hear .<br />
              notes: A suitable octave note to be constructed<br />
              duration of holded and release: ??<br />
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
      </v-col>
      <!--End of fourth music card -->
    </v-row>
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
