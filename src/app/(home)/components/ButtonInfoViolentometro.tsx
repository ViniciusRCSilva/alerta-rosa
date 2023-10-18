'use client'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'

interface ButtonInfoProps {
  name: string
  content: string
}

export function ButtonInfo(props: ButtonInfoProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <button
        onClick={onOpen}
        className="h-14 w-72 flex items-center justify-center p-5 bg-white rounded-full text-pink transition-all border-2 border-transparent hover:border-pink"
      >
        {props.name}
      </button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <div className="p-5 lg:p-10">
            <ModalHeader>
              <p className="text-pink">{props.name}</p>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p className="text-dark-blue text-justify font-light">
                {props.content}
              </p>
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>
    </>
  )
}
