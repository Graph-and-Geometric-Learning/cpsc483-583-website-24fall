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
                            <th>Events</th>
                            <th>Deadlines</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in items">
                            <td>{{ item.date }}</td>
                            <td>{{ item.lecture }}</td>
                            <td><a v-if="item.slide" :href="item.slide">[slide]</a></td>
                            <td>{{ item.reading }}</td>
                            <td>{{ item.event }}</td>
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
}

var items: Item[] = [
    {
        date: "Wed 08/30",
        lecture: "Introduction to Graph Learning",
        slide: import.meta.env.BASE_URL + "01-intro.pdf",
    },
    {
        date: "Fri 09/01",
        lecture: "Plethora of Tasks and Features on Graphs",
        event: "[HW1] Released\n[Colab1] Released",
    },
    {
        date: "Wed 09/06",
        lecture: "Graph Neural Networks Models",
    },
    {
        date: "Mon 09/11",
        lecture: "Graph Neural Networks Designs",
    },
    {
        date: "Wed 09/13",
        lecture: "GNN Implementations, Objectives and Loss Functions",
    },
    {
        date: "Fri 09/15",
        lecture: "No Class",
        event: "[HW2] Released",
        deadline: "[HW1] Due",
    },
    {
        date: "Mon 09/18",
        lecture: "Graph Attention Networks",
    },
    {
        date: "Wed 09/20",
        lecture: "Scalable GNN Architectures",
    },
    {
        date: "Fri 09/22",
        lecture: "No Class",
        event: "[Colab2] Released",
        deadline: "[Colab1] Due",
    },
    {
        date: "Mon 09/25",
        lecture: "Multi-hop GNNs and Multi-hop Attentions",
    },
    {
        date: "Wed 09/27",
        lecture: "Theory of Graph Neural Networks",
    },
    {
        date: "Fri 09/29",
        lecture: "No Class",
        deadline: "[HW2] Due",
    },
    {
        date: "Mon 10/02",
        lecture: "GNN Expressive Power",
    },
    {
        date: "Wed 10/04",
        lecture: "PyTorch Geometric Library (virtual)",
    },
    {
        date: "Fri 10/06",
        lecture: "No Class",
        deadline: "[Colab2] Due",
    },
    {
        date: "Mon 10/09",
        lecture: "Graph Generative Models",
    },
    {
        date: "Wed 10/11",
        lecture: "Spectral GNNs",
    },
    {
        date: "Mon 10/16",
        lecture: "Self-supervised Learning with GNNs",
    },
    {
        date: "Fri 10/20",
        lecture: "No Class",
        event: "[HW3] Released\n[Colab3] Released",
    },
    {
        date: "Mon 10/23",
        lecture: "Explaining GNN Predictions",
    },
    {
        date: "Wed 10/25",
        lecture: "Distributed Node Embeddings",
    },
    {
        date: "Mon 10/30",
        lecture: "Geometric Embeddings: Order and Box Embeddings",
    },
    {
        date: "Wed 11/01",
        lecture: "Hyperbolic Embeddings and Hyperbolic GNNs",
    },
    {
        date: "Fri 11/03",
        lecture: "No Class",
        event: "[HW3]Released\n[Colab4] Released",
        deadline: "[HW3] Due",
    },
    {
        date: "Mon 11/06",
        lecture: "GNN AutoML",
    },
    {
        date: "Wed 11/08",
        lecture: "Learning on Dynamic Graphs",
    },
    {
        date: "Fri 11/10",
        lecture: "No Class",
        deadline: "[Colab3] Due",
    },
    {
        date: "Mon 11/13",
        lecture: "Heterogeneous Graphs for Social Networks and Recommender Systems",
    },
    {
        date: "Wed 11/15",
        lecture: "Knowledge Graph Reasoning",
    },
    {
        date: "Fri 11/17",
        lecture: "No Class",
        deadline: "[HW4] Due",
    },
    {
        date: "Fri 11/24",
        lecture: "No Class",
        deadline: "[Colab4] Due",
    },
    {
        date: "Mon 11/27",
        lecture: "Knowledge Graph Embeddings in Hyperbolic Spaces",
    },
    {
        date: "Wed 11/29",
        lecture: "Applications of Graph Learning in Biology and Medicine",
    },
    {
        date: "Mon 12/04",
        lecture: "Motif Mining and Recommender Systems",
    },
    {
        date: "Wed 12/06",
        lecture: "Applications in Graphics and Scientific Simulations",
    },
]

export default defineComponent({
    name: "Syllabus",
    data: () => ({
        items: items
    })
})
</script>