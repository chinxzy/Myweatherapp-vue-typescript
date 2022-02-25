import { InjectionKey } from "vue";
import {
  createStore,
  useStore as baseUseStore,
  Store,
  createLogger,
} from "vuex";

import weater from "/@store/modules/weater";
import { State as WeatherState } from "/@store/modules/weater";



export type State = {
  weater: WeatherState;
};


export const store = createStore<State>({
  plugins: process.env.NODE_ENV === "development" ? [createLogger()] : [],
  modules: {
    weater,
  },
});

export const useStore = () => store;

// export type Store = Omit<
//   VuexStore<State>,
//   "getters" | "commit" | "dispatch"
// > & {
//   commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
//     key: K,
//     payload: P,
//     options?: CommitOptions
//   ): ReturnType<Mutations[K]>;
// } & {
//   dispatch<K extends keyof Actions>(
//     key: K,
//     payload?: Parameters<Actions[K]>[1],
//     options?: DispatchOptions
//   ): ReturnType<Actions[K]>;
// } & {
//   getters: {
//     [K in keyof Getters]: ReturnType<Getters[K]>;
//   };
// };
