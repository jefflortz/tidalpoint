const zone = 'America/New_York'

function parts(date: Date) {
  const values = new Intl.DateTimeFormat('en-US', {timeZone: zone, year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short'}).formatToParts(date)
  return Object.fromEntries(values.map(({type, value}) => [type, value]))
}

function zonedUtc(year: number, month: number, day: number, hour: number, minute = 0) {
  const target = Date.UTC(year, month - 1, day, hour, minute)
  let guess = target
  for (let index = 0; index < 2; index += 1) {
    const rendered = new Intl.DateTimeFormat('en-US', {timeZone: zone, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23'}).formatToParts(new Date(guess))
    const value = Object.fromEntries(rendered.map(({type, value}) => [type, value]))
    const observed = Date.UTC(Number(value.year), Number(value.month) - 1, Number(value.day), Number(value.hour), Number(value.minute))
    guess += target - observed
  }
  return new Date(guess)
}

function upcomingWeekday(now: Date, weekday: string, hour: number, minute = 0) {
  const current = parts(now)
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  let delta = (weekdays.indexOf(weekday) - weekdays.indexOf(current.weekday) + 7) % 7
  if (delta === 0) delta = 7
  const noon = new Date(Date.UTC(Number(current.year), Number(current.month) - 1, Number(current.day) + delta, 12))
  const target = parts(noon)
  return zonedUtc(Number(target.year), Number(target.month), Number(target.day), hour, minute)
}

export function weeklySchedule(now = new Date()) {
  const publishAt = upcomingWeekday(now, 'Mon', 7, 30)
  const publication = parts(publishAt)
  const fridayNoon = new Date(Date.UTC(Number(publication.year), Number(publication.month) - 1, Number(publication.day) - 3, 12))
  const friday = parts(fridayNoon)
  const approvalDeadline = zonedUtc(Number(friday.year), Number(friday.month), Number(friday.day), 15)
  const social = {
    linkedinCompany: upcomingWeekday(publishAt, 'Wed', 16),
    instagram: upcomingWeekday(publishAt, 'Wed', 18),
    facebook: upcomingWeekday(publishAt, 'Thu', 9),
  }
  return {publishAt, approvalDeadline, social}
}
