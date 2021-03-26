<template>
  <section class="stories">
    <div class="container flex flex-col items-center w-full">
      <div class="stories__title flex items-center justify-center mb-10">
        <img src="@/assets/img/span.svg" alt="span" class="mr-4" />
        <h3
          class="stories__title_text text-black2 font-bold text-center text-40"
        >
          Истории успеха
        </h3>
        <img src="@/assets/img/span.svg" alt="span" class="ml-4" />
      </div>
      <div
        class="all-stories flex flex-col w-full"
        v-for="(story, idx) in stories"
        :key="`${story.title}_${idx}`"
      >
        <Story :leftSide="idx % 2 === 0" :story="story" />
      </div>
    </div>
  </section>
</template>
<script>
import Story from "@/components/Story";
export default {
  components: {
    Story,
  },
  data() {
    return {
      stories: [
        {
          img: require("../assets/img/story1.png"),
          title: "Пекарня “Русские традиции”",
          subtitle:
            "Как говорит сам Владимир: «мне хотелось, чтобы все узнали, что такое русская кухня», «обьяснить, что она жива».",
          text:
            "Чтобы мини-пекарня стала рентабельным бизнесом, необходимы строгие расчеты, учет рисков и перспектив, анализ рынка, налаживание сбыта.",
        },
        {
          img: require("../assets/img/story2.png"),
          title: "Автомастерская",
          subtitle:
            "Первые дни независимости. Когда не нужно рано вставать, когда не нужно отпрашиваться, что бы успеть съездить в магазин, когда удобно.",
          text:
            "Встреча в городе Н с моими будущими партнерами была плодотворной. Я не смог заснуть до пяти утра – не потому что не спалось, но потому что мысли о будущих перспективах просто взрывали мой мозг.",
        },
        {
          img: require("../assets/img/story3.png"),
          title: "Салон красоты “Эмират”",
          subtitle:
            "Когда же появилась возможность открыть свой бизнес, я рассматривала различные варианты, изучала всевозможные направления.",
          text: "",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.stories {
  margin-bottom: 180px;
}
</style>
