<template>
  <div class="modal">
    <div class="window">
      <h2>{{ isEdit ? "Редактировать" : "Создать" }}</h2>

      <input v-model="name" type="text" placeholder="Название" />

      <textarea v-model="description" placeholder="Текст"></textarea>

      <div class="actions">
        <button @click="$emit('cancel')">Отмена</button>
        <button class="save" @click="saveNote">{{ isEdit ? "Обновить" : "Создать" }}</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = defineProps<{ initial?: any; isEdit: boolean }>();
const emit = defineEmits(["save", "cancel"]);

const name = ref("");
const description = ref("");

onMounted(() => {
  if (props.initial) {
    name.value = props.initial.name;
    description.value = props.initial.description;
  }
});

function saveNote() {
  emit("save", { name: name.value, description: description.value });
}
</script>

<style scoped>
.modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.window {
  background: white;
  padding: 20px;
  width: 350px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

textarea {
  height: 120px;
  resize: none;
}

.actions {
  display: flex;
  justify-content: space-between;
}

.save {
  background: black;
  color: white;
  padding: 6px 12px;
  border-radius: 5px;
}
</style>
