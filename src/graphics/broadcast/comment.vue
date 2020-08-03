<template>
  <div class="comment-area">
    <div class="comment-box">
      <div class="comment-icon">
        <font-awesome-icon icon="comment-alt" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class extends Vue {
}
</script>

<style scoped>
.comment-area {
  display: flex;
  justify-content: center;
}
.comment-box {
  width: 80%;
  height: 300px;
  border: 10px solid var(--borderColor);
  border-radius: 20px;
  margin-top: 20px;
  position: relative;
}
.comment-icon {
  position: absolute;
  width: 40px;
  height: 40px;
  background: var(--borderColor);
  color: var(--iconColor);
  border-radius: 20px;
  top: -20px;
  left: -20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
}
</style>
