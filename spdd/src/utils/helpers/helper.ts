export const ConvertDate = (date: string | Date, format = "YYYY-MM-DD") => {
  if (date) {
    let moment = require('jalali-moment');

    return moment(date).locale('fa').format(format);
  }

  return null;
};


export const TimeDifference = (date: Date) => {
  if (date) {
    let moment = require('jalali-moment');

    return Math.abs(moment().diff(date, 'seconds'));
  }

  return 0;
};


export const TimeIsAfter = (date: string | Date, timeDestination: string | Date = new Date()) => {
  if (date) {
    let moment = require('moment');

    return moment(date).isAfter(timeDestination);
  }

  return false;
};

export const momentFormat = (format: string) => {
  let moment = require('moment');
  return (moment(new Date().getTime()).format(format))
}
