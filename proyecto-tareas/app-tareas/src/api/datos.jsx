import { useState, useEffect } from 'react';

function datos() {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const url = 'https://johancasti92.pythonanywhere.com/listor'
  useEffect(() => {
    
    const timer = setTimeout(async () => {
      try {
        const consult = await fetch(url);
        if (!consult.ok) {
          throw new Error('Un error en la consulta a la API!');
        }
        const apiFull = await consult.json();
        
        const datos = apiFull.map((dato) => ({
          id: dato[0],
          text: dato[1],
          completed: Boolean(dato[2] === 1) // si 0 esl false si es 1 es true
        }));
                
        setItem(datos);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.error(error);
      }
    }, 1400); 

    return () => clearTimeout(timer);

  }, []); 

  const saveItem = (newItem) => {
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { datos };
