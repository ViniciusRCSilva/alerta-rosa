'use client'
import { Progress } from '@chakra-ui/react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

export default function Form() {
  return (
    <div
      className="h-screen w-full text-white flex flex-col items-start justify-start
        bg-[url('../../public/mobile_main_content.svg')]
        lg:bg-[url('../../public/main_content.svg')] bg-no-repeat bg-center bg-cover"
    >
      <div className="mt-24 w-full flex items-center justify-start">
        <Progress
          colorScheme="pink"
          size="md"
          value={50}
          h={5}
          className="w-96 ml-10 rounded-full"
        />
        <span className="mx-5 text-2xl font-semibold">1/5</span>
      </div>
      <div className="h-96 w-full py-10 px-20 text-xl flex items-start lg:items-center text-center justify-center overflow-y-auto animate-screenOpacity">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          excepturi delectus maiores alias necessitatibus? Animi sapiente labore
          repellendus rerum aspernatur optio mollitia sequi vero
          reiciendis?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Modi excepturi delectus maiores alias necessitatibus? Animi sapiente
          labore repellendus rerum aspernatur optio mollitia sequi vero
          reiciendisLorem ipsum dolor sit amet consectetur adipisicing elit.
          Modi excepturi delectus maiores alias necessitatibus? Animi sapiente
          labore repellendus rerum aspernatur optio mollitia sequi vero
          reiciendisLorem ipsum dolor sit amet consectetur adipisicing elit.
          Modi excepturi delectus maiores alias necessitatibus? Animi sapiente
          labore repellendus rerum aspernatur optio mollitia sequi vero
          reiciendisLorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="fixed bottom-0 h-44 w-full flex items-center justify-between bg-white text-dark-blue shadow-form-shadow">
        <div className="ml-5 flex items-center justify-between text-base lg:text-xl cursor-pointer">
          <div className="text-lg lg:text-4xl text-pink">
            <HiChevronLeft />
          </div>
          <p className="font-light">Voltar</p>
        </div>
        <div className="w-36 lg:w-96 flex items-center justify-between">
          <p className="h-10 w-16 lg:w-32 flex items-center justify-center border-2 border-pink text-pink rounded-full font-bold cursor-pointer transition-all opacity-60 hover:opacity-100">
            Sim
          </p>
          <p className="h-10 w-16 lg:w-32 flex items-center justify-center border-2 border-pink text-pink rounded-full font-bold cursor-pointer transition-all opacity-60 hover:opacity-100">
            Não
          </p>
        </div>
        <div className="mr-5 flex items-center justify-between text-base lg:text-xl cursor-pointer">
          <p className="font-light">Continuar</p>
          <div className="text-lg lg:text-4xl text-pink">
            <HiChevronRight />
          </div>
        </div>
      </div>
    </div>
  )
}
