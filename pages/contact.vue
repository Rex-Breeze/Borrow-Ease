<template>
    <div class="pl-32 py-40 text-4xl text-primary font-semibold">
        Contact Us
    </div>
    <div class="relative w-full px-32 pb-24 flex gap-3 mx-auto text-gray-text bg-white z-10">
        <div class="w-1/2">
            <p class="text-4xl text-bold-gray font-semibold mb-8">
                Reach out to us
            </p>
            <p class="text-lg w-3/4 mb-8">
                Borrow Ease is your trusted financial partner for loans with quick approvals, competitive rates, and
                personalized solutions to meet your unique needs. Do you have any questions? Reach out to us now.
            </p>
            <img src="../assets/images/calculator.png" alt="">
        </div>
        <div class="w-1/2 border border-primary-bg rounded-lg drop-shadow px-8 pt-10">
            <p>Your name</p>
            <input type="text" placeholder="Input loan amount"
                class="border border-primary-bg px-6 py-4 w-full rounded-lg mt-1 focus:outline-none">
            <p class="mt-4">Phone number</p>
            <input type="number" placeholder="Input loan duration"
                class="border border-primary-bg px-6 py-4 w-full rounded-lg mt-1 focus:outline-none">
            <p class="mt-4">Email address</p>
            <input type="email" placeholder="Input loan amount"
                class="border border-primary-bg px-6 py-4 w-full rounded-lg mt-1 focus:outline-none">
            <p class="mt-4">Message</p>
            <textarea placeholder="Input loan duration"
                class="border border-primary-bg px-6 py-4 w-full rounded-lg h-48 mt-1 focus:outline-none"></textarea>
            <button class="border border-primary bg-primary text-white w-full px-12 py-2 rounded-lg mt-8">SEND</button>
        </div>
    </div>
    <div class="flex w-4/5 mt-32 mx-auto z-0 pb-24">
        <img src="../assets/images/iPhone 14.png" alt="" class="mx-auto ml-48">
        <div class="w-4/5 mt-32 ml-40">
            <p class="text-primary text-3xl font-bold left-11 top-5 w-3/4">Do you want to join other users who are changing
                their financial stories?</p>
            <div class="flex mt-20">
                <img src="../assets/images/App Store.png" alt="" class="mr-6">
                <img src="../assets/images/Google Play.png" alt="">
            </div>
        </div>
        <div class="circle right-0 -mt-64 absolute w-52 h-96 z-0 rounded-l-full border-r-0"></div>
    </div>
</template>

<script>
    definePageMeta({
        layout: "my-layout",
    })
</script>