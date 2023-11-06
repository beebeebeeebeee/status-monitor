import { ErrorConstant } from "@domain/constant";

export type ServiceResult<T> =
  | {
      result: T;
      error: null;
    }
  | {
      result: null;
      error: ErrorConstant;
    };

export const genSuccessServiceResult = <T>(result: T): ServiceResult<T> => {
  return {
    result,
    error: null,
  };
};

export const genErrorServiceResult = <T>(
  code: number,
): ServiceResult<T> => {
  return {
    result: null,
    error: {
      code,
    },
  };
};
