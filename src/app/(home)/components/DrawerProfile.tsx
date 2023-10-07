import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure,
  Avatar,
} from '@chakra-ui/react'
import { HiX } from 'react-icons/hi'

export function DrawerProfile() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Usuário</Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={'lg'}>
        <DrawerOverlay />
        <DrawerContent>
          <div className="h-full w-full flex flex-col items-center justify-center gap-5">
            <div className="w-full flex items-center justify-end p-5 text-3xl text-pink">
              <button className="mr-10" onClick={onClose}>
                <HiX />
              </button>
            </div>
            <div className="h-96 w-[30rem] flex flex-col items-center justify-start gap-10">
              <Avatar
                name="Usuário"
                src="logo.svg"
                size={'2xl'}
                bg={'red'}
                rounded={'full'}
              />
              <span className="text-2xl font-bold">Usuário</span>
              <span className="text-xl font-semibold">DDD + número</span>
              <span className="text-xl font-semibold">email@email.com</span>
            </div>
            <footer className="w-full flex items-center justify-end p-5 text-pink">
              <button>Sair da conta</button>
            </footer>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  )
}
