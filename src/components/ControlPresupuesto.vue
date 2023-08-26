<script setup>
import { computed } from 'vue';
import CircleProgress from 'vue3-circle-progress';
import "vue3-circle-progress/dist/circle-progress.css";
import { formaterCantidad } from '../helpers' 

const emit = defineEmits(['reset-gastos']);

const props = defineProps({
    presupuesto:{
        type: Number,
        required: true
    },
    disponible:{
        type: Number,
        required: true,
    },
    gastado:{
        type: Number,
        required: true,
    }
})
const calculaPorcentaje = computed (() => {
    return parseInt(((props.presupuesto - props.disponible) / props.presupuesto) * 100);
})
</script>

<template>
    <div class="dos-columnas">
        <div class="contenedor-grafico">
            <CircleProgress 
            :percent="[calculaPorcentaje]"
            :show-percent="true"
            :size="250"
            :borderWidth="25"
            :border-bg-width="25"
            fill-color="#3b82f6"
            empty-color="#f5f5f5"
            class="porcentaje"
            />
        </div>   

        <div class="contenedor-presupuesto">
            <button class="reset-app" @click="$emit('reset-gastos')">Resetear App</button>
            <p>
                <span >Presupuesto:</span>
                {{ formaterCantidad(presupuesto) }}
            </p>
            <p>
                <span >Disponible:</span>
                 {{ formaterCantidad(disponible) }}
            </p>
            <p>
                <span >Gasto:</span>
                 {{ formaterCantidad(gastado) }}
            </p>
        </div>
    </div>
</template>
<style  scoped> 
    .dos-columnas{
        display: flex;
        flex-direction: column;
    }
    .dos-columnas >:first-child{
        margin-bottom: 2rem;
    }
    @media (min-width:768px) {
        .dos-columnas{
            flex-direction: row;
            gap: 4rem;
            align-items: center;
        }
        .dos-columnas > :first-child {
            margin-bottom: 0;
        }
    }

    .reset-app{
        background-color: #db2777;
        color: var(--blanco);
        border: none;
        padding: 1rem 2rem;
        font-size: 1.6rem;
        font-weight: 700;
        border-radius: 0.5rem;
        transition: background-color .3s ease;
        width: 100%;
    }
    .reset-app:hover{
        cursor: pointer;
        background-color: #be185d;
    }
    .contenedor-presupuesto{
        width: 100%;
    }
    .contenedor-presupuesto p{
        font-size: 2.4rem;
        text-align: center;
        color: var(--gris-oscuro);
    }
    @media (min-width:768px) {
        .contenedor-presupuesto p{
            font-size: 2.4rem;  
            text-align: left;
        }
    }
    .contenedor-presupuesto span{
        font-weight: 900;
        color: var(--azul);
    }   
    .porcentaje {
        font-weight: 900;   
        font-size: 2.4rem;
        color: var(--gris-oscuro);
    }
</style>