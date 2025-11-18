<template>
  <div class="note-card">
    <div class="note-header">
      <button class="icon-btn" @click="$emit('edit')">✏️</button>
      <button class="icon-btn" @click="$emit('delete')">🗑️</button>
    </div>

    <h3>{{ note.name }}</h3>
    <p>{{ note.description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ note: any }>();
defineEmits(["edit", "delete"]);
</script>

<style scoped>
.note-card {
  background: #fffccf;
  padding: 15px;
  width: 230px;
  min-height: 200px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.note-header {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.icon-btn {
  background: white;
  border: 1px solid #ccc;
  padding: 4px;
  border-radius: 5px;
  cursor: pointer;
}

.icon-btn:hover {
  background: #eee;
}
</style>
