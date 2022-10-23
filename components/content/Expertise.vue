
<template>
  <section class="">
    <div class="bg-zinc-800 text-zinc-50 pt-16 lg:pt-28 xl:pt-32">
      <div class="max-w-screen-xl mx-auto px-4 lg:px-8 ">
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
    </div>

    <div class="pt-16 lg:pt-28 xl:pt-32 bg-zinc-800 text-zinc-50">
      <div class="max-w-screen-xl mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div
          class="flex  items-center md:justify-center bg-zinc-700 md:col-start-1 px-12 py-12 md:h-80 lg:h-96 "
        >
          <div class="w-64 ">
            <h3 class="heading-4">
              Strategy + SEO
            </h3>
            <ul class="text-sm mt-1 list-none space-y-1">
              <li>Digital Strategy</li>
              <li>Analytics</li>
              <li>Brand Strategy</li>
              <li>Content Strategy</li>
              <li>SEO</li>
            </ul>
          </div>
        </div>
        <div
          class="flex  items-center md:justify-center bg-zinc-600 md:col-start-2 px-12 py-12 md:h-80 lg:h-96 "
        >
          <div class="w-64 ">
            <h3 class="heading-4">
              Web Design
            </h3>
            <ul class="text-sm mt-1 list-none space-y-1">
              <li>Digital Strategy</li>
              <li>Analytics</li>
              <li>Brand Strategy</li>
              <li>Content Strategy</li>
              <li>SEO</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="pb-16 lg:pb-28 xl:pb-32">
      <div class="max-w-screen-xl mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div
          class="flex  items-center md:justify-center bg-zinc-200 lg:col-start-2 px-12 py-12 md:h-80 lg:h-96 "
        >
          <div class="w-64 ">
            <h3 class="heading-4">
              Web Development
            </h3>
            <ul class="text-sm mt-1 list-none space-y-1">
              <li>Digital Strategy</li>
              <li>Analytics</li>
              <li>Brand Strategy</li>
              <li>Content Strategy</li>
              <li>SEO</li>
            </ul>
          </div>
        </div>
        <div
          class="flex  items-center md:justify-center bg-zinc-100 lg:col-start-3 px-12 py-12 md:h-80 lg:h-96"
        >
          <div class="w-64 ">
            <h3 class="heading-4">
              Support + Growth
            </h3>
            <ul class="text-sm mt-1 list-none space-y-1">
              <li>Digital Strategy</li>
              <li>Analytics</li>
              <li>Brand Strategy</li>
              <li>Content Strategy</li>
              <li>SEO</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
