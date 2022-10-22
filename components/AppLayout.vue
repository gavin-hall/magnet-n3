<template>
  <div class="relative">
    <Html lang="en" />
    <Meta property="og:image" content="/cover.jpg" />
    <Meta name="twitter:card" content="summary_large_image" />
    <AppLoadingBar />
    <AppNavbar />
    <slot />
  </div>
</template>

<style lang="postcss">
  body {
    @apply bg-primary-50 dark:bg-primary-900 text-gray-900 dark:text-gray-300;
  }
  .heading-1 {
    @apply text-2xl lg:text-3xl font-bold;
  }
  .heading-2 {
    @apply text-2xl lg:text-3xl font-bold;
  }
  .heading-3 {
    @apply text-2xl lg:text-3xl font-bold;
  }
  .heading-4 {
    @apply text-2xl lg:text-3xl font-bold;
  }
  .heading-5 {
    @apply text-2xl lg:text-3xl font-bold;
  }
  .subtitle {
    @apply text-xs lg:text-sm font-medium;
  }
  .label {
    @apply text-xs lg:text-xs font-medium uppercase tracking-wider;
  }
</style>
