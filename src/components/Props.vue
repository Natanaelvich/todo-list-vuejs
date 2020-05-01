<template>
  <div class="counter">
    <h1>Component Usuario</h1>
    <p>Esse é um componente muito legal</p>
    <button @click="alterName">Alterar Nome</button>
    <hr />

    <div class="boxes">
      <NameUser :name="name" />
      <DataUser />
    </div>
  </div>
</template>

<script>
import NameUser from "./NameUser.vue";
import DataUser from "./DataUser.vue";
export default {
  name: "Counter",

  components: {
    NameUser,
    DataUser,
  },

  data() {
    return {
      name: "Lima",
    };
  },

  methods: {
    alterName() {
      this.name = "Natanel";
    },
  },
};
</script>

<style scoped>
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #303736;
  color: #f5f5f5;
  padding: 6px 10px;
  border-radius: 10px;
  width: 95%;
  margin: 0 auto;

  -webkit-box-shadow: 0px 5px 17px 0px rgba(184, 167, 184, 1);
  -moz-box-shadow: 0px 5px 17px 0px rgba(184, 167, 184, 1);
  box-shadow: 0px 5px 17px 0px rgba(184, 167, 184, 1);
}
hr {
  width: 100%;
}
p {
  font-weight: bold;
  color: #ddd;

  margin-bottom: 20px;
}
button {
  background: transparent;
  border: 0;
  padding: 5px 10px;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 10px;
}

.boxes {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}
</style>
