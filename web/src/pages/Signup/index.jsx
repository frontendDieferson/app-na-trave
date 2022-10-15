
import { Icon, Input } from "~/components";

import logoImg from "../../assets/logo/logo-fundo-branco.svg";


export const Signup = () => {
  return (
    <div className="">
      <header className=" p-4 border-b border-red-300">
        <div className="container max-w-xl flex justify-center">
            <img className="w-32 md:w-40" src={logoImg} />
        </div>
      </header>
      <main className="container max-w-xl p-4">
        <div className="p-4 flex space-x-4 items-center">
          <a href="/">
            <Icon name='back' className='h-6' />
          </a>
          <h2 className="text-xl font-bold">Crie sua conta</h2>
        </div>
        <form className="p-4 space-y-6">
        <Input
            type="text"
            name="name"
            label="Seu nome"
            placeholder="Digite seu nome"
          />
          <Input
            type="text"
            name="username"
            label="Seu nome de usuário"
            placeholder="Digite um nome de usuário"
          />
          <Input
            type="text"
            name="email"
            label="Seu Email"
            placeholder="Digite seu Email"
          />
          <Input
            type="password"
            name="password"
            label="Sua Senha"
            placeholder="Digite sua Senha"
          />
          <button
            href="/signup"
            className=" w-full text-center text-white bg-red-500  px-6 py-3 rounded-xl"
          >
            Criar minha conta
          </button>
        </form>
      </main>
    </div>
  );
};
