<template>
  <v-sheet class="pa-8" elevation="0">
    <v-card max-width="256px" class="ma-4">
      <v-img :src="image_src" width="256px" height="256px" cover> </v-img>
      <v-card-title>{{ name }}</v-card-title>
      <v-card-subtitle>{{ role }}</v-card-subtitle>
      <v-card-text>{{ bio }}</v-card-text>
    </v-card>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => ({}),
  props: ["name", "image_src", "role", "bio"],
});
</script>
