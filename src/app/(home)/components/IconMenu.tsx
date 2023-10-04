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
      <MenuList
        bg={'rgba(51, 51, 51, 0.4)'}
        backdropFilter={'auto'}
        backdropBlur={'5px'}
        boxShadow={'md'}
        mt={'15px'}
        mr={'-10px'}
        outline={'nome'}
        border={'none'}
      >
        <div className="flex flex-col items-end justify-center text-white gap-5">
          <Link href="" className="mr-5">
            Formulário
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
