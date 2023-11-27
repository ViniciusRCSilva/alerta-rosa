export default function MedidasProtetivas() {
  return (
    <div
      className="w-full text-dark-blue flex flex-col items-start justify-start
      bg-[url('../../public/mobile_main_content.svg')]
      lg:bg-[url('../../public/main_content.svg')] bg-no-repeat bg-center bg-cover"
    >
      <div className="animate-screenOpacity">
        <div className="flex flex-col w-full py-40 lg:pl-20 bg-white">
          <p className="text-4xl md:text-6xl font-semibold uppercase text-center lg:text-left">
            Sinais
          </p>
        </div>

        <div
          className="flex flex-col lg:flex-row w-full items-center justify-between py-20 lg:p-0
        lg:bg-[url('../../public/right_side_background.svg')] 
        bg-[url('../../public/mobile_background_login.svg')] bg-no-repeat bg-cover"
        >
          <div
            className={`block lg:hidden w-40 h-40 rounded-lg
        bg-[url('../../public/image_hand_X.png')]
        lg:bg-[url('../../public/image_hand_X.png')] bg-no-repeat bg-center bg-cover`}
          />
          <div className="flex flex-col w-3/4 items-center lg:items-start gap-2 p-0 lg:pl-20">
            <h1 className="text-pink text-2xl lg:text-4xl font-medium">
              X Desenhado
            </h1>
            <p className="block font-light text-center lg:text-left text-lg lg:text-2xl">
              O X vermelho desenhado na palma da mão faz parte de uma campanha
              mundial para amparar mulheres em situação de violência doméstica.
              Essa foi uma maneira discreta, rápida e simples para que mulheres
              possam pedir socorro em farmácias ou repartições públicas.
            </p>
          </div>
          <div
            className="hidden lg:block w-80 h-80
            bg-[url('../../public/image_hand_X.png')]
            lg:bg-[url('../../public/image_hand_X.png')] bg-no-repeat bg-center bg-cover"
          />
        </div>

        <div className="flex flex-col lg:flex-row w-full items-center justify-between bg-transparent py-20 lg:p-0">
          <div
            className="w-40 h-40 lg:w-80 lg:h-80 rounded-lg lg:rounded-none
                bg-[url('../../public/image_hand_call.png')]
                lg:bg-[url('../../public/image_hand_call.png')] bg-no-repeat bg-center bg-cover"
          />
          <div className="flex flex-col w-3/4 lg:items-end items-center gap-2 p-0 lg:pr-20 text-white">
            <h1 className="text-2xl lg:text-4xl font-medium">Fingir ligação</h1>
            <p className="block font-light text-center lg:text-right text-lg lg:text-2xl">
              Se uma mulher se sentir em perigo e não puder falar abertamente,
              ela pode sinalizar discretamente levantando a mão e abrindo a
              palma, como se estivesse pedindo para parar. Também pode simular
              um telefonema colocando a mão em forma de &quot;L&quot; perto da
              orelha. No entanto, é crucial procurar ajuda profissional e
              informar as autoridades em situações de perigo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
