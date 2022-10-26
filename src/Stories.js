function Story(props){

  // a função recebe um objeto props vindo do atributo passado para ela na função Componente Stories; em seguida distribuímos as propriedades destes atributos no seu devido lugar; o bjeto retornado é do tipo props = {imagem:"value vindo da atributo passado",usuario:"value vindo do atributo passado" }
  return(
    <div class="story">
      <div class="imagem">
        <img src={props.imagem} />
      </div>
      <div class="usuario">
        {props.usuario}
      </div>
    </div>
  )
}
export default function Stories(){

  const arrayStories = [{imagem:'img/9gag.svg', usuario:'9gag'},
  {imagem:'img/meowed.svg', usuario:'meowed'},
  {imagem:'img/barked.svg', usuario:'barked'},{imagem:'img/nathanwpylestrangeplanet.svg', usuario:'nathanwpylestrangeplanet'},
  {imagem:'img/wawawicomics.svg', usuario:'wawawicomics'},
  {imagem:'img/respondeai.svg', usuario:'respondeai'},
  {imagem:'img/filomoderna.svg', usuario:'filomoderna'},
  {imagem:'img/memeriagourmet.svg', usuario:'memeriagourmet'}]
  
  // o map passado faz dada item do array acima ser transformado em layout JSX retornado por Story e são passados os atributos que formam o obj props;
    return(
        <div class="stories">

        {arrayStories.map(s => <Story imagem={s.imagem} usuario={s.usuario}/>)}
          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
    )
}
