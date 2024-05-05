import { defineStore, acceptHMRUpdate } from "pinia";

export const authStore = defineStore("authStore", () => {
  const auth = shallowRef<string | null>(null);
  const setRandomAuth = (): void => {
    auth.value = crypto.randomUUID();
  };

  return {
    auth,
    setRandomAuth,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(authStore, import.meta.hot));
}
