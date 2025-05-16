
export const update = async (id) => {
        try {
            const response = await fetch(`https://johancasti92.pythonanywhere.com/upd/${id}`, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Estado: 1, 
                }),
            });

            if (!response.ok) {
                throw new Error('Error al actualizar la tarea en la base de datos');
            } else {
                console.log("Tarea actualizada exitosamente");
            }
        } catch (error) {
            console.error('Error al completar la tarea:', error);
        }
    
};
