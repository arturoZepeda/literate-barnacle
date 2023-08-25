export const formaterCantidad = (cantidad) => {
    return Number(cantidad).toLocaleString('es-US', {
        style: 'currency',
        currency: 'USD'
    })
}

export const generaId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
}

export const formatearFecha = (fecha) => {
    const fechaFormateada = new Date(fecha);
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' }

    return fechaFormateada.toLocaleDateString('es-MX', opciones)
}