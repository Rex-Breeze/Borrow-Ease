<template>
    <div class="bg-primary">
        <div class="w-2/5 mx-auto text-center">
            <p class="text-[#D9D9D9] text-5xl pt-48">About Us</p>
            <div class="flex relative mt-16">
                <div class="border-8 border-white w-96 h-96 mx-auto mt-28 rounded-full"></div>
                <img src="../assets/images/iPhone 14.png" alt="" class="absolute left-40 top-48 w-56">
                <img src="../assets/images/Space Black.png" alt="" class="absolute right-10 top-32 w-56">
                <div class="absolute border border-light-gray bg-white left-10 mt-48 flex px-6 py-2 rounded">
                    <Icon name="ri:user-star-line" size="20"
                        class="text-secondary border-0 rounded-full bg-[#F5F9D2] p-1 mr-4 w-11 h-11" />
                    <div>
                        <p class="text-xl text-secondary">350k+</p>
                        <p class="text-xs">Active users</p>
                    </div>
                </div>
                <div class="absolute border border-light-gray bg-white -right-20 flex px-6 py-2 rounded mt-72">
                    <Icon name="material-symbols:download" size="20"
                        class="text-secondary border-0 rounded-full bg-[#F5F9D2] p-1 mr-4 w-11 h-11" />
                    <div>
                        <p class="text-xl text-secondary">500k+</p>
                        <p class="text-xs">Downloads</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="relative w-4/5 h-4/5 bg-white flex mx-auto">
        <div class="mt-8 mx-auto w-1/2">
            <div class="text-primary text-4xl mt-32">About BorrowEase</div>
            <div class="w-40 border-secondary border mt-1"></div>
            <p class="w-4/5 mt-12 text-gray-text text-lg font-semibold">At Borrow Ease, we are committed to providing
                financial solutions that make borrowing
                simple, convenient, and
                accessible. We understand that navigating the loan landscape can be overwhelming, which is why we've
                designed our platform to offer a hassle-free borrowing experience for individuals and businesses alike.</p>
        </div>
        <div class="mt-20 relative mr-24">
            <div class="w-96 h-96 rounded-lg bg-secondary absolute"></div>
            <img src="../assets/images/hands.png" alt="" class="w-96 h-96 relative right-2 top-2">
        </div>
    </div>
    <img src="../assets/images/boy.png" alt="" class="mx-auto mt-24">
    <div class="flex w-3/4 justify-between gap-10 mx-auto mt-12 mb-16 text-gray-text">
        <div class="w-1/2 border-gray-bg border-2 p-8 rounded-lg">
            <div class="border-0 py-2 rounded-lg text-primary bg-primary-bg text-xl w-32 text-center">
                Our Vision</div>
            <div class="text-lg w-11/12 mt-6 leading-7">
                "Our vision is to revolutionize the lending industry by leveraging technology and innovation to create a
                seamless and inclusive borrowing experience for individuals and businesses.
            </div>
        </div>
        <div class="w-1/2 border-gray-bg border-2 p-8 rounded-lg">
            <div class="border-0 py-2 rounded-lg text-primary bg-primary-bg text-xl w-32 text-center">
                Our Mission</div>
            <div class="text-lg w-11/12 mt-6 leading-7">
                "At Borrow Ease, our mission is to empower individuals and businesses with accessible and transparent
                financial solutions. We strive to provide a seamless borrowing experience through our innovative loan app.”
            </div>
        </div>
    </div>
    <div class="bg-light-bg mx-auto px-40 mt-20 flex relative z-10">
        <div class="w-1/2 pt-16 mr-16">
            <img src="../assets/images/highfive.png" alt="">
            <div class="flex w-10 mx-auto justify-between mt-12 h-1.5 mb-16">
                <div class="border-0 w-1.5 bg-primary rounded-full"></div>
                <div class="border-0 w-1.5 bg-gray-bg rounded-full"></div>
                <div class="border-0 w-1.5 bg-gray-bg rounded-full"></div>
            </div>
        </div>
        <div class="w-1/2 text-bold-gray font-semibold">
            <div class="flex mb-12">
                <div class="text-primary text-4xl mt-16 mr-6">Our Commitment</div>
                <div class="border border-secondary w-48 h-0 mt-24"></div>
            </div>
            <p class="mb-4">As responsible lenders, we adhere to industry regulations and ethical practices. We conduct thorough
                assessments to ensure that loans are offered responsibly and that borrowers are able to manage their
                repayment obligations without undue hardship.</p>
            <p class="mb-4">Whether you're looking for a personal loan to cover unexpected expenses or a business loan to fuel growth,
                Borrow Ease is here to support you. Experience a new level of convenience, transparency, and reliability in
                the borrowing process.</p>
            <p class="mb-4">Choose Borrow Ease and take a step towards achieving your financial goals with confidence.</p>
        </div>
    </div>
    <div class="flex w-4/5 mt-32 mx-auto pb-24">
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