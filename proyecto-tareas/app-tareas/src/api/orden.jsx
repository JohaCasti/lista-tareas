export const orden = async (orden) => {
    console.log('Orden de tareas:', orden);
    try {
        // Enviar el nuevo orden de las tareas al backend
        const response = await fetch('https://johancasti92.pythonanywhere.com/orden', {
            method: 'POST', // Usamos POST para enviar los datos
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                orden: orden, // El array con los IDs de las tareas en el nuevo orden
            }),
        });

        if (!response.ok) {
            throw new Error('Error al actualizar el orden de las tareas');
        } else {
            console.log("Orden actualizado exitosamente");
        }
    } catch (error) {
        console.error('Error al completar la actualización del orden:', error);
    }
}