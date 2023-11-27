import { MedidasProtetivasTransparent } from '../components/MedidasProtetivasTransparentBg'
import { MedidasProtetivasWhite } from '../components/MedidasProtetivasWhiteBg'

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

        <MedidasProtetivasWhite
          text={`O X vermelho desenhado na palma da mão faz parte de uma campanha mundial para amparar mulheres em situação de violência doméstica. Essa foi uma maneira discreta, rápida e simples para que mulheres possam pedir socorro em farmácias ou repartições públicas.`}
        />
        <MedidasProtetivasTransparent text='Se uma mulher se sentir em perigo e não puder falar abertamente, ela pode sinalizar discretamente levantando a mão e abrindo a palma, como se estivesse pedindo para parar. Também pode simular um telefonema colocando a mão em forma de "L" perto da orelha. No entanto, é crucial procurar ajuda profissional e informar as autoridades em situações de perigo.' />
        <MedidasProtetivasWhite />
        <MedidasProtetivasTransparent />
      </div>
    </div>
  )
}
