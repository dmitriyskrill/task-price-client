// modules/app/stores/useAppStore.ts
import { defineStore } from 'pinia';

export interface User {
  id: string;
  email: string;
}

interface CurrentUserState {
  user: User | null;
}

export const useCurrentUserStore = defineStore('currentUser', {
  state: (): CurrentUserState => ({
    user: null,
  }),

  actions: {
    setUser(user: User) {
      this.user = user;
    },
  },

  getters: {
    userId: (state): string | null => {
      return state.user?.id ?? null;
    },
  },
});
