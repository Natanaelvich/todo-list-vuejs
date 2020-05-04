<template>
  <button @dblclick="doneTask">
    <div
      class="task"
      :style="[
        isActive
          ? { background: '#f21627' }
          : {
              background: '#545455',
              boxShadow: '-8px 0px 0px 0px #414142',
              textDecoration: 'line-through solid #6F6F70',
              color: '#6F6F70',
            },
      ]"
    >
      <h1>{{ task }}</h1>
    </div>
  </button>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: String,
  },
  data() {
    return {
      isActive: true,
    };
  },
  methods: {
    doneTask: function() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style>
button {
  border: 0;
  cursor: pointer;
  border-radius: 10px;
  filter: brightness(100%);
}
button:hover {
  filter: brightness(70%);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
}
.task {
  border-radius: 10px;
  padding: 20px 30px;
  box-shadow: -8px 0px 0px 0px rgba(216, 3, 18, 1);
}
.task h1 {
  color: #faf8e0;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
