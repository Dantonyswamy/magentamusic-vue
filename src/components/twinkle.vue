<template>
  <v-container fluid>
    <v-col cols="12">
      <v-row align="center" justify="center">
        <v-card class="mx-auto" max-width="400">
          <v-card-text>
            <div>To•ne•JS web experiment with</div>
            <p class="display-1 text--primary">
              Twinkle Twinkle
            </p>
            <p>
              Trying to play twinkle twinkle
            </p>
            <div class="text--primary">
              click the play button to hear .<br />
              bpm: 90
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="green" @click="startSynth">
              Play
            </v-btn>
            <v-btn text color="red" @click="stopSynth">
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
      index: 0,
      notes: [
        "Gb4",
        "F4",
        "Ab4",
        "C5",
        "Eb5",
        "Gb5",
        "F5",
        "E5",
        "Eb5",
        "C5",
        "Eb5",
        "D5",
        "Db5",
        "C5",
        "F5",
        "F4",
        "G4",
        "Ab4",
        "C5",
        "Eb5",
        "C5",
        "Eb5",
        "C5",
        "Eb5",
        "G4"
      ],
      synth: new Tone.Synth().toMaster()
    };
  },
  created() {
    Tone.Transport.scheduleRepeat(time => {
      this.repeat(time);
    }, "8n");

    Tone.Transport.bpm.value = 90;
  },

  methods: {
    repeat(time) {
      let note = this.notes[this.index % this.notes.length];
      // (note, duration, time, velocity)
      // the note is the pitch, duration is how long to hold the
      // note in question before triggering the release of the
      // amplitude enveleope (ie. the release of the note)
      this.synth.triggerAttackRelease(note, "4n", time);
      this.index++;
    },
    startSynth() {
      Tone.Transport.start();
    },
    stopSynth() {
      Tone.Transport.stop();
    }
  }
};
</script>
