import clone from 'clone';
import type { ReplicantBrowser } from 'nodecg/types/browser';
import Vue from 'vue';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

// Replicants and their types
const reps: {
  broadcast: ReplicantBrowser<any>;
  [k: string]: ReplicantBrowser<unknown>;
} = {
  broadcast: nodecg.Replicant('broadcast', { persistent: true }),
};

// Types for mutations below
export type ExampleMutation = (arg: any) => void;

const store = new Vuex.Store({
  state: {},
  mutations: {
    setState(state, { name, val }): void {
      Vue.set(state, name, val);
    },
    /* Mutations to replicants start */
    updateBroadcast(state, arg): void {
      // You may need to do checks like these, depending on mutation content.
      reps.broadcast.value = clone(arg);
    },
    /* Mutations to replicants end */
  },
});

Object.keys(reps).forEach((key) => {
  reps[key].on('change', (val) => {
    store.commit('setState', { name: key, val: clone(val) });
  });
});

export default async (): Promise<Store<Record<string, unknown>>> => {
  await NodeCG.waitForReplicants(...Object.keys(reps).map((key) => reps[key]));
  return store;
};
