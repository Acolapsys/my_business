<template>
  <section class="helper">
    <div class="container flex justify-center">
      <div class="flex flex-col items-center max-w-263 text-center">
        <h3 class="title font-bold">Есть вопросы?</h3>
        <span class="info font-normal leading-6"
          >Задайте интересующие вас вопросы онлайн помощнику</span
        >
        <div
          class="button bg-red text-white py-3 px-12 font-bold text-16 leading-5"
        >
          <a href="/" class="flex items-center"
            ><img
              src="@/assets/img/rocket_outerline.svg"
              alt="Ракета"
              class="mr-2"
            />
            Онлайн помощник</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.helper {
  background-image: url(../assets/img/background3.svg);
  background-position: center;
  background-size: cover;
  padding: 50px 0 72px;
}
.title {
  font-size: 35px;
  line-height: 52px;
  margin-bottom: 7px;
}
.info {
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 29px;
}
</style>
