interface InfoContentProps {
  name: string
  local?: string
  contact: string
}

export function InfoContent(props: InfoContentProps) {
  return (
    <div className="flex flex-col justify-start my-3 ml-5">
      <div className="h-[1px] rounded-full w-[90%] lg:w-[70%] bg-roxo" />
      <div className="text-xl font-bold my-2 text-slate-300">{props.name}:</div>

      {props.local && (
        <div className="flex items-start justify-center flex-col gap-2 text-xl mb-2">
          <div className="flex items-center justify-center">
            <p className="font-semibold text-purple-950">Local:</p>
          </div>
          <p className="mx-2 font-light text-slate-200">{props.local}</p>
        </div>
      )}
      <div className="flex items-start justify-center flex-col gap-2 text-xl">
        <div className="flex items-center justify-center">
          <p className="font-semibold text-purple-950">Contato(s):</p>
        </div>
        <p className="mx-2 font-light text-slate-200">{props.contact}</p>
      </div>
    </div>
  )
}
