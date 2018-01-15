<template lang="html">
  <div class="kamban">
    <div class="add">
      <button type="button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#myModal">Add Task</button>
    </div>
    <addTask v-on:TaskBaru="submitNewTask"/>
    <div class="row">
      <backlog :back='backLogComputed' v-on:Maju="setStatusUp" v-on:RemoveTask="removeTask" v-on:Mundur="setStatusDown"/>
      <todo :td='toDoComputed' v-on:Maju="setStatusUp" v-on:RemoveTask="removeTask" v-on:Mundur="setStatusDown"/>
      <onprogress :op='onProgComputed' v-on:Maju="setStatusUp" v-on:RemoveTask="removeTask" v-on:Mundur="setStatusDown"/>
      <finish :selesai='finishComputed' v-on:Maju="setStatusUp" v-on:RemoveTask="removeTask" v-on:Mundur="setStatusDown"/>
    </div>
  </div>
</template>

<script>
import BackLog from '@/components/ComponentBackLog'
import ToDo from '@/components/ComponentTodo'
import OnProgress from '@/components/ComponentOn'
import Finish from '@/components/ComponentFinish'
import addTaskModal from '@/components/addTaskModal'
import {taskRef} from '@/firebase'
export default {
  components: {
    backlog: BackLog,
    todo: ToDo,
    onprogress: OnProgress,
    finish: Finish,
    addTask: addTaskModal
  },
  data () {
    return {
      taskBaru: {}
    }
  },
  firebase: {
    tasks: taskRef
  },
  computed: {
    backLogComputed () {
      return this.tasks.filter(task => task.status === 0)
    },
    toDoComputed () {
      return this.tasks.filter(task => task.status === 1)
    },
    onProgComputed () {
      return this.tasks.filter(task => task.status === 2)
    },
    finishComputed () {
      return this.tasks.filter(task => task.status === 3)
    }
  },
  methods: {
    submitNewTask (msg) {
      this.taskBaru = msg
      taskRef.push(this.taskBaru)
    },
    setStatusUp (key, currentStatus) {
      taskRef.child(key).update({status: currentStatus + 1})
    },
    removeTask (key) {
      taskRef.child(key).remove()
    },
    setStatusDown (key, currentStatus) {
      taskRef.child(key).update({status: currentStatus - 1})
    }
  }
}
</script>

<style lang="css">
.card{
  width: 2000px;
  margin: 20px;
}
.kamban{
  margin-left: 250px;
}

.add{
  margin-right: 250px;
}
</style>
