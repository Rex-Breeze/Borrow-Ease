<template>
    <div class="px-32 text-gray-text text-xl leading-9 pb-24">
        <div class="text-5xl text-primary pt-48 font-semibold mb-16">Terms and Condition</div>
        <p>Terms and Conditions for Borrow Ease</p>
        <div v-for="(item) in items" :key="item">
            <div class="flex">
                <p class="mr-4 ml-2">{{ item.id }}</p>
                <p>{{ item.heading }}</p>
            </div>
            <li class="-indent-7 pl-16">{{ item.content }}</li>
        </div>
    </div>
</template>

<script>

definePageMeta({
        layout: "my-layout",
    })

export default {
    name: 'TermsAndConditions',
    data() {

        return {
            items: [
                { id: '1.',
                heading: 'Acceptance of Terms', 
                content: 'By accessing or using the Borrow Ease loan app (the "App"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using the App.'},
                { id: '2.', 
                heading: 'Eligibility', 
                content: 'To use the App, you must meet the eligibility criteria set forth by Borrow Ease. This includes being of legal age and possessing the necessary legal capacity to enter into a loan agreement.'},
                { id: '3.',
                heading: 'Loan Application', 
                content: 'The loan application process is subject to verification of information provided by the applicant. Borrow Ease reserves the right to approve or reject loan applications based on its internal assessment and criteria.'},
                { id: '4.',
                heading: 'Loan Agreement', 
                content: 'Upon approval of a loan application, the borrower and Borrow Ease enter into a legally binding loan agreement, which includes the terms and conditions specific to the loan. Borrowers are required to review and accept the loan agreement before proceeding.'},
                { id: '5.',
                heading: 'Repayment', 
                content: 'Borrowers are responsible for repaying the loan according to the agreed terms. Failure to make timely repayments may result in additional fees, penalties, or adverse effects on the borrowers credit score.'},
                { id: '6.',
                heading: 'Interest Rates and Fees', 
                content: 'Borrow Ease applies interest rates and fees based on its lending policies. Borrowers are advised to review and understand the applicable interest rates, fees, and any associated charges before accepting a loan.'},
                { id: '7.',
                heading: 'Privacy and Data Security', 
                content: 'Borrow Ease is committed to protecting the privacy and security of user data. By using the App, you agree to the collection, use, and storage of your personal information in accordance with Borrow Eases Privacy Policy.'},
                { id: '8.',
                heading: 'Intellectual Property', 
                content: 'All intellectual property rights associated with the App, including trademarks, logos, and content, are the property of Borrow Ease. Users are prohibited from using, copying, or distributing any content from the App without prior written consent.'},
                { id: '9.',
                heading: 'Limitation of Liability', 
                content: 'Borrow Ease shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of the App, loan transactions, or any actions taken by users or third parties.'},
                { id: '10.',
                heading: 'Modification and Termination', 
                content: 'Borrow Ease reserves the right to modify or terminate the App, its features, or these Terms and Conditions at any time without prior notice. Users are advised to regularly review the most current version of the Terms and Conditions.'},
                { id: '11.',
                heading: 'Governing Law and Jurisdiction', 
                content: 'These Terms and Conditions are governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising from the use of the App shall be subject to the exclusive jurisdiction of the courts in [Jurisdiction].'}
            ]
        };
    }
};
</script>