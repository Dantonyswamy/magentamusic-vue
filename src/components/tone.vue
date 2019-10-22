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
              notes: ["C2", "Eb2", "G2", "C3", "Eb3", "G3"]
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
      notes: ["C2", "Eb2", "G2", "C3", "Eb3", "G3"],
      synth: new Tone.Synth(),
      filter: new Tone.Filter(1000, "lowpass", -24),
      filterEnv: new Tone.FrequencyEnvelope(0.3, 0.2, 0.01, 0.8)
    };
  },
  created() {
    // this.synth = new Tone.MembraneSynth().toMaster();
    // Tone.Transport.bpm.value = 120;

    Tone.Transport.scheduleRepeat(time => {
      this.repeat(time);
      // console.log(time)
      // console.log(Tone.Transport.bpm.value)
    }, "4n");
    Tone.Transport.bpm.value = 200;
    this.synth.oscillator.type = "square";
    this.filterEnv.connect(this.filter.frequency);
    this.synth.connect(this.filter);
    this.filter.toMaster();
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
    note(time) {
      this.synth.triggerAttackRelease("C2", "8n", time);
    },
    schedule: function() {
      Tone.Transport.schedule(this.note(0));
      Tone.Transport.schedule(this.note("0:2"));
      Tone.Transport.schedule(this.note("0:2:2.5"));
      Tone.Transport.loopEnd = "1m";
      Tone.Transport.loop = true;
    },

    repeat(time) {
      let note = this.notes[this.index % this.notes.length];
      // (note, duration, time, velocity)
      // the note is the pitch, duration is how long to hold the
      // note in question before triggering the release of the
      // amplitude enveleope (ie. the release of the note)
      this.synth.triggerAttackRelease(note, "16n", time);
      this.filterEnv.triggerAttackRelease();
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
