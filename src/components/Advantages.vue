<template>
  <section class="advantages pt-40">
    <div class="container flex flex-col items-center w-full">
      <div class="advantages__title flex items-center justify-center">
        <img src="@/assets/img/span.svg" alt="span" class="mr-4" />
        <h3
          class="advantages__title_text text-black2 font-bold text-center text-40 mobile-max:text-30"
        >
          Преимущества
        </h3>
        <img src="@/assets/img/span.svg" alt="span" class="ml-4" />
      </div>
      <div class="flex mobile-max:flex-col">
        <div
          class="item flex flex-col items-center mr-100 mobile-max:mr-0 mobile-max:mb-10"
          v-for="(item, idx) in items"
          :key="idx"
        >
          <div class="img mb-2">
            <img :src="item.img" alt="Преимущество" />
          </div>
          <span class="amount text-50 text-blue font-bold mb-2">{{
            item.amount
          }}</span>
          <span
            class="text-20 text-black font-bold text-center mobile-max:text-16"
            >{{ item.text }}</span
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          img: require("../assets/img/advantage1.svg"),
          amount: 482,
          text: "Организаций поддержки по Российской Федерации",
        },
        {
          img: require("../assets/img/advantage2.svg"),
          amount: 5240,
          text: "Оказано услуг государственной поддержки",
        },
        {
          img: require("../assets/img/advantage3.svg"),
          amount: 1360,
          text: "Зарегистрировано участников проекта",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.advantages {
  margin-bottom: 230px;
  &__title {
    margin-bottom: 72px;
    &_text {
      font-weight: bold;
      line-height: 122.4%;
    }
  }
  @screen mobile-max {
    margin-bottom: 100px;
    padding-top: 40px;
  }
}
.question {
  background-image: url(../assets/img/background2.png);
  background-position: center;
  padding-bottom: 130px;
}
.item {
  max-width: 260px;
  &:last-child {
    margin-right: 0;
  }
}
.img {
  height: 190px;
}
.amount {
  line-height: 122.4%;
}
</style>
