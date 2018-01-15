<template>
  <div class="container">
    <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password" @keyup.enter="submitEmail">
  </div>
  </div>
</template>

<script>
import {namesRef} from '@/firebase'
export default {
  name: 'hello',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  firebase: {
    emails: namesRef
  },
  methods: {
    submitEmail () {
      namesRef.push({email: this.email, password: this.password})
      this.$router.push('./kamban')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
  color: #35495E;
}
</style>
