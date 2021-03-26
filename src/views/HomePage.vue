<template>
  <div class="home_page">
    <Hero />

    <Question />
    <Advantages />
    <Stories />
    <Helper />
    <Footer />
  </div>
</template>
<script>
import Hero from "@/components/Hero";
import Question from "@/components/Question";
import Advantages from "@/components/Advantages";
import Stories from "@/components/Stories";
import Helper from "@/components/Helper";
import Footer from "@/components/Footer";
export default {
  components: {
    Hero,
    Question,
    Advantages,
    Stories,
    Helper,
    Footer,
  },
};
</script>
