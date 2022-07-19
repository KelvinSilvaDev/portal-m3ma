import Head from "next/head";
import * as Style from "./Styles";

export default function Home() {
  return (
    <div>
      <Head>
        <title>IM3MA</title>
        <meta name="description" content="Igreja Missão Eis-Me Aqui" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Style.SectionOne>
          <div>
            <p>Bem vindo</p>
          </div>
        </Style.SectionOne>
        <Style.SectionTwo>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nibh
            lacinia, vehicula nulla et, consequat lectus. Integer sed vehicula
            ante, eget pulvinar nunc. Praesent leo nunc, suscipit ac placerat
            vitae, aliquam vel lacus. Pellentesque suscipit metus a faucibus
            cursus. In rutrum erat in vestibulum finibus. Sed pulvinar iaculis
            lectus, sed malesuada nisl mattis vel. Donec quis sapien eu enim
            interdum tempor id id orci. Morbi quis magna iaculis, fermentum
            neque eget, tincidunt eros. Praesent molestie, metus et gravida
            eleifend, ante nulla dapibus elit, nec porttitor elit est quis
            augue. Etiam pellentesque sed massa sed congue. Donec vitae nisi ut
            felis porta egestas. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Quisque maximus augue
            libero, at placerat ligula cursus non. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas
            iaculis quam eget congue pulvinar. Suspendisse potenti.
          </p>
          <p>
            Donec congue libero sit amet nulla feugiat faucibus. Duis nec est id
            sem elementum scelerisque. Pellentesque posuere turpis at mauris
            laoreet faucibus. Suspendisse consequat justo purus, ac porta arcu
            luctus eget. Nulla sed dignissim lectus. Donec vel pellentesque
            orci. Pellentesque purus orci, mattis id turpis iaculis, tristique
            accumsan quam. Nunc at nisl a lectus pharetra feugiat eu vel eros.
            Cras consequat, erat id egestas tempor, lacus neque lacinia tortor,
            nec fringilla justo ligula ac turpis. Sed at quam ac elit imperdiet
            pharetra ut interdum ante.
          </p>
        </Style.SectionTwo>
      </main>
    </div>
  );
}
