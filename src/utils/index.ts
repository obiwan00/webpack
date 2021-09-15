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

export function getSortedByDateChildren(parentBlock: Element): HTMLElement[] {
  const arrayOfChildren: HTMLElement[] = Array.prototype.slice.call(
    parentBlock.children
  )
  return arrayOfChildren.sort((a, b) => {
    const creationDateA = new Date(a.dataset.creationDate).getTime()
    const creationDateB = new Date(b.dataset.creationDate).getTime()
    return creationDateB - creationDateA
  })
}

export function appendArrayElementsIntoBlockOneByOne(
  parentBlock: Element,
  children: HTMLElement[]
): void {
  children.forEach((child) => {
    parentBlock.append(child)
  })
}
