<template>
  <div class="max-w-screen-xl mx-auto px-4 lg:px-8 py-16 lg:py-28 xl:py-32">
    <div class="lg:flex lg:space-x-24">
      <div class="lg:w-1/2 prose">
        <ContentSlot :use="$slots.default" />
      </div>
      <div class="lg:w-1/2">
        <img src="~/assets/huddle-tight.svg" class="" alt="Magnet Co makes websites that resonate">
      </div>
    </div>
  </div>
</template>
