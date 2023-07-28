<!-- <template>
    <div>
        <LayoutsHeader />

        <div>
            <slot />
        </div>

        <LayoutsFooter />
    </div>
</template> -->

<template>
  <div class="py-6">
    <div class="flex justify-between px-8 md:px-24">
      <img src="assets/icons/BorrowEasyLogo.svg" class="w-12 h-14" alt="" />
      <div class="text-center mt-4 hidden md:flex">
        <NuxtLink to="/" class="line mr-2">Home</NuxtLink>
        <NuxtLink to="/about" class="line mr-2">About</NuxtLink>
        <NuxtLink to="/features" class="line mr-2">Features</NuxtLink>
        <NuxtLink to="/faq" class="line">FAQ</NuxtLink>
      </div>
      <p
        @click="openContact"
        class="text-white border bg-primary rounded-lg hidden md:flex my-auto py-2 px-2"
      >
        Contact us
      </p>
      <div class="md:hidden block">
        <Icon
          name="system-uicons:menu-hamburger"
          class="text-3xl md:hidden block mt-1.5 float-right"
          @click="openModal"
        />
        <div v-show="dropdownActive" class="">
          <NuxtLink to="/" class="">Home</NuxtLink>
          <NuxtLink to="/about" class="">About</NuxtLink>
          <NuxtLink to="/features" class="line mr-2">Features</NuxtLink>
          <NuxtLink to="/faq" class="line">FAQ</NuxtLink>
        </div>
      </div>
    </div>

    <div class="py-12">
      <slot />
    </div>

    <LayoutsFooter />
  </div>
</template>

<script>
export default defineComponent({
  name: "myLayout",
  setup() {
    const dropdownActive = ref(false);
    const openModal = () => {
      console.log("modal open is active");
      dropdownActive.value = !dropdownActive.value;
    };
    return { openModal, dropdownActive };
  },
});
</script>
