import {defineStore} from 'pinia';

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
  // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [
      {
        //自定义key
        key: 'my_user',
        // 数据默认存在 sessionStorage 里，并且会以 store 的 id 作为 key
        storage: localStorage,
        // 默认所有 state 都会进行缓存，你可以通过 paths 指定要持久化的字段，其他的则不会进行持久化
        paths: ['counter'],
      },
    ],
  },
});
