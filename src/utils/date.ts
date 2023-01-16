const japaneseWeekdays = ['日', '月', '火', '水', '木', '金', '土']

/**
 *
 * @param dateString "2022-01-01" のような日付の文字列。
 * @returns "2022年01月01日 (土)" のような曜日付きにフォーマットされた文字列。
 */
export const jaYYYYMMDD = (dateString: string): string => {
  const date = new Date(Date.parse(dateString))
  const year = date.getFullYear().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  return `${year}年${month}月${day}日 (${japaneseWeekDay(date)})`
}

const japaneseWeekDay = (date: Date): string => {
  return japaneseWeekdays[date.getDay()]
}
