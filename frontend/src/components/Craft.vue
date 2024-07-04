<script setup>
defineProps({
    craft: Object,
});

</script>

<template>
    <li :class="craft.owner ? 'owned': 'for-sale'">
        <router-link :to="`/craft/${craft.id}`">
            {{ craft.name }}
            <span v-if="craft.owner">is owned by {{ `${craft.owner.firstName} ${craft.owner.lastName}` }}</span>
            <span v-else> Buy It ${{ craft.price.toLocaleString("us") }}</span>
        </router-link>
    </li>
</template>

<style scoped>
.owned{
    background-color: rgba(20,20,20,0.3);
}

.for-sale{
    font-weight: 800;
    background-color: rgba(150,200,150,0.7);
}

li {
    border: 1px black solid;
    border-radius: 4px;
    padding: 6px;
}

a {
    text-decoration: none;
    color: inherit;
}
</style>