type capitalizeFirstLetterProps = {
  string: string
}

export function capitalizeFirstLetter({ string }: capitalizeFirstLetterProps) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
