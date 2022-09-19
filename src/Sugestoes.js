function Sugestao(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.imagem} />
        <div class="texto">
          <div class="nome">{props.nome}</div>
          <div class="razao">{props.razao}</div>
        </div>
      </div>

      <div class="seguir">{props.seguir}</div>
    </div>
  );
}
export default function Sugestoes() {

  const arraySugestoes =[{imagem:"img/bad.vibes.memes.svg", nome:"bad.vibes.memes", razao:"Segue você", seguir:"Seguir"},{imagem:"img/chibirdart.svg", nome:"chibirdart", razão:"Segue você", seguir:"Seguir"}, {imagem:"img/razoesparaacreditar.svg", nome:"razoesparaacreditar", razão:"Novo no Instagram", seguir:"Seguir"}, {imagem:"img/razoesparaacreditar.svg", nome:"razoesparaacreditar", razão:"Novo no Instagram", seguir:"Seguir"}, {imagem:"img/adorable_animals.svg", nome:"adorable_animals", razão:"Segue você", seguir:"Seguir"}, {imagem:"img/smallcutecats.svg", nome:"smallcutecats", razão:"Segue você", seguir:"Seguir"}]
  
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {arraySugestoes.map(s => <Sugestao  imagem={s.imagem} nome={s.nome} razao={s.razao} seguir={s.seguir}/>)}
    </div>
  );
}
