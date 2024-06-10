export namespace ArrayHelpers {
  export const addIdFields = (array: unknown[], field?: string) => {
    if (Array.isArray(array) && array.length) {
      return array.map((item, i) => {
        // @ts-ignore
        if (typeof item === 'object' && !item?.id) {
          return {
            id: i,
            ...item
          }
        }

        if ((typeof item === 'string' || typeof item === 'number') && field) {
          return {
            id: i,
            [field]: item,
          }
        }

        return item;
      })
    }

    return array;
  }
}
