<template>
  <div class="bg-white md:flex w-full justify-between px-8">
    <div
      class="text-gray-text md:w-1/2 justify-center items-center md:mt-64 md:ml-32"
    >
      <p class="text-2xl md:text-5xl leading-16 mb-7 text-primary">
        Frequently Asked Questions
      </p>
      <p class="text-base md:text-2xl mb-7 w-11/12">
        Welcome to our Loan Calculator page, where you can easily estimate your
        loan repayment amount and make informed financial decisions.
      </p>
    </div>
    <div class="md:w-1/2">
      <img src="assets/images/lines.png" alt="" class="mb-4 md:ml-16" />
    </div>
  </div>
  <Accordion />
  <div class="md:h-32 w-full bg-white md:relative md:z-10"></div>
  <div class="md:flex md:w-4/5 mt-32 px-8 mx-auto md:z-0 md:pb-24">
    <img src="assets/images/iPhone 14.png" alt="" class="md:mx-auto md:ml-48" />
    <div class="md:w-4/5 mt-32 md:ml-40">
      <p
        class="text-primary text-lg md:text-3xl font-bold md:left-11 md:top-5 md:w-3/4"
      >
        Do you want to join other users who are changing their financial
        stories?
      </p>
      <div class="flex gap-4 mx-auto mt-4">
        <div>
          <img src="assets/images/App Store.png" alt="" />
        </div>
        <div>
          <img src="assets/images/Google Play.png" alt="" />
        </div>
      </div>
    </div>
    <div
      class="hidden md:block circle right-0 -mt-64 absolute w-52 h-96 z-0 rounded-l-full border-r-0"
    ></div>
  </div>
</template>

<script>
definePageMeta({
  layout: "my-layout",
});

export default {
  name: "Faq",
  setup() {
    return {};
  },
};
</script>

<style></style>
