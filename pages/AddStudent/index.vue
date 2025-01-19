<template>
    <div class="w-full flex flex-col justify-start mx-4">
        <StudentInformation/>
        <MotherInformation/>
        <ParentInformation/>
        <StudentSaveButtons />
    </div>
</template>

<script setup layout="default">
import StudentInformation from '~/components/AddStudentForm/StudentInformation.vue';
import MotherInformation from '~/components/AddStudentForm/MotherInformation.vue';
import ParentInformation from '~/components/AddStudentForm/ParentInformation.vue';
import StudentConfirmationButtons from '~/components/AddStudentForm/StudentConfirmationButtons.vue';
import StudentSaveButtons from '~/components/AddStudentForm/StudentSaveButtons.vue';
</script>