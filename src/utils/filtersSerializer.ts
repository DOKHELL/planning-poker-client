export type Filter = {
  [key: string]: {
    value?: string | number
    action?: 'eq' | 'like' | 'from' | 'to' | ''
    title?: string
  }
}

export const filtersSerializer = (filters: Filter) => {
  let stringifiedFilters = ''
  for (const [ key, value ] of Object.entries(filters)) {
    const field = key.split(/(?=[A-Z])/).join('_').toLowerCase()
    if (typeof value.value === 'object' && value.value !== null) {
      for (const value1 of Object.values(value.value)) {
        stringifiedFilters += value1 ? '&' + field + '=' + value1 : ''
      }
    } else {
      stringifiedFilters += value.value ? '&' + field + '_' + value.action + '=' + value.value : ''
    }
  }
  return stringifiedFilters
}
