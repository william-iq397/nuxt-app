<template>
    <div class="w-full flex flex-col justify-start mx-2">
        <StudentInformation/>
        <MotherInformation/>
        <ParentInformation/>
        <!-- <PaymentInformation/> -->
        <StudentSaveButtons />
    </div>
</template>

<script setup layout="default">
import StudentInformation from '~/components/AddStudentForm/StudentInformation.vue';
import MotherInformation from '~/components/AddStudentForm/MotherInformation.vue';
import ParentInformation from '~/components/AddStudentForm/ParentInformation.vue';
import StudentConfirmationButtons from '~/components/AddStudentForm/StudentConfirmationButtons.vue';
import StudentSaveButtons from '~/components/AddStudentForm/StudentSaveButtons.vue';
import PaymentInformation from '~/components/AddStudentForm/PaymentInformation.vue';

function log() {
    console.log('Cancel clicked');
}


</script>