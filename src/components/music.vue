<template>
  <v-container fluid>
    <v-cols cols="12">
      <v-row align="center" justify="center">
        <v-card class="mx-auto" max-width="400">
          <v-card-text>
            <div>Web experiment with</div>
            <p class="display-1 text--primary">
              Ma•gen•ta
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
            <v-btn text color="deep-purple accent-4" @click="play">
              Play
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-cols>
  </v-container>
</template>
<script>
//import { player } from "./plugins/magenta"; -- this import statement is not working
import { core } from "@magenta/music/node/core";
export default {
  methods: {
    play() {
      const globalAny = global;
      globalAny.performance = Date;
      globalAny.fetch = require("node-fetch");

      const player = new core.Player();
      var TWINKLE_TWINKLE = {
        notes: [
          { pitch: 60, startTime: 0.0, endTime: 0.5 },
          { pitch: 60, startTime: 0.5, endTime: 1.0 },
          { pitch: 67, startTime: 1.0, endTime: 1.5 },
          { pitch: 67, startTime: 1.5, endTime: 2.0 },
          { pitch: 69, startTime: 2.0, endTime: 2.5 },
          { pitch: 69, startTime: 2.5, endTime: 3.0 },
          { pitch: 67, startTime: 3.0, endTime: 4.0 },
          { pitch: 65, startTime: 4.0, endTime: 4.5 },
          { pitch: 65, startTime: 4.5, endTime: 5.0 },
          { pitch: 64, startTime: 5.0, endTime: 5.5 },
          { pitch: 64, startTime: 5.5, endTime: 6.0 },
          { pitch: 62, startTime: 6.0, endTime: 6.5 },
          { pitch: 62, startTime: 6.5, endTime: 7.0 },
          { pitch: 60, startTime: 7.0, endTime: 8.0 }
        ],
        tempos: [
          {
            time: 0,
            qpm: 120
          }
        ],
        totalTime: 8
      };
      player.start(TWINKLE_TWINKLE);
    }
  }
};
</script>
