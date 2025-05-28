<template>
<form>
  <h1 class="flex flex-col text-4xl font-bold justify-center items-center mt-[50px] mb-8">Contato</h1>
  <div class="flex flex-col justify-center items-center space-y-4">
    <!-- campo do nome -->
    <div>
      <input
          type="text"
          class="w-100 h-10 border rounded p-6"
          placeholder="Digite seu nome"
          required
      />
    </div>
    <div>
      <input
          type="text"
          class="w-100 h-10 border rounded p-6"
          placeholder="Digite seu email"
          required
      />
    </div>
    <div>
      <input
          type="text"
          class="w-100 h-10 border rounded p-6"
          placeholder="Assunto"
          required
      />
    </div>
    <div>
      <textarea
        class="w-[400px] border rounded p-6"
        placeholder="Sua mensagem"
        rows="4"
        required
      ></textarea>
    </div>
    <div>
      <button
        type="submit"
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
      >Enviar</button>
    </div>
  </div>
</form>
</template>