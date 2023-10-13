<script setup lang="ts">
const modelValue = defineModel()
</script>

<template>
  <input
    id="input"
    v-model="modelValue"
    v-bind="$attrs"
    bg="transparent"
    border="~ rounded gray-200 dark:gray-700"
    outline="none active:none"
    p="x-4 y-2"
    text="center"
    type="text"
    w="250px"
  >
</template>
