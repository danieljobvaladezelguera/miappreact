import React from 'react';
 
class Jumbotron extends React.Component {
 
  render() {
 
    return (
 
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-3">Nosotros </h1>
                <p>
                    El Laboratorio de Anatomía de Vertebrados y Educación Científica se formó desde el 8 de febrero de 2011, fue un martes cuando la M. en C. Arcelia Rita me entrego las llaves de un pequeño Laboratorio con la condición de que se desarrollaran materiales didácticos y colección anatómica para el uso de los grupos en la asignatura de Morfofisiología Animal Comparada, impartida en la carrera de Biología de la FES Iztacala UNAM hasta la fecha
                    <br/>
                    Solo de esta manera se formarán profesionales que cambien sus vidas y tengan un mejor futuro.
                </p>
                <p><a className="btn btn-primary btn-lg" href="https://www.facebook.com/RomegaLAVEC/"role="button">Visita nuestra pagina web</a></p>
            </div>
        </div>
 
    )
    
  }
 
}
 
export default Jumbotron;