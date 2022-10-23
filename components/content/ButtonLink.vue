<script setup>
defineProps({
  icon: {
    type: String,
    default: 'heroicons-outline:exclamation'
  }
})
</script>

<template>
  <div class="inline-flex p-4 rounded-full bg-zinc-900 text-white hover:bg-white hover:shadow-xl hover:text-zinc-900 transition-all duration-300 ease-out group">
    <ContentSlot :use="$slots.default" unwrap="p" class="prose max-w-none" />
    <div v-if="icon" class="flex-shrink-0 mr-3">
      <Icon class="w-5 h-5 text-white group-hover:text-zinc-900" aria-hidden="true" :name="icon" />
    </div>
  </div>
</template>
