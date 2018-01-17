<template>
  <div class="hello">
    <div>
      <div>
        <h3>v-for</h3>
        <ul>
          <li v-for="user in users" v-bind:title="`${user.firstname} ${user.lastname}`">
            {{user.firstname}} {{user.lastname}}
          </li>
        </ul>
      </div>
      <hr/>
      <div>
        <h3>two-way data binding</h3>
        <input type="text" v-model="input_val"/>
        <br/>
        Input Value: <span v-text="input_val"></span>
      </div>
      <hr/>
      <div>
        <h3>v-if and v-on</h3>
        <button v-on:click="toggleShow">Toggle Show</button>
        <p v-if="show">Show this element</p>
      </div>
      <hr/>
      <div>
        <h3>component from main.js</h3>
        <todo-item/>
        <component-with-props v-bind:myprop="'component with props'"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      users: [
        {firstname: 'George', lastname: "Johnson"},
        {firstname: 'Bob', lastname: "Smith"}
      ],
      input_val: '',
      show: true
    }
  },
  methods: {
    toggleShow: function () {
      this.show = !this.show;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
