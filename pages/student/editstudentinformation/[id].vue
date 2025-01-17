<template>
    <section class="w-full h-full bg-gray-100" dir="rtl">
      <div class="py-8 min-h-screen flex flex-col items-center w-full">
        <!-- Page Header -->
        <div class="w-full max-w-5xl bg-white rounded-xl shadow-md p-8 mb-8">
          <h1 class="text-3xl font-bold text-gray-800 text-center mb-2">
            تعديل معلومات الطالب
          </h1>
          <p class="text-center text-gray-500 text-lg">
            رقم الطالب: {{ studentId }}
          </p>
        </div>
  
        <!-- Edit Form -->
        <div class="w-full max-w-5xl bg-white rounded-xl shadow-md p-8">
          <form @submit.prevent="store.updateStudentInfo(studentId, student)">
            <!-- Form Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <!-- Student Name -->
              <div>
                <label class="block text-lg font-medium text-gray-700 mb-2">اسم الطالب</label>
                <input
                  type="text"
                  v-model="student.student_name"
                  placeholder="أدخل اسم الطالب"
                  class="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                />
              </div>
  
              <!-- Gender -->
              <div>
                <label class="block text-lg font-medium text-gray-700 mb-2">الجنس</label>
                <select
                  v-model="student.gender"
                  class="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                >
                  <option value="ذكر">ذكر</option>
                  <option value="أنثى">أنثى</option>
                </select>
              </div>
  
              <!-- Grade -->
              <div>
                <label class="block text-lg font-medium text-gray-700 mb-2">الصف</label>
                <select type="text" v-model="student.grade" placeholder="أدخل الصف" class="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg">
                    <option v-for="grade in gradeOptions" :key="grade" :value="grade">{{ grade }} </option>
                </select>
              </div>
  
              <!-- Group -->
              <div>
                <label class="block text-lg font-medium text-gray-700 mb-2">الشعبة</label>
                <select type="text" v-model="student.group" placeholder="ادخل الشعبة" class="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg">
                    <option v-for="group in groupOptions" :key="group" :value="group">{{ group }} </option>
                </select>
              </div>
  
              <!-- Blood Type -->
              <div>
                <label class="block text-lg font-medium text-gray-700 mb-2">فصيلة الدم</label>
                <input
                  type="text"
                  v-model="student.blood_type"
                  placeholder="أدخل فصيلة الدم"
                  class="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                />
              </div>
  
              <!-- Residency Place -->
              <div>
                <label class="block text-lg font-medium text-gray-700 mb-2">مكان الإقامة</label>
                <input
                  type="text"
                  v-model="student.residancy_place"
                  placeholder="أدخل مكان الإقامة"
                  class="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                />
              </div>
  
              <!-- Father's Name -->
              <div>
                <label class="block text-lg font-medium text-gray-700 mb-2">اسم الأب</label>
                <input
                  type="text"
                  v-model="student.father_name"
                  placeholder="أدخل اسم الأب"
                  class="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                />
              </div>
  
              <!-- Father's Number -->
              <div>
                <label class="block text-lg font-medium text-gray-700 mb-2">رقم هاتف الأب</label>
                <input
                  type="tel"
                  v-model="student.father_number"
                  placeholder="أدخل رقم هاتف الأب"
                  class="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                />
              </div>
  
              <!-- Father's Profession -->
              <div>
                <label class="block text-lg font-medium text-gray-700 mb-2">مهنة الأب</label>
                <input
                  type="text"
                  v-model="student.father_profession"
                  placeholder="أدخل مهنة الأب"
                  class="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                />
              </div>
  
              <!-- Profession Work Place -->
              <div>
                <label class="block text-lg font-medium text-gray-700 mb-2">مكان العمل</label>
                <input
                  type="text"
                  v-model="student.profession_work_place"
                  placeholder="أدخل مكان العمل"
                  class="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                />
              </div>
  
              <!-- Relative Type -->
              <div>
                <label class="block text-lg font-medium text-gray-700 mb-2">نوع القريب</label>
                <input
                  type="text"
                  v-model="student.relative_type"
                  placeholder="أدخل نوع القريب"
                  class="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                />
              </div>
  
              <!-- Work Condition -->
              <div>
                <label class="block text-lg font-medium text-gray-700 mb-2">حالة العمل</label>
                <input
                  type="text"
                  v-model="student.father_work_condition"
                  placeholder="أدخل حالة العمل"
                  class="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                />
              </div>
  
              <!-- Mother's Name -->
              <div>
                <label class="block text-lg font-medium text-gray-700 mb-2">اسم الأم</label>
                <input
                  type="text"
                  v-model="student.mother_name"
                  placeholder="أدخل اسم الأم"
                  class="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                />
              </div>
  
              <!-- Mother's Profession -->
              <div>
                <label class="block text-lg font-medium text-gray-700 mb-2">مهنة الأم</label>
                <input
                  type="text"
                  v-model="student.mother_profession"
                  placeholder="أدخل مهنة الأم"
                  class="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                />
              </div>
  
              <!-- Does Student Have Disease -->
              <div>
                <label class="block text-lg font-medium text-gray-700 mb-2">هل يعاني الطالب من مرض؟</label>
                <select
                  v-model="student.does_student_has_disease"
                  class="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                >
                  <option value="نعم">نعم</option>
                  <option value="لا">لا</option>
                </select>
              </div>
  
              <!-- Disease Type -->
              <div>
                <label class="block text-lg font-medium text-gray-700 mb-2">نوع المرض</label>
                <input
                  type="text"
                  v-model="student.disease_type"
                  placeholder="أدخل نوع المرض"
                  class="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                />
              </div>
  
              <!-- Note -->
              <div>
                <label class="block text-lg font-medium text-gray-700 mb-2">ملاحظات</label>
                <textarea
                  v-model="student.note"
                  placeholder="أدخل ملاحظات"
                  class="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                ></textarea>
              </div>
  
              <!-- Student Birthdate -->
              <div>
                <label class="block text-lg font-medium text-gray-700 mb-2">تاريخ ميلاد الطالب</label>
                <input
                  type="date"
                  v-model="student.student_birthdate"
                  class="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                />
              </div>
  
              <!-- Student ID Photo -->
              <!-- <div>
                <label class="block text-lg font-medium text-gray-700 mb-2">صورة هوية الطالب</label>
                <input
                  type="file"
                  @change="handleFileUpload"
                  class="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                />
              </div> -->
            </div>
  
            <!-- Save Button -->
            <div class="mt-8">
              <button
                type="submit"
                class="w-full py-4 rounded-lg bg-indigo-500 text-white text-lg font-semibold shadow-md hover:bg-indigo-600 transition"
              >
                حفظ المعلومات
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </template>
  
<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useStudents } from '~/store/useStore';
import { usePocketbase } from '~/pocketbase';
// replace inputs with select make the update function
  
const pb = usePocketbase()
const route = useRoute();
const studentId = route.params.id;
const store = useStudents();
const student = reactive({
    student_name: '',
    gender: '',
    grade: '',
    group: '',
    blood_type: '',
    residancy_place: '',
    father_name: '',
    father_number: '',
    father_profession: '',
    profession_work_place: '',
    relative_type: '',
    father_work_condition: '',
    mother_name: '',
    mother_profession: '',
    does_student_has_disease: '',
    disease_type: '',
    note: '',
    student_birthdate: '',
    // student_id_photo: '',
});

const gradeOptions = computed(() => {
    return [...new Set(store.grades.map((student) => student.grade))]
});

const groupOptions = computed(() => {
    return [...new Set(store.groups.map((student) => student.group))]
});
  
const fetchStudent = async (id) => {
  try {
    const data = await pb.collection("students").getOne(id);
    Object.assign(student, data); // Update the reactive `student` object
  } catch (error) {
    console.error("Error fetching student:", error);
  }
}
  
//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     student.value.student_id_photo = file;
//   };
  
onMounted(() => {
    fetchStudent(studentId);
    store.fetchGroups()
    store.fetchGrades()
})
</script>