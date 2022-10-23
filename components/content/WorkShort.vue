<template>
  <section class="px-4 lg:px-8 py-12 lg:py-24 bg-zinc-900 text-zinc-50">
    <div class="max-w-screen-xl mx-auto">
      <div class="lg:flex lg:space-x-24">
        <div class="lg:w-1/2 prose prose-invert">
          <h2 class="subheading">
            Case Studies
          </h2>
          <h3 class="heading-2">
            <ContentSlot :use="$slots.title" unwrap="p" />
          </h3>
        <!-- Human-centered website design -->
        </div>
        <div class="lg:w-1/2 prose prose-invert">
          <ContentSlot :use="$slots.default" />
        <!-- Combining cognitive science, analytics and UI/UX design principles, we create custom websites, ecommerce platforms and web applications that appeal to the human need for a balance between logic and emotion. -->
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 mt-24 py-24 relative">
        <nuxt-link to="/solutions/websites" class="relative block no-underline space-y-2 odd:top-24 even:-top-24">
          <img src="~/assets/sample-img.svg" class="" alt="Magnet Case Studies">
          <h3 class="heading-4">
            Wanamakers
          </h3>
          <div class="subtitle">
            Live thoroughbred horse auctions
          </div>
          <div class="label">
            ECOMMERCE / CUSTOM SOFTWARE
          </div>
        </nuxt-link>
        <nuxt-link to="/solutions/websites" class="relative block no-underline space-y-2 odd:top-24 even:-top-24">
          <img src="~/assets/sample-img.svg" class="" alt="Magnet Case Studies">
          <h3 class="heading-4">
            Wanamakers
          </h3>
          <div class="subtitle">
            Live thoroughbred horse auctions
          </div>
          <div class="label">
            ECOMMERCE / CUSTOM SOFTWARE
          </div>
        </nuxt-link>
        <nuxt-link to="/solutions/websites" class="relative block no-underline space-y-2 odd:top-24 even:-top-24">
          <img src="~/assets/sample-img.svg" class="" alt="Magnet Case Studies">
          <h3 class="heading-4">
            Wanamakers
          </h3>
          <div class="subtitle">
            Live thoroughbred horse auctions
          </div>
          <div class="label">
            ECOMMERCE / CUSTOM SOFTWARE
          </div>
        </nuxt-link>
        <nuxt-link to="/solutions/websites" class="relative block no-underline space-y-2 odd:top-24 even:-top-24">
          <img src="~/assets/sample-img.svg" class="" alt="Magnet Case Studies">
          <h3 class="heading-4">
            Wanamakers
          </h3>
          <div class="subtitle">
            Live thoroughbred horse auctions
          </div>
          <div class="label">
            ECOMMERCE / CUSTOM SOFTWARE
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
