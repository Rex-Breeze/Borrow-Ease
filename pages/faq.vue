<template>
    <div class="bg-white h-screen">
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
    <Accordion/>
    <div class="h-32 w-full bg-white relative z-10"></div>
    <!-- <div class="relative w-full px-32 pb-12 text-lg text-gray-text z-10 bg-white">
        <div class="border border-gray-bg py-4 px-8 rounded-lg mt-6">
            <div class="flex justify-between">
                <p class="text-bold-gray font-semibold mt-1">What is BorrowEase?</p>
                <Icon name="ic:baseline-keyboard-arrow-up" size="40"/>
            </div>
            <p class="mt-2">BorrowEase is a digital bank that makes it easy for you to apply for a loan and receive your loan into your bank account within 5-10mins.</p>
        </div>
        <div class="border border-gray-bg py-4 px-8 rounded-lg mt-6">
            <div class="flex justify-between">
                <p class="text-bold-gray font-semibold mt-1">How does Borrow Ease work?</p>
                <Icon name="ic:baseline-keyboard-arrow-down" size="40"/>
            </div>
        </div>
        <div class="border border-gray-bg py-4 px-8 rounded-lg mt-6">
            <div class="flex justify-between">
                <p class="text-bold-gray font-semibold mt-1">Is Borrow Ease a direct lender?</p>
                <Icon name="ic:baseline-keyboard-arrow-down" size="40"/>
            </div>
        </div>
        <div class="border border-gray-bg py-4 px-8 rounded-lg mt-6">
            <div class="flex justify-between">
                <p class="text-bold-gray font-semibold mt-1">Who is eligible to apply for a loan through Borrow Ease?</p>
                <Icon name="ic:baseline-keyboard-arrow-down" size="40"/>
            </div>
        </div>
        <div class="border border-gray-bg py-4 px-8 rounded-lg mt-6">
            <div class="flex justify-between">
                <p class="text-bold-gray font-semibold mt-1">What are the minimum requirements to qualify for a loan?</p>
                <Icon name="ic:baseline-keyboard-arrow-down" size="40"/>
            </div>
        </div>
        <div class="border border-gray-bg py-4 px-8 rounded-lg mt-6">
            <div class="flex justify-between">
                <p class="text-bold-gray font-semibold mt-1">What documents do I need to provide for the loan application?</p>
                <Icon name="ic:baseline-keyboard-arrow-down" size="40"/>
            </div>
        </div>
        <div class="border border-gray-bg py-4 px-8 rounded-lg mt-6">
            <div class="flex justify-between">
                <p class="text-bold-gray font-semibold mt-1">How do I apply for a loan?</p>
                <Icon name="ic:baseline-keyboard-arrow-down" size="40"/>
            </div>
        </div>
        <div class="border border-gray-bg py-4 px-8 rounded-lg mt-6">
            <div class="flex justify-between">
                <p class="text-bold-gray font-semibold mt-1">What information is required in the loan application?</p>
                <Icon name="ic:baseline-keyboard-arrow-down" size="40"/>
            </div>
        </div>
        <div class="border border-gray-bg py-4 px-8 rounded-lg mt-6">
            <div class="flex justify-between">
                <p class="text-bold-gray font-semibold mt-1">How long does the loan approval process take?</p>
                <Icon name="ic:baseline-keyboard-arrow-down" size="40"/>
            </div>
        </div>
        <div class="border border-gray-bg py-4 px-8 rounded-lg mt-6">
            <div class="flex justify-between">
                <p class="text-bold-gray font-semibold mt-1">What is the minimum and maximum loan amount I can borrow?</p>
                <Icon name="ic:baseline-keyboard-arrow-down" size="40"/>
            </div>
        </div>
        <div class="border border-gray-bg py-4 px-8 rounded-lg mt-6">
            <div class="flex justify-between">
                <p class="text-bold-gray font-semibold mt-1">What are the available repayment options?</p>
                <Icon name="ic:baseline-keyboard-arrow-down" size="40"/>
            </div>
        </div>
        <div class="border border-gray-bg py-4 px-8 rounded-lg mt-6">
            <div class="flex justify-between">
                <p class="text-bold-gray font-semibold mt-1">Can I get a loan with bad credit?</p>
                <Icon name="ic:baseline-keyboard-arrow-down" size="40"/>
            </div>
        </div>
        <div class="border border-gray-bg py-4 px-8 rounded-lg mt-6">
            <div class="flex justify-between">
                <p class="text-bold-gray font-semibold mt-1">Does applying for a loan affect my credit score?</p>
                <Icon name="ic:baseline-keyboard-arrow-down" size="40"/>
            </div>
        </div>
        <div class="border border-gray-bg py-4 px-8 rounded-lg mt-6">
            <div class="flex justify-between">
                <p class="text-bold-gray font-semibold mt-1">How is my personal and financial information protected?</p>
                <Icon name="ic:baseline-keyboard-arrow-down" size="40"/>
            </div>
        </div>
        <div class="border border-gray-bg py-4 px-8 rounded-lg mt-6">
            <div class="flex justify-between">
                <p class="text-bold-gray font-semibold mt-1">What security measures are in place to prevent unauthorized access?</p>
                <Icon name="ic:baseline-keyboard-arrow-down" size="40"/>
            </div>
        </div>
        <div class="border border-gray-bg py-4 px-8 rounded-lg mt-6">
            <div class="flex justify-between">
                <p class="text-bold-gray font-semibold mt-1">Will my information be shared with third parties?</p>
                <Icon name="ic:baseline-keyboard-arrow-down" size="40"/>
            </div>
        </div>
        <div class="border border-gray-bg py-4 px-8 rounded-lg mt-6">
            <div class="flex justify-between">
                <p class="text-bold-gray font-semibold mt-1">What should I do if I can't make a loan repayment on time?</p>
                <Icon name="ic:baseline-keyboard-arrow-down" size="40"/>
            </div>
        </div>
        <div class="border border-gray-bg py-4 px-8 rounded-lg mt-6">
            <div class="flex justify-between">
                <p class="text-bold-gray font-semibold mt-1">How can I contact customer support for assistance?</p>
                <Icon name="ic:baseline-keyboard-arrow-down" size="40"/>
            </div>
        </div>
        <div class="border border-gray-bg py-4 px-8 rounded-lg mt-6">
            <div class="flex justify-between">
                <p class="text-bold-gray font-semibold mt-1">Can I pay off my loan early?</p>
                <Icon name="ic:baseline-keyboard-arrow-down" size="40"/>
            </div>
        </div>
        <div class="border border-gray-bg py-4 px-8 rounded-lg mt-6">
            <div class="flex justify-between">
                <p class="text-bold-gray font-semibold mt-1">How long does it take for the loan amount to be disbursed?</p>
                <Icon name="ic:baseline-keyboard-arrow-down" size="40"/>
            </div>
        </div>
        <div class="border border-gray-bg py-4 px-8 rounded-lg mt-6">
            <div class="flex justify-between">
                <p class="text-bold-gray font-semibold mt-1">What should I do if I forget my account password?</p>
                <Icon name="ic:baseline-keyboard-arrow-down" size="40"/>
            </div>
        </div>
    </div> -->
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