<template>
  <div class="hello">
    {{ msg }}
    <form @submit.prevent="addTodo">
      <input type="text" v-model="text" />
      <button>Create</button>
    </form>
    <label>
      <input type="checkbox" v-model="showText" />
      Show text?
    </label>

    <p v-if="showText">{{ upperText }}</p>
    <ul>
      <li v-for="todo in todos" v-bind:key="todo">
        {{ todo }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {
    upperText: function () {
      console.log(123);
      return this.text.toUpperCase();
    },
  },
  watch: {
    text: function (newText) {
      if (newText.length > 15) {
        alert("Too long text!");
      }
    },
  },
  methods: {
    addTodo: function () {
      this.todos.unshift(this.text);
      this.text = "";
    },
    // upperText: function() {
    //   console.log(123);
    //   return this.text.toUpperCase();
    // }
  },
  data() {
    return {
      text: "Hello!",
      showText: false,
      todos: [],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
