import { Box, Button, Center } from '@chakra-ui/react'

import { CommonText } from '../Common'

export const HowToSupport = () => {
  const supportItemCards = []
  for (const supportItem of supportItems) {
    supportItemCards.push(
      <SupportItemCard
        key={supportItem.title}
        title={supportItem.title}
        description={supportItem.description}
        buttonText={supportItem.buttonText}
        href={supportItem.href}
      />
    )
  }
  return (
    <Box>
      <CommonText text="MOTTAIの活動や理念に共感してもらえる仲間を探しています。寄付による支援、プロボノやインターンや会員としての参加、講演依頼など様々な形でMOTTAIをサポートしてみませんか？" />
      {supportItemCards}
    </Box>
  )
}

type Props = {
  title: string
  description: string
  buttonText: string
  href: string
}

const SupportItemCard = (props: Props) => {
  return (
    <Center mb={8}>
      <Box width={'sm'} borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box p="6">
          <Box
            mb="2"
            fontSize={'xl'}
            fontWeight="semibold"
            as="h3"
            lineHeight="tight"
            noOfLines={1}
          >
            {props.title}
          </Box>
          <CommonText text={props.description} />
          <Center>
            <Button
              as={'a'}
              fontSize={'lg'}
              fontWeight={600}
              color={'white'}
              bg={'teal.600'}
              href={props.href}
              _hover={{
                bg: 'teal.300',
              }}
            >
              {props.buttonText}
            </Button>
          </Center>
        </Box>
      </Box>
    </Center>
  )
}

const supportItems = [
  {
    title: '寄付によるサポート',
    description:
      '食に関する体験を様々な地域で行い、多くの人を巻き込みながら「当たり前の裏側にアクセスしやすい社会を創る」ことがNPO法人MOTTAIの目指すミッションです。そのような活動の運営費用・施設使用料などのために寄付をお願いしています。',
    buttonText: '寄付でサポートする',
    href: '/support/donation',
  },
  {
    title: 'メンバーとしてサポート',
    description:
      'プロジェクトの企画・広報・マネジメントなど、MOTTAIの活動を手伝ってみたいという方や、猟師・農家・漁師の方で何か教えてみたい人などを募集しています。プロボノやインターンとしての参画も受け付けおりますので、お気軽にお問い合わせください。',
    buttonText: 'メンバーとしてサポートする',
    href: '/support/pro-bono',
  },
  {
    title: '講演依頼などでサポート',
    description:
      '代表の菅田悠介をはじめとするNPO法人MOTTAIのメンバーによる講演依頼や取材依頼など、様々なご依頼を受け付けております。お問い合わせフォームよりお気軽にお問い合わせいただき、ご希望の内容をお知らせください。',
    buttonText: '講演依頼などを申し込む',
    href: '/support/request',
  },
]
