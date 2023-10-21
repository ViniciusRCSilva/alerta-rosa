import { ButtonInfo } from '../components/ButtonInfoViolentometro'
import { ItemTabela } from '../components/ItemTabelaViolentometro'

export default function Resultado() {
  return (
    <main>
      <div
        className="flex flex-col lg:flex-row items-start justify-start lg:h-screen w-full gap-10
            text-white 
            bg-[url('../../public/mobile_main_content.svg')]
            lg:bg-[url('../../public/main_content.svg')] bg-no-repeat bg-center bg-cover
            overflow-hidden"
      >
        <div className="flex flex-col w-full lg:h-screen items-center justify-center lg:w-1/2 gap-5 mt-16 bg-white text-dark-blue lg:shadow-inner-shadow lg:rounded-r-full">
          <div className="h-full w-full lg:w-1/2 flex flex-col items-center justify-center my-20 px-10 lg:p-0 gap-5">
            <div className="flex flex-col gap-2 w-full">
              <ItemTabela name="Chantagear" color="yellow" />
              <ItemTabela name="Mentir e enganar" color="yellow" />
              <ItemTabela name="Ignorar" color="yellow" />
              <ItemTabela name="Ciúmes excessivos" color="yellow" />
              <ItemTabela name="Ofender e humilhar" color="yellow" />
              <ItemTabela name="Intimidar e ameaçar" color="yellow" />
              <ItemTabela name="Proibir e controlar" color="yellow" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <ItemTabela name="Destruir bens pessoais" color="orange" />
              <ItemTabela name="Machucar e agredir" color="orange" />
              <ItemTabela name="Empurrar" color="orange" />
              <ItemTabela name="Golpear" color="orange" />
              <ItemTabela name="Chutar" color="orange" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <ItemTabela name="Confinar e prender" color="red" />
              <ItemTabela name="Ameaçar com armas" color="red" />
              <ItemTabela name="Ameaçar de morte" color="red" />
              <ItemTabela name="Abusar sexualmente" color="red" />
              <ItemTabela name="Espancar e multilar" color="red" />
              <ItemTabela name="Matar - Feminicídio" color="red" />
            </div>
          </div>
        </div>

        <div className="gap-10 lg:h-full h-screen w-full lg:w-1/2 flex flex-col items-center justify-center my-10 lg:m-0 animate-screenOpacity">
          <h1 className="text-4xl md:text-6xl text-center font-semibold uppercase">
            Importância <br />
            do Violentômetro
          </h1>

          <div className="flex flex-col w-full items-center justify-center">
            <div className="flex flex-col gap-10 justify-center items-center lg:grid lg:grid-cols-2 w-full lg:h-2/5">
              <ButtonInfo
                name="Conscientização e Educação"
                content="O violentômetro ajuda as pessoas a compreender e reconhecer diferentes formas de violência, muitas das quais podem não ser evidentes à primeira vista. Isso é essencial para educar o público sobre a extensão e a complexidade do problema."
              />
              <ButtonInfo
                name="Autoavaliação"
                content="Permite que as vítimas ou pessoas em relacionamentos potencialmente abusivos avaliem sua situação de maneira objetiva e compreendam melhor os sinais de alerta. Isso pode ser o primeiro passo para buscar ajuda ou tomar medidas para sair de um relacionamento abusivo."
              />
              <ButtonInfo
                name="Prevenção e Intervenção"
                content="Ajuda profissionais de saúde, assistentes sociais e outros prestadores de serviços a identificar rapidamente a gravidade da situação e a fornecer a ajuda adequada. Isso é fundamental para a prevenção e intervenção precoces."
              />
              <ButtonInfo
                name="Empoderamento"
                content="O violentômetro capacita as vítimas, mostrando que elas não estão sozinhas e que sua situação é reconhecida e validada. Isso pode encorajar as vítimas a procurar ajuda, compartilhar suas histórias e tomar medidas para sair de um relacionamento abusivo."
              />
              <ButtonInfo
                name="Promoção da Igualdade de Gênero"
                content="Ao destacar a diversidade de comportamentos violentos, o violentômetro ajuda a desafiar estereótipos de gênero e a promover a igualdade, pois reconhece que a violência não se limita a agressões físicas, mas também inclui o controle psicológico e emocional."
              />
              <ButtonInfo
                name="Conscientização Pública"
                content="A representação visual do violentômetro, muitas vezes em forma de gráfico ou escala, é eficaz para chamar a atenção e aumentar a conscientização sobre a violência de gênero, tornando o problema mais visível para a sociedade em geral."
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
