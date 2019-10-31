<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Head-Teacher</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container>
      <Home />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Home from "./components/Home";

export default {
  name: "App",
  components: {
    Home
  },
  data: () => ({
    //
  })
};
</script>
