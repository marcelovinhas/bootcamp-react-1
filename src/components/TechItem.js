// ARQUIVO PARA LISTAGEM DE TECNOLOGIAS
import React from 'react';

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

export default TechItem;