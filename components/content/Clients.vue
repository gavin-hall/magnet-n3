<template>
  <section class="px-4 lg:px-8 py-12 lg:py-24">
    <div class="max-w-screen-xl mx-auto">
      <div class="lg:flex lg:space-x-24">
        <div class="lg:w-1/2 ">
          <h2 class="subheading">
            Clients
          </h2>
          <h3 class="heading-2">
            <ContentSlot :use="$slots.title" unwrap="p" />
          </h3>
        <!-- Human-centered website design -->
        </div>
        <div class="lg:w-1/2 prose">
          <ContentSlot :use="$slots.default" />
        <!-- Combining cognitive science, analytics and UI/UX design principles, we create custom websites, ecommerce platforms and web applications that appeal to the human need for a balance between logic and emotion. -->
        </div>
      </div>
      <div class="mt-24 flex justify-between items-center">
        <img src="~/assets/clients/aol.png" alt="AOL" class="hidden xs:block h-6 sm:h-8">
        <img src="~/assets/clients/directv.png" alt="DirecTV" class="hidden md:block h-6 sm:h-8">
        <img src="~/assets/clients/mhe.png" alt="McGraw Hill Education" class="h-8 sm:h-10">
        <img src="~/assets/clients/expedia.png" alt="Expedia" class="hidden sm:block h-6 sm:h-8">
        <img src="~/assets/clients/ovation.png" alt="Ovation" class="hidden md:block h-10 sm:h-12">
        <img src="~/assets/clients/hgtv.png" alt="HGTV" class="h-6 sm:h-8">
        <img src="~/assets/clients/ikea.png" alt="Ikea" class="h-6 sm:h-8">
        <img src="~/assets/clients/ucla.png" alt="UCLA" class="h-6 sm:h-8">
      </div>
    </div>
  </section>
</template>
