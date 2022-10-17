export interface ApiRequestParams {
  req: {
    provinceCode?: string
    areaCode?: string
    cityCode?: string
    hotnewsReq?: {
      limit: number
      locationCode: string
      offset: number
      reqType: number
      tab: string
    }
    queryList?: object[]
  }
  service: string
  func: string
}

export interface Result<T> {
  code: number
  msg: string
  args: {
    rsp: T
  }
}

export interface ChinaRealTimeInfo {
  chinaTotal: {
    localNowConfirm: number
    noinfectDesc: number
    nowImport: number
    confirm: number
  }
  chinaDayModify: {
    localConfirmAdd: number
    noinfect: number
    importDesc: string
    heal: number
  }
  recentTime: string
  dataFrom: string
}

export interface ProvinceInfo {
  provinceInfo: {
    area: string
    localAddPctDesc: string
    localAdd: number
    asymptomAdd: number
    importAdd: number
    lastImportAddTotal: number
    updateTime: string
    riskLevelNum: number
  }
}

export interface ProvinceMapItem {
  name: string
  localAdd: number
  asymptomAdd: number
  localAddCityData: LocalAddCityDataItem[]
}

export interface LocalAddCityDataItem {
  name: string
  num: string
}
export interface ProvinceMapRes {
  provinceMapData: ProvinceMapItem[]
}

export interface CityRes {
  cityInfo: CityInfo[]
}

export interface CityInfo {
  city: string
  localAdd: number | string
  asymptomAdd: number | string
  localAddTotal: number | string
  riskLevelNum: number | string
}

export interface TrendInfoRes {
  modifyHistory: ModifyHistoryItem[]
  totalHistory: TotalHistoryItem[]
}

export interface ModifyHistoryItem {
  asymptomAdd: number
  importAdd: number
  localAdd: number
  day: string
  date: string
  confirm?: number
  dead?: number
  heal?: number
}

export interface TotalHistoryItem {
  confirm: number
  dead: number
  heal: number
  date: string
  day: string
}

export interface CityTrendRes {
  modifyHistory: CityModifyHistoryItem[]
}

export interface CityModifyHistoryItem {
  confirm: number
  noinfect: string
  day: string
}

export interface ContentsRes {
  hotnewsRsp: {
    contents: ContentsInfo[]
  }
}

export interface ContentsInfo {
  publicTime: string
  title: string
  desc: string
  from: string
  jumpLink: {
    url: string
  }
}

export interface TrendChartInfoRes {
  trendChartInfo: TrendChartInfoItem[]
}

export interface TrendChartInfoItem {
  chartLineData: ChartLineDataItem[]
  chartName: string
  time: string
}

export interface ChartLineDataItem {
  x: string
  y0: string
  y1: string
  y2: string
  y3: string
}

export interface ResUnion {
  provinceMapInfo: ProvinceMapRes
  chinaRealTimeInfo: ChinaRealTimeInfo
  provinceInfos: ProvinceInfo
  cityRes: CityRes
  trendInfoRes: TrendInfoRes
  cityTrendRes: CityTrendRes
  contentsRes: ContentsRes
  trendChartInfoRes: TrendChartInfoRes
}
