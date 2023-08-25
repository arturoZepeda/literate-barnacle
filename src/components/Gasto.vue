<script setup>
import { formaterCantidad , formatearFecha } from '../helpers';
import IconoAhorro from '../assets/img/icono_ahorro.svg'
import IconoCasa from '../assets/img/icono_casa.svg'
import IconoComida from '../assets/img/icono_comida.svg'
import IconoGastos from '../assets/img/icono_gastos.svg'
import IconoOcio from '../assets/img/icono_ocio.svg'
import IconoSalud from '../assets/img/icono_salud.svg'
import IconoSuscripciones from '../assets/img/icono_suscripciones.svg'

const props = defineProps({
    gasto: {
        type: Object,
        required: true
    }
})

const diccionarioIconos = {
        ahorro : IconoAhorro,
        comida : IconoComida,
        casa : IconoCasa,
        gastos : IconoGastos,
        ocio : IconoOcio,
        salud : IconoSalud,
        suscripciones : IconoSuscripciones
    }
</script>

<template>
    <div class = "gasto sombra">
        <div class="contenido">
            <div class="detalles">
                <div class="contenedor-grafico">
                    <img :src="diccionarioIconos[gasto.categoria]" :alt="[gasto.categoria]">
                </div>
                <p class="nombre">{{ gasto.nombre }}</p>
                <p class="fecha">{{ formatearFecha(gasto.fecha) }}</p>
            
            </div>
        </div>

            <p class="cantidad">{{ formaterCantidad(gasto.cantidad) }}</p>
    </div>
</template>

<style scoped>

</style>