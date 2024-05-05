import type { PiniaPluginContext, StateTree, SubscriptionCallbackMutation, Pinia } from 'pinia';
import type { DebuggerEvent } from 'vue';
export default defineNuxtPlugin(({ $pinia }) => {
  ($pinia as Pinia).use(secretPiniaPlugin);
});

const keyName = 'myTestingAuthorization';

export const secretPiniaPlugin = async (context: PiniaPluginContext) => {
  if (context.store.$id === 'authStore') {

    if (!process.server) {
      const myTestingAuthorization = localStorage.getItem(keyName);
      console.log('myTestingAuthorization', myTestingAuthorization);
      context.store.$state.auth = myTestingAuthorization;
      context.store.$subscribe((event: SubscriptionCallbackMutation<StateTree>) => {
        localStorage.setItem(keyName, (event.events as DebuggerEvent).newValue || null);
      })
    }
    console.log(context.store.$state.auth);
  }
  return {};
};


