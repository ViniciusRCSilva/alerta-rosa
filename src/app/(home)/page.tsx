export default function Home() {
  return (
    <main>
      <div
        className="flex flex-col items-start justify-start h-screen w-full p-1 md:p-10 lg:p-20
        text-white 
        bg-[url('../../public/mobile_main_content.svg')]
        lg:bg-[url('../../public/main_content.svg')] bg-no-repeat bg-center bg-cover"
      >
        <main className="gap-10 h-full w-full flex flex-col items-center lg:items-start justify-center animate-screenOpacity">
          <h1 className="text-4xl md:text-8xl font-semibold uppercase">
            Formulário
          </h1>
          <span className="block md:w-3/4 font-light text-center lg:text-justify text-lg lg:text-2xl px-8 lg:p-0">
            Nosso formulário de conscientização é uma ferramenta educativa que
            ajudará você a compreender os diferentes aspectos da violência
            contra a mulher, incluindo violência física e psicológica. Ao
            responder às perguntas, você poderá avaliar onde se encontra no
            violentômetro e obter uma visão mais clara sobre os diversos tipos
            de violência e seus impactos.
          </span>
          <button className="h-12 w-52 flex items-center justify-center p-5 bg-white rounded-full text-pink transition-all hover:bg-slate-200">
            Iniciar Formulário
          </button>
        </main>
      </div>
    </main>
  )
}
