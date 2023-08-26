<script setup>
import imagen from '../assets/img/grafico.jpg';
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
</script>

<template>
    <div class="dos-columnas">
        <div class="contenedor-grafico">
            <img :src="imagen"/>
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
</style>