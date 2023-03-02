import React from "react";

const WhatIs = () => {
  return (
    <div className="whatis-section">
      <h2>¿Qué es Linux?</h2>
      <p>
        Linux es un sistema operativo completamente libre y por lo tanto,
        gratuito. Es un sistema operativo que podemos utilizar en cualquier
        ordenador sin tener que pagar nada por él, sin coste y de forma
        totalmente legal sin necesidad de descargarlo pirata a través de
        Internet. Un producto que a diferencia de Windows o macOS no es
        propiedad de una compañía, de ahí su gratuidad, sino de un gran número
        de compañías o personas que contribuyen con su desarrollo y van creando
        sus propias distribuciones Linux.
      </p>

      <p>
        En definitiva, Linux es un sistema que nace de la combinación de varios
        proyectos entre los que destacan GNU y la Free Software Foundation
        además del propio núcleo de Linux encabezado por Linus Torvalds. Su
        desarrollo es uno de los mejores ejemplos del software libre, donde todo
        su código fuente puede ser utilizado, modificado y distribuido
        libremente por cualquier bajo los términos de la licencia GPL o Licencia
        Pública General de GNU y otras licencias.
      </p>
      <img src="img/faqImg/whatis1.png" alt="linux" className="faqwhatis_img" />
    </div>
  );
};

export default WhatIs;
