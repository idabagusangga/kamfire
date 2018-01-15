<template lang="html">
  <div class="card  sm-2" style="max-width: 20rem;">
  <div class="card-header text-white bg-warning">To-Do</div>
  <div class="card-body">
    <h4 class="card-title">Todo Tasks</h4>
    <p class="card-text">Your tasks for the day!</p>
    
    <div class="" v-for='b in td' :key="b['.key']">
      <div class="container" style="border: 1px solid black;">
        <div class="card-body">
          <h4 class="card-title">{{b.task}}</h4>
          <p class="card-text">{{b.description}}</p>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary" @click="prev(b['.key'],b.status)">Prev</button>
            <button type="button" class="btn btn-secondary" @click="next(b['.key'],b.status)">Next</button>
          </div>
          <button type="button" class="btn btn-outline-danger btn-secondary" @click="remove(b['.key'])">Remove</button>
        </div>
      </div>  
    </div>
    
  </div>
</div>
</template>

<script>
export default {
  props: ['td'],
  methods: {
    next (key, currentStatus) {
      console.log(key)
      this.$emit('Maju', key, currentStatus)
    },
    remove (key) {
      this.$emit('RemoveTask', key)
    },
    prev (key, currentStatus) {
      this.$emit('Mundur', key, currentStatus)
    }
  }
}
</script>

<style lang="css">
</style>
