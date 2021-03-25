<template>
  <header class="header pt-8">
    <div class="container">
      <div class="flex items-center justify-between">
        <nav class="nav">
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
    </div>
  </header>
</template>
