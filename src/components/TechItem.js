// ARQUIVO PARA LISTAGEM DE TECNOLOGIAS
import React from 'react';
import PropTypes from 'prop-types';

//como não vai manipular informação pode usar formato de função

/*
COMENTÁRIOS DE DENTRO DO RETURN
onDelete foi escrito como propriedade em TechList.js
*/
function TechItem({ tech, onDelete }) { //para usar tech aqui foi preciso usar o conceito de propriedade em TechList.js
  return (
    <li>
    {tech}
    <button onClick={onDelete} type="button">Remover</button>
  </li>
  );
}

//se o usuário esquece de passar a propriedade tech, usa .defaultProps
TechItem.defaultProps = {
  tech: 'Oculto',
};

//se o usuário passa um texto em vez de uma função em onClick{onDelete}, propTypes avisa o desenvolvedor
//yarn add prop-types
TechItem.propTypes = {
  tech: PropTypes.string, //como usei defaultProps não precisa passar .isRequired
  onDelete: PropTypes.func.isRequired, //não está em defaultProps então passa .isRequired
};

export default TechItem;