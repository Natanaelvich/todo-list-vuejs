<template>
  <div class="task-list">
    <button
      v-for="task in tasks"
      :key="task.name"
      @dblclick="doneTask(task.name)"
    >
      <div
        class="task"
        :style="[
          //alter background and text style when task is done
          !task.done
            ? { background: '#f21627' }
            : {
                background: '#545455',
                boxShadow: '-8px 0px 0px 0px #414142',
                textDecoration: 'line-through solid #6F6F70',
                color: '#6F6F70',
              },
        ]"
      >
        <h1>{{ task.name }}</h1>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "Task",

  props: {
    tasks: Array,
  },

  data() {
    return {
      isActive: true,
    };
  },

  methods: {
    // done a task
    doneTask: function(name) {
      this.tasks.map((t) => {
        if (t.name === name) {
          t.done = !t.done;
        }
      });
    },
  },
};
</script>

<style>
.task-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  margin-bottom: 30px;
  margin-top: 40px;
  padding: 0 40px;
}
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
