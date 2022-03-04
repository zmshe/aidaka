// 0:公斤   1:斤
export const WeightRange = {
  0: Array.from(new Array(111).keys()).map((item) => item + 40),
  1: Array.from(new Array(221).keys()).map((item) => item + 80)
}

export const WeightNumRange = Array.from(new Array(10).keys()).map((item) => `.${item}`)

export const WeightUnitRange = ['公斤', '斤']

export const WeightUnitMap = {
  0: '公斤',
  1: '斤'
}