<script setup lang="ts">
import { Gender, Popularity, Length, names } from "@/data";
interface OptionsState {
  gender: string;
  popularity: string;
  length: string;
}
const options = reactive<OptionsState>({
  gender: Gender.GIRL,
  popularity: Popularity.TRENDY,
  length: Length.ALL,
});
const generatedNames = ref<string[]>([]);
const computeSelectedNames = () => {
  const filteredNames = names
    .filter((name) => name.gender === options.gender)
    .filter((name) => name.popularity === options.popularity)
    .filter((name) =>
      name.length === Length.ALL ? true : name.length === options.length,
    );
  generatedNames.value = filteredNames.map((name) => name.name);
};
const optionsArray = [
  {
    title: "1) Choose a gender",
    category: "gender",
    buttons: [Gender.GIRL, Gender.BOY, Gender.UNISEX],
  },
  {
    title: "2) Choose the name's popularity",
    category: "popularity",
    buttons: [Popularity.TRENDY, Popularity.UNIQUE],
  },
  {
    title: "3) Choose the name's lenght",
    category: "length",
    buttons: [Length.ALL, Length.LONG, Length.SHORT],
  },
];
const removeName = (name) => {
  const removedNameArr = generatedNames.value.filter(
    (filteredName) => filteredName !== name,
  );
  generatedNames.value = [...removedNameArr];
};
</script>
<template>
  <div class="container mt-4">
    <h1>Name Generator</h1>
    <p>Choose your options and click the "Find Names" buttom below</p>
    <div class="options-container">
      <Option
        v-for="option in optionsArray"
        :key="option.title"
        :option="option"
        :options="options"
      />
      <button class="btn btn-danger mb-2" @click="computeSelectedNames">
        Find Names
      </button>
      <div class="mt-3 d-flex justify-content-center" style="gap: 1rem">
        <CardName
          v-for="name in generatedNames"
          :key="name.id"
          :name="name"
          @remove-name="removeName"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
:root {
  --primary-color: rgb(249, 87, 89);
}
body {
  background-color: rgb(243, 243, 243);
}
.container {
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(27, 60, 138);
  max-width: 50rem;
  margin: 0 auto;
  text-align: center;
}
h1 {
  font-size: 3rem;
}
.options-container {
  background-color: rgb(221, 241, 245);
  border-radius: 2rem;
  padding: 1rem;
  width: 95%;
  margin: 0 auto;
  margin-top: 2rem;
  position: relative;
}
.option-container {
  margin-bottom: 2rem;
}
.option {
  background: white;
  outline: 0.15rem solid var(--primary-color) !important;
  border: none;
  padding: 0.75rem;
  width: 12rem;
  font-size: 1rem;
  color: rgb(27, 60, 138);
  cursor: pointer;
  font-weight: 200;
}
.option-left {
  border-radius: 1rem 0 0 1rem;
}
.option-right {
  border-radius: 0 1rem 1rem 0;
}
.option-active {
  background-color: var(--primary-color) !important;
  color: white;
}
.primary {
  border-radius: 6.5rem;
  padding: 0.75rem 4rem;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  transition: 0.4s ease;
}
.primary:hover {
  background-color: var(--primary-color) !important;
  color: white;
}
</style>
