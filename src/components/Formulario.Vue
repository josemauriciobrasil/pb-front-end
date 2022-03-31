//página principal

<template>
  <main>
    <h1>Task Board</h1>
    <p>Create a list of tasks</p>

    <div class="create-new">
      <input 
        type="text" 
        v-model="newFornecedor" 
        placeholder="Add a new task" 
        @keypress.enter="addFornecedor" />
      <button @click="addFornecedor">Add</button>
    </div>

    <div class="fornecedores">
      <Fornecedor
        v-for="(fornecedores, i) in $store.state.fornecedores"
        :key="i"
        :fornecedor="fornecedor" />
    </div>

  </main>
</template>

<script>
export default {
  data (){
    return {
      newFornecedor: ''
    }
  },
  methods: {
    addTask () {
      if (this.newFornecedor) {
        this.$store.commit('ADD_FORNECEDOR', this.newFornecedor);
        this.newFornecedor = '';
      }
    }
  }
}
</script>