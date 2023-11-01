export function MedidasProtetivasWhite() {
  return (
    <div className="flex flex-col lg:flex-row w-full items-center justify-between bg-white py-20 lg:p-0">
      <div
        className="block lg:hidden w-40 h-40 rounded-lg
            bg-[url('../../public/image_hand_X.svg')]
            lg:bg-[url('../../public/image_hand_X.svg')] bg-no-repeat bg-center bg-cover"
      />

      <div className="flex flex-col w-3/4 items-center lg:items-start gap-2 p-0 lg:pl-20">
        <h1 className="text-pink text-2xl lg:text-4xl font-medium">Título</h1>
        <p className="block font-light text-center lg:text-left text-lg lg:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, atque,
          dignissimos, at rerum saepe sapiente alias porro nisi pariatur placeat
          molestiae architecto sint nostrum inventore vero dolorem qui?
          Reprehenderit, ipsum?
        </p>
      </div>

      <div
        className="hidden lg:block w-80 h-80
            bg-[url('../../public/image_hand_X.svg')]
            lg:bg-[url('../../public/image_hand_X.svg')] bg-no-repeat bg-center bg-cover"
      />
    </div>
  )
}
