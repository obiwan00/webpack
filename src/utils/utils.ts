export function limitString(
  str: string,
  {maxLen, endingStr}: {maxLen: number; endingStr: string} = {
    maxLen: 80,
    endingStr: '...',
  }
): string {
  if (str.length <= maxLen) return str

  const replacerRegExp = new RegExp(`^(.{${maxLen}}\\S*)(.*)`, 'gi')
  const trimmedString = str.replace(replacerRegExp, '$1')
  return `${trimmedString} ${endingStr}`
}
