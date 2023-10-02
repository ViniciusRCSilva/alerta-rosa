'use client'
import { Icon, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import { List } from '@phosphor-icons/react'
import Link from 'next/link'

export function IconMenu() {
  return (
    <Menu>
      <MenuButton>
        <Icon as={List} height={8} width={8} />
      </MenuButton>
      <MenuList bg={'purple.300'} outline={'nome'} border={'none'}>
        <div className="flex flex-col items-end justify-center  text-white gap-5">
          <Link href="" className="mr-5">
            Opção
          </Link>
          <Link href="" className="mr-5">
            Opção
          </Link>
          <Link href="" className="mr-5">
            Opção
          </Link>
          <Link href="" className="mr-5">
            Usuário
          </Link>
        </div>
      </MenuList>
    </Menu>
  )
}
