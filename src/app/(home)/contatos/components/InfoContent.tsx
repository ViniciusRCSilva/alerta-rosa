interface InfoContentProps {
  name: string
  local?: string
  contact: string
}

export function InfoContent(props: InfoContentProps) {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col w-[80%] items-center my-3 p-5 bg-white rounded-xl rounded-tl-none border-2 border-pink shadow-md">
        <div className="text-xl font-bold my-2 text-pink text-center">
          {props.name}:
        </div>

        {props.local && (
          <div className="flex flex-col gap-2 text-xl mb-2">
            <div className="flex items-center justify-center">
              <p className="font-semibold text-dark-blue text-center">Local:</p>
            </div>
            <p className="mx-2 font-light text-dark-blue text-center">
              {props.local}
            </p>
          </div>
        )}
        <div className="flex flex-col gap-2 text-xl">
          <div className="flex items-center justify-center">
            <p className="font-semibold text-dark-blue text-center">
              Contato(s):
            </p>
          </div>
          <p className="mx-2 font-light text-dark-blue text-center">
            {props.contact}
          </p>
        </div>
      </div>
    </div>
  )
}
