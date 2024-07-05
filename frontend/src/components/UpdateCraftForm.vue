<script setup>
import { reactive } from 'vue';
import { gql } from '@apollo/client/core';
import { useMutation } from '@vue/apollo-composable'

const props = defineProps({
    craft: Object,
});
const updateMutation = gql`
mutation (
  $name: String,
  $type: String,
  $brand: String,
  $price: String,
  $age: Int,
  $id: ID!) {
    updateCraft(
      name: $name,
      type: $type,
      brand: $brand,
      price: $price,
      age: $age,
      id: $id
    ) {
      id
    }
}`;
 
const emit = defineEmits(['close']);
const updateFields = reactive({ ...props.craft });
const { mutate: updateCraft} = useMutation(updateMutation, () => ({
  variables: {
    ...updateFields,
    age: Number(updateFields.age),
  }
}));

async function handleSubmit(e) {
  await updateCraft();
  emit('close');
}
</script>

<template>
  <form @submit.prevent>
      <div class="form-field">
        <label for="craftName">Name of craft:</label>
        <input type="text" id="craftName" v-model="updateFields.name" />
      </div>
      <div class="form-field">
        <label for="craftPrice">Price:</label>
        <input type="text" id="craftPrice" v-model="updateFields.price" />
      </div>
      <div class="form-field">
        <label for="craftAge">Age:</label>
        <input type="text" id="craftAge" v-model="updateFields.age" />
      </div>
      <div class="form-field">  
        <label for="craftBrand">Brand</label>
        <input type="text" id="craftBrand" v-model="updateFields.brand" />
      </div>
      <div class="form-field">  
        <label for="craftType">Type</label>
        <input type="text"  id="craftType" v-model="updateFields.type" />
      </div>

  </form>
  <button @click="emit('close')">Cancel</button>
  <button @click="handleSubmit()">Update</button>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
}

.form-field {
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  margin-bottom: 8px;
  align-items: flex-start;
}

.form-field label {
  margin-bottom: 4px;
  color: black;
  
}

.form-field input[type="text"] {
  height: 15px
}
</style>
