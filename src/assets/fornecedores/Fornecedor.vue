// componente

<template>
	<div :class="`fornecedor ${fornecedor.done ? 'is-complete' : ''}`">
		<div class="content">{{ fornecedor.content }}</div>
		<div class="buttons">
			<button @click="toggleDone">{{ fornecedor.done ? 'Undo' : 'Done' }}</button>
			<button @click="removeFornecedor" class="delete">Delete</button>
		</div>
	</div>
</template>

<script>
export default {
	props: ['fornecedor'],
	methods: {
		editDone() {
			this.$store.commit('EDIT_FORNECEDOR', this.fornecedor);
		},
		removeFornecedor() {
			this.$store.commit('REMOVE_FORNECEDOR', this.fornecedor);
		}
	}
}
</script>

<style>
</style>