
<template>
  <section class="bg-zinc-800 py-12 lg:py-24 text-zinc-50">
    <div class="max-w-screen-xl mx-auto px-4 lg:px-8">
      <div class="lg:flex lg:space-x-24">
        <div class="lg:w-1/2 ">
          <h2 class="subheading">
            Expertise
          </h2>
          <h3 class="heading-2">
            <ContentSlot :use="$slots.title" unwrap="p" />
          </h3>
          <div class="mt-8 prose prose-invert">
            <ContentSlot :use="$slots.default" />
          </div>
        </div>
      </div>
    </div>
    <div class=" mt-24 pt-24">
      <div class="max-w-screen-xl mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <!--   -->
        <div
          class="flex flex-col items-center justify-center md:col-start-1 md:row-start-1 md:px-6 lg:px-8 md:h-96 rounded-tl-full"
          style="background: linear-gradient(135deg, #52525B 25%, #3F3F46 75%);"
        >
          <div class="">
            <h3 class="heading-4">
              Strategy + SEO
            </h3>
            <div class="text-sm mt-1 list-none space-y-1">
              <ContentSlot :use="$slots.expertise1" unwrap="ul" />
            </div>
          </div>
        </div>
        <div
          class="flex flex-col items-center justify-center  md:col-start-2 md:row-start-1 md:px-6 lg:px-8 md:h-96 rounded-tr-full"
          style="background: linear-gradient(135.06deg, #27272A 25.03%, #3F3F46 75.03%);"
        >
          <div class="">
            <h3 class="heading-4">
              Web Design
            </h3>
            <ContentSlot :use="$slots.expertise2" unwrap="ul" />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white text-zinc-900">
      <div class="max-w-screen-xl mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <!-- prose -->
        <div
          class="flex flex-col items-center justify-center  md:col-start-2 md:row-start-1 md:px-6 lg:px-8 md:h-96 rounded-bl-full"
          style="background: linear-gradient(44.94deg, #E4E4E7 24.97%, #F8F8F8 74.97%);"
        >
          <div class="">
            <h3 class="heading-4">
              Web Development
            </h3>
            <ContentSlot :use="$slots.expertise3" />
          </div>
        </div>
        <div
          class="flex flex-col items-center justify-center  md:col-start-3 md:row-start-1 md:px-6 lg:px-8 md:h-96 rounded-br-full"
          style="background: linear-gradient(135deg, #D4D4D8 25%, #F8F8F8 75%);"
        >
          <div class="">
            <h3 class="heading-4">
              Support + Growth
            </h3>
            <ContentSlot :use="$slots.expertise4" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
