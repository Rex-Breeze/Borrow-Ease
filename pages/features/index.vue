<template>
  <!-- Our App Features Start -->
  <div class="bg-white">
    <div class="md:flex md:w-10/12 px-8 md:mx-auto">
      <div
        class="text-primary md:w-1/2 justify-center items-center mt-6 md:mt-48"
      >
        <p
          class="text-2xl md:text-5xl leading-16 mb-7 mt-12 md:mt-24 font-semibold"
        >
          Our App Features
        </p>
        <p class="text-base md:text-lg md:text-2xl mb-7 md:w-10/12">
          On our app, these are features that makes us outstanding and gives us
          the edge to provide efficient and effective loan to our users.
        </p>
      </div>
      <div class="block md:flex mt-12 mx-auto md:relative md:w-1/2">
        <img
          src="assets/images/main.png"
          alt=""
          class="z-10 md:relative mt-14"
        />
      </div>
      <div
        class="hidden md:block thin w-64 h-40 rounded-t-full z-0 absolute right-0 bottom-20"
      ></div>
    </div>
  </div>
  <!-- Our App Features End -->

  <div class="w-full border border-primary"></div>

  <!-- Our Features Start -->
  <div class="w-full mb-40 bg-white px-8">
    <div class="md:text-center text-gray-text pt-24">
      <div
        class="uppercase mb- mx-auto border-0 px-4 py-1 rounded text-secondary bg-secondary-bg text-sm w-40"
      >
        our features
      </div>
      <div class="text-2xl md:text-5xl font-medium mt-3 text-bold-gray">
        Borrow Ease Popular Features
      </div>
      <div class="md:w-3/5 text-base md:text-lg mt-4 mx-auto">
        Each of these features enhances the functionality and user experience of
        the Borrow Ease app, providing users with valuable tools and resources
        to manage their loans effectively, obtain personalized support
      </div>
    </div>
    <div class="md:w-9/12 md:flex gap-3 md:mx-auto mt-12">
      <div class="md:w-1/2 text-gray-text">
        <div class="leading-2 flex gap-6">
          <Icon
            name="mingcute:share-forward-line"
            class="border-0 w-10 h-10 bg-secondary-bg text-secondary rounded-full px-1.5 py-1"
          />
          <p class="md:w-4/5">
            <span class="text-bold-gray font-medium">Loan calculator:</span>
            Borrow Ease provides a Loan Calculator feature that empowers users
            to estimate their loan repayment amounts before applying.
          </p>
        </div>
        <div class="leading-2 flex gap-6 mt-4">
          <Icon
            name="mingcute:share-forward-line"
            class="border-0 w-10 h-10 bg-secondary-bg text-secondary rounded-full px-1.5 py-1"
          />
          <p class="md:w-4/5">
            <span class="text-bold-gray font-medium">Transactions:</span> The
            Transactions feature in the Borrow Ease app enables users to
            conveniently manage and track their loan-related transactions.
          </p>
        </div>
        <div class="leading-2 flex gap-6 mt-4">
          <Icon
            name="mingcute:share-forward-line"
            class="border-0 w-10 h-10 bg-secondary-bg text-secondary rounded-full px-1.5 py-1"
          />
          <p class="md:w-4/5">
            <span class="text-bold-gray font-medium">Rewards:</span> Borrow Ease
            offers a Rewards program to incentivize and appreciate its loyal
            customers. Through this feature, users can earn rewards points or
            incentives by maintaining a positive repayment history.
          </p>
        </div>
      </div>
      <div class="md:w-1/2 text-gray-text">
        <div class="leading-2 flex gap-6">
          <Icon
            name="mingcute:share-forward-line"
            class="border-0 w-10 h-10 bg-secondary-bg text-secondary rounded-full px-1.5 py-1"
          />
          <p class="md:w-4/5">
            <span class="text-bold-gray font-medium">Live chat:</span> Borrow
            Ease offers a live chat feature that allows users to communicate
            directly with customer support representatives in real-time.
          </p>
        </div>
        <div class="leading-2 flex gap-6 mt-4">
          <Icon
            name="mingcute:share-forward-line"
            class="border-0 w-10 h-10 bg-secondary-bg text-secondary rounded-full px-1.5 py-1"
          />
          <p class="md:w-4/5">
            <span class="text-bold-gray font-medium">Loan pages:</span> The Loan
            Page is a dedicated section within the Borrow Ease app that provides
            comprehensive information about the available loan options.
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- Our Features End -->

  <!-- Loan Calculator Start -->
  <div class="w-full px-8 md:w-9/12 md:flex gap-3 mx-auto text-gray-text">
    <div class="md:w-1/2 mt-24">
      <p class="text-2xl md:text-4xl text-primary font-semibold mb-8">
        Loan Calculator
      </p>
      <p class="text-base md:text-lg md:w-3/4 mb-8">
        Our user-friendly loan calculator puts the power in your hands, allowing
        you to calculate your loan repayment amount with ease. Whether you're
        considering a personal loan, a business loan, or any other type of
        borrowing.
      </p>
      <p class="text-base md:text-lg md:w-3/4">
        At Borrow Ease, we believe in transparency and empowering our users to
        make informed financial decisions. Our loan calculator is just one of
        the many tools we offer to support you on your borrowing journey.
      </p>
    </div>
    <div
      class="md:w-1/2 md:mx-auto border border-primary-bg rounded-lg px-8 mt-8 pt-10 pb-16"
    >
      <p class="mb-2">Loan Amount</p>
      <input
        type="text"
        v-model="priceValue"
        placeholder="Input loan amount"
        class="border border-primary-bg px-6 py-4 w-full rounded focus:outline-none"
        @input="checkingValue"
      />
      <div class="text-light-gray justify-between flex font-medium mt-4 mb-4">
        <p>{{ useFormatAmount(priceValue) }}</p>
        <p>{{ useFormatAmount(maxPriceValue) }}</p>
      </div>
      <div>
        <div class="">
          <el-slider
            v-model="priceValue"
            :max="maxPriceValue"
            :show-tooltip="false"
            size="small"
          />
        </div>
      </div>
      <p class="mt-4">Loan Duration</p>
      <input
        type="text"
        placeholder="Input loan duration"
        class="border border-primary-bg px-6 py-4 w-full rounded focus:outline-none"
      />
      <div class="flex mt-8">
        <input
          type="radio"
          name="Days"
          id=""
          class="w-5 h-5 mr-5 border-primary text-primary bg-primary"
        />
        <p class="text-bold-gray">Days</p>
      </div>
      <div class="flex mt-2">
        <input type="radio" name="Days" id="" class="w-5 h-5 mr-5" />
        <p>Weeks</p>
      </div>
      <div class="flex mt-2">
        <input type="radio" name="Days" id="" class="w-5 h-5 mr-5" />
        <p>Months</p>
      </div>
      <div class="flex mt-2">
        <input type="radio" name="Days" id="" class="w-5 h-5 mr-5" />
        <p>Years</p>
      </div>
      <div class="text-center justify-between mt-20 flex">
        <p class="border border-gray-400 bg-white px-4 py-2 rounded-md md:mr-8">
          Cancel
        </p>
        <p
          class="border border-primary bg-primary text-white px-4 py-2 rounded-md"
        >
          Continue
        </p>
      </div>
    </div>
  </div>
  <!-- Loan Calculator End -->

  <!-- Transactions Start -->
  <div class="md:w-10/12 md:h-4/5 bg-white md:flex block md:mx-auto mt-20">
    <img src="assets/images/people.png" alt="" class="mt-20" />
    <div class="mt-8 md:mx-auto md:w-1/2">
      <div
        class="md:ml-9 px-8 md:leading-10 text-gray-text md:text-lg text-base md:w-11/12 mt-6"
      >
        <p class="text-2xl md:text-5xl text-primary font-semibold mb-8">
          Transactions
        </p>
        <p class="mb-4">
          The Transactions feature in the Borrow Ease app enables users to
          conveniently manage and track their loan-related transactions.
        </p>
        <div class="-indent-6 pl-12">
          <li class="mb-4">
            The Transactions feature provides users with a comprehensive
            overview of their loan-related activities, ensuring transparency and
            ease of management.
          </li>
          <li class="mb-4">
            Users can view details of their loan disbursements, repayments,
            outstanding balances, and payment history all in one place.
          </li>
          <li class="mb-4">
            The feature allows users to track their repayment progress, ensuring
            that they stay informed about their current loan status.
          </li>
          <li class="mb-4">
            Users can set up automatic payments or schedule repayments according
            to their preferred dates, reducing the chances of missed or late
            payments.
          </li>
          <li class="mb-4">
            Users can also download transaction statements or generate reports
            for their records or financial planning purposes.
          </li>
        </div>
      </div>
    </div>
  </div>
  <!-- Transactions End -->

  <!-- Live chat Start  -->
  <div class="md:w-10/12 md:h-4/5 bg-white md:flex block md:mx-auto mt-20">
    <div class="mt-8 md:mx-auto md:w-1/2">
      <div
        class="md:ml-9 px-8 md:leading-10 text-gray-text md:text-lg text-base md:w-11/12 mt-6"
      >
        <p class="text-2xl md:text-5xl text-primary font-semibold mb-8">
          Live chat
        </p>
        <p class="mb-4">
          Borrow Ease offers a live chat feature that allows users to
          communicate directly with customer support representatives in
          real-time. Users can ask questions, seek assistance, or get
          personalized support regarding their loans, account information, or
          any other queries they may have.
        </p>
        <div class="-indent-6 pl-12">
          <li class="mb-4">
            The Live Chat feature on the Borrow Ease app enables borrowers to
            have real-time conversations with customer support representatives
            directly within the app. This feature offers a convenient and
            efficient way for users to seek assistance, ask questions, and
            receive personalized guidance throughout their loan application
            process or while managing their existing loans.
          </li>
          <li class="mb-4">
            Customer support representatives are trained professionals who can
            provide guidance on loan eligibility, application status, repayment
            options, or any other queries related to Borrow Ease.
          </li>
          <li class="mb-4">
            The Live Chat feature enhances customer satisfaction by offering
            prompt and personalized support, eliminating the need to wait for
            email responses or phone calls.
          </li>
        </div>
      </div>
    </div>
    <img src="assets/images/robot.png" alt="" class="mt-20" />
  </div>
  <!-- Live chat End  -->

  <!-- Loan page Start  -->
  <div class="md:w-10/12 md:h-4/5 bg-white md:flex block md:mx-auto mt-20">
    <img src="assets/images/people.png" alt="" class="mt-20" />
    <div class="mt-8 md:mx-auto md:w-1/2">
      <div
        class="md:ml-9 px-8 md:leading-10 text-gray-text md:text-lg text-base md:w-11/12 mt-6"
      >
        <p class="text-2xl md:text-5xl text-primary font-semibold mb-8">
          Loan page
        </p>
        <p class="mb-4 ">
          The Loan Page is a dedicated section within the Borrow Ease app that
          provides comprehensive information about the available loan options.
        </p>
        <div class="-indent-6 pl-12">
          <li class="mb-4">
            The Loan Page serves as a dedicated section within the app that
            provides comprehensive information about the available loan products
            and their features
          </li>
          <li class="mb-4">
            The Loan Page offers a user-friendly interface that allows users to
            compare different loan options side by side, facilitating informed
            decision-making.
          </li>
          <li class="mb-4">
            Users can access additional information about the loan application
            process, required documentation, and any specific terms and
            conditions associated with each loan product.
          </li>
          <li class="mb-4">
            The Loan Page provides users with a centralized hub of information,
            enabling them to review and select the loan that best suits their
            financial needs and goals.
          </li>
        </div>
      </div>
    </div>
  </div>
  <!-- Loan page End  -->

  <!-- Reward Start -->
  <div
    class="md:relative md:w-screen md:h-4/5 bg-white md:flex px-8 md:px-32 pb-48 mt-20 md:z-10"
  >
    <div class="mt-8 md:mx-auto md:w-1/2">
      <div
        class="md:ml-9 md:leading-10 text-gray-text md:text-lg text-base md:w-11/12 mt-32"
      >
        <p class="text-2xl md:text-5xl text-primary font-semibold mb-8">
          Reward
        </p>
        <p class="mb-4">
          Users can redeem their accumulated rewards for discounts, cashback, or
          other exclusive benefits, enhancing their overall borrowing
          experience.
        </p>
        <div class="-indent-6 pl-12">
          <li class="mb-4">
            The Rewards feature is a loyalty program designed to incentivize and
            reward borrowers for their continued engagement with Borrow Ease.
          </li>
          <li class="mb-4">
            As borrowers use the app responsibly and make timely repayments,
            they earn reward points or other benefits.
          </li>
          <li class="mb-4">
            These rewards can be accumulated over time and redeemed for various
            perks, such as discounts on interest rates, cashback on loan
            repayments.
          </li>
        </div>
      </div>
    </div>
    <img src="assets/images/gift.png" alt="" class="mt-20" />
  </div>
  <!-- Reward End -->

  <div class="md:flex md:mx-auto bg-primary-bg py-24 px-8">
    <img src="assets/images/iPhone 14.png" alt="" class="mx-auto md:pl-40" />
    <div class="md:w-4/5 mt-32 md:ml-60">
      <p class="text-primary text-3xl font-bold md:left-11 md:top-5 md:w-2/4">
        Do you want to join other users who are changing their financial
        stories?
      </p>
      <div class="flex mt-20 gap-5 w-full">
        <div>
          <img src="assets/images/App Store.png" alt="" class="" />
        </div>
        <div>
          <img src="assets/images/Google Play.png" alt="" />
        </div>
      </div>
    </div>
    <div
      class="hidden circle right-0 -mt-64 absolute w-52 h-96 z-0 rounded-l-full border-r-0"
    ></div>
  </div>
</template>

<script>
import { useFormatAmount } from "~/composables/useFormatAmount";

definePageMeta({
  layout: "my-layout",
});

export default {
  name: "Features",

  setup() {
    const priceValue = ref(0);
    const maxPriceValue = ref(0);

    onMounted(async () => {
      maxPriceValue.value = 2000000;
    });

    const checkingValue = () => {
      priceValue.value = Number(priceValue.value);
    };
    return {
      priceValue,
      maxPriceValue,
      useFormatAmount,
      checkingValue,
    };
  },
};
</script>

<style></style>
