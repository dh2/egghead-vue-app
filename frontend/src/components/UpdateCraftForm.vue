<script setup>
import { reactive } from 'vue';

const props = defineProps({
    craft: Object,
});

const emit = defineEmits(['close']);
const updateFields = reactive({ ...props.craft });

</script>

<template>
  <form>
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
  <button>Update</button>
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
