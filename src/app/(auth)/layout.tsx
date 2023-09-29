import Image from 'next/image'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-row w-full h-screen items-center justify-between">
          {/* Conteúdo da esquerda */}
          <div
            className="hidden lg:flex flex-col w-[50%] h-full items-center justify-center gap-10
          text-white
            bg-[url('../../public/left_side_background.svg')] bg-no-repeat bg-center bg-cover shadow-inner-shadow"
          >
            <div className="flex flex-col items-center text-5xl font-bold z-10 gap-2">
              <p>Seja</p>
              <p>Bem-Vinda!</p>
            </div>

            <Image
              src={'heart_women.svg'}
              alt="mulher segurando coração"
              className="z-0"
              height={200}
              width={200}
            />

            <div className="flex flex-col items-center text-2xl font-light z-10">
              <p>Aqui</p>
              <p>Você importa.</p>
              <p>Sua voz importa.</p>
              <p>Sua vida importa.</p>
            </div>
          </div>

          {/* Conteúdo da direita */}
          <div
            className="flex flex-col w-full lg:w-[50%] h-full items-center justify-center gap-5 lg:gap-10
            text-dark-blue 
            lg:bg-[url('../../public/right_side_background.svg')] 
            bg-[url('../../public/mobile_background_login.svg')] bg-no-repeat bg-center bg-cover"
          >
            {/* Logo */}
            <Image
              src={'logo.svg'}
              alt="logo"
              className="hidden lg:flex"
              height={300}
              width={300}
            />

            <Image
              src={'logo.svg'}
              alt="logo"
              className="flex lg:hidden"
              height={200}
              width={200}
            />

            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
