import { createApp } from 'vue';
const { createApp } = Vue;

createApp({
components: {
vSelect: window["vue-select"]
},
data() {
return {
  from: [
    { title: "Old Man's War" },
    { title: "The Lock Artist" },
    { title: "HTML5" },
    { title: "Right Ho Jeeves" },
    { title: "The Code of the Wooster" },
    { title: "Thank You Jeeves" }
  ]
};
}
}).mount("#app");
console.log();
