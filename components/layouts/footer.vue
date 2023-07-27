<template>
  <!-- <div>
        <footer class="w-full bg-primary font-light pt-20 pb-10 text-white font-public-sans">
            <div class="flex w-10/12 gap-12 justify-between mx-auto">
                <div class="w-1/4">
                    <img src="assets/icons/BorrowEasyLogo.svg" alt="">
                    <div class="mt-6">Our mission is to empower individuals and
                        businesses by providing them with the
                        financial resources they
                        need to achieve their goals.
                    </div>
                    <div class="flex mt-6 w-24 justify-between">
                        <NuxtLink to=""><img src="assets/icons/facebook.svg" alt=""></NuxtLink>
                        <NuxtLink to=""><img src="assets/icons/whatsapp.svg" alt=""></NuxtLink>
                        <NuxtLink to=""><img src="assets/icons/linkedin.svg" alt=""></NuxtLink>
                        <NuxtLink to=""><img src="assets/icons/instagram.svg" alt=""></NuxtLink>
                    </div>
                </div>
                <div class="w-1/4 ml-16 inline-block">
                    <div class="md:text-2xl text-lg font-semibold  pb-2 w-10 border-white">LEGAL</div>
                    <div class="border w-10 border-white mt-1"></div>
                    <button @click="downFooterLink('termsAndConditions')" class="text-sm mt-4& Conditions</button>
                    <div></div>
                    <button @click="downFooterLink('privacyPolicy')" class="text-sm mt-4y Policy</button>
                </div>
                <div class="w-1/4">
                    <div class="md:text-2xl text-lg font-semibold  pb-2 w-10 border-white">OUR COMPANY</div>
                    <div class="border w-20 border-white mt-1"></div>
                    <button @click="downFooterLink('home')" class="text-sm mt-4button> <br />
                    <button @click="downFooterLink('about')" class="text-sm mt-4Us</button> <br />
                    <button @click="downFooterLink('')" class="text-sm mt-4ator</button> <br />
                    <utton @click="downFooterLink('faq')" class="text-sm mt-4utton> <br />
                    <button @click="downFooterLink('features')" class="text-sm mt-4es</button>
                </div>
                <div class="w-1/4">
                    <div class="md:text-2xl text-lg font-semibold  pb-2 w-10 border-white">CONTACT US</div>
                    <div class="border w-14 border-white mt-1"></div>
                    <div class="flex mt-4 text-black-500">
                        <Icon name="solar:phone-calling-bold" size="30"
                            class="border border-white mr-4 rounded-full p-1 bg-white text-black" />
                        <p class="text-xl">+91 99999 99999</p>
                    </div>
                    <div class="flex mt-4 text-black-500">
                        <Icon name="tabler:mail-filled" size="30"
                            class="border border-white mr-4 rounded-full p-1 bg-white text-black" />
                        <p class="text-xl">xyzfh5@gmail.com</p>
                    </div>
                    <div class="flex mt-4 text-black-500">
                        <Icon name="majesticons:map-marker" size="30"
                            class="border border-white mr-4 rounded-full p-1 bg-white text-black" />
                        <p class="text-xl">Address line-1<br />Address line-2,<br />city, state-pin code.</p>
                    </div>
                </div>
            </div>
            <div class="border border-white w-10/12 mx-auto mt-12"></div>
            <p class="text-center mt-4 font-raleway text-xl">All rights reserved. © 2023 BorrowEase</p>
        </footer>
    </div> -->

  <div>
    <footer class="w-full bg-primary font-light pt-10 pb-6 text-white">
      <div class="md:flex md:justify-between w-11/12 mx-auto gap-6">
        <!-- Logo and Social Links -->
        <div class="md:w-full block items-center">
          <img
            src="assets/icons/BorrowEasyLogo.svg"
            alt=""
            class="w-24 md:w-12 mx-auto md:mx-0"
          />
          <div class="mt-6 text-sm text-center md:text-left">
            Our mission is to empower individuals and businesses by providing
            them with the financial resources they need to achieve their goals.
          </div>
          <div
            class="flex mt-6 mx-auto md:mx-0 w-24 justify-between text-center md:text-left"
          >
            <NuxtLink to=""
              ><img src="assets/icons/facebook.svg" alt=""
            /></NuxtLink>
            <NuxtLink to=""
              ><img src="assets/icons/whatsapp.svg" alt=""
            /></NuxtLink>
            <NuxtLink to=""
              ><img src="assets/icons/linkedin.svg" alt=""
            /></NuxtLink>
            <NuxtLink to=""
              ><img src="assets/icons/instagram.svg" alt=""
            /></NuxtLink>
          </div>
        </div>

        <!-- Legal Links -->
        <div class="w-full text-center md:text-left md:mt-0 mt-8">
          <div class="text-lg font-semibold pb-2 border-white">LEGAL</div>
          <p
            @click="downFooterLink('termsAndConditions')"
            class="text-sm mt-2 block"
          >
            Terms & Conditions
          </p>
          <p
            @click="downFooterLink('privacyPolicy')"
            class="text-sm mt-2 block"
          >
            Privacy Policy
          </p>
        </div>

        <!-- Company Links -->
        <div class="w-full text-center md:text-left md:mt-0 mt-8">
          <div class="text-lg font-semibold pb-2 border-white">OUR COMPANY</div>
          <p @click="downFooterLink('home')" class="text-sm mt-2 block">Home</p>
          <p @click="downFooterLink('about')" class="text-sm mt-2 block">
            About Us
          </p>
          <p @click="downFooterLink('')" class="text-sm mt-2 block">
            Calculator
          </p>
          <p @click="downFooterLink('faq')" class="text-sm mt-2 block">FAQ</p>
          <p @click="downFooterLink('features')" class="text-sm mt-2 block">
            Features
          </p>
        </div>

        <!-- Contact Information -->

        <div class="w-full text-center md:text-left md:mt-0 mt-8">
          <div class="text-lg font-semibold pb-2 border-white">CONTACT US</div>
          <div class="w-1/2 mx-auto md:w-full md:mx-0">
            <div class="flex mt-4 text-black-500 items-center">
              <Icon
                name="solar:phone-calling-bold"
                size="30"
                class="border border-white mr-4 rounded-full p-1 bg-white text-black"
              />
              <p class="text-sm">+91 99999 99999</p>
            </div>
            <div class="flex mt-4 text-black-500 items-center">
              <Icon
                name="tabler:mail-filled"
                size="30"
                class="border border-white mr-4 rounded-full p-1 bg-white text-black"
              />
              <p class="text-sm">xyzfh5@gmail.com</p>
            </div>
            <div class="flex mt-4 text-black-500 items-center">
              <Icon
                name="majesticons:map-marker"
                size="30"
                class="border border-white mr-4 rounded-full p-1 bg-white text-black"
              />
              <div class="text-sm">
                <p>Address line-1</p>
                <p>Address line-1</p>
                <p>Address line-1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- All rights reserved -->
      <div class="border border-white w-11/12 mx-auto mt-12"></div>
      <p class="text-center mt-4 text-sm">
        All rights reserved. © 2023 BorrowEase
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  setup() {
    const router = useRouter();

    const downFooterLink = (val) => {
      if (val === "home") {
        router.push("/");
      } else if (val === "about") {
        router.push("/about");
      } else if (val === "faq") {
        router.push("/faq");
      } else if (val === "features") {
        router.push("/features");
      } else if (val === "privacyPolicy") {
        router.push("/privacy-policy");
      } else if (val === "termsAndConditions") {
        router.push("/terms-and-conditions");
      }
    };
    return {
      downFooterLink,
    };
  },
};
</script>

<style scoped></style>
