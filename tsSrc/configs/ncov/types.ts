export interface WorldlistItem {
  name: string
  conadd: number
  conNum: number
  deathadd: number
  cureNum: number
  deathNum: number
}

export interface TotalItem {
  certain: string | number
  die: string | number
  recure: string | number
  certain_inc: string | number
  die_inc: string | number
  recure_inc: string | number
}

export interface NcovRes {
  times: string
  total: TotalItem
  worldlist: WorldlistItem[]
}
