<script setup>
import { useQuery, useResult } from '@vue/apollo-composable'
import {gql} from '@apollo/client/core';

import Craft from './Craft.vue';

const craftQuery = gql`
query {
  Crafts {
    edges{
      name
      id
      type
      price
      age
      owner {
        id
        firstName
        lastName
      }
    }
  }
}`

const { result } = useQuery(craftQuery);
const data = useResult(result, null, data => data.Crafts.edges);
</script>

<template>
    <h2>Current Crafts</h2>
    <ul>
        <Craft v-for="craft in data" :key="craft.id" :craft="craft" />
    </ul>
</template>

<style scoped>
ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 8px;
    row-gap: 8px;
    padding: 0;
}

li {
    list-style: none;
}
</style>
