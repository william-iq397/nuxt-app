import { acceptHMRUpdate, defineStore } from "pinia"
import {usePocketbase} from './pocketbase.js'
export const useAuth = defineStore("useStudents", {
    state: () => ({
        useremail: "",
        phonenumber: "",
        password: "",
    }),
    actions: {
        async login() {
            const pocketbase = usePocketbase()
            const user = await pocketbase.login(this.useremail, this.password
            )
            console.log(user)
        }
    }
})
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuth, import.meta.hot))
}