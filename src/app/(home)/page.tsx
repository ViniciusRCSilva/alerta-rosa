export default function Home() {
  return (
    <main>
      <div
        className="flex flex-col items-start justify-start h-screen w-full p-1 md:p-10 lg:p-20
        text-white 
        bg-[url('../../public/mobile_main_content.svg')]
        lg:bg-[url('../../public/main_content.svg')] bg-no-repeat bg-center bg-cover"
      >
        <main className="mt-16 h-full w-full flex flex-col md:items-start justify-center">
          <h1 className="text-4xl md:text-8xl font-semibold uppercase">
            Formulário
          </h1>
          <span className="block md:w-3/4 font-light text-justify md:text-justify text-xl md:text-2xl mt-10">
            Nosso formulário de conscientização é uma ferramenta educativa que
            ajudará você a compreender os diferentes aspectos da violência
            contra a mulher, incluindo violência física e psicológica. Ao
            responder às perguntas, você poderá avaliar onde se encontra no
            violentômetro e obter uma visão mais clara sobre os diversos tipos
            de violência e seus impactos.
          </span>
          <button className="h-12 w-52 flex items-center justify-center mt-10 p-5 bg-white rounded-full text-purple-500 transition-all hover:bg-slate-200">
            Iniciar Formulário
          </button>
        </main>
      </div>
    </main>
  )
}
