<template>
  <div :class="menuOpen ? 'no-space' : 'top-spacing'">
    <AboutCard />
  </div>
</template>

<script>
import AboutCard from "../components/AboutCard";
import { mapState } from "vuex";
export default {
  components: {
    AboutCard
  },
  computed: mapState({
    menuOpen: state => state.header.menuOpen
  }),
  metaInfo: {
    title: "VuFly",
    titleTemplate: "%s | Sobre nós",
    meta: [
      {
        name: "description",
        content:
          "Nossa Missão é atender as necessidades do negócio da forma mais simples possível. Somos um grupo de 3 trabalhando incansavelmente para resolver seus obstáculos diários"
      }
    ]
  }
};
</script>
