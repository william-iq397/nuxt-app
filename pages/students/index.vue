 <template>
    <div class="w-full">
        <StudentsTable/>
    </div> 
</template>

<script setup>
import StudentsTable from '../../components/students/StudentsTable.vue';
import { useStudents } from '~/store/useStore';

const store = useStudents()

onMounted(() => {
    store.fetchStudents()
})
</script>
