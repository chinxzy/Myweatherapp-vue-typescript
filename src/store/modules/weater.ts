import axios from "axios";
import { apiData } from "/@services/axiosService";
import { Module, Commit } from "vuex";
import { State as Rootstate } from "/@store/index";
import { MutationTypes } from "/@store/types";
import { ActionTypes } from "/@store/types";

export interface Weather {
  name: string;
  weather: {
    description: string;
  };
  main: {
    temp: number;
  };
  sys: {
    country: string;
  };
}

export interface State {
  forecast: Weather[];
}

const url = apiData.url_base;
const key = apiData.api_key;
const weater: Module<State, Rootstate> = {
  namespaced: true,

  state: () => ({
    forecast: [],
  }),

  mutations: {
    [MutationTypes.SetWeather](state: State, forecast: Weather[]) {
      state.forecast = forecast;
    },
  },

  actions: {
    async fetchWeather({ commit }: { commit: Commit }) {
      try {
        const { data } = await axios.get(
          `${url}weather?q=lagos&units=metric&APPID=${key}`
        );
        commit(MutationTypes.SetWeather, data);
      } catch (e) {
        console.log("error: ", e);
      }
    },

    async getWeathers({ commit }: { commit: Commit }, payload: string) {
      try {
        const { data } = await axios.get(
          `${url}weather?q=${payload}&units=metric&APPID=${key}`
        );
        commit(MutationTypes.SetWeather, data);
      } catch (e) {
        console.log("error: ", e);
      }
    },
  },
};

export default weater;
