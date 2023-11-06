import { ErrorConstant, UnknownError } from "@domain/constant";

export type UsecaseResult<T> =
  | {
      result: T;
      error: null;
    }
  | {
      result: null;
      error: ErrorConstant;
    };

export const genSuccessUsecaseResult = <T>(result: T): UsecaseResult<T> => {
  return {
    result,
    error: null,
  };
};

export const genErrorUsecaseResult = <T>(
  error: ErrorConstant
): UsecaseResult<T> => {
  return {
    result: null,
    error,
  };
};

export const genUnknownUsecaseResult = <T>(): UsecaseResult<T> => {
  return {
    result: null,
    error: UnknownError,
  };
};
