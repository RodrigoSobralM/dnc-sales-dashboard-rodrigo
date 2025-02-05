/**
 * Converte JWT exp in days
 * @param exp - Number to be converted
 * @returns Converted exp in days
 */
export const jwtExpirationDateConverter = (exp: number): number => {
  const currentTime = Math.floor(Date.now() / 1000)
  const secondsUntilExpiration = exp - currentTime
  const secondInADay = 60 * 60 * 24
  const daysUntilExpiration = secondsUntilExpiration / secondInADay
  return daysUntilExpiration
}
