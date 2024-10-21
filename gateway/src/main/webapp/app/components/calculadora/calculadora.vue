<template>
  <div>
    <a
      class="btn-flotante float-right"
      variant="light"
      @click="openModalCalculator">
        <img
          src="../../../content/images/iconCal.png"
          width="70"
          height="70"
          class="remove-bg"/>
    </a>
  </div>

<b-modal
ref="openCalculator"
id="openCalculator">
  <div id="calculadora">

    <div class="calculator">
      <input type="text" class="result" :value="result" readonly />
      <br><br>
      <div class="buttons">
        <button class="number" @click="handleClick('7')">7</button>
        <button class="number" @click="handleClick('8')">8</button>
        <button class="number" @click="handleClick('9')">9</button>
        <button class="operator" @click="handleOperatorClick('/')">/</button>

        <button class="number" @click="handleClick('4')">4</button>
        <button class="number" @click="handleClick('5')">5</button>
        <button class="number" @click="handleClick('6')">6</button>
        <button class="operator" @click="handleOperatorClick('*')">*</button>

        <button class="number" @click="handleClick('1')">1</button>
        <button class="number" @click="handleClick('2')">2</button>
        <button class="number" @click="handleClick('3')">3</button>
        <button class="operator" @click="handleOperatorClick('-')">-</button>

        <button class="number" @click="handleClick('0')">0</button>
        <button class="number" @click="handleClick('.')">.</button>
        <button class="number" @click="handleClick('00')">00</button>

        <button class="operator" @click="handleOperatorClick('+')">+</button>

        <button class="clear" @click="handleClear">C</button>
        <button class="clear" @click="handleClearEntry">CE</button>
        <button class="equal" @click="calculate()">=</button>
      </div>
    </div>
  </div>
</b-modal>

</template>
<script lang="ts" src="./calculadora.component.ts"></script>
<style src="../../../content/css/calculator.css"></style>