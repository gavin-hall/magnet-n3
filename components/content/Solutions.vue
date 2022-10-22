<template>
  <div class="max-w-screen-lg mx-auto px-4 lg:px-8 py-12 lg:py-24">
    <div class="lg:flex lg:space-x-24">
      <div class="lg:w-1/2 prose prose-gray dark:prose-invert">
        <h3 class="heading-2">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h3>
        <!-- Magnet is an independent web agency with a human-centric approach to website design and development. -->
      </div>
      <div class="lg:w-1/2 prose prose-gray dark:prose-invert">
        <ContentSlot :use="$slots.default" />
        <!-- Magnet is an independent web agency with a human-centric approach to website design and development. -->
      </div>
      <!-- <div class="">
        <img src="~/assets/huddle-tight.svg" class="" alt="Magnet Co makes websites that resonate">
      </div> -->
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-24">
      <nuxt-link to="/solutions/websites" class="relative block no-underline space-y-2">
        <img src="~/assets/solutions-websites.svg" class="" alt="Magnet Website Solutions">
        <h3>Websites</h3>
        <div class="prose prose-gray dark:prose-invert">
          Attact and wow an audience
        </div>
      </nuxt-link>
      <nuxt-link to="/solutions/custom-software" class="relative block no-underline space-y-2">
        <img src="~/assets/solutions-software.svg" class="" alt="Magnet Software Solutions">
        <h3>Ecommerce</h3>
        <div class="prose prose-gray dark:prose-invert">
          Build a revenue monster
        </div>
      </nuxt-link>
      <nuxt-link to="/solutions/ecommerce" class="relative block no-underline space-y-2">
        <img src="~/assets/solutions-ecommerce.svg" class="" alt="Magnet Ecommerce Solutions">
        <h3>Custom Software</h3>
        <div class="prose prose-gray dark:prose-invert">
          Tailored to fit like a glove
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
