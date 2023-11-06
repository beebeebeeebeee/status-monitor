import { MONTHS } from "@domain/constant";

export enum StatusStatus {
  SUCCESS = "success",
  ERROR = "error",
}

export type StatusMonth = (typeof MONTHS)[number];

export type StatusProps = {
  title: string;
  content: string;
  status: StatusStatus;
  errorMonths?: StatusMonth[];
};

export class Status {
  readonly title: string;

  readonly content: string;

  readonly status: StatusStatus;

  readonly errorMonths?: StatusMonth[];

  constructor(props: StatusProps) {
    const { title, content, status, errorMonths } = props;

    this.title = title;
    this.content = content;
    this.status = status;
    this.errorMonths = errorMonths;
  }

  get isSuccess(): boolean {
    return this.status === StatusStatus.SUCCESS;
  }
}
