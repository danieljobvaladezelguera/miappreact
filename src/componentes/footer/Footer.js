import React from 'react';
 
 
class Footer extends React.Component {
 
  render() {
 
    return (
 
        <footer className="container">
            <p className="float-right">  <a href="#"> Subir </a> </p>
            <p>&copy; {(new Date().getFullYear())} Laboratorio de Anatomía de Vertebrados y Educación Científica FES Iztacala  &middot;</p>
        </footer>
 
    )
    
  }
 
}
 
export default Footer;