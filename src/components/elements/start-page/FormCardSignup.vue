<template>
  <div class="wrapper">
    <h2>ВХОД ДЛЯ КЛИЕНТОВ</h2>
    <form @submit.prevent="handleSubmit" class="loginform">
      <Input id="userName" type="text" placeholder="Имя" v-model="userName" />
      <Input
        id="Email"
        type="email"
        placeholder="Почта"
        required
        v-model="email"
      />
      <Input
        id="Password"
        placeholder="Пароль"
        type="password"
        required
        v-model="password"
        autocomplete="current-password"
      />
      <Bttn type="submit" priority="extra"> Войти </Bttn>
    </form>
  </div>
</template>

<script>
import Input from "@/components/elements/InputBase.vue";
import Bttn from "@/components/elements/ButtonBase.vue";
import { ref } from "vue";
// import useSignup from "@/composables/useSignup";
import { projectAuth } from "@/firebase/confiq";

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

export default {
  name: "FormCardSignup",
  components: {
    Input,
    Bttn
  },
  setup() {
    const { error, signup } = useSignup;
    //refs
    const userName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await signup(email.value, password.value, userName.value);
    };
    return {
      userName,
      email,
      password,
      handleSubmit,
      error
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/styles.scss";

//FIXME: не работает регистрация стилей -- приходится каждый раз сюда вставлять 😏
.wrapper {
  @include fixed-login;
  flex-direction: column;
  height: 15.5rem;
  justify-content: space-between;
  align-items: flex-start;
}
h2 {
  color: $neutral-300;
}
.loginform {
  @include fixed-login;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
