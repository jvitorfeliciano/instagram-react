import React from 'react'

function DadosUsuario(props) {
  
  const [nome, setNome] = React.useState(props.nome)
  const [perfil, setPerfil] = React.useState(props.perfil)
  const [foto, setFoto] = React.useState(props.imagem)

  function mudaNome(){
    const nomePerfil = prompt('Qual é o novo nome do perfil?')
    const novoNome = prompt('Qual é o novo nome do usuário?')
    setPerfil(nomePerfil)
    setNome(novoNome)
  }

  function mudaFoto(){
    const novaFoto = prompt('Insira o link da imagem da nova foto:')
    setFoto(novaFoto)
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
