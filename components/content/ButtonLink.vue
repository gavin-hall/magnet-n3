<script setup>
defineProps({
  icon: {
    type: String,
    default: 'heroicons-outline:exclamation'
  }
})
</script>

<template>
  <div class="p-4 rounded-md flex bg-gray-800 dark:bg-white text-white dark:text-gray-800">
    <ContentSlot :use="$slots.default" unwrap="p" class="prose prose-gray dark:prose-invert max-w-none" />
    <div v-if="icon" class="flex-shrink-0 mr-3">
      <Icon class="w-5 h-5 text-yellow-400" aria-hidden="true" :name="icon" />
    </div>
  </div>
</template>
