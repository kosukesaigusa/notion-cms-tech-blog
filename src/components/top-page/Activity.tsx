import { Box, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'

import { CommonText } from '../Common'

export default function Activity() {
  return (
    <Box>
      <CommonText text="MOTTAI では、次のような活動に取り組んでいます。" />
      <ActivityGrid />
    </Box>
  )
}

function ActivityGrid() {
  const activities = []
  for (const activityItem of activityItems) {
    activities.push(
      <Box display={{ sm: 'flex' }} mb={[4, 12]} key={activityItem.title}>
        <Grid
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
            'repeat(3, 1fr)',
          ]}
        >
          <GridItem colSpan={1}>
            <Image
              objectFit="cover"
              rounded="lg"
              src={activityItem.imageUrl}
              alt={activityItem.title}
            />
          </GridItem>
          <GridItem colSpan={[1, 1, 2]} pl={[0, 6]} pt={[4, 0]}>
            <Heading as="h3" size="md" mb={2}>
              {activityItem.title}
            </Heading>
            <Text mb={[4, 0]}>{activityItem.description}</Text>
          </GridItem>
        </Grid>
      </Box>
    )
  }

  return <div>{activities}</div>
}

type ActivityItem = {
  title: string
  imageUrl: string
  description: string
}

const activityItems: ActivityItem[] = [
  {
    title: '罠オーナー制度',
    imageUrl: '/images/activity-1-trap-owner.webp',
    description:
      '市民オーナーが罠の狩猟にかかる資金などを提供し、見返りとして狩猟や農業体験などをオーナーに提供するという仕組みです。獣害対策、関係人口増加、環境教育の機会増加、猟師の負担軽減などが見込まれます。',
  },
  {
    title: 'モッタイNight',
    imageUrl: '/images/activity-2-mottai-night.webp',
    description:
      '廃棄になりそうな食材を持ち寄って、カレーや鍋などを作る料理会です。元は代表菅田の友人が始めた「地球にちょこっと恩返し」をコンセプトに行われる活動でしたが、名前をのれん分けしてもらうことで様々な場所で行われるようになりました。',
  },
  {
    title: '体験事業',
    imageUrl: '/images/activity-3-other.webp',
    description:
      '上記プロジェクト以外にも、禅から学ぶ食体験、古民家改装、農業体験、漁業体験、DIYなど様々な体験を随時企画していきます。',
  },
]
