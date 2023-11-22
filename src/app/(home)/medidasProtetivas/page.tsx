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
            Medidas Protetivas
          </p>
        </div>

        <MedidasProtetivasWhite />
        <MedidasProtetivasTransparent />
        <MedidasProtetivasWhite />
        <MedidasProtetivasTransparent />
      </div>
    </div>
  )
}
