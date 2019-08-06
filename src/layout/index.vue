<template>
  <div>
    <div class="menu-boarder">
      <h1>Menu</h1>
      <router-link class="router-link-item" to="/parent/page1">Page1</router-link>
      <router-link class="router-link-item" to="/parent/page2">Page2</router-link>
      <router-link class="router-link-item" to="/parent/todo-list">Todo List</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.menu-boarder {
  border: 1px solid black;
}

.router-link-item {
  margin-left: 5px;
  margin-right: 5px;
}
</style>
