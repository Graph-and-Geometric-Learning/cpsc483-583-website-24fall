<template>
  <v-container>
    <v-row>
      <v-col>
      <v-sheet class="pa-8" elevation="0">
      <v-card max-width="512px" class="ma-4">
        <v-img :src="rex_ying_image_src" width="512px" height="328px" cover> </v-img>
        <v-card-title>Rex Ying</v-card-title>
        <v-card-subtitle>Instructor</v-card-subtitle>
        <v-card-text>I'm an assistant professor in the Department of Computer Science at Yale University. My research focus includes algorithms for graph neural networks, geometric embeddings, explainable models, and more recently, multi-modal foundation models involving relational reasoning. I am the author of many widely used GNN algorithms such as GraphSAGE, PinSAGE and GNNExplainer. In addition, I have worked on a variety of applications of graph learning in physical simulations, social networks, knowledge graphs, neuroscience and biotechnology. I developed the first billion-scale graph embedding services at Pinterest, and the graph-based anomaly detection algorithm at Amazon.</v-card-text>
      </v-card>
    </v-sheet>
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
      {
        name: "Weikang Qiu",
        image_src: new URL("../assets/photos/qiu_weikang.png", import.meta.url)
          .href,
        role: "Head TA",
        bio: "I am a third year Ph.D. student in Computer Science Department. My research interests include machine learning and neuroscience.",
      },
      {
        name: "Tinglin Huang",
        image_src: new URL("../assets/photos/huang_tinglin.png", import.meta.url)
          .href,
        role: "TA",
        bio: "I am a third-year Ph.D. student at Computer Science Department. His research interests revolve around computational biology, including macromolecule modeling and geometric deep learning on 3D molecular structure.",
      },
      {
        name: "Li Chuhan",
        image_src: new URL("../assets/photos/li_chuhan.jpg", import.meta.url)
          .href,
        role: "TA",
        bio: "I am a second-year master’s student in computer science, specializing in natural language processing (NLP) and deep learning. My current research focuses on retrieval-based language models, multi-modal foundation models, and application of foundation models in expert domains.",
      },
      {
        name: "Rishabh Anand",
        image_src: new URL("../assets/photos/anand_rishabh.jpg", import.meta.url)
          .href,
        role: "TA",
        bio: "I am a first-year MS CBB student, previously from Singapore. Research interests include geometric deep learning, generative modelling, drug discovery, and structural biology.",
      },
    ],
  }),
});
</script>