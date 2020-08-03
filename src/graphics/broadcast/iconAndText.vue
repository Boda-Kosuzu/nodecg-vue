<template>
  <div class="icon-and-text-area">
    <div class="icon-area">
      <font-awesome-icon
        v-show="isGame"
        icon="gamepad"
        class="icon"
      />
      <font-awesome-icon
        v-show="isProg"
        icon="keyboard"
        class="icon"
      />
      <font-awesome-icon
        v-show="isTalk"
        icon="comment-dots"
        class="icon"
      />
    </div>
    <div class="text">
      <span>
        {{ broadcast.text }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State } from 'vuex-class';

@Component
export default class extends Vue {
  @State('replicantName') broadcast!: Record<string, any>;

  get isProg() {
    return this.broadcast.type === 'prog';
  }

  get isGame() {
    return this.broadcast.type === 'game';
  }

  get isTalk() {
    return this.broadcast.type === 'talk';
  }
}
</script>

<style scoped>
.icon-and-text-area {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 50px;
  box-sizing: border-box;
}
.icon-area {
  width: 100px;
  height: 100px;
  border: 10px solid var(--borderColor);
  border-radius: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon {
  font-size: 70px;
  color: var(--iconColor);
}
.text {
  margin: auto;
  width: calc(100% - 150px);
  height: 70%;
  font-size: 5rem;
  border: 10px solid var(--borderColor);
  overflow: hidden;
  margin-left: 50px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-radius: 20px;
  color: var(--textColor);
}
.text span{
  display     : inline-block;
  padding-left: 100%;
  white-space : nowrap;
  line-height : 1em;
  animation   : scrollAnime 20s linear infinite;
}
@keyframes scrollAnime{
    0% { transform: translateX(0)}
  100% { transform: translateX(-100%)}
}
</style>
