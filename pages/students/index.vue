 <template>
    <div class="w-full">
        <AccountantTable/>
    </div> 
</template>

<script setup>
import { useStudents } from '~/store/useStore';


const store = useStudents()

onMounted(() => {
    store.fetchStudents()
})
</script>
