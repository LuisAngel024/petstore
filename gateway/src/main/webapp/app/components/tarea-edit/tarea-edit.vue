<template>
  <b-card>

   <b-form-group label="ID" label-for="tarea-id">
     <p id="tarea-id" v-text="tareaToEdit.id"></p>
   </b-form-group>

   <b-form-group
     label="Nombre"
     label-for="nombre-id"
     :state="isNombreValid()"
     invalid-feedback="Debe ingresar mínimo 3 caracteres y máximo 50." >
     <b-form-input
       id="nombre-id"
       :state="isNombreValid()"
       :disabled="readonly"
       v-model="tareaToEdit.nombre"
       placeholder="Ingresa el nombre de la tarea"
     ></b-form-input>
   </b-form-group>

   <b-form-group
     label="Descripción"
     label-for="description-id"
     :state="isDescripcionValid()"
     invalid-feedback="Debe ingresar mínimo 3 caracteres y máximo 100.">
     <b-form-textarea   id="description-id"
       :state="isDescripcionValid()"
       :disabled="readonly"
       v-model="tareaToEdit.descripcion"
       placeholder="Ingresa la descripción de su tarea"
     ></b-form-textarea>
   </b-form-group>

   <b-form-group
     label="Fecha límite"
     label-for="deadline-id"
     :state="isDateValid()"
     invalid-feedback="La fecha debe ser mayor o igual a la fecha actual"
   >
     <b-form-datepicker
       id="deadline-id"
       :disabled="readonly"
       :state="isDateValid()"

       v-model="tareaToEdit.fechaLimite"
       value-as-date
       locale="es"
     ></b-form-datepicker>
   </b-form-group>
 </b-card>

 <section>
   <b-button class="float-right rounded-lg mr-2" variant="outline-danger"  @click="$emit('cancelT')" >{{ $t('entity.action.cancel') }}</b-button>
   <b-button class=" float-right rounded-lg mr-2" variant="primary" :disabled="!isFormValid()" @click="$emit('updateT')"  >{{ $t('entity.action.confirm') }}</b-button>
 </section>

 </template>

 <script lang="ts" src="./tarea-edit.component.ts"></script>