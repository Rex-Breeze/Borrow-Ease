<template>
    <div class="px-32 text-gray-text text-xl leading-9 pb-24">
        <div class="text-5xl text-primary pt-48 font-semibold mb-16">Privacy Policy</div>
        <p>At Borrow Ease, we take your privacy and data security seriously. This Privacy Policy outlines how we collect,
            use, disclose, and protect your personal information when you use our mobile app or website. By accessing Borrow
            Ease and using our services, you consent to the practices described in this policy.</p>

        <div v-for="(item) in items" :key="item">
            <div class="flex">
                <p class="mr-4 ml-2">{{ item.id }}</p>
                <p>{{ item.heading }}</p>
            </div>
            <li class="-indent-7 pl-16" v-for="(list) in item.content" :key="list">{{ list. data }}</li>
        </div>
    </div>
</template>

<script>
definePageMeta({
    layout: "my-layout",
})

export default {
    name: 'PrivacyPolicy',

    setup() {
        return {
            items: [
                {
                    id: '1.',
                    heading: 'Information Collection:',
                    content: [
                        {
                            data: 'We may collect personal information, including but not limited to your name, contact details, date of birth, employment information, financial data, and government-issued identification for verification purposes.'
                        },
                        {
                            data: 'We may collect personal information, including but not limited to your name, contact details, date of birth, employment information, financial data, and government-issued identification for verification purposes.'
                        }
                    ]
                },
                {
                    id: '2.',
                    heading: 'Use of Information:',
                    content: [
                        {
                            data: 'We may collect personal information, including but not limited to your name, contact details, date of birth, employment information, financial data, and government-issued identification for verification purposes.'
                        },
                        {
                            data: 'We use the information collected to process loan applications, verify identities, and assess eligibility for loan products.'
                        },
                        {
                            data: 'We may collect personal information, including but not limited to your name, contact details, date of birth, employment information, financial data, and government-issued identification for verification purposes.'
                        }
                    ]
                }
            ]
        }
    }
}
</script>