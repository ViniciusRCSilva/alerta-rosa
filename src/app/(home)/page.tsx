export default function Home() {
  return (
    /* Conteúdo geral */
    <main>
      {/* Conteúdo Principal */}
      <div
        className="flex flex-col items-center justify-center w-full h-screen gap-5 px-10 
        text-white 
        bg-[url('../../public/mobile_main_content.svg')]
        lg:bg-[url('../../public/main_content.svg')] bg-no-repeat bg-center bg-cover"
      >
        <p className="text-2xl lg:text-3xl font-semibold">
          Faça Parte da Mudança
        </p>
        <p className="text-center text-base lg:text-lg">
          Você deseja fazer a diferença na vida das mulheres e ajudar a criar um
          mundo livre da violência de gênero?
          <br />
          Seja um voluntário e contribua com seu tempo e habilidades essa causa.
        </p>
      </div>
    </main>
  )
}
