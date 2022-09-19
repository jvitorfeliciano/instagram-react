import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";

function Infos() {
  return (
    <>
      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </>
  );
}
export default function Sidebar() {
  return (
    <div class="sidebar">
      <Usuario />
      <Sugestoes />
      <Infos/>
    </div>
  );
}
