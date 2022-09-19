import React from 'react'

function DadosUsuario(props) {
  
  const [nome, setNome] = React.useState(props.nome)
  const [perfil, setPerfil] = React.useState(props.perfil)
  const [foto, setFoto] = React.useState(props.imagem)

  function mudaNome(){
    let nomePerfil;
    let novoNome;

    while(nomePerfil==='' || nomePerfil===undefined){
      nomePerfil = prompt('Qual é o novo nome do perfil?')
      if(nomePerfil!==null){
        nomePerfil= nomePerfil.split(' ').join('')
      }
    }

    while(novoNome==='' || novoNome===undefined){
      novoNome = prompt('Qual é o novo nome do usuário?')
      if(novoNome!==null){
        novoNome = novoNome.split(' ').join('')
      }
    }
    
    if(novoNome!==null){
      setNome(novoNome)
    }
    if(nomePerfil!==null){
      setPerfil(nomePerfil)
    }
  }
 
  function mudaFoto(){
    const novaFoto = prompt('Insira o link da imagem da nova foto:')
    // quando cancela o prompt o valor armazenado em mudaFoto é null;
    if(novaFoto!==null){
      setFoto(novaFoto)
    }
  }
  return (
    <>
      <img onClick={mudaFoto}src={foto} />
      <div class="texto">
        <strong>{perfil}</strong>
        <span>
          {nome}
          <ion-icon onClick={mudaNome} name="pencil"></ion-icon>
        </span>
      </div>
    </>
  );
}

export default function Usuario() {
  const arrayUsuario = [
    { imagem: "img/catanacomics.svg", perfil: "catanacomics", nome: "Catana" },
  ];

  return <div class="usuario">
    {arrayUsuario.map(u => <DadosUsuario imagem={u.imagem} perfil={u.perfil} nome={u.nome}/>)}
  </div>;
}
