// TODO 驼峰转分隔符失败
export const toLine = (value: string) => {
  return value.replace(/([A-Z])g/, '-$1').toLocaleLowerCase()
}