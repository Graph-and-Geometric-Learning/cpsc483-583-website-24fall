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
                            <td>{{ item.slide }}</td>
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
        lecture: "Background: Machine Learning and Graphs as Data Structure",
    },
    {
        date: "Fri 09/01",
        lecture: "Plethora of Tasks and Features on Graphs",
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
        date: "Mon 09/18",
        lecture: "Graph Attention Networks",
    },
    {
        date: "Wed 09/20",
        lecture: "Scalable GNN Architectures",
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
        date: "Mon 10/02",
        lecture: "GNN Expressive Power",
    },
    {
        date: "Wed 10/04",
        lecture: "PyTorch Geometric Library (virtual)",
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
        date: "Mon 11/06",
        lecture: "GNN AutoML",
    },
    {
        date: "Wed 11/08",
        lecture: "Learning on Dynamic Graphs",
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