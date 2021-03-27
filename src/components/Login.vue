<template>
  <div class="login mobile-max:py-6">
    <div class="container">
      <div class="flex justify-center items-center">
        <form class="login_form flex flex-col" @submit.prevent="signIn">
          <h3 class="font-bold text-24 mb-6 text-black2">Авторизация</h3>

          <div class="user flex flex-col mb-4">
            <label for="user">Введите имя</label>
            <input
              type="text"
              name="user"
              v-model="user"
              @input="nameError = ''"
            />
            <span class="text-red py-2 px-2 text-12" v-if="nameError">{{
              nameError
            }}</span>
          </div>
          <div class="password flex flex-col mb-4">
            <label for="password">Введите пароль</label>
            <input
              type="password"
              name="password"
              v-model="password"
              @input="passwordError = ''"
            />
            <span class="text-red py-2 px-2 text-12" v-if="passwordError">{{
              passwordError
            }}</span>
          </div>
          <div class="buttons flex w-full justify-between items-center">
            <button
              type="submit"
              class="rounded-50 text-white bg-red px-8 py-1 mr-7"
            >
              Войти
            </button>
            <button @click.prevent="close" class="rounded-50 border px-8 py-1">
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      user: "",
      password: "",
      nameError: "",
      passwordError: "",
    };
  },
  methods: {
    async signIn() {
      const authData = {
        user: this.user,
        password: this.password,
      };
      this.nameError = !this.user ? "Введите имя" : "";
      this.passwordError =
        this.password.length < 6
          ? "Пароль должен быть не меньше 6 символов"
          : "";

      if (this.nameError || this.passwordError) {
        return;
      }

      try {
        await this.$store.dispatch("signIn", authData).then(() => {
          this.$router.push("/profile");
        });
      } catch (e) {
        this.passwordError = e.message;
      }
    },
    close() {
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  min-height: 100%;
  &_form {
    width: 320px;
  }
}
label {
  @apply text-16 block text-black2;
}
input {
  @apply border p-2 rounded-xl;
}
button {
  @apply outline-none;
}
</style>
