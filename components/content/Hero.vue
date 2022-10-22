<template>
  <div class="max-w-screen-lg mx-auto px-4 lg:px-8 py-12 lg:py-24">
    <div class="lg:flex lg:space-x-24">
      <div class="lg:w-1/2 prose prose-gray dark:prose-invert">
        <ContentSlot :use="$slots.default" />
      </div>
      <div class="lg:w-1/2">
        <img src="~/assets/huddle-tight.svg" class="" alt="Magnet Co makes websites that resonate">
      </div>
    </div>
  </div>
</template>
