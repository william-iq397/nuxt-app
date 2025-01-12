<template>
    <div class="w-full  flex flex-col justify-start mx-2">
        <StudentInformation/>
        <MotherInformation/>
        <ParentInformation/>
        <PaymentInformation/>
        <StudentConfirmationSection/>
    </div>
</template>

<script setup layout="default">
import StudentInformation from '~/components/AddStudentForm/StudentInformation.vue';
import MotherInformation from '~/components/AddStudentForm/MotherInformation.vue';
import ParentInformation from '~/components/AddStudentForm/ParentInformation.vue';
import PaymentInformation from '~/components/AddStudentForm/PaymentInformation.vue';
import StudentConfirmationSection from '~/components/AddStudentForm/StudentConfirmationSection.vue';
</script>