<template>
  <div class="profile py-6">
    <div class="container">
      <div class="flex">
        <form class="profile_form flex flex-col" @submit.prevent="saveProfile">
          <h3 class="font-bold text-24 mb-6 text-black2">Личный кабинет</h3>
          <div class="user flex flex-col mb-4">
            <label for="user">ФИО</label>
            <input type="text" name="user" v-model="userData.FIO" />
          </div>
          <div class="avatar flex flex-col mb-4">
            <label for="avatar">Ссылка на аватар</label>
            <input type="text" name="avatar" v-model="userData.avatar" />
          </div>
          <div class="profession flex flex-col mb-4">
            <label for="profession">Профессия</label>
            <input
              type="text"
              name="profession"
              v-model="userData.profession"
            />
          </div>
          <div class="mail flex flex-col mb-4">
            <label for="mail">E-mail</label>
            <input type="email" name="mail" v-model="userData.mail" />
          </div>
          <div class="phone_number flex flex-col mb-4">
            <label for="phoneNumber">Телефон</label>
            <input
              type="text"
              name="phoneNumber"
              v-model="userData.phoneNumber"
            />
          </div>
          <div class="buttons flex w-full justify-between items-center">
            <button
              type="submit"
              class="rounded-50 text-white bg-red px-8 py-1 mr-7"
            >
              Сохранить
            </button>
            <button @click.prevent="logout" class="rounded-50 border px-8 py-1">
              Выйти
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
  data() {
    return {
      userData: {
        FIO: "",
        avatar: "",
        profession: "",
        mail: "",
        phoneNumber: "",
      },
    };
  },
  created() {
    this.userData = this.$store.state.userData;
  },
  methods: {
    logout() {
      this.$store.dispatch("signOut");
      this.$router.push("/");
    },
    saveProfile() {
      this.$store.dispatch("saveUserData", this.userData);
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss" scoped>
.profile {
  min-height: 100%;
  &_form {
    width: 320px;
  }
}
label {
  @apply text-16 block text-black2;
}
input {
  @apply border p-2 rounded-xl outline-none;
}
button {
  @apply outline-none;
}
</style>
