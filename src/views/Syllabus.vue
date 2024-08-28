<template>
  <v-container>
    <v-row>
      <v-col>
        <v-table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Lecture</th>
              <th>Slides</th>
              <th>Readings</th>
              <th></th>
              <th>Deadlines</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items">
              <td>{{ item.date }}</td>
              <td>
                {{ item.lecture }}
                <a v-if="item.date === 'Mon 10/02'" href="https://yale.zoom.us/j/94207787464?from=addon">[Zoom]</a>
              </td>
              <td><a v-if="item.slide" :href="item.slide">[slide]</a></td>
              <td>{{ item.reading }}</td>
              <td>
                <div v-if="item.new_api">
                  <div v-if="item.hw">
                    <a :href="item.hw">[{{ baseName(item.hw) }}]</a> released
                  </div>
                  <br v-if="item.colab" />
                  <div v-if="item.colab">
                    <a :href="item.colab">[{{ baseName(item.colab) }}]</a>
                    released
                  </div>
                </div>
                <div v-else>
                  {{ item.event }}
                </div>
              </td>
              <td>{{ item.deadline }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Item {
  date: string;
  lecture: string;
  slide?: string;
  reading?: string;
  event?: string;
  deadline?: string;
  hw?: string;
  colab?: string;
  new_api?: boolean;
}

enum EventType {
  homework,
  colab,
}

var items: Item[] = [
  {
    "date": "Wed 08/28",
    "lecture": "Introduction",
    slide: "https://yaleedu-my.sharepoint.com/:b:/g/personal/rex_ying_yale_edu/EdVOhpGliMpKkDwXiXLFWssB1sV5uiJEd_5bDIvxPnbjJA?e=4viVDL"
  },
  {
    "date": "Wed 09/04",
    "lecture": "Graph Learning Tasks"
  },
  {
    "date": "Mon 09/09",
    "lecture": "Deep Learning Background and GNN basics"
  },
  {
    "date": "Wed 09/11",
    "lecture": "Graph Neural Networks Designs"
  },
  {
    "date": "Mon 09/16",
    "lecture": "GNN Implementations, Objectives and Loss Functions"
  },
  {
    "date": "Wed 09/18",
    "lecture": "Scalable GNN Architectures"
  },
  {
    "date": "Mon 09/23",
    "lecture": "Graph Attention Networks and Heterogeneous graphs"
  },
  {
    "date": "Wed 09/25",
    "lecture": "GNNs and Transformers"
  },
  {
    "date": "Mon 09/30",
    "lecture": "Theory of Graph Neural Networks"
  },
  {
    "date": "Wed 10/02",
    "lecture": "Guest Lecture 1"
  },
  {
    "date": "Mon 10/07",
    "lecture": "GNN Expressive Power"
  },
  {
    "date": "Wed 10/09",
    "lecture": "GNN Expressive Power (2)"
  },
  {
    "date": "Mon 10/14",
    "lecture": "Graph Learning Tools"
  },
  {
    "date": "Mon 10/21",
    "lecture": "Graph Transformers"
  },
  {
    "date": "Wed 10/23",
    "lecture": "Self-supervised Learning with GNNs"
  },
  {
    "date": "Mon 10/28",
    "lecture": "Foundation models and Pre-trained GNNs"
  },
  {
    "date": "Wed 10/30",
    "lecture": "Explaining GNN Predictions"
  },
  {
    "date": "Mon 11/04",
    "lecture": "Guest Lecture 2 (applications)"
  },
  {
    "date": "Wed 11/06",
    "lecture": "Distributed Node Embeddings"
  },
  {
    "date": "Mon 11/11",
    "lecture": "Knowledge Graph Reasoning"
  },
  {
    "date": "Wed 11/13",
    "lecture": "Hyperbolic Embeddings and Hyperbolic GNNs"
  },
  {
    "date": "Mon 11/18",
    "lecture": "Advanced non-Euclidean Models"
  },
  {
    "date": "Wed 11/20",
    "lecture": "Graph Generative Models"
  },
  {
    "date": "Mon 12/02",
    "lecture": "Multimodal Graph Learning"
  },
  {
    "date": "Wed 12/04",
    "lecture": "Applications in Graphics, Neuroscience and Scientific Simulations"
  }
];

export default defineComponent({
  name: "Syllabus",

  data: () => ({
    items: items,
  }),
  methods: {
    baseName(str) {
      var base = new String(str).substring(str.lastIndexOf("/") + 1);
      if (base.lastIndexOf(".") != -1)
        base = base.substring(0, base.lastIndexOf("."));
      return base;
    },
  },
});
</script>
