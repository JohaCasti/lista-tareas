export const dele = async (id) => {
    try {
        const response = await fetch(`https://johancasti92.pythonanywhere.com/del/${id}`, {
            method: 'DELETE', 
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error al eliminar la tarea en la base de datos');
        } else {
            console.log("Tarea eliminada exitosamente");
        }
    } catch (error) {
        console.error('Error al eliminar la tarea:', error);
    }
};
