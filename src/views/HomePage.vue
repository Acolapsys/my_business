<template>
  <div class="home_page">
    <Hero />

    <Question />
    <Advantages />
  </div>
</template>
<script>
import Hero from "@/components/Hero";
import Question from "@/components/Question";
import Advantages from "@/components/Advantages";
export default {
  components: {
    Hero,
    Question,
    Advantages,
  },
};
</script>
