<template>
  <section class="question pt-16">
    <div class="container flex flex-col items-center w-full">
      <h3 class="content text-black2 font-bold mb-10 mobile-max:text-center">
        Для начала работы ответьте на вопрос, есть ли у вас уже существующий
        бизнес?
      </h3>
      <div class="flex lg-max:flex-col">
        <div
          class="button bg-red text-white py-3 px-12 mr-7 text-22 text-center lg-max:mr-0 lg-max:mb-3 mobile-max:text-16 mobile-max:px-6"
        >
          <a href="/">Да, у меня уже есть бизнес</a>
        </div>
        <div
          class="button bg-blue text-white py-3 px-12 text-22 text-center mobile-max:text-16 mobile-max:px-6"
        >
          <a href="/">Нет, но планирую открыть</a>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.content {
  font-size: 30px;
  line-height: 111.4%;
  max-width: 552px;
  @screen mobile-max {
    font-size: 24px;
  }
}
.question {
  background-image: url(../../assets/img/background2.png);
  background-position: center;
  padding-bottom: 130px;
}
</style>
