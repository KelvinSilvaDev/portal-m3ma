import Link from "next/link";
import * as Style from "./styles";

export default function Menu() {
  return (
    <Style.MenuWrapp>
      <nav>
        <Link href="/">Início</Link>
        <Link href="/Missao">Missao</Link>
        <Link href="/Visao">Visao</Link>
        <Link href="/historia">Historia</Link>
        <Link href="/projetos">Projetos</Link>
        <Link href="/ministracoes">Ministrações</Link>
      </nav>
    </Style.MenuWrapp>
  );
}
