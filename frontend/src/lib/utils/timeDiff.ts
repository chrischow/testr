const MS_IN_MINUTE = 60 * 1000
const MS_IN_SECOND = 1000

export const computeTimeDiff = (currentDatetime: Date, startDatetime: Date) => {
  const timeDiff: number = currentDatetime.getTime() - startDatetime.getTime()

  const elapsedMinutes = Math.floor(timeDiff / MS_IN_MINUTE)
  const elapsedSeconds = Math.floor((timeDiff - elapsedMinutes * MS_IN_MINUTE) / MS_IN_SECOND)
  const elapsedMilliseconds = Math.floor(timeDiff - elapsedMinutes * MS_IN_MINUTE - elapsedSeconds * MS_IN_SECOND)

  return { elapsedMinutes, elapsedSeconds, elapsedMilliseconds }
}
