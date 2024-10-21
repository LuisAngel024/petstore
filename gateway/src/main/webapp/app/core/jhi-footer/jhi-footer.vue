<template>
  <div id="footer" class="navbar fixed-bottom navbar-light bg-light">
    <p v-text="t$('footer')"></p>
    <daic-button-cal
    v-if="username"
    />
  </div>
</template>

<script lang="ts" src="./jhi-footer.component.ts"></script>
