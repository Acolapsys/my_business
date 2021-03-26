<template>
  <div class="home_page">
    <Hero />

    <Question />
    <Advantages />
    <Stories />
  </div>
</template>
<script>
import Hero from "@/components/Hero";
import Question from "@/components/Question";
import Advantages from "@/components/Advantages";
import Stories from "@/components/Stories";
export default {
  components: {
    Hero,
    Question,
    Advantages,
    Stories,
  },
};
</script>
