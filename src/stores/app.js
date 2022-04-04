// src/store/app.js
export const useAppStore = defineStore({
  id: 'app',
  actions: {
    setData(data) {
      console.log(data);
    },
  },
});
