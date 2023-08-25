<script setup>
    import { ref } from 'vue';
    import Alerta from './Alerta.vue';
    import cerrarModal from '../assets/img/cerrar.svg';
    
    const error = ref('');

    const emit = defineEmits(['ocultar-modal', 'guardar-gasto' , 'update:nombre', 'update:cantidad', 'update:categoria']);
    const props = defineProps({
        modal: {
            type: Object,
            required: true
        },
        nombre: {
            type: String,
            required: true
        },
        cantidad: {
            type: [Number, String],
            required: true
        },
        categoria: {
            type: String,
            required: true
        }
    });

    const agregarGasto = () =>{
        const {nombre, cantidad, categoria} = props;
        if([nombre,cantidad,categoria].includes('')){
            error.value = 'Todos los campos son obligatorios';
            setTimeout(() => {
                error.value = '';
            }, 3000);
            return;
        }
        if(cantidad <= 0 || isNaN(cantidad)){
            error.value = 'Cantidad no válida';
            setTimeout(() => {
                error.value = '';
            }, 3000);
            return;
        }
        emit('guardar-gasto');
    }
</script>

<template>
    <div class="modal">
        <div class="cerrar-modal">
            <img
            :src="cerrarModal"
            alt="Cerrar modal"
            @click="$emit('ocultar-modal')"
            />
        </div>
        <div 
        class="contenedor contenedor-formulario" 
        :class="[modal.animar ? 'mostrar' : 'cerrar']"
        >
            <form class="nuevo-gasto"
            @submit.prevent="agregarGasto"
            >
                <legend>Añadir gasto</legend>
                <Alerta v-if="error">
                    {{error}}
                </Alerta>
                <div class="campo">
                    <label for="nombre">Nombre gasto:</label>
                    <input type="text" id="nombre" placeholder="Ej. Transporte" :value="nombre" @input="$emit('update:nombre', $event.target.value)"/>
                </div>
                <div class="campo">
                    <label for="cantidad">Cantidad:</label>
                    <input type="number" id="cantidad" placeholder="Añade la cantidad Ej. 100" :value="cantidad" @input="$emit('update:cantidad',+$event.target.value)"/>
                </div>
                <div class="campo">
                    <label for="categoria">Categoria:</label>
                    <select id="categoria" :value="categoria" @input="$emit('update:categoria',$event.target.value)">
                        <option value="" disabled selected>-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="casa">Casa</option>
                        <option value="comida">Comida</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                        <option value="otros">Otros</option>
                    </select>
                    <input type="submit" class="boton" value="Añadir" />
                </div>
            </form>
        </div>
    </div>
</template>
<style scoped>
.modal{
    position: absolute;
    background-color: rgb(0 0 0 / 0.9);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.cerrar-modal{
    position: absolute;
    top: 2rem;
    right: 3rem;
    cursor: pointer;
}
.cerrar-modal img{
    width: 3rem;
    cursor: pointer;
}
.contenedor-formulario{
    transition-property: all;
    transition-duration: 300ms;
    transition-timing-function: ease-in;
    opacity: 0;
}
.contenedor-formulario.mostrar{
    opacity: 1;
}
.contenedor-formulario.cerrar{
    opacity: 0;
}
.nuevo-gasto{
    margin: 10rem auto 0 auto;
    
    
    background-color: #fff;
    width: 90%;
    max-width: 500px;
    
    padding: 2rem;
    border-radius: 0.5rem;
}
.nuevo-gasto legend{
    font-weight: 700;
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
}
.nuevo-gasto input,
.nuevo-gasto select{
        width: 100%;
        padding: 1rem;
        border: 1px solid #e1e1e1;
        margin-top: 0.5rem;
        border-radius: 0.5rem;
        display: grid;
        gap: 2rem;
}
.nuevo-gasto label{
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
    
}
.nuevo-gasto legend{
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
}

.campos{
    display: grid;
    gap: 2rem;
}
.nuevo-gasto input[type="submit"]{
    background-color: var(--azul);
    color: var(--blanco);
    font-weight: 700;
    cursor: pointer;
}
</style>