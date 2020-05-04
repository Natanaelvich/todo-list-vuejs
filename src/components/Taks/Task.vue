<template>
  <div class="task">
    <h1>{{ task }}</h1>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: String,
  },
};
</script>

<style>
.task {
  background: #f21627;
  padding: 20px 30px;
  border-radius: 10px;
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
