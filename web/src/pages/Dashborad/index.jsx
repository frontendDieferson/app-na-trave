import { Icon } from "~/components";
import logoImg from "../../assets/logo/logo-fundo-vermelho.svg";
import { Card, DateSelect } from "~/components";

export function Dashboard() {
  return (
    <>
      <header className="bg-red-500 text-white p-4">
        <div className="container max-w-3xl p-4 flex justify-between">
          <img className="w-28 md:w-40" src={logoImg} />
          <a href="/profile">
            <Icon name="profile" className="w-10" />
          </a>
        </div>
      </header>
      <main className="space-y-6">
        <section id="header" className=" bg-red-500 text-white">
          <div className="container max-w-3xl space-y-2 p-4">
            <span>Olá Dieferson</span>
            <h3 className="text-2xl font-bold">Qual é o seu palpite?</h3>
          </div>
        </section>
        <section id="content" className="container max-w-3xl p-4 space-y-4">
          <DateSelect />

          <div className="space-y-4">
            <Card
              timeA={{ slug: "sui" }}
              timeB={{ slug: "cam" }}
              match={{ time: "7:00" }}
            />

            <Card
              timeA={{ slug: "uru" }}
              timeB={{ slug: "cor" }}
              match={{ time: "7:00" }}
            />

            <Card
              timeA={{ slug: "por" }}
              timeB={{ slug: "gan" }}
              match={{ time: "7:00" }}
            />
            <Card
              timeA={{ slug: "bra" }}
              timeB={{ slug: "ser" }}
              match={{ time: "7:00" }}
            />
          </div>
        </section>
      </main>
    </>
  );
}
