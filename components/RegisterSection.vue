<template>
    <div>
        <h4 class="text-right">قسم التسجيل</h4>
        <div class="flex justify-evenly" dir="rtl">
            <NuxtLink to="/addstudent">
                <div class="flex items-center gap-2 p-4 rounded-lg border border-gray-400 border-solid cursor-pointer">
                    <Icon class="text-primary" name="fa6-solid:graduation-cap" size="45"/>
                    <h3>تسجيل طالب جديد</h3>
                </div>
            </NuxtLink>
            <div class="flex items-center gap-2 p-4 rounded-lg border border-gray-400 border-solid cursor-pointer">
                <Icon class="text-primary" name="uil:bag" size="45" />
                <h3>اضافة استاذ جديد</h3>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>