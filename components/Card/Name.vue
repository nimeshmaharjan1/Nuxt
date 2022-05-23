<script setup lang="ts">
interface NameProps {
  name: string;
}
const props = defineProps<NameProps>();
const emit = defineEmits(["remove-name"]);
const removeName = () => {
  emit("remove-name", props.name);
};
</script>
<template>
  <button
    class="btn btn-outline-primary btn-sm d-flex align-items-center px-2"
    style="gap: 0.5rem"
  >
    {{ name }}
    <button
      class="btn btn-sm btn-danger"
      style="font-size: 0.6rem"
      @click="removeName"
    >
      x
    </button>
  </button>
</template>
