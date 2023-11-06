export type ErrorConstant = {
  type?: ErrorType;
  code: number;
};

export const UnknownError: ErrorConstant = {
  code: 0,
};

export enum ErrorCode {}

export enum ErrorType {}
