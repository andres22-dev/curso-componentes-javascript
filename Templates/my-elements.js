class myElement extends HTMLElement{
  
  constructor(){
    super();



    
  }

  //Generamos una funcion en cual tendremos nuestro template html y esta
    //Funcion retornara este template
  getTemplate(){

    const template = document.createElement('template');
    template.innerHTML = `
      <section>

        <h2>Hola mundo!</h2>
        <div>

          <p> Soy text ejemplo<p>
        
        </div>
      
      </section>

  <!-- Para utilizar nuestros estilos de nuestro metodo lo llamamos desde nuestro template html
       para que se agreguen -->    
      ${this.getStyles()}

    `;
    return template
  }
  //Podremos generar otro metodo para poner los estilos, pero esto mas que todo se hace por simples
    //Buenas practicas pero se puede hacer de otras maneras.
  getStyles(){
    return`

      <style>
        h2{

          color:red;
        }
      </style>
    
    `
  }
  //Generamos otro metodo para que el contenido de nuestra etiqueta template se pueda clonar
    //Para poderlo agregar al dom
  render(){

    //Agregamos el elemento al dom por dentro utilzamos la funcion que genera el template
      //y utilizamos el content.clone(true) para clonar el elemento
        //Le ponemos true porque si este fuera false solo tomaria las etiquetas padre y no
          //Todo lo que tienen por dentro las etiquetas

    this.appendChild(this.getTemplate().content.cloneNode(true))

  }

  
  connectedCallback(){
    //Inicializamos en el dom el metodo de render
    this.render();
    


  }

}

customElements.define('my-element', myElement);