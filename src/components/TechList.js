import React, { Component } from 'react';

class TechList extends Component {
  state = { //state é imutável
    newTech: '',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  };
  
  //sempre que quiser criar função que possua acesso a outras, tem que criar em arrow function, para ter acesso ao this
  hadleInputChange = e => {
    this.setState({ newTech: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault(); //para não atualizar a página quando apertar no botão enviar
    
  //não pode usar this.state.techs.push pois alteria state e state é imutável
  //...this.state.techs copia tudo que já está em state, this.state.newTech adiciona uma nova posição
    this.setState({ 
      techs: [...this.state.techs, this.state.newTech],
      newTech: '' //para apagar o texto no input
    });
  }

  /*
  COMENTÁRIOS DE DENTRO DO RETURN 
  não pode adicionar dois elementos sem ter um container por volta deles
  tipos de container: <>, <div>, <form>
  */

  render() { //todo component escrito no formato de classe precisa ter render() e dentro dele o html
    return ( //para escrever em jsx dentro do html colocar {}
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
        </ul>
        <input 
          type="text" 
          onChange={this.hadleInputChange} 
          value={this.state.newTech} 
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;