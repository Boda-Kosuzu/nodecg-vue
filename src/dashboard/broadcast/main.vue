<template>
  <v-app>
    <table class="broadcast-table">
      <tr>
        <th>タイトル</th>
        <td>
          <input
            v-model="data.title"
            type="text"
          >
        </td>
      </tr>
      <tr>
        <th>サブタイトル</th>
        <td>
          <input
            v-model="data.subTitle"
            type="text"
          >
        </td>
      </tr>
      <tr>
        <th>テキスト</th>
        <td>
          <textarea
            v-model="data.text"
            cols="30"
            rows="5"
          />
        </td>
      </tr>
      <tr>
        <th>タイプ</th>
        <td>
          <select v-model="data.type">
            <option value="prog">
              プログラミング
            </option>
            <option value="game">
              ゲーム
            </option>
            <option value="talk">
              雑談
            </option>
          </select>
        </td>
      </tr>
      <tr>
        <th>
          枠線の色
        </th>
        <td>
          <input
            v-model="data.borderColor"
            type="text"
            placeholder="Hex値で入力してください"
          >
        </td>
      </tr>
      <tr>
        <th>
          アイコンの色
        </th>
        <td>
          <input
            v-model="data.iconColor"
            type="text"
            placeholder="Hex値で入力してください"
          >
        </td>
      </tr>
      <tr>
        <th>
          文字の色
        </th>
        <td>
          <input
            v-model="data.textColor"
            type="text"
            placeholder="Hex値で入力してください"
          >
        </td>
      </tr>
      <tr>
        <th>
          フォント
        </th>
        <td>
          <input
            v-model="data.font"
            type="text"
            placeholder="インストール済のフォント名を入力してください"
          >
        </td>
      </tr>
    </table>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';

@Component
export default class extends Vue {
  @State('broadcast') broadcast!: any
  @Mutation('updateBroadcast') updateBroadcast!: (arg: any)=> void

  data = {
    title: 'タイトル',
    subTitle: 'サブタイトル',
    text: 'テキスト',
    type: 'game',
    borderColor: '8a8a8a',
    iconColor: '8a8a8a',
    textColor: '8a8a8a',
    font: '',
  }

  created():void {
    this.updateBroadcast(this.data);
  }

  @Watch('data', { deep: true })
  onChangeData():void {
    this.updateBroadcast(this.data);
  }
}
</script>

<style scoped>
.broadcast-table {
  border-spacing: 10px;
}
input, textarea, select {
  background: white;
  color: black;
}
</style>
