import Image from 'next/image'
import { Member } from './components/Member'

export default function AboutUs() {
  return (
    <main>
      <div
        className="flex flex-col items-start justify-start h-screen w-full p-1 md:p-10 lg:p-20
        text-dark-blue 
        bg-[url('../../public/initial_background_mobile.svg')]
        lg:bg-[url('../../public/initial_background.svg')] bg-no-repeat bg-center bg-cover"
      >
        <div className="gap-14 h-full w-full flex flex-col items-center lg:items-end justify-center animate-screenOpacity">
          <Image
            src={'logo.svg'}
            alt="logo"
            className="hidden lg:flex"
            height={400}
            width={400}
          />

          <Image
            src={'logo.svg'}
            alt="logo"
            className="flex lg:hidden"
            height={200}
            width={200}
          />

          <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
            <span className="text-2xl lg:text-7xl font-semibold uppercase">
              LUTANDO PELO FUTURO
            </span>

            <span className="font-light text-xl lg:text-5xl">
              Conscientização contra violência
            </span>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-start justify-start h-screen w-full p-1 md:p-10 lg:p-20
        text-white 
        bg-[url('../../public/liquid_background.svg')]
        lg:bg-[url('../../public/liquid_background.svg')] bg-no-repeat bg-center bg-cover"
      >
        <main className="gap-20 h-full w-full flex flex-col items-center lg:items-start justify-center">
          <span className="text-4xl lg:text-6xl font-semibold uppercase text-center">
            QUAL NOSSO PROPÓSITO?
          </span>
          <span className="block lg:w-3/4 font-light text-2xl lg:text-4xl text-center lg:text-justify px-8 lg:p-0">
            Nosso propósito é despertar consciências, <br /> construir
            solidariedade e <br />
            capacitar mulheres na luta contra a violência.
          </span>
        </main>
      </div>
      <div
        className="flex flex-col items-start justify-start h-auto w-full p-1 py-36 md:px-10 lg:px-20
        text-dark-blue 
        bg-white"
      >
        <main className="gap-20 h-full w-full flex flex-col items-center lg:items-start justify-center">
          <div className="flex w-full justify-center">
            <span className="text-center text-4xl md:text-8xl font-semibold uppercase">
              EQUIPE DO ALERTA
              <span className="text-pink pl-2 lg:pl-6">ROSA</span>
            </span>
          </div>
          <div className="flex w-full justify-center">
            <div className="flex flex-col gap-5 lg:grid lg:grid-cols-3">
              <Member
                link="https://www.linkedin.com/in/paloma-alves1006/"
                image="https://avatars.githubusercontent.com/u/60614988?v=4"
                name="Paloma Alves"
              />

              <Member
                link="https://www.linkedin.com/in/juliete-s%C3%A9rvio-503bb76a/"
                image="https://media.licdn.com/dms/image/D4D03AQGUwXM-XAla_g/profile-displayphoto-shrink_200_200/0/1685278603835?e=1702512000&v=beta&t=9LFLo9-bqK-vxmXFV7jqm6Rhlockp5uLPJIDiWf_-vI"
                name="Juliete Sérvio"
              />

              <Member
                link="https://www.linkedin.com/in/arthur-silva-8a841b172/"
                image="https://avatars.githubusercontent.com/u/54423057?v=4"
                name="Arthur Cavalcante"
              />

              <Member
                link="https://www.linkedin.com/in/davi-souza2001/"
                image="https://avatars.githubusercontent.com/u/77704994?v=4"
                name="Davi Souza"
              />

              <Member
                link="https://www.linkedin.com/in/jo%C3%A3o-lemos-781044207/"
                image="https://avatars.githubusercontent.com/u/79033128?v=4"
                name="João Victor"
              />

              <Member
                link="https://www.linkedin.com/in/vinicius-rc-silva/"
                image="https://avatars.githubusercontent.com/u/71902143?v=4"
                name="Vinicius Rodrigues"
              />
            </div>
          </div>
        </main>
      </div>
    </main>
  )
}
