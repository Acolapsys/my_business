<template>
  <div class="home_page">
    <Hero />
    <Question />
    <Advantages />
    <Stories />
    <Helper />
  </div>
</template>
<script>
import Hero from "@/components/HomePage/Hero";
import Question from "@/components/HomePage/Question";
import Advantages from "@/components/HomePage/Advantages";
import Stories from "@/components/HomePage/Stories";
import Helper from "@/components/HomePage/Helper";
export default {
  components: {
    Hero,
    Question,
    Advantages,
    Stories,
    Helper,
  },
};
</script>
