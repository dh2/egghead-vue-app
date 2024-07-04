<script setup>
import { useQuery, useResult } from '@vue/apollo-composable'
import {gql} from '@apollo/client/core';
import { useRoute } from 'vue-router';
import Craft from './Craft.vue';

const route = useRoute();
const craftQuery = gql`
query ($id: ID){
  Craft(id: $id) {
      name
      id
      type
      price
      age
    	brand
      owner {
        id
        firstName
        lastName
      }
  }
}`

const { result } = useQuery(craftQuery, {id: route.params.id});
const data = useResult(result, null, data => data.Craft);
</script>

<template>
    <h2>{{data?.name ?? "Craft not found"}}</h2>
    <table v-if="data">
        <tbody>
            <tr v-if="data.owner">
                <th>Owner</th>
                <td>{{ data.owner.firstName}} {{ data.owner.lastName}}</td>
            </tr>
            <tr v-else>
                <th>Available</th>
                <td>${{ data.price.toLocaleString("US")}}</td>
            </tr>
            <tr>
                <th>Brand</th>
                <td>{{ data.brand}}</td>
            </tr>
            <tr>
                <th>Type</th>
                <td>{{ data.type}}</td>
            </tr>
            <tr>
                <th>Age</th>
                <td>{{ data.age}}</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
</style>