<template>
    <div class="bg-white h-screen">
        <div class="flex w-10/12 mx-auto">
            <div class="text-primary w-1/2 justify-center items-center mt-48">
                <p class="text-5xl leading-16 mb-7 mt-24 font-semibold">Our App Features</p>
                <p class="text-2xl mb-7 w-10/12">On our app, these are features that makes us outstanding and gives us
                    the edge to provide efficient and effective loan to our users. </p>
            </div>
            <div class="flex mt-12 mx-auto relative w-1/2">
                <img src="../assets/images/main.png" alt="" class="z-10 relative mt-14">
            </div>
            <div class="thin w-64 h-96 rounded-t-full z-0 absolute right-0 -bottom-24"></div>
        </div>
    </div>
    <div class="w-full border border-primary"></div>
    <div class="h-screen bg-white z-20 relative">
        <div class="text-center text-gray-text pt-24">
            <div class="uppercase mx-auto border-0 px-4 py-1 rounded text-secondary bg-secondary-bg text-sm w-40">
                our features</div>
            <div class="text-5xl font-medium mt-3 text-bold-gray">Borrow Ease Popular Features</div>
            <div class="w-3/5 text-lg mt-4 mx-auto">Each of these features enhances the functionality and user experience of
                the Borrow Ease app, providing users with valuable tools and resources to manage their loans effectively,
                obtain personalized support</div>
        </div>
        <div class="w-9/12 flex gap-3 mx-auto mt-12">
            <div class="w-1/2 text-gray-text">
                <div class="leading-2 flex gap-6">
                    <Icon name="mingcute:share-forward-line"
                        class="border-0 w-10 h-10 bg-secondary-bg text-secondary rounded-full px-1.5 py-1" />
                    <p class="w-4/5"> <span class="text-bold-gray font-medium">Loan calculator:</span> Borrow Ease provides
                        a Loan Calculator feature that empowers users to estimate their
                        loan repayment amounts before applying.</p>
                </div>
                <div class="leading-2 flex gap-6 mt-4">
                    <Icon name="mingcute:share-forward-line"
                        class="border-0 w-10 h-10 bg-secondary-bg text-secondary rounded-full px-1.5 py-1" />
                    <p class="w-4/5"> <span class="text-bold-gray font-medium">Transactions:</span> The Transactions feature
                        in the Borrow Ease app enables users to conveniently manage and track their loan-related
                        transactions.</p>
                </div>
                <div class="leading-2 flex gap-6 mt-4">
                    <Icon name="mingcute:share-forward-line"
                        class="border-0 w-10 h-10 bg-secondary-bg text-secondary rounded-full px-1.5 py-1" />
                    <p class="w-4/5"> <span class="text-bold-gray font-medium">Rewards:</span> Borrow Ease offers a Rewards
                        program to incentivize and appreciate its loyal customers. Through this feature, users can earn
                        rewards points or incentives by maintaining a positive repayment history.</p>
                </div>
            </div>
            <div class="w-1/2 text-gray-text">
                <div class="leading-2 flex gap-6">
                    <Icon name="mingcute:share-forward-line"
                        class="border-0 w-10 h-10 bg-secondary-bg text-secondary rounded-full px-1.5 py-1" />
                    <p class="w-4/5"> <span class="text-bold-gray font-medium">Live chat:</span> Borrow Ease offers a live
                        chat feature that allows users to communicate directly with customer support representatives in
                        real-time.</p>
                </div>
                <div class="leading-2 flex gap-6 mt-4">
                    <Icon name="mingcute:share-forward-line"
                        class="border-0 w-10 h-10 bg-secondary-bg text-secondary rounded-full px-1.5 py-1" />
                    <p class="w-4/5"> <span class="text-bold-gray font-medium">Loan pages:</span> The Loan Page is a
                        dedicated section within the Borrow Ease app that provides comprehensive information about the
                        available loan options.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="w-9/12 flex gap-3 mx-auto text-gray-text">
        <div class="w-1/2 mt-24">
            <p class="text-4xl text-primary font-semibold mb-8">
                Loan Calculator
            </p>
            <p class="text-lg w-3/4 mb-8">
                Our user-friendly loan calculator puts the power in your hands, allowing you to calculate your loan
                repayment amount with ease. Whether you're considering a personal loan, a business loan, or any other type
                of borrowing.
            </p>
            <p class="text-lg w-3/4">
                At Borrow Ease, we believe in transparency and empowering our users to make informed financial decisions.
                Our loan calculator is just one of the many tools we offer to support you on your borrowing journey.
            </p>
        </div>
        <div class="w-1/2 mx-auto border border-primary-bg rounded-lg px-8 pt-10 pb-16">
            <p>Loan Amount</p>
            <input type="text" placeholder="Input loan amount" class="border border-primary-bg px-6 py-4 w-full rounded">
            <div class="text-light-gray justify-between flex font-medium mt-4 mb-2">
                <p>&#x20A6;0</p>
                <p>&#x20A6;5,000,000</p>
            </div>
            <div>
                line for reading the amount
            </div>
            <p class="mt-4">Loan Duration</p>
            <input type="text" placeholder="Input loan duration" class="border border-primary-bg px-6 py-4 w-full rounded">
            <div class="flex mt-8">
                <input type="radio" name="Days" id="" class="w-5 h-5 mr-5 border-primary text-primary bg-primary">
                <p class="text-bold-gray">Days</p>
            </div>
            <div class="flex mt-2">
                <input type="radio" name="Days" id="" class="w-5 h-5 mr-5">
                <p>Weeks</p>
            </div>
            <div class="flex mt-2">
                <input type="radio" name="Days" id="" class="w-5 h-5 mr-5">
                <p>Months</p>
            </div>
            <div class="flex mt-2">
                <input type="radio" name="Days" id="" class="w-5 h-5 mr-5">
                <p>Years</p>
            </div>
            <div class="text-center justify-between mt-20">
                <button class="border border-white bg-white px-12 py-2 rounded-md mr-8">Cancel</button>
                <button class="border border-primary bg-primary text-white  px-12 py-2 rounded-md">Continue</button>
            </div>
        </div>
    </div>
    <div class="w-10/12 h-4/5 bg-white flex mx-auto mt-20">
        <img src="../assets/images/people.png" alt="" class="mt-20">
        <div class="mt-8 mx-auto w-1/2">
            <div class="ml-9 leading-10 text-gray-text text-lg w-11/12 mt-6">
                <p class="text-5xl text-primary font-semibold mb-8">
                    Transactions
                </p>
                <p>
                    The Transactions feature in the Borrow Ease app enables users to conveniently manage and track their
                    loan-related transactions.
                </p>
                <div class="-indent-6 pl-12">
                    <li>
                        The Transactions feature provides users with a comprehensive overview of their loan-related
                        activities, ensuring transparency and ease of management.
                    </li>
                    <li>
                        Users can view details of their loan disbursements, repayments, outstanding balances, and payment
                        history all in one place.
                    </li>
                    <li>
                        The feature allows users to track their repayment progress, ensuring that they stay informed about
                        their current loan status.
                    </li>
                    <li>
                        Users can set up automatic payments or schedule repayments according to their preferred dates,
                        reducing the chances of missed or late payments.
                    </li>
                    <li>
                        Users can also download transaction statements or generate reports for their records or financial
                        planning purposes.
                    </li>
                </div>

            </div>
        </div>
    </div>
    <div class="w-10/12 h-4/5 bg-white flex mx-auto mt-20">
        <div class="mt-8 mx-auto w-1/2">
            <div class="ml-9 leading-10 text-gray-text text-lg w-11/12 mt-6">
                <p class="text-5xl text-primary font-semibold mb-8">
                    Live chat
                </p>
                <p>
                    Borrow Ease offers a live chat feature that allows users to communicate directly with customer support
                    representatives in real-time. Users can ask questions, seek assistance, or get personalized support
                    regarding their loans, account information, or any other queries they may have.
                </p>
                <div class="-indent-6 pl-12">
                    <li>
                        The Live Chat feature on the Borrow Ease app enables borrowers to have real-time conversations with
                        customer support representatives directly within the app. This feature offers a convenient and
                        efficient way for users to seek assistance, ask questions, and receive personalized guidance
                        throughout their loan application process or while managing their existing loans.
                    </li>
                    <li>
                        Customer support representatives are trained professionals who can provide guidance on loan
                        eligibility, application status, repayment options, or any other queries related to Borrow Ease.
                    </li>
                    <li>
                        The Live Chat feature enhances customer satisfaction by offering prompt and personalized support,
                        eliminating the need to wait for email responses or phone calls.
                    </li>
                </div>

            </div>
        </div>
        <img src="../assets/images/robot.png" alt="" class="mt-20">
    </div>
    <div class="w-10/12 h-4/5 bg-white flex mx-auto mt-20">
        <img src="../assets/images/people.png" alt="" class="mt-20">
        <div class="mt-8 mx-auto w-1/2">
            <div class="ml-9 leading-10 text-gray-text text-lg w-11/12 mt-6">
                <p class="text-5xl text-primary font-semibold mb-8">
                    Loan page
                </p>
                <p>
                    The Loan Page is a dedicated section within the Borrow Ease app that provides comprehensive information
                    about the available loan options.
                </p>
                <div class="-indent-6 pl-12">
                    <li>
                        The Loan Page serves as a dedicated section within the app that provides comprehensive information
                        about the available loan products and their features
                    </li>
                    <li>
                        The Loan Page offers a user-friendly interface that allows users to compare different loan options
                        side by side, facilitating informed decision-making.
                    </li>
                    <li>
                        Users can access additional information about the loan application process, required documentation,
                        and any specific terms and conditions associated with each loan product.
                    </li>
                    <li>
                        The Loan Page provides users with a centralized hub of information, enabling them to review and
                        select the loan that best suits their financial needs and goals.
                    </li>
                </div>
            </div>
        </div>
    </div>
    <div class="relative w-screen h-4/5 bg-white flex px-32 pb-48 mt-20 z-10">
        <div class="mt-8 mx-auto w-1/2">
            <div class="ml-9 leading-10 text-gray-text text-lg w-11/12 mt-32">
                <p class="text-5xl text-primary font-semibold mb-8">
                    Reward
                </p>
                <p>
                    Users can redeem their accumulated rewards for discounts, cashback, or other exclusive benefits,
                    enhancing their overall borrowing experience.
                </p>
                <div class="-indent-6 pl-12">
                    <li>
                        The Rewards feature is a loyalty program designed to incentivize and reward borrowers for their
                        continued engagement with Borrow Ease.
                    </li>
                    <li>
                        As borrowers use the app responsibly and make timely repayments, they earn reward points or other
                        benefits.
                    </li>
                    <li>
                        These rewards can be accumulated over time and redeemed for various perks, such as discounts on
                        interest rates, cashback on loan repayments.
                    </li>
                </div>
            </div>
        </div>
        <img src="../assets/images/gift.png" alt="" class="mt-20">
    </div>
    <div class="flex full mx-auto bg-primary-bg py-24">
        <img src="../assets/images/iPhone 14.png" alt="" class="mx-auto pl-40">
        <div class="w-4/5 mt-32 ml-60">
            <p class="text-primary text-3xl font-bold left-11 top-5 w-2/4">Do you want to join other users who are changing their financial stories?</p>
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
    .thin {
        border: 8px solid #CDE01D;
        border-right: 0;
        border-bottom: 0;
    }
    .circle {
        border: 40px solid #006778;
        border-right: 0;
    }
</style>