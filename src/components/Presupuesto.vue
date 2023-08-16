<script setup>
import { ref } from 'vue';
import Alerta from './Alerta.vue';

const presupuesto = ref(0);
const error = ref('');

const emit = defineEmits(['definir-presupuesto']);

const definirPresupuesto =()=>{
    if(presupuesto.value <= 0 || presupuesto.value === ''){
        error.value = "Presupuesto no válido";
        setTimeout(() => {
            error.value = '';
        },3000);
        return
    }
    emit('definir-presupuesto',presupuesto.value);
}

</script>

<template>
    <form class="presupuesto"
    @submit.prevent="definirPresupuesto"
    >
    <Alerta v-if="error">
        {{error}}
    </Alerta>
        <div class="campo">
            <label for="nuevo-presupuesto">Definir presupuesto</label>
            <input 
            min="0"
            type="number" 
            id="nuevo-presupuesto" 
            placeholder="Añade tu presupuesto" 
            class="nuevo-presupuesto"
            v-model.number="presupuesto"/>
        </div>
        <input type="submit" value="Definir presupuesto">
    </form>
</template>

<style scoped>
.presupuesto{
    width: 100%;
}
.campo{
    display: grid; 
    gap: 2rem;
    }
.presupuesto label{
    font-size: 2.2rem;
    font-weight: 900;
    color: var(--azul);
    text-align: center;
    }
    .presupuesto input[type="number"]{
    background-color: var(--gris-claro);
    border-radius: 1rem;
    padding: 1rem;
    border: none;
    font-size: 2.2rem;
    text-align: center;
    }
.presupuesto input[type="submit"]{
    background-color: var(--azul);
    border-radius: 1rem;
    padding: 1rem;
    border: none;
    font-size: 2rem;
    text-align: center;
    color: var(--blanco);
    width: 100%;
    margin-top: 2rem;
    font-weight: 900;
    }
.presupuesto input[type="submit"]:hover{
    cursor: pointer;
    background-color: #1048A4;
    transition: background-color .3s ease;
    }

</style>