<script setup lang="ts">
import { Gender, Popularity, Length } from "@/data";
interface OptionsProps {
  options: {
    gender: Gender;
    popularity: Popularity;
    length: Length;
  };
  option: {
    title: string;
    category: string;
    buttons: Gender[] | Popularity[] | Length[];
  };
}
const props = defineProps<OptionsProps>();
const computeButtonClasses = (value, index) => {
  const classNames = [];
  if (props.options[props.option.category] === value) {
    classNames.push("option-active");
  }
  if (index === 0) classNames.push("option-left");
  if (index === props.option.buttons.length - 1)
    classNames.push("option-right");
  return classNames.join(" ");
};
</script>
<template>
  <div class="option-container">
    <h4 class="my-3">{{ option.title }}</h4>
    <div class="option-buttons">
      <button
        v-for="(buttonVal, index) in option.buttons"
        :key="buttonVal"
        class="option"
        :class="computeButtonClasses(buttonVal, index)"
        @click="options[option.category] = buttonVal"
      >
        {{ buttonVal }}
      </button>
    </div>
  </div>
</template>
