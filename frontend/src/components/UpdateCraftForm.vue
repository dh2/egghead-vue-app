<script setup>


defineProps({
    craft: Object,
})

const emit = defineEmits(["close","update"]);
</script>

<template>
  <form>
        <label for="craftName"></label>
        <input type="text" id="craftName" :value="craft.name" />
        
        <label for="craftPrice"></label>
        <input type="text" id="craftPrice" :value="craft.price" />
        
        <!-- <label for="craftName"></label>
        <input type="text" />
        
        <label for="craftName"></label>
        <input type="text" />
        
        <label for="craftName"></label>
        <input type="text" /> -->

  </form>
  <button @click="emit('close')">Cancel</button>
  <button>Update</button>
</template>

<style scoped>
</style>
