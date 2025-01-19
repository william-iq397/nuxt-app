import { acceptHMRUpdate, defineStore } from "pinia"
import {usePocketbase} from './pocketbase.js'
export const useStudents = defineStore("useStudents", {
    state: () => ({
        students: [],
        accountantStudents: [],
        signleStudent: {},
        student: {
            student_name: '',
            gender: '',
            grade: '',
            group: '',
            phone_number: '',
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
            academic_year: '',
            student_id_photo: '',
            amount_paid: '',
            payment_method: '',
            payment_type: '',
            discount_percentage: '',
            receive_payment_date: '',
            total_amount: '',
            is_financial_information_filled: false,
          },
        teachers: [],
        teacher: {
          teacher_name: '',
          gender: '',
          grade: '',
          class_number: '',
          curriculum: '',
          phone_number: '',
        },

        groups: [],
        grades: [],
        roles: [],
        academic_years: [],


        filter: "",
    }),
    getters: {
        getStudentsRequests: (state) => state.studentsRequests,
        getStudents: (state) => state.students,
    },
    actions: {
    // fetch students requests

    async fetchStudent(id) {
        const pb = usePocketbase()
        const student = await pb.collection('students').get(id)
        this.signleStudent = student
    },

    async fetchStudents() {
      const pb = usePocketbase();
    
      try {
          const students = await pb.collection('students').getFullList();
          this.students = students;
      } catch (err) {
          console.error("Unexpected error fetching students:", err);
      }
    },

    async fetchGroups() {
      const pb = usePocketbase();
    
      try {
          const groups = await pb.collection('groups').getFullList();
          this.groups = groups;
      } catch (err) {
          console.error("Unexpected error fetching groups:", err);
      }
    },

    async fetchGrades() {
      const pb = usePocketbase();
    
      try {
          const grades = await pb.collection('grades').getFullList();
          this.grades = grades;
      } catch (err) {
          console.error("Unexpected error fetching grades:", err);
      }
    },

    async fetchRoles() {
      const pb = usePocketbase();
      try {
        const roles = await pb.collection('roles').getFullList();
        this.roles = roles;
      } catch (e) {
        console.error("Unexpected error fetching roles:", e);
      }
    },

        // add new studnet
        async addStudent() {
            // add the student object here
            const student = {
                student_name: this.student.student_name,
                gender: this.student.gender,
                grade: this.student.grade,
                group: this.student.group,
                blood_type: this.student.blood_type,
                phone_number: this.student.phone_number,
                residancy_place: this.student.residancy_place,
                father_name: this.student.father_name,
                father_number: this.student.father_number,
                father_profession: this.student.father_profession,
                profession_work_place: this.student.profession_work_place,
                relative_type: this.student.relative_type,
                father_work_condition: this.student.father_work_condition,
                mother_name: this.student.mother_name,
                mother_profession: this.student.mother_profession,
                does_student_has_disease: this.student.does_student_has_disease,
                disease_type: this.student.disease_type,
                note: this.student.note,
                student_birthdate: this.student.student_birthdate,
                // student_id_photo: this.student.student_id_photo,
                payment_method: this.student.payment_method,
                discount_percentage: this.student.discount_percentage,
                is_financial_information_filled: this.student.is_financial_information_filled,
                academic_year: this.student.academic_year,
            }

            this.isValid()

            const pb = usePocketbase()
            const { id } = await pb.collection('students').create(student);
            navigateTo(`/studentinformation/${id}`)
        },

        async updatePaymentInfo(id, student) {
          const pb = usePocketbase();
        
          try {
            // Prepare updated data from form values
            const updatedData = {
              payment_method: student.payment_method,
              amount_paid: student.amount_paid,
              payment_type: student.payment_type,
              receive_payment_date: student.receive_payment_date,
              total_amount: student.total_amount,
              discount_percentage: student.discount_percentage,
              is_financial_information_filled: true,
            };
        
            // Send the updated student data back to PocketBase
            await pb.collection("students").update(id, updatedData);
        
            // Optionally, refetch the updated data
            student = await pb.collection("students").getOne(id);
        
            // Navigate to the updated student's information page
            navigateTo(`/studentinformation/${id}`);
            this.fetchStudents()
          } catch (error) {
            console.error("Error updating student payment info:", error);
            alert("Failed to update student payment information. Please try again.");
          }
        },

        async updateStudentInfo(studentId, student) {
            const pb = usePocketbase();
            try {
              // Prepare updated data from form values
              const updatedData = {
                  student_name: student.student_name,
                  gender: student.gender,
                  grade: student.grade,
                  group: student.group,
                  phone_number: student.phone_number,
                  blood_type: student.blood_type,
                  residancy_place: student.residancy_place,
                  father_name: student.father_name,
                  father_number: student.father_number,
                  father_profession: student.father_profession,
                  profession_work_place: student.profession_work_place,
                  relative_type: student.relative_type,
                  father_work_condition: student.father_work_condition,
                  mother_name: student.mother_name,
                  mother_profession: student.mother_profession,
                  does_student_has_disease: student.does_student_has_disease,
                  disease_type: student.disease_type,
                  note: student.note,
                  student_birthdate: student.student_birthdate,
                  academic_year: student.academic_year,
                } 
              // Send the updated student data back to PocketBase
              await pb.collection("students").update(studentId, updatedData)
              // Optionally, refetch the updated data
              student = await pb.collection("students").getOne(studentId)
              navigateTo(`/studentinformation/${studentId}`)
        } catch (error) {
          console.error("Error updating student info:", error)
          alert("Failed to update student information. Please try again.")
        }
      },

      async fetchAccountantStudents() {
          const pb = usePocketbase()
            try {
                const students = await pb.collection('students').getFullList( {
                    filter: 'is_financial_information_filled = false'
                });
                this.accountantStudents = students;
            } catch (error) {
                console.error('Error fetching students:', error);
            }
      },

      async getActiveYearStudents() {
        const activeYear = await pb.collection('academic_years').getFirstListItem('is_active = true')
        const students = await pb.collection('students').getFullList({
            filter: `academic_year = "${activeYear.id}"`, // if didn't work try to remove the id
        })
      },

        async fetchAcademicYears() {
          const pb = usePocketbase()

          try {
              const academicYears = await pb.collection('academic_years').getFullList()
              this.academic_years = academicYears
              } catch (error) {
              console.error('Error fetching academic years:', error)
            }
        },

        async deleteStudent(id, table) {
            const pb = usePocketbase()
            const student = await pb.collection(table).delete(id)
                
            this.fetchStudents()
        },

        // fetch teachers functions
        async fetchTeachers() {
            const pb = usePocketbase();
        
            try {
              const teachers = pb.collection('teachers').getFullList();
              this.teachers = teachers;
            } catch (err) {
                console.error("Unexpected error fetching teachers:", err);
            }
        },
        

        async addTeacher() {
            const pb = usePocketbase();
            const teacher = {
              teacher_name: this.teacher.teacher_name,
              gender: this.teacher.gender,
              grade: this.teacher.grade,
              class_number: this.teacher.class_number,
              curriculum: this.teacher.curriculum,
              phone_number: this.teacher.phone_number,
            }

            try {
              const { id } = await pb.collection('teachers').create(teacher)
              // navigateTo(`/teacherinformation/${id}`)
            } catch (error) {
              console.error("Error adding teacher:", error)
            }
        },

        async deleteTeacher(id) {
            const supabase = useSupabaseClient();
            const { data, error } = await supabase
            .from('teachers')
            .delete()
            .eq('id', id)


            this.fetchTeachers()

        },

        async updateTeacher(id, teacher) {
            const supabase = useSupabaseClient();
            const { data, error } = await supabase
                .from('teachers')
                .update({
                    id: id,
                    teacher_name: teacher.teacher_name,
                    teacher_description: teacher.teacher_description,
                    teacher_image: teacher.teacher_image,
              
                })
                .eq('id', id)
                .select()

            console.log("Student updated successfully:", data);
        
            this.fetchTeachers();
        },

        async isValid() {
            const errors = [];
      
            if (!this.student.student_name.trim()) {
              errors.push("Student name is required.");
            }
            if (!["male", "female", "other"].includes(this.student.gender)) {
              errors.push("Gender must be 'male', 'female', or 'other'.");
            }
            if (!this.student.grade || isNaN(this.student.grade) || this.student.grade < 1) {
              errors.push("Grade must be a positive number.");
            }
            if (!this.student.blood_type.trim()) {
              errors.push("Blood type is required.");
            }
            if (!this.student.residancy_place.trim()) {
              errors.push("Residency place is required.");
            }
            if (!this.student.father_name.trim()) {
              errors.push("Father's name is required.");
            }
            if (!/^\d{10,15}$/.test(this.student.father_number)) {
              errors.push("Father's number must be a valid phone number (10-15 digits).");
            }
            if (!this.student.father_profession.trim()) {
              errors.push("Father's profession is required.");
            }
            if (!this.student.profession_work_place.trim()) {
              errors.push("Profession work place is required.");
            }
            if (!this.student.relative_type.trim()) {
              errors.push("Relative type is required.");
            }
            if (!this.student.father_work_condition.trim()) {
              errors.push("Father's work condition is required.");
            }
            if (!this.student.mother_name.trim()) {
              errors.push("Mother's name is required.");
            }
            if (!this.student.mother_profession.trim()) {
              errors.push("Mother's profession is required.");
            }
            if (this.student.does_student_has_disease && !this.student.disease_type.trim()) {
              errors.push("Disease type is required if the student has a disease.");
            }
            if (!this.student.student_birthdate || isNaN(new Date(this.student.student_birthdate).getTime())) {
              errors.push("Student birthdate is invalid or missing.");
            }
            if (!["cash", "card", "online"].includes(this.student.payment_method.toLowerCase())) {
              errors.push("Payment method must be 'cash', 'card', or 'online'.");
            }
            if (
              this.student.discount_percentage !== null &&
              (isNaN(this.student.discount_percentage) ||
                this.student.discount_percentage < 0 ||
                this.student.discount_percentage > 100)
            ) {
              errors.push("Discount percentage must be a number between 0 and 100.");
            }
      
            if (errors.length > 0) {
              return { valid: false, errors };
            }
      
            return { valid: true };
          },
        },
    },
)

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStudents, import.meta.hot))
}