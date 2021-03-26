<template>
  <footer class="footer py-8 bg-black3">
    <div class="max-w-screen-xl px-10 mx-auto">
      <div class="flex items-center justify-between">
        <nav class="footer__nav">
          <router-link
            :to="menuItem.link"
            class="text-white font-16 leading-6 font-bold tracking-small mr-11"
            v-for="(menuItem, idx) in navMenu"
            :key="`${menuItem.title}_${idx}`"
            >{{ menuItem.title }}</router-link
          >
        </nav>
        <div class="contacts">
          <a
            href="mailto:service@in-line.ru"
            class="text-white tracking-small font-16 leading-6 font-bold mr-8"
            >service@in-line.ru</a
          >
          <a
            href="tel: 88002007430"
            class="text-white tracking-small font-16 leading-6 font-bold"
            >8-800-200-74-30</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      navMenu: [
        { title: "Услуги  и поддержка", link: "/" },
        { title: "Сервисы для бизнеса", link: "/" },
        { title: "Общая информация", link: "/" },
        { title: "Защита бизнеса", link: "/" },
      ],
    };
  },
};
</script>
