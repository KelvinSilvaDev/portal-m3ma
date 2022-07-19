import Link from "next/link";
import * as Style from "./styles";

export default function Menu() {
  return (
    <Style.MenuWrapp>
      <nav>
        <Link href="/">Início</Link>
        <Link href="/missao">Missao</Link>
        <Link href="/visao">Visao</Link>
        <Link href="/historia">Historia</Link>
        <Link href="/projetos">Projetos</Link>
      </nav>
    </Style.MenuWrapp>
  );
}
