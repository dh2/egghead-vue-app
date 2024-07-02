import { computed, ref } from "vue";

export default function() {
    const count = ref(0)
    const increment = () => count.value++;
    const double = () => count.value *= 2;

    // Computed creates a function that simply manipulates the value, it doesn't actually do the doubling
    const doubleCount = computed(() => count.value * 2);

    return { count, doubleCount, increment, double};
}