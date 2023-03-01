import dayjs from 'dayjs';

const helpers = {
  dateToUrl: (date) => {
    let parsedDate = null;

    if (date instanceof dayjs) {
      parsedDate = date.toDate();
    } else if (date instanceof Date) {
      parsedDate = date;
    } else {
      parsedDate = new Date(Date.parse(date));
    }

    return `day=${parsedDate.getDate()}&month=${parsedDate.getMonth() + 1}&year=${parsedDate.getFullYear()}`;
  },
};

export default helpers;
