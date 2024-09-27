import {defineStore} from 'pinia'
import { ref, onMounted } from 'vue';
import {useRouter} from 'vue-router'
import {useFirebaseAuth} from 'vuefire'
import { signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "firebase/auth";

export const useAuthStore = defineStore('auth', () => {
    const router = useRouter();

    const auth = useFirebaseAuth();
    const currentError = ref('');
    const currentUser = ref(null);
    const userName = ref(null);
    const successMessage = ref('');
    const loading = ref(false);

    const errors = {
        'auth/invalid-login-credentials' : 'Credenciales inválidas',
        'auth/wrong-password' : 'Contraseña incorrecta',
        'auth/too-many-requests' : 'Demasiados intentos para ingresar'
    }

    onMounted(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                currentUser.value = user;
                userName.value = currentUser.value.email;
            }
        })

    })
    
    const login = (values) => {
        loading.value = true;

        signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
            // Signed in 
            currentUser.value = userCredential.user;
            //console.log(currentUser.value);
            successMessage.value = 'Sesión iniciada correctamente'
            setTimeout(() => {
                successMessage.value = '';
                router.push({name: 'current-catalog'})
            }, 3000);

        })
        .catch((error) => {
            currentError.value = errors[error.code];
            console.log(error.code);
        })
        .finally(() => {
            loading.value = false;
        })
    }

    const logout = () => {
        if(confirm('Se cerrará la sesión como administrador')){
            signOut(auth).then(() => {
                // Sign-out successful.
                currentUser.value = null;
                successMessage.value = 'Sesión de usuario cerrada';
                setTimeout(() => {
                    successMessage.value = '';
                    router.push({name: 'login'})
                }, 3000);
    
            }).catch((error) => {
                console.log(error);
            });
        }

    }
    
    return{
        login,
        currentUser,
        currentError,
        userName,
        logout,
        loading,
        successMessage
    }
})