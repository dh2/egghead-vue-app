<script setup>
import { useQuery, useResult } from '@vue/apollo-composable'
import {gql} from '@apollo/client/core';
import { useRoute } from 'vue-router';
import UpdateCraftForm from './UpdateCraftForm.vue';
import { ref } from 'vue';

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
const craft = useResult(result, null, craft => craft.Craft);

const showModal = ref(false);
</script>

<template>
    <section v-if="craft">
        <h2>{{`${craft.name} made by ${craft.brand}`}}</h2>
        <p>This craft is {{craft.age}} {{craft.age == 1 ? 'month' : 'months' }} old and costs ${{craft.price}}</p>
        <p v-if="craft.owner">This craft is ownded by {{ craft.owner.firstName}} {{ craft.owner.lastName}}</p>
        <p v-else>This craft is available for purchase</p>
        <p><button @click="showModal = !showModal">Update</button></p>
        <div v-if="showModal" class="modal">
          <div class="modal-inner"><UpdateCraftForm :craft="craft" @close="showModal = !showModal" /></div>
        </div>
    </section>
    <h2 v-else>Craft not found</h2>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  height: 400px;
  width: 600px;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background: #9f9f9f;
  box-shadow: 0 0 60px 10px rgba(130,130,130, 0.7);
}

.modal-inner {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   overflow: auto;
   padding: 4px
}
</style>