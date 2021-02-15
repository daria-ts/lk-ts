import { ref } from "vue";
import { projectAuth } from "../firebase/confiq";

const error = ref(null);

const signup = async (email, password) => {
  error.value = null;

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!res) {
      throw new Error("Пожалуйста, заполните поля корректно");
    }
    console.log(res.user);
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
