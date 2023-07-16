<template>
    <div class="font-publicSans">
        <header class="flex w-10/12 justify-between mx-auto py-4 text-xl text-gray-text">
            <img src="../assets/icons/BorrowEasyLogo.svg" class="w-12 h-14" alt="">
            <div class="text-center mt-4">
                <NuxtLink to="/" class="line mr-4">Home</NuxtLink>
                <NuxtLink to="/about" class="line mr-4">About</NuxtLink>
                <NuxtLink to="/features" class="line mr-4">Features</NuxtLink>
                <NuxtLink to="/faq" class="line">FAQ</NuxtLink>
            </div>
            <button @click="openContact" class="h-1/3 mt-2 text-white border bg-primary rounded-lg px-8 py-2">Contact
                us</button>
        </header>

        <div>
            <slot />
        </div>

        <footer class="w-full bg-primary font-light py-20 text-white font-public-sans">
            <div class="flex w-10/12 gap-12 justify-between mx-auto">
                <div class="w-1/4">
                    <img src="../assets/icons/BorrowEasyLogo.svg" alt="">
                    <div class="mt-6">Our mission is to empower individuals and
                        businesses by providing them with the
                        financial resources they
                        need to achieve their goals.
                    </div>
                    <div class="flex mt-6 w-24 justify-between">
                        <NuxtLink to=""><img src="../assets/icons/facebook.svg" alt=""></NuxtLink>
                        <NuxtLink to=""><img src="../assets/icons/whatsapp.svg" alt=""></NuxtLink>
                        <NuxtLink to=""><img src="../assets/icons/linkedin.svg" alt=""></NuxtLink>
                        <NuxtLink to=""><img src="../assets/icons/instagram.svg" alt=""></NuxtLink>
                    </div>
                </div>
                <div class="w-1/4 ml-16 inline-block">
                    <div class="text-2xl font-semibold">LEGAL</div>
                    <div class="border w-10 border-white mt-1"></div>
                    <button @click="termsAndCondition" class="text-xl mt-4">Terms & Conditions</button>
                    <div></div>
                    <button @click="privacyPolicy" class="text-xl mt-4">Privacy Policy</button>
                </div>
                <div class="w-1/4">
                    <div class="text-2xl font-semibold">OUR COMPANY</div>
                    <div class="border w-20 border-white mt-1"></div>
                    <button @click="home" class="text-xl mt-4">Home</button> <br />
                    <button @click="aboutUs" class="text-xl mt-4">About Us</button> <br />
                    <button @click="calculator" class="text-xl mt-4">Calculator</button> <br />
                    <button @click="faq" class="text-xl mt-4">FAQ</button> <br />
                    <button @click="features" class="text-xl mt-4">Features</button>
                </div>
                <div class="w-1/4">
                    <div class="text-2xl font-semibold">CONTACT US</div>
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
    </div>
</template>

<script>
export default defineComponent({
    name: "myLayout",
    methods: {
        openContact() {
            this.$router.push('/contact');
        },
        termsAndCondition() {
            this.$router.push('/TermsAndConditions');
        },
        privacyPolicy() {
            this.$router.push('/PrivacyPolicy');
        },
        home() {
            this.$router.push('/');
        },
        aboutUs() {
            this.$router.push('/about');
        },
        calculator() {
            this.$router.push('/P');
        },
        faq() {
            this.$router.push('/faq');
        },
        features() {
            this.$router.push('/features');
        },
    },
    setup() {

    },
});
</script>

<style scoped>
.router-link-exact-active {
    color: #006778;
    font-weight: 600;
}

.line {
    position: relative;
    text-decoration: none;
}

.router-link-exact-active::after {
    content: "";
    position: absolute;
    bottom: -2px;
    /* Adjust the position of the underline as desired */
    left: 7px;
    width: 70%;
    /* Adjust the width of the underline as desired */
    border-bottom: 2px solid #006778;
    /* Customize the appearance of the underline */
}</style>