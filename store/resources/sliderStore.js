import { defineStore } from "pinia";

export const useSliderStore = defineStore("slider", () => {
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
      imgUrl: "auth/auth-slider-image-1.png",
    },
    {
      id: 2,
      title: "Order Management",
      info: "Intelligent order clubbing and effective vehicle utilization leading to on-time delivery for 10 million+ customers",
      imgUrl: "auth/auth-slider-image-2.png",
    },
    {
      id: 3,
      title: "Optimized Shipments",
      info: "99.5% SLA Adherence and Digitization leading to the streamlining of processes. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      imgUrl: "auth/auth-slider-image-3.png",
    },
    {
      id: 4,
      title: "Optimized Shipments",
      info: "99.5% SLA Adherence and Digitization leading to the streamlining of processes. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      imgUrl: "auth/auth-slider-image-4.png",
    },
    {
      id: 5,
      title: "Optimized Shipments",
      info: "99.5% SLA Adherence and Digitization leading to the streamlining of processes. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      imgUrl: "auth/auth-slider-image-5.png",
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

  return {
    caller,
    setCaller,
    currentSliderInfo,
    registerSlides,
    onboardingSlides,
    authSlides,
  };
});
