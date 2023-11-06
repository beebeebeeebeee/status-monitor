import { StatusMonth, StatusStatus } from "@domain/entity";

export type Status = {
  title: string;
  content: string;
  status: StatusStatus;
  errorMonths?: StatusMonth[];
};
