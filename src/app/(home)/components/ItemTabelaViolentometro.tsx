interface ItemTabelaProps {
  color: 'yellow' | 'orange' | 'red'
  name: string
}

export function ItemTabela(props: ItemTabelaProps) {
  function getColor() {
    if (props.color === 'yellow') return 'bg-[#FFD56A]'
    if (props.color === 'orange') return 'bg-[#FF9D43]'
    if (props.color === 'red') return 'bg-[#E86161]'
  }

  return (
    <div className="flex gap-5 items-center w-full">
      <div className={`w-24 h-6 rounded-full ${getColor()}`} />
      <p>{props.name}</p>
    </div>
  )
}
