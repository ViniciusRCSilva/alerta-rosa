export default function MedidasProtetivas() {
  return (
    <div
      className="w-full text-dark-blue flex flex-col items-start justify-start
      lg:bg-[url('../../public/right_side_background.svg')] 
      bg-[url('../../public/mobile_background_login.svg')] bg-no-repeat bg-center bg-cover"
    >
      <div className="animate-screenOpacity">
        <div className="flex flex-col w-full pt-40 pb-20 lg:pl-20">
          <p className="text-4xl md:text-6xl font-semibold uppercase text-center lg:text-left">
            Sinais
          </p>
        </div>

        <div className="flex flex-col lg:flex-row w-full items-center justify-between py-20 lg:px-20">
          <div
            className={`block lg:hidden w-40 h-40 rounded-lg border-pink border-2
            bg-[url('../../public/image_hand_X.png')]
            lg:bg-[url('../../public/image_hand_X.png')] bg-no-repeat bg-center bg-cover`}
          />
          <div className="flex flex-col w-3/4 items-center lg:items-start gap-2">
            <h1 className="text-pink text-2xl lg:text-4xl font-medium">
              X Desenhado
            </h1>
            <p className="block font-light text-center lg:text-left text-lg lg:text-2xl bg-white p-10 rounded-full lg:rounded-tl-none border-2 border-pink shadow-md">
              O X vermelho desenhado na palma da mão faz parte de uma campanha
              mundial para amparar mulheres em situação de violência doméstica.
              Essa foi uma maneira discreta, rápida e simples para que mulheres
              possam pedir socorro em farmácias ou repartições públicas.
            </p>
          </div>
          <div
            className="hidden lg:block w-80 h-80 border-pink border-2 rounded-lg
            bg-[url('../../public/image_hand_X.png')]
            lg:bg-[url('../../public/image_hand_X.png')] bg-no-repeat bg-center bg-cover"
          />
        </div>

        <div className="flex flex-col lg:flex-row w-full items-center justify-between bg-transparent py-20 lg:px-20">
          <div
            className="w-40 h-40 lg:w-80 lg:h-80 rounded-lg border-pink border-2
                bg-[url('../../public/image_hand_call.png')]
                lg:bg-[url('../../public/image_hand_call.png')] bg-no-repeat bg-center bg-cover"
          />
          <div className="flex flex-col w-3/4 lg:items-end items-center gap-2">
            <h1 className="text-pink text-2xl lg:text-4xl font-medium">
              Fingir ligação
            </h1>
            <p className="block font-light text-center lg:text-right text-lg lg:text-2xl bg-white p-10 rounded-full lg:rounded-tr-none border-2 border-pink shadow-md">
              Se uma mulher se sentir em perigo e não puder falar abertamente,
              ela pode sinalizar discretamente levantando a mão e abrindo a
              palma, como se estivesse pedindo para parar. Também pode simular
              um telefonema colocando a mão em forma de telefone perto da
              orelha. No entanto, é crucial procurar ajuda profissional e
              informar as autoridades em situações de perigo.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row h-[35rem] w-full items-center justify-between py-20 lg:px-20 bg-no-repeat bg-cover">
          <div
            className="block lg:hidden w-40 h-40 rounded-lg border-2 border-pink
            bg-[url('../../public/image_close_hand.png')]
            lg:bg-[url('../../public/image_close_hand.png')] bg-no-repeat bg-center bg-cover"
          />
          <div className="flex flex-col w-3/4 items-center lg:items-start gap-2">
            <h1 className="text-pink text-2xl lg:text-4xl font-medium">
              Guia de pedido de ajuda
            </h1>
            <p className="block font-light text-center lg:text-left text-lg lg:text-2xl bg-white p-10 rounded-full lg:rounded-tl-none border-2 border-pink shadow-md">
              O &quot;Sinal de Ajuda&quot; é uma forma discreta, popularizada
              pela Fundação Canadense de Mulheres, para indicar violência
              doméstica. Consiste em dobrar o polegar sobre a palma, simulando
              um punho. Esse gesto tornou-se um código internacional para pedir
              ajuda sem alertar o agressor, sendo eficaz em situações onde a
              vítima não pode falar abertamente sobre o abuso.
            </p>
          </div>
          <div
            className="hidden lg:block w-80 h-80 rounded-lg border-2 border-pink
            bg-[url('../../public/image_close_hand.png')]
            lg:bg-[url('../../public/image_close_hand.png')] bg-no-repeat bg-center bg-cover"
          />
        </div>
      </div>
    </div>
  )
}
