import Image from 'next/image'
import Link from 'next/link'

interface MemberProps {
  link: string
  image: string
  name: string
}

export function Member(props: MemberProps) {
  return (
    <Link className="my-8 mx-20 group" href={props.link} target="_blank">
      <div className="border-4 border-transparent group-hover:scale-105 group-hover:border-pink transition-all rounded-full">
        <Image
          src={props.image}
          alt="member"
          className="flex rounded-full"
          height={256}
          width={256}
        />
      </div>
      <p className="text-center pt-4">{props.name}</p>
    </Link>
  )
}
