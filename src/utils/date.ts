import {differenceInDays} from "date-fns";

export function isByWeeklyDate(startDate: Date, compareDate: Date) {
    const dagerForskjell = differenceInDays(compareDate, startDate);
    const rest = dagerForskjell%14;
    return rest === 0;
}

export function ukedagNavn(dayNumber: number) {
    const dayNames = ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag']
    return dayNames[dayNumber];
}

export function imorgenDateString() {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)
    const monthNames = ['januar', 'februar','mars', 'april','mai', 'juni','juli', 'august','september','oktober', 'november', 'desember']
    return `${tomorrow.getDate()}. ${monthNames[tomorrow.getMonth()]}`
}

export function tomorrowDate() {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)
    return tomorrow;
}