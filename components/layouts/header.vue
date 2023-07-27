<template>
    <div>
        <header class="flex w-10/12 justify-between mx-auto py-4 text-xl text-gray-text">
            <img src="assets/icons/BorrowEasyLogo.svg" class="w-12 h-14" alt="">
            <div class="text-center mt-4">
                <NuxtLink to="/" class="line mr-4">Home</NuxtLink>
                <NuxtLink to="/about" class="line mr-4">About</NuxtLink>
                <NuxtLink to="/features" class="line mr-4">Features</NuxtLink>
                <NuxtLink to="/faq" class="line">FAQ</NuxtLink>
            </div>
            <button @click="openContact" class="h-1/3 mt-2 text-white border bg-primary rounded-lg px-8 py-2">Contact
                us</button>
        </header>
    </div>
</template>

<script>
export default {
    name: 'Header',

    setup() {
        const router = useRouter()
        
        const openContact = () => {
            router.push('/contact');
        }
        return {
            openContact
        }
    }
}
</script>

<style scoped>

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
}

.router-link-exact-active {
    color: #006778;
    font-weight: 600;
}
</style>