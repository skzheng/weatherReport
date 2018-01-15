export const findWeekday = (day) => {
  let date = new Date(day * 1000).toString().slice(0,3)
  let hash = {
    'Mon' : 'Monday',
    'Tue' : 'Tuesday',
    'Wed' : 'Wednesday',
    'Thu' : 'Thursday',
    'Fri' : 'Friday',
    'Sat' : 'Satuday',
    'Sun' : 'Sunday'
  }
  return hash[date];
}
