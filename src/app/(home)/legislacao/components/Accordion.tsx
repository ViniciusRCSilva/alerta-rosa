import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

interface AccordionProps {
  title: any
  content: any
}

export default function AccordionComponent(props: AccordionProps) {
  return (
    <AccordionItem>
      <AccordionButton>
        {props.title}
        <AccordionIcon color="blueviolet" />
      </AccordionButton>

      <AccordionPanel>{props.content}</AccordionPanel>
    </AccordionItem>
  )
}
