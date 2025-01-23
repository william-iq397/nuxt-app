<template>
    <div class="1/2 w-full flex flex-col items-center">
        <div class="w-full flex justify-end items-start gap-4 my-8 ">
            <div class="w-full flex flex-col justify-around items-center">
                <!-- FIRST LINE -->
                <div class="w-full flex justify-end gap-4 ">
                    <div class="w-2/6 text-right">
                        <p>الجنس</p>
                        <select id="gender" class="text-right bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2  dark:border-gray-400 dark:placeholder-gray-400 bg-transparent dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="store.student.gender">
                            <option value="ذكر">ذكر</option>
                            <option value="انثى">انثى</option>
                        </select>
                    </div>
                
                    <div class="w-2/6 text-right">
                        <p>الشعبة</p>
                        <select class="text-right bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2  dark:border-gray-400 dark:placeholder-gray-400 bg-transparent dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="store.student.group">
                            <option v-for="groupOption in groupOptions" :key="groupOption" :value="groupOption">
                                {{ groupOption }}
                            </option>
                        </select>
                    </div>

                    
                    <div class="w-2/6 text-right">
                        <p>اسم الرباعي للطالب</p>
                        <div class="relative w-full">
                            <input required type="text" id="student_full_name" class="text-right block rounded-lg px-2.5 py-3 w-full text-sm text-black bg-transparent border border-gray-400 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="store.student.student_name"  />
                        </div>
                    </div>
                </div>

                <!-- SECOND LINE -->
                <div class="w-full flex justify-end items-center gap-4 my-4 ">
                    <div class="w-2/6 h-full text-right">
                        <p>فصيلة الدم</p>
                        <select id="blood_type" class="text-right bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2  dark:border-gray-400 dark:placeholder-gray-400 bg-transparent dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="store.student.blood_type">
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>

                    <div class="w-2/6 h-full text-right">
                        <p>المرحلة الدراسية</p>
                        <select id="grade" class="text-right bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:border-gray-400 dark:placeholder-gray-400 bg-transparent dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="store.student.grade">
                            <option value="السادس الاعدادي">السادس الاعدادي</option>
                            <option value="الثالث متوسط">الثالث متوسط</option>
                            <option value="السادس الابتدائي">السادس الابتدائي</option>
                        </select>
                    </div>

                    <div class="w-2/6 h-full flex flex-col text-right">
                        <p>تاريخ ميلاد الطالب</p>
                        <DatePicker/>
                    </div>
                </div>

                <!-- THREE LINE -->
                <div class="w-full flex justify-end gap-4 my-4 ">
                    <div class="w-2/6 h-full">
                        <div class="relative w-full flex flex-col text-right">
                            <p>نوع المرض</p>
                            <div class="relative w-full">
                                <input required :disabled="store.student.does_student_has_disease == 'لا'" type="text" id="disease_type" class="text-right block rounded-lg px-2.5 pb-2.5 pt-3 w-full text-sm text-black bg-transparent border border-gray-400 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="store.student.disease_type" />
                            </div>
                        </div>
                    </div>

                    <div class="w-2/6 h-full flex flex-col text-right">
                        <p class="text-sm md:text-base xl:text-lg">هل لدى الطالب مرض مزمن</p>
                        <select id="does_student_has_disease" class="text-right bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 dark:border-gray-400 dark:placeholder-gray-400 bg-transparent dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="store.student.does_student_has_disease">
                            <option value="نعم">نعم</option>
                            <option value="لا">لا</option>
                        </select>
                    </div>

                    <div class="w-2/6 h-full">
                        <div class="relative w-full text-right">
                            <p>مكان السكن</p>
                            <input required type="text" id="residancy_place" class="text-right block rounded-lg px-2.5 py-3 w-full text-sm text-black bg-transparent border border-gray-400 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="store.student.residancy_place" />
                        </div>
                    </div>
                </div>
                <!-- FOURTH LINE -->
                <div class="w-full flex justify-end gap-4 my-4 ">
                    <div class="w-2/6 h-full flex flex-col text-right">
                        <p>السنة الدراسية</p>
                        <select id="academic_year" class="text-right bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 dark:border-gray-400 dark:placeholder-gray-400 bg-transparent dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="store.student.academic_year">
                            <option v-for="academic_year in yearOptions" :key="academic_year" :value="academic_year">{{ academic_year }}</option>
                        </select>
                    </div>
                </div>
              
                <div class="w-full flex justify-end gap-4 my-4 ">
                    <div class="w-2/6 h-full flex flex-col text-right">
                        <p>المرحلة الدراسية</p>
                        <select id="educational_level" class="text-right bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 dark:border-gray-400 dark:placeholder-gray-400 bg-transparent dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="store.student.educational_level">
                            <option value="الابتدائية">الابتدائية</option>
                            <option value="المتوسطة">المتوسطة</option>
                            <option value="الاعدادية">الاعدادية</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- input image field -->
             <div class="w-3/12 h-3/4 flex flex-col my-4">
                <span class="mx-auto cursor-pointer border border-solid text-danger border-danger p-2 mb-4 rounded-md" @click="clearImage" v-if="store.student.student_id_photo">الغاء الصورة</span>
                <label for="student_image" class="relative mb-2 px-2 cursor-pointer w-full h-full py-8 border border-solid border-gray-400 rounded-lg flex justify-center items-center">
                    <div clas="flex flex-col border border-solid border-gray-200 rounded-lg">
                        <Icon v-if="!store.student.student_id_photo" class="text-gray-400" name="material-symbols:account-circle-outline" size="100" />
                        <h6 v-if="!store.student.student_id_photo" class="text-center">الصورة الشخصية</h6> 
                        <input required id="student_image" type="file" class="hidden" @change="handleImageUpload" />
                    </div class="absolute top-0 right-0 z-10">
                    <img v-if="store.student.student_id_photo" :src="store.student.student_id_photo" class="object-cover w-full h-full" alt="صورة الطالب">
                </label>
            </div>
        </div>

     
    </div>
</template>

<script setup>
import DatePicker from './DatePicker.vue';
import { useStudents } from '~/store/useStore';

const store = useStudents()
const yearOptions = computed(() => {
    return [...new Set(store.academic_years.map((year) => year.academic_year))];
})
// Computed properties for unique class and group options
const gradeOptions = computed(() => {
    return [...new Set(store.grades.map((student) => student.grade))];
});

const groupOptions = computed(() => {
    return [...new Set(store.groups.map((student) => student.group))];
});

// Handle image Upload
function handleImageUpload(event) {
  const file = event.target.files[0]; // Get the selected file
  
  if (file) {
    // Check if the selected file is an image
    const reader = new FileReader();
        // Convert the file to a data URL
        reader.onload = (e) => {
            store.student.student_id_photo = e.target.result; // Save data URL in the state
        };
        reader.readAsDataURL(file)
  }
}


onMounted(() => {
    store.fetchGrades()
    store.fetchGroups()
    store.fetchAcademicYears()
})
function clearImage() {
    store.student.student_id_photo = "";
}

</script>