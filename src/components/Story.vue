<template>
  <div
    class="story flex justify-between items-center mb-10 w-full mobile-max:flex-col"
    :class="{ 'flex-row-reverse': !leftSide }"
  >
    <div class="img" :class="{ 'mr-5': leftSide }">
      <img :src="story.img" alt="История успеха" />
    </div>
    <div class="content flex flex-col" :class="{ 'mr-5': !leftSide }">
      <h4 class="font-bold text-black2 mb-6 text-24">{{ story.title }}</h4>
      <div class="story__subtitle mb-4 flex">
        <img src="@/assets/img/arrows_right.svg" alt="Стрелка вправо" />
        <span class="text-red font-bold leading-5 ml-5">{{
          story.subtitle
        }}</span>
      </div>
      <p class="font-bold text-black2 mb-4" :class="{ 'h-16': !story.text }">
        {{ story.text }}
      </p>
      <router-link
        to="/"
        class="button text-white bg-blue py-3 px-6 leading-4 flex"
        ><span class="inline">Читать историю</span>
        <img src="@/assets/img/arrow.svg" alt="arrow" class="ml-3"
      /></router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    leftSide: {
      type: Boolean,
      default: true,
    },
    story: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  max-width: 580px;
}
.button {
  font-size: 14px;
  width: 180px;
}
.img {
  min-width: 340px;
}
</style>
