export function limitString(
  str,
  {maxLen, endingStr} = {maxLen: 80, endingStr: '...'}
) {
  if (str.length > maxLen) {
    const replacerRegExp = new RegExp(`^(.{${maxLen}}\\S*)(.*)`, 'gi')
    const trimmedString = str.replace(replacerRegExp, '$1')
    return `${trimmedString} ${endingStr}`
  }
  return str
}
