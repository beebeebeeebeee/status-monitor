import { ErrorConstant, UnknownError } from "@domain/constant";

export type ControllerResult<T> =
  | {
      result: T;
      error: null;
    }
  | {
      result: null;
      error: ErrorConstant;
    };

export const genSuccessControllerResult = <T>(
  result: T
): ControllerResult<T> => {
  return {
    result,
    error: null,
  };
};

export const genErrorControllerResult = <T>(
  error: ErrorConstant
): ControllerResult<T> => {
  return {
    result: null,
    error,
  };
};

export const genUnknownControllerResult = <T>(): ControllerResult<T> => {
  return {
    result: null,
    error: UnknownError,
  };
};
