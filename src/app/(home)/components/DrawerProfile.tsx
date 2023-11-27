'use client'
import UseAuth from '@/service/hooks/useAuth'
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure,
  Avatar,
} from '@chakra-ui/react'
import { Power } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { HiX } from 'react-icons/hi'

export function DrawerProfile() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const { user, logout } = UseAuth()

  useEffect(() => {
    if (user?.name == null) {
      setName('Usuário não logado')
    } else {
      setName(user?.name)
    }

    if (user?.email == null) {
      setEmail(' ')
    } else {
      setEmail(user?.email)
    }
  }, [user])

  return (
    <>
      <Button
        onClick={onOpen}
        color={'white'}
        fontWeight={'normal'}
        variant={'unstyled'}
      >
        Usuário
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={'xl'}>
        <DrawerOverlay />
        <DrawerContent>
          <div className="h-full w-full flex flex-col items-center justify-center gap-5 bg-[url('../../public/user_background.svg')] bg-no-repeat bg-center bg-cover">
            <div className="w-full flex items-center justify-end text-3xl text-pink">
              <button className="mr-20" onClick={onClose}>
                <HiX />
              </button>
            </div>
            <div className="h-96 w-[30rem] flex flex-col items-center justify-start gap-10 text-dark-blue">
              <Avatar
                name="Usuário"
                src="user_women.svg"
                size={'2xl'}
                border={'1px'}
                rounded={'full'}
              />
              <span className="text-2xl font-bold">{user?.name}</span>
              <span className="text-xl font-semibold">
                {user?.phone?.length ? user?.phone : 'Número não informado'}
              </span>
              <span className="text-xl font-semibold">{user?.email}</span>
            </div>
            <footer className="w-full flex items-center justify-end pr-20 gap-2 text-pink">
              <Power className="text-xl" />
              <button onClick={logout}>Sair da conta</button>
            </footer>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  )
}
