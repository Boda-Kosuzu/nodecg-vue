<template>
  <div
    class="main-area"
    :style="color"
  >
    <div class="main-display-area">
      <titleArea />
    </div>
    <div class="main-comment-area">
      <comment />
    </div>
    <div class="main-icon-text-area">
      <iconText />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import titleArea from './title.vue';
import iconText from './iconAndText.vue';
import comment from './comment.vue';
// import { State2Way } from 'vuex-class-state2way';

@Component({
  components: {
    titleArea,
    iconText,
    comment,
  },
})
export default class extends Vue {
  @State('replicantName') broadcast!: Record<string, any>

  get color(): Record<string, any> {
    return {
      '--textColor': `#${this.broadcast.textColor}`,
      '--borderColor': `#${this.broadcast.borderColor}`,
      '--iconColor': `#${this.broadcast.iconColor}`,
      'font-family': `"${this.broadcast.font}"`,
    };
  }
}
</script>

<style>
body {
  margin: 0;
}
</style>

<style scoped>
.main-area {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: 80% 20%;
}
.main-display-area {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  background: transparent;
}
.main-comment-area {
  grid-row: 1 / 3;
  grid-column: 2 / 3;
  background: #fafafa;
}
.main-icon-text-area {
  grid-row: 2 / 3;
  grid-column: 1 / 3;
  background: #fafafa;
}
</style>
