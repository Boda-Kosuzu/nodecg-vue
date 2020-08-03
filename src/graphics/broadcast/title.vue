<template>
  <div class="title-area">
    <div class="title">
      <p>
        {{ broadcast.title }}
      </p>
    </div>
    <div class="sub-title">
      {{ broadcast.subTitle }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State } from 'vuex-class';

@Component
export default class extends Vue {
  @State('replicantName') broadcast!: {key: any}
}
</script>

<style scoped>
.title-area {
  width: 100%;
  display: flex;
}
.title {
  transform: skewX(-30deg);
  border-radius: 30px;
  padding: 25px 50px;
  box-sizing: border-box;
  font-size: 4rem;
  width: 45%;
  margin-top: -25px;
  margin-left: -25px;
  height: 8rem;
  background: #fafafa;
  border: 5px solid var(--borderColor);
  border-left: none;
  border-top: none;
  color: var(--textColor);
}
.title > p {
  transform: skewX(30deg);
  margin: 20px;
}
.sub-title {
  padding-left: 50px;
  box-sizing: border-box;
  margin-left: -20px;
  font-size: 2rem;
  width: 70%;
  height: 3rem;
  background: #fafafa;
  border: 5px solid var(--borderColor);
  border-left: none;
  border-top: none;
  display: flex;
  align-items: center;
  color: var(--textColor);
}
</style>
