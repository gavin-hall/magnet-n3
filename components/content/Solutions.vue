<template>
  <div class="max-w-screen-xl mx-auto px-4 lg:px-8 py-12 lg:py-24">
    <div class="lg:flex lg:space-x-24">
      <div class="lg:w-1/2 prose">
        <h3 class="heading-2">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h3>
        <!-- Magnet is an independent web agency with a human-centric approach to website design and development. -->
      </div>
      <div class="lg:w-1/2 prose">
        <ContentSlot :use="$slots.default" />
        <!-- Magnet is an independent web agency with a human-centric approach to website design and development. -->
      </div>
      <!-- <div class="">
        <img src="~/assets/huddle-tight.svg" class="" alt="Magnet Co makes websites that resonate">
      </div> -->
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-24">
      <nuxt-link to="/solutions/websites" class="relative block no-underline space-y-4">
        <img src="~/assets/solutions-websites.svg" class="" alt="Magnet Website Solutions">

        <div class="">
          <h3 class="heading-3 ">
            Websites
          </h3>
          <ContentSlot :use="$slots.website" />
        </div>
      </nuxt-link>
      <nuxt-link to="/solutions/custom-software" class="relative block no-underline space-y-4">
        <img src="~/assets/solutions-software.svg" class="" alt="Magnet Software Solutions">

        <div class="">
          <h3 class="heading-3 ">
            Ecommerce
          </h3>
          <ContentSlot :use="$slots.ecommerce" />
        </div>
      </nuxt-link>
      <nuxt-link to="/solutions/ecommerce" class="relative block no-underline space-y-4">
        <img src="~/assets/solutions-ecommerce.svg" class="" alt="Magnet Ecommerce Solutions">

        <div class="">
          <h3 class="heading-3 ">
            Custom Software
          </h3>
          <ContentSlot :use="$slots.software" />
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
