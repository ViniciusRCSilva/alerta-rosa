import Image from 'next/image'

export default function Home() {
  return (
    /* Conteúdo geral */
    <main>
      {/* Conteúdo Principal */}
      <div className="w-full h-screen bg-[url('../../public/main_content.svg')] bg-no-repeat bg-center bg-cover"></div>
      <div className="w-full h-screen"></div>
    </main>
  )
}
