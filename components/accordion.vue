<template>
        <div v-for="(item, index) in items" :key="index" class="w-full px-32 text-lg text-gray-text">
            <div @click="toggleAccordion(index)" :class="{ 'bg-gray-200': activeIndex === index }"
                class="border border-gray-bg py-4 px-8 rounded-lg mt-6 cursor-pointer">
                <div class="flex justify-between items-center">
                    <div>{{ item.title }}</div>
                    <div class="transition-transform transform" :class="{ 'rotate-180': activeIndex === index }">
                        <Icon name="ic:baseline-keyboard-arrow-up" size="40" />
                    </div>
                </div>
                <div v-show="activeIndex === index" class="mt-4">
                    {{ item.content }}
                </div>
            </div>
        </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: -1,
            items: [
                { title: 'What is BorrowEase?', content: 'BorrowEase is a digital bank that makes it easy for you to apply for a loan and receive your loan into your bank account within 5-10mins.' },
                { title: 'How does Borrow Ease work?', content: 'Content' },
                { title: 'Is Borrow Ease a direct lender?', content: 'Content' },
                { title: 'Who is eligible to apply for a loan through Borrow Ease?', content: 'Content' },
                { title: 'What are the minimum requirements to qualify for a loan?', content: 'Content' },
                { title: 'What documents do I need to provide for the loan application?', content: 'Content' },
                { title: 'How do I apply for a loan?', content: 'Content' },
                { title: 'What information is required in the loan application?', content: 'Content' },
                { title: 'How long does the loan approval process take?', content: 'Content' },
                { title: 'What is the minimum and maximum loan amount I can borrow?', content: 'Content' },
                { title: 'What are the available repayment options?', content: 'Content' },
                { title: 'Can I get a loan with bad credit?', content: 'Content' },
                { title: 'Does applying for a loan affect my credit score?', content: 'Content' },
                { title: 'How is my personal and financial information protected?', content: 'Content' },
                { title: 'What security measures are in place to prevent unauthorized access?', content: 'Content' },
                { title: 'Will my information be shared with third parties?', content: 'Content' },
                { title: 'What should I do if I can not make a loan repayment on time?', content: 'Content' },
                { title: 'How can I contact customer support for assistance?', content: 'Content' },
                { title: 'Can I pay off my loan early?', content: 'Content' },
                { title: 'How long does it take for the loan amount to be disbursed?', content: 'Content' },
                { title: 'What should I do if I forget my account password?', content: 'Content' }
            ]
        };
    },
    methods: {
        toggleAccordion(index) {
            this.activeIndex = this.activeIndex === index ? -1 : index;
        }
    }
};
</script>

<style>
.rotate-180 {
    transform: rotate(180deg);
}
</style>