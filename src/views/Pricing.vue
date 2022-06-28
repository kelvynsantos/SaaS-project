<template>
  <div :class="menuOpen ? 'no-space' : 'top-spacing'">
    <div class="container">
      <div class="heading">
        <h1>Preços</h1>
        <p>VuFly fornece um modelo de assinatura projetado para suas necessidades. Escolha a avaliação gratuita de 30 dias e mude para Premium por apenas 20$ ou tenha uma experiência personalizada por apenas 50$</p>
      </div>
      <div class="card-container">
        <PricingCard v-for="item in pricingItems" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import CONFIG from "../config";
import PricingCard from "../components/PricingCard";
import { mapState } from "vuex";
export default {
  name: "Pricing",
  components: {
    PricingCard
  },
  computed: mapState({
    menuOpen: state => state.header.menuOpen
  }),
  data: function() {
    return {
      pricingItems: CONFIG.pricingModels
    };
  },
  metaInfo: {
    title: "VuFly",
    titleTemplate: "%s | Preco",
    meta: [
      {
        name: "description",
        content:
          "Our pricing plan allows you to try the software for 30 days before paying $20 for the monthly subscription. What are you waiting for?"
      }
    ]
  }
};
</script>

<style lang="less" scoped>
.container {
  margin-bottom: 5vh;
  display: flex;
  flex-direction: column;

  .heading {
    height: 45vh;
    background-image: url("../assets/images/Pricing_BG.png");
    background-repeat: round;
    text-align: center;
    color: white;
    border-radius: 0 0 80% 80%/0 0 50% 50%;
    h1 {
      font-size: 46px;
      font-weight: 400;
    }

    @media @ipadPro {
      height: 20vh;
    }
  }

  .card-container {
    display: flex;
    justify-content: space-evenly;
    padding: 8vh 15vw 0 15vw;

    @media @ipadPro {
      padding: 4vh 5vw;
    }
  }

  @media @mobileL {
    .heading {
      height: 35vh;

      h1 {
        font-size: 40px;
        margin-bottom: 0;
      }

      p {
        padding: 0 2vw;
        margin-top: 2vh;
      }
    }

    .card-container {
      flex-direction: column;
      align-items: center;
      padding: 5vh 5vw;
    }
  }

  @media @tablet {
    .heading {
      height: 30vh;
    }

    .card-container {
      padding: 5vh 5vw;
    }
  }
}
</style>
