class myComponent extends HTMLElement{

  constructor(){

    super();

    this.attachShadow({mode:"open"});

  }

  static get observedAttributes(){


    return['marca', 'imagen', 'elnombre', 'model', 'description', 'price']

  }


  attributeChangedCallback(attr,oldVal, newVal){

    this[attr]= newVal;
    
    

  }

  getTemplate(){

    const template = document.createElement('template');
    template.innerHTML = `

      <div>
        <div>

          <h1>${this['marca']}</h1>
      
        </div>
        <div>
          <h2>${this['elnombre']}</h2>
          <h3>${this['model']}</h3>

          <p>${this['description']}</p>
          <div>
            <span>${this['price']}<span>
            <input type="submit" value="BUY NOW">
          </div>
        <div>
        <img src="${this['imagen']}">
      </div>
    
    ${this.getStyles()}
    
    `;

    
    return template

  }


  getStyles(){

    return `
    <style>
    
    </style>
    
    `

  }

  render(){
  
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))



  }

  connectedCallback(){

    this.render();


  }



}

customElements.define('my-component', myComponent)