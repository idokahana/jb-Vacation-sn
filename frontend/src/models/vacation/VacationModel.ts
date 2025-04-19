import BaseVacation from "./BaseVacation";

export default interface VacationModel extends BaseVacation {
  includes(vacationId: string): unknown;
  vacationId: string;
  imageUrl: string;
}
