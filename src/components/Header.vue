<template>
  <div>
    <header
      class="header pt-8 mobile-max:bg-red mobile-max:text-white mobile-max:py-4"
    >
      <div class="max-w-screen-xl px-10 mx-auto">
        <!-- desktop view -->
        <div class="flex items-center justify-between mobile-max:hidden">
          <nav class="nav flex items-center mobile-max:flex-col">
            <router-link
              to="/profile"
              class="rounded-50 text-white bg-red px-8 py-2 mr-7"
              >Личный кабинет</router-link
            >
            <router-link to="/" class="font-bold">Каталог услуг</router-link>
          </nav>
          <div class="helper flex items-center">
            <img src="@/assets/img/rocket.svg" alt="Онлайн помощник" />
            <span class="text-red ml-4 font-bold">Онлайн помощник</span>
          </div>
        </div>
        <!-- mobile view -->
        <div class="flex tablet:hidden">
          <div class="menu_trigger">
            <div @click="openMobileMenu">
              <svg
                :style="{ cursor: 'pointer' }"
                width="16"
                height="17"
                viewBox="0 0 16 14"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="16" height="2" rx="1" />
                <rect y="6" width="16" height="2" rx="1" />
                <rect y="12" width="16" height="2" rx="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div
      class="mobile-header"
      :class="{ 'mobile-header-active': isMobileHeaderActive }"
    >
      <div class="mobile-header__top">
        <svg
          :style="{ cursor: 'pointer' }"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="closeMobileMenu"
        >
          <rect
            x="3.05042"
            y="1.49304"
            width="16"
            height="2"
            rx="1"
            transform="rotate(45 3.05042 1.49304)"
            fill="#1E3E64"
          />
          <rect
            x="1.63611"
            y="12.8066"
            width="16"
            height="2"
            rx="1"
            transform="rotate(-45 1.63611 12.8066)"
            fill="#1E3E64"
          />
        </svg>
      </div>
      <div class="links-mobile">Links</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      isMobileHeaderActive: false,
    };
  },
  methods: {
    openMobileMenu() {
      this.isMobileHeaderActive = true;
      document.documentElement.style.overflow = "hidden";
    },
    closeMobileMenu() {
      this.isMobileHeaderActive = false;
      document.documentElement.style.overflow = "auto";
    },
  },
};
</script>
<style lang="scss" scoped>
.mobile-header {
  display: none;
  &__top {
    display: flex;
    border-bottom: 1px solid #d5d7db;
    padding: 21px 16px 25px 16px;
    svg {
      margin-right: 10px;
    }
  }
  .links-mobile {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    div,
    a {
      padding: 24px 16px;
      border-bottom: 1px solid #d5d7db;
      color: #1e3e64;
    }
  }
  @screen mobile-max {
    transform: translateX(-100%);
    transition: transform 0.4s;
    display: block;
    z-index: 15;
    background: #fff;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 80%;
    border-radius: 0 8px 8px 0;
  }
}
.mobile-header-active {
  transform: translateX(0);
}
</style>
