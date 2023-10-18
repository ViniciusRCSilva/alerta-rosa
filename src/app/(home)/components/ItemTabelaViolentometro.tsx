interface ItemTabelaProps {
  color: string
  name: string
}

export function ItemTabela(props: ItemTabelaProps) {
  return (
    <div className="flex gap-2 items-center">
      <div className={`w-72 h-12 rounded-full ${props.color}`} />
      <p>{props.name}</p>
    </div>
  )
}
