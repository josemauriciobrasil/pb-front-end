<template>
    <div>
    <form id="cadastrar-prestador-form">
      <div class="input-container">
        <label for="nome-prestador"> Nome do prestador de serviço:</label>
        <input type="text" id="nome-prestador" name="nome-prestador" v-model="nomePrestador" placeholder="Digite o nome do prestador de serviço">
      </div>
       <div class="input-container">
        <label for="sobrenome-prestador"> Sobrenome do prestador de serviço:</label>
        <input type="text" id="sobrenome-prestador" name="sobrenome-prestador" v-model="sobrenomePrestador" placeholder="Digite o sobrenome do prestador de serviço">
       </div>
        <div class="input-container">
            <label for="tipo-servico">Tipo de Serviço:</label>
            <select name="tipo-servico" id="tipo-servico" v-model="tipoServico">
                <option value="">Selecione o tipo de serviço</option>
                <option value="guia">Guia Turístico</option>
                <option value="hospedagem">Hospedagem</option>
                <option value="restaurante">Restaurante</option>
            </select>
      </div>
       <div class="input-container">
        <label for="apresentacao-prestador"> Apresentação do prestador de serviço:</label>
        <input type="text" id="apresentacao-prestador" name="apresentacao-prestador" v-model="apresentacaoPrestador" placeholder="Fale um pouco sobre você:">
      </div>
  </form>
  </div>
</template>

<script>
export default {

    name: 'Formulario-prestador',
}
</script>

<style>

</style>