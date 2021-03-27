<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss">
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
main {
  flex-grow: 1;
}
</style>
