<template>
    <div>
        <LayoutsHeader />

        <div>
            <slot />
        </div>

        <LayoutsFooter />
    </div>
</template>

<script>
export default defineComponent({
    name: "myLayout",
    setup() {
        return {

        }
    },
});
</script>

<style scoped>
</style>