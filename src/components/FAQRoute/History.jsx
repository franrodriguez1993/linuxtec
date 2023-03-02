import React from "react";

const History = () => {
  return (
    <div className="history-section">
      <h2>Historia de Linux</h2>

      <p>
        Aunque la historia de Linux se comienza a escribir un poco más tarde,
        sus orígenes nos hacen remontar hasta principios de los años 80, cuando
        Richard Stallman, inició el Proyecto GNU con el propósito de crear un
        sistema operativo similar y compatible con UNIX. En el año 1985, se creó
        la Fundación del Software Libre y se desarrolló la Licencia pública
        general de GNU para tener un marco legal que permitiera difundir
        libremente este software. Posteriormente, en 1991, fue Linus Torvalds,
        un estudiante de informática de 23 años de la Universidad de Helsinki,
        quien propone hacer un sistema operativo que se comporte como UNIX pero
        que además, funcione sobre cualquier ordenador. En este momento, el
        propio Torvalds estableció como requisito mínimo que el ordenador
        tuviera un procesador i386.
      </p>
      <img
        src="/img/faqImg/history1.png"
        alt="history"
        className="faqhistory-img"
      />

      <p>
        El principal objetivo de este estudiante era crear el núcleo del sistema
        operativo que fuese totalmente compatible con UNIX y que de esta manera,
        permitiese ejecutar todos los programas gratuitos compatibles con UNIX y
        desarrollador por la Free Software Foundation que vienen con licencia
        GNU. Para el desarrollo de este núcleo, Torvalds se inspiró en Minix,
        una versión reducida de UNIX. Pocos meses después, a finales de agosto
        de 1991, Torvalds ya contaba con la versión 0.01 de Linux, pero como
        todavía era algo muy básico y con escasa funcionalidad, decidió seguir
        desarrollando lo que sería la versión 0.02, que vio la luz en el mes de
        octubre de ese mismo año y que ya era capad de ejecutar dos herramientas
        básicas de GNU, el intérprete de órdenes (bash) y el compilador de C.
      </p>

      <p>
        El joven siguió trabajando en el desarrollo del sistema operativo y tras
        la versión 0.03, el gran apoyo de otras personas que empezaron a
        participar con Linus en el desarrollo, hizo que se saltase rápidamente
        hasta la versión 0.1. Año y medio después, en diciembre de 1993, nacía
        la versión de Linux 1.0 y la base de este sistema operativo de código
        abierto que durante el paso de los años ha ido creciendo hasta nuestros
        días con el apoyo de todos y cada uno de los desarrolladores que han ido
        aportando su granito de arena.
      </p>
    </div>
  );
};

export default History;
