interface ItemTabelaProps {
  color: string
  name: string
}

export function ItemTabela(props: ItemTabelaProps) {
  return (
    <div className="flex gap-5 items-center w-full">
      <div className={`w-24 h-6 rounded-full bg-[${props.color}]`} />
      <p>{props.name}</p>
    </div>
  )
}
