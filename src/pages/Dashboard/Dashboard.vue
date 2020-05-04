<template>
  <div class="dashboard">
    <div class="progress-tasks">
      <p>Tarefas concluidas</p>
      <Progress
        :transitionDuration="2000"
        :radius="50"
        :strokeWidth="10"
        value="86.12"
        strokeColor="#bb020f"
      >
      </Progress>
    </div>
    <div class="new-task">
      <input
        v-model="task"
        type="text"
        placeholder="Adicionar nova tarefa"
      />
      <button @click.prevent.stop="addTask">+</button>
    </div>
    <div class="tasks" v-if="tasks.length > 0">
      <Task v-for="task in tasks" :key="task" :task="task" />
    </div>
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
      task: "",
      tasks: [],
    };
  },
  methods: {
    addTask: function() {
      this.tasks.push(this.task);
      this.task = "";
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
.tasks {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  margin-bottom: 30px;
  margin-top: 40px;
}
</style>
