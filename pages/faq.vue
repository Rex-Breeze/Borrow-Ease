<template>
    <div class="bg-white">
        <div class="flex w-full justify-between">
            <div class="text-gray-text w-1/2 justify-center items-center mt-64 ml-32">
                <p class="text-5xl leading-16 mb-7 text-primary">Frequently Asked Questions</p>
                <p class="text-2xl mb-7 w-11/12">Welcome to our Loan Calculator page, where you can easily estimate your
                    loan repayment amount and make informed financial decisions.</p>
            </div>
            <div class="w-1/2">
                <img src="../assets/images/lines.png" alt="" class="mb-4 ml-16">
            </div>
        </div>
    </div>
    <Accordion />
    <div class="h-32 w-full bg-white relative z-10"></div>
    <div class="flex w-4/5 mt-32 mx-auto z-0 pb-24">
        <img src="../assets/images/iPhone 14.png" alt="" class="mx-auto ml-48">
        <div class="w-4/5 mt-32 ml-40">
            <p class="text-primary text-3xl font-bold left-11 top-5 w-3/4">Do you want to join other users who are changing their financial stories?</p>
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

<style>
.circle {
    border: 40px solid #006778;
    border-right: 0;
}
</style>