<template>
  <v-container>
    <v-row>
      <v-col>
        <PhotoCard
          :image_src="rex_ying_image_src"
          name="Rex Ying"
          role="Instructor"
        ></PhotoCard>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="p in staff">
        <PhotoCard v-bind="p" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PhotoCard from "@/components/PhotoCard.vue";

export default defineComponent({
  components: { PhotoCard },
  data: () => ({
    rex_ying_image_src: new URL(
      "../assets/photos/ying_rex.jpg",
      import.meta.url
    ).href,
    staff: [
      // {
      //     name: "Rex Ying",
      //     image_src: "https://cs.stanford.edu/people/rexy/images/photo_Rex.jpg",
      //     role: "Instructor",
      // },
    ],
  }),
});
</script>
