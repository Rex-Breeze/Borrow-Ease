<template>
    <div>
            <slot />
    </div>
</template>

<script>
export default {
    name: 'MyLayout',
}
</script>

<style scoped>
    .router-link-exact-active {
        color:chartreuse;
    }
</style>