<template>
  <div class="container">
    <header>
      <h1>Notes App</h1>
      <button class="add-btn" @click="openCreate">＋</button>
    </header>

    <div class="notes-list">
      <NoteCard
        v-for="note in notes"
        :key="note.id"
        :note="note"
        @edit="openEdit(note)"
        @delete="removeNote(note.id)"
      />
    </div>

    <NoteEditor
      v-if="isEditor"
      :initial="selected"
      :isEdit="Boolean(selected)"
      @save="saveNote"
      @cancel="closeEditor"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getNotes, createNote, updateNote, deleteNote } from "./api/notes";
import NoteCard from "./components/NoteCard.vue";
import NoteEditor from "./components/NoteEditor.vue";

const notes = ref<any[]>([]);
const isEditor = ref(false);
const selected = ref<any | null>(null);

async function load() {
  const res = await getNotes();
  notes.value = res.data;
}

function openCreate() {
  selected.value = null;
  isEditor.value = true;
}

function openEdit(note: any) {
  selected.value = note;
  isEditor.value = true;
}

function closeEditor() {
  isEditor.value = false;
}

async function saveNote(data: any) {
  if (selected.value) {
    await updateNote(selected.value.id, data);
  } else {
    await createNote(data);
  }
  await load();
  closeEditor();
}

async function removeNote(id: string) {
  await deleteNote(id);
  await load();
}

onMounted(load);
</script>

<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
  background: #eef2f4;
  padding: 30px;
  box-sizing: border-box;
}

header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 25px;
}

.add-btn {
  background: #ddd;
  border: none;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 18px;
  cursor: pointer;
}

.notes-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>

