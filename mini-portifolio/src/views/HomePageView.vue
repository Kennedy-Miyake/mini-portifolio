<style>
.tab4 {
  display: inline-block;
  margin-left: 40px;
}

.tab8 {
  display: inline-block;
  margin-left: 80px;
}
</style>
<template>
  <main class="flex w-full">
    <div class="text-[#fffffc] w-auto ml-auto ml-70 mt-80 h-30">
      <p class="text-1xl ml-1">printf("Hello, World!");</p>
      <h1 class="text-6xl text-[#ff4950] font-bold">Olá, Eu sou o Kennedy!</h1>
      <h4 class="text-2xl font-medium ml-1">Desenvolvedor Backend</h4>
    </div>
    <div class="ml-auto mr-70 mt-45">
      <!--barra de clique-->
      <div class="flex text-gray-300 w-150 bg-[#191b26] p-2 rounded-t-2xl items-center border-2 border-solid border-sky-500">
        <img src="../assets/icons/red-circle-svgrepo-com(1).svg" alt="" class="size-3.5 ml-3">
        <img src="../assets/icons/yellow-circle-svgrepo-com.svg" alt="" class="size-3.5 ml-3">
        <img src="../assets/icons/green-circle-svgrepo-com.svg" alt="" class="size-3.5 ml-3">
        <p class="ml-5">developer.c</p>
      </div>

      <!--Código em C-->
      <div class="flex flex-col w-auto bg-[#11121a] rounded-b-2xl p-15 border-2 border-solid border-sky-500">
        <code>int main(int argc, char* argv[]) {</code>
        <code><span class="tab4"></span>const char perfil[][] = [</code>
        <code><span class="tab8"></span>["nome", "Kennedy"],</code>
        <code><span class="tab8"></span>["profissão", "Desenvolvedor Backend"],</code>
        <code><span class="tab8"></span>["skills", "C, C++, C#, Rust, MySql, Git,</code>
        <code><span class="tab8"></span>Docker, Linux"]</code>
        <code><span class="tab4"></span>];</code>
        <code><span class="tab4"></span>const int trabalhoDuro = 1;</code>
        <code><span class="tab4"></span>const int rapidoNoAprendizado = 1;</code>
        <code><span class="tab4"></span>const int resolvedorDeProblemas = 1;</code>
        <code><span class="tab4"></span>const int anosDeExperiencia = 0;</code>
        <code><span class="tab4"></span>return 0;</code>
        <code>}</code>
      </div>
    </div>
  </main>
</template>
  <script setup lang="ts">
  </script>