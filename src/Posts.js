import React from 'react'

function Post(props) {
  const [estado, setEstado] = React.useState('bookmark-outline')
  const [like, setLike] = React.useState('heart-outline')
  const [liked, setLiked] = React.useState('notLiked')
  const [curtida, setCurtida] = React.useState(props.curtidas)

  function salvarPost(){
    if(estado === 'bookmark-outline'){
        setEstado('bookmark')
    }
    else{
      setEstado('bookmark-outline')
    }
  }

  function curtirPost(){
    if(like==='heart-outline'){
      setLike('heart')
      setLiked('liked')
     
      setCurtida((Number(curtida.replace('.',''))+1).toLocaleString().replace(',','.'))
    } else{
      setLike('heart-outline')
      setLiked('notLiked')
      setCurtida((Number(curtida.replace('.',''))-1).toLocaleString().replace(',','.'))
    }
  }

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imagem} />
          {props.usuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.imgpost}/>
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon onClick={curtirPost} class={liked}name={like} ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon onClick ={salvarPost} name={estado} ></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imgcurtida} />
          <div class="texto">
            Curtido por <strong>{props.curtido}</strong> e{" "}
            <strong>outras {curtida} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Posts() {
  

  const arrayPosts =[{imagem:'img/meowed.svg', usuario:'meowed', imgpost:'img/gato-telefone.svg', imgcurtida:'img/respondeai.svg', curtido:'respondeai',curtidas:'101.523'}, {imagem:'img/barked.svg', usuario:'barked', imgpost:'img/dog.svg', imgcurtida:'img/adorable_animals.svg', curtido:'adorable_animals',curtidas:'99.159'}]

  return (
    <div class="posts">
      
      {arrayPosts.map(p => <Post imagem ={p.imagem} usuario ={p.usuario} imgpost ={p.imgpost} imgcurtida ={p.imgcurtida}curtido ={p.curtido} curtidas ={p.curtidas}/>)}
     
    </div>
  );
}
