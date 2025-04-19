export default interface BaseVacation {
  destination: string;
  vacationDescription: string;
  startingDate: Date | string;
  endingDate: Date | string;
  price: number;
  followers?: [];
}
