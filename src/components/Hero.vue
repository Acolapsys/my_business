<template>
  <section class="hero pt-16">
    <div class="container">
      <div class="img mb-16">
        <img src="@/assets/img/logo.svg" alt="Лого" />
      </div>
      <p class="content text-black2 font-bold mobile-max:text-center">
        Мой бизнес - цифровая платформа для тех, кто хочет открыть и развивать
        свой бизнес
      </p>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.content {
  font-size: 35px;
  line-height: 111.4%;
  max-width: 576px;
  @screen mobile-max {
    font-size: 26px;
  }
}
.hero {
  background-image: url(../assets/img/hero_background.png);
  background-position: center;
  // background-size: cover;
  padding-bottom: 433px;
}
</style>
