<template>
  <div class="user">
    <h1>Informações de Usuario</h1>
    <span>Varios detalhes</span>
    <span>Nome do Usuario : {{ name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
  },
};
</script>

<style scoped>
.user {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 10px 35px;
  background: #e3332e;
  margin: 10px 0;
}
h1 {
  font-size: 20px;
}
</style>
