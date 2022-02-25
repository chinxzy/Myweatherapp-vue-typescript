<template>
  <WeatherView />
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import WeatherView from "/@components/WeatherView.vue";
import { ActionTypes } from "/@store/types";
import { useStore } from "/@store/index";

export default defineComponent({
  components: {
    WeatherView,
  },
  setup() {
    const store = useStore();
    console.log(store);
    store.dispatch("weater/fetchWeather");
    // store.dispatch(ActionTypes.FetchWeather);
  },
});
</script>
