<template>
  <div>
    <form name="contact" class="form" action="https://formspree.io/xgenzlnd" method="POST">
      <input type="text" name="name" placeholder="Nome completo" required />
      <input type="text" name="email" placeholder="Email" required />
      <select id="subscription" name="subscription">
        <option value="Free" :selected="getIsSelected('free')">Gratuíto</option>
        <option value="Premium" :selected="getIsSelected('premium')">Premium</option>
      </select>
      <textarea name="message" placeholder="Mensagem"></textarea>
      <input type="submit" class="primary-btn" />
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    selectedPlan: state => state.pricing.selectedPlan
  }),
  methods: {
    getIsSelected(value) {
      return this.selectedPlan === value;
    }
  }
};
</script>

<style lang="less" scoped>
.form {
  display: flex;
  flex-direction: column;

  input,
  select,
  textarea {
    font-family: inherit;
    margin: 2vh 8vw;
    min-height: 5vh;
    border: 1px solid @grey;
    padding: 10px;

    &:focus {
      outline: 1px solid @primary !important;
    }
  }

  input[type="submit"] {
    color: @primary;
    outline: none;
    border: 1px solid @primary;
    cursor: pointer;

    &:hover {
      color: white;
    }
  }
}
</style>