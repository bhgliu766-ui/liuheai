import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    userInfo: null as any
  }),
  actions: {
    setToken(token: string) {
      this.token = token
    }
  }
})