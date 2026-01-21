import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      // Si no hay #id, vamos arriba de todo
      window.scrollTo(0, 0);
    } else {
      // Si hay un #id, esperamos un milisegundo a que cargue la página 
      // y nos movemos a ese elemento
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); 
    }
  }, [pathname, hash]); // Se ejecuta si cambia la ruta o el hash

  return null;
};

export default ScrollToTop;