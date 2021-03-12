export const search = document.getElementById("search")
export const box3 = document.getElementById("box3")
export const box4 = document.getElementById("box4")
export const tri3 = document.getElementById("tri3")
export const tri4 = document.getElementById("tri4")
export const menuhome = document.getElementById("menuhome")
export const menu = document.getElementById("menu")
export const selectorItem3 = document.getElementById("selectorItem3")
export const selectorItem4 = document.getElementById("selectorItem4")
export const selectorDate = document.getElementById("selectorDate")
export const starStation = document.getElementById("starStation")
export const endStation = document.getElementById("endStation")
export const starStationSelector = document.getElementById("starStationSelector")
export const endStationSelector = document.getElementById("endStationSelector")
export const starStationName = document.getElementById("starStationName")
export const endStationName = document.getElementById("endStationName")
export const box231 = document.getElementById("box231")
export const box232 = document.getElementById("box232")
export const buttonStation = document.getElementById("buttonStation")

const HOST_API = "https://ptx.transportdata.tw/MOTC"
export const ALL_STATION_API = `${HOST_API}/v2/Rail/THSR/Station?$format=JSON`
export const LAST_STATION_API = `${HOST_API}/v2/Rail/THSR/DailyTimetable/OD/start/to/end/date?$format=JSON`
