export function MedidasProtetivasTransparent() {
  return (
    <div className="flex flex-col lg:flex-row w-full items-center justify-between bg-transparent py-20 lg:p-0">
      <div
        className="w-40 h-40 lg:w-80 lg:h-80 rounded-lg lg:rounded-none
                bg-[url('../../public/image_hand_X.svg')]
                lg:bg-[url('../../public/image_hand_X.svg')] bg-no-repeat bg-center bg-cover"
      />

      <div className="flex flex-col w-3/4 lg:items-end items-center gap-2 p-0 lg:pr-20 text-white">
        <h1 className="text-2xl lg:text-4xl font-medium">Título</h1>
        <p className="block font-light text-center lg:text-right text-lg lg:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, atque,
          dignissimos, at rerum saepe sapiente alias porro nisi pariatur placeat
          molestiae architecto sint nostrum inventore vero dolorem qui?
          Reprehenderit, ipsum?
        </p>
      </div>
    </div>
  )
}
