import faker from 'faker';
faker.setLocale('pl');
const minYear = 2021;
const maxYear = 2021;

export interface IDevBookingData {
  id: string,
  name: string,
  hourBooking: Date
}

const generateFakeDate = (): Date => {
  return (new Date(
    faker.datatype.number({ min: minYear, max: maxYear }),
    faker.datatype.number({ min: 0, max: 11 }),
    faker.datatype.number({ min: 1, max: 31 }),
    faker.datatype.number({ min: 8, max: 21 }),
  ))
}

export const DevBookingDataGenerator = (): Array<IDevBookingData> => {

  let arr: Array<IDevBookingData> = [];
  for (let index = 0; index < 1000; index++) {
    arr.push({
      id: faker.datatype.uuid(),
      name: faker.name.firstName(),
      hourBooking: generateFakeDate(),
    })
  }
  return arr
}
