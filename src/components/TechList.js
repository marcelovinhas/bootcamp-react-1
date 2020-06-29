import React, { Component } from 'react';

import TechItem from './TechItem';

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

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) }) //filter filtra o array
    //retorna as tecnologias onde t for diferente de tech
  }

  /*
  COMENTÁRIOS DE DENTRO DO RETURN 
  não pode adicionar dois elementos sem ter um container por volta deles
  tipos de container: <>, <div>, <form>

  propriedade é tudo que passa para o component dentro da tag como por exemplo
  tech={tech} em {this.state.techs.map(tech => <TechItem key={tech } tech={tech} />)}
  precisa usar propriedade para passar a variável tech para outro arquivo/componente
  onDelete é uma propriedade que é uma função

  as funções que manipulam state precisam ficar no mesmo componente do state
  */

  render() { //todo component escrito no formato de classe precisa ter render() e dentro dele o html
    return ( //para escrever em jsx dentro do html colocar {}
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem 
              key={tech} 
              tech={tech} 
              onDelete={() => this.handleDelete(tech)}
              />
          ))}
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