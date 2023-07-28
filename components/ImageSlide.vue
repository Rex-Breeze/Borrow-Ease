<template>
  <!-- Info Slide Content -->
  <div class="relative">
    <img
      :src="`/_nuxt/assets/images/${currentActiveBlock.imgUrl}`"
      class="h-screen w-full object-cover"
    />

    <div
      class="text-white absolute bottom-20"
      :class="[
        { 'px-10': caller === 'onboarding' },
        { 'px-20': caller !== 'onboarding' },
      ]"
    >
      <!-- Info Slide Text -->
      <div class="mb-16">
        <p class="opacity-80 uppercase mb-2.5">
          {{ currentActiveBlock.title }}
        </p>
        <p
          class="font-family-medium"
          :class="[
            { 'text-2xl': caller === 'onboarding' },
            { 'text-4xl': caller !== 'onboarding' },
          ]"
        >
          {{ currentActiveBlock.info }}
        </p>
      </div>

      <!-- Info Slide Footer -->
      <div class="flex items-center w-full justify-between">
        <div class="flex">
          <div
            v-for="item in currentSliderInfo"
            :key="item"
            class="w-8 h-1 rounded-sm bg-white transition ease-in duration-300 mr-2.5"
            :class="
              currentActiveBlock.id === item.id
                ? 'opacity-100 transition ease-in duration-300'
                : 'opacity-50'
            "
          ></div>
        </div>

        <div class="flex float-right gap-6">
          <!-- left arrow icon -->
          <div class="w-8 h-8 rounded-[50%] bg-[#8A8A8A] opacity-95">
            <Icon
              name="ic:round-keyboard-arrow-left"
              @click="prev()"
              class="cursor-pointer"
              size="2rem"
            />
          </div>

          <!-- right arrow icon -->
          <div class="w-8 h-8 rounded-[50%] bg-[#8A8A8A] opacity-95">
            <Icon
              name="ic:round-keyboard-arrow-right"
              @click="next()"
              class="cursor-pointer"
              size="2rem"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { useSliderStore } from "~~/stores";

export default {
  name: "SignupInfoSlide",
  setup() {
    // const sliderStore = useSliderStore();
    const carouselBlocks = ref([1, 2, 3]);
    const currentActiveBlockNumber = ref(1);
    const currentActiveBlock = ref({});
    const registerSlides = ref([
      {
        id: 1,
        title: "Planning",
        info: "Route Planning & Optimization for your Last Mile Operations. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        imgUrl: "register/register-slider-image-1.png",
      },
      {
        id: 2,
        title: "Order Management",
        info: "Intelligent order clubbing and effective vehicle utilization leading to on-time delivery for 10 million+ customers",
        imgUrl: "register/register-slider-image-2.png",
      },
      {
        id: 3,
        title: "Optimized Shipments",
        info: "99.5% SLA Adherence and Digitization leading to the streamlining of processes. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        imgUrl: "register/register-slider-image-3.png",
      },
    ]);
    const onboardingSlides = ref([
      {
        id: 1,
        title: "Planning",
        info: "Route Planning & Optimization for your Last Mile Operations. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        imgUrl: "onboarding/onboarding-slider-image-1.png",
      },
      {
        id: 2,
        title: "Order Management",
        info: "Intelligent order clubbing and effective vehicle utilization leading to on-time delivery for 10 million+ customers",
        imgUrl: "onboarding/onboarding-slider-image-2.png",
      },
      {
        id: 3,
        title: "Optimized Shipments",
        info: "99.5% SLA Adherence and Digitization leading to the streamlining of processes. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        imgUrl: "onboarding/onboarding-slider-image-3.png",
      },
      {
        id: 4,
        title: "Optimized Shipments",
        info: "99.5% SLA Adherence and Digitization leading to the streamlining of processes. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        imgUrl: "onboarding/onboarding-slider-image-4.png",
      },
      {
        id: 5,
        title: "Optimized Shipments",
        info: "99.5% SLA Adherence and Digitization leading to the streamlining of processes. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        imgUrl: "onboarding/onboarding-slider-image-5.png",
      },
    ]);
    const authSlides = ref([
      {
        id: 1,
        title: "Planning",
        info: "Route Planning & Optimization for your Last Mile Operations. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        imgUrl: "/man.png",
      },
      {
        id: 2,
        title: "Order Management",
        info: "Intelligent order clubbing and effective vehicle utilization leading to on-time delivery for 10 million+ customers",
        imgUrl: "/man.png",
      },
      {
        id: 3,
        title: "Optimized Shipments",
        info: "99.5% SLA Adherence and Digitization leading to the streamlining of processes. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        imgUrl: "/man.png",
      },
      {
        id: 4,
        title: "Optimized Shipments",
        info: "99.5% SLA Adherence and Digitization leading to the streamlining of processes. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        imgUrl: "/man.png",
      },
      {
        id: 5,
        title: "Optimized Shipments",
        info: "99.5% SLA Adherence and Digitization leading to the streamlining of processes. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        imgUrl: "/man.png",
      },
    ]);

    const caller = ref("");
    const setCaller = (val) => {
      caller.value = val;
    };

    const currentSliderInfo = computed(() => {
      if (caller.value === "auth") {
        return authSlides.value;
      } else if (caller.value === "register") {
        return registerSlides.value;
      } else if (caller.value === "onboarding") {
        return onboardingSlides.value;
      }
    });

    onMounted(() => {
      currentActiveBlock.value = getCurrentActiveSlide();
      runSlide();
    });

    const runSlide = () => {
      setInterval(() => {
        next();
      }, 4000);
    };

    const prev = () => {
      if (currentActiveBlockNumber.value === 1) {
        currentActiveBlockNumber.value = currentSliderInfo.length;
      } else {
        currentActiveBlockNumber.value -= 1;
      }

      currentActiveBlock.value = getCurrentActiveSlide();
    };

    const next = () => {
      if (currentActiveBlockNumber.value === currentSliderInfo.length) {
        currentActiveBlockNumber.value = 1;
      } else {
        currentActiveBlockNumber.value += 1;
      }

      currentActiveBlock.value = getCurrentaActiveSlide();
    };

    const getCurrentActiveSlide = () => {
      return currentSliderInfo.find(
        (item) => item.id === currentActiveBlockNumber.value
      );
    };

    return {
      carouselBlocks,
      currentActiveBlock,
      currentActiveBlockNumber,
      // sliderStore,
      prev,
      next,

      caller,
      setCaller,
      currentSliderInfo,
      registerSlides,
      onboardingSlides,
      authSlides,
    };
  },
};
</script>
