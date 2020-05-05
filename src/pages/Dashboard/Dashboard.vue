<template>
  <div class="dashboard">
    <div class="progress-tasks">
      <p>Tarefas concluidas</p>
      <Progress
        :transitionDuration="2000"
        :radius="50"
        :strokeWidth="10"
        :value="`${tasks.length}.00`"
        strokeColor="#f21627"
      >
      </Progress>
    </div>
    <div class="new-task">
      <input
        v-model="taskName"
        type="text"
        placeholder="Adicionar nova tarefa"
      />
      <button @click.prevent.stop="addTask">+</button>
    </div>

    <Task v-if="tasks.length > 0" :tasks="tasks" />
  </div>
</template>

<script>
import Task from "../../components/Taks/Task";
import Progress from "easy-circular-progress";
export default {
  components: {
    Task,
    Progress,
  },
  data() {
    return {
      taskName: "",
      tasks: [],
    };
  },
  methods: {
    addTask: function() {
      // checks if task already exists

      if (this.tasks.some((t) => t.name === this.taskName)) {
        return console.log("ja existe essa tarefa");
      }

      //add new task and clear input
      this.tasks.push({ name: this.taskName, done: false });
      this.taskName = "";
    },
  },
};
</script>

<style>
.dashboard {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.progress-tasks {
  display: flex;
  align-items: center;
}
.progress-tasks p {
  font-weight: bold;
}
.new-task {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.new-task input {
  width: 60%;
  padding: 10px 20px;
  border-radius: 10px 0px 0px 10px;
  border: 2px solid #f21627;
  transition: border 0.5s;
}
.new-task input:focus {
  border: 3px solid #bb020f;
}
.new-task input::placeholder {
  opacity: 50%;
}
.new-task button {
  border: 0;
  border-radius: 0px 10px 10px 0px;
  padding: 0px 20px;
  background: #f21627;
  color: #fff;
  font-weight: bold;
  font-size: 25px;
  transition: background 0.5s;
}
.new-task button:hover {
  background: #bb020f;
}
</style>
