import { useDependency } from "@presentation/hooks";
import { useCallback } from "react";
import { Status } from "@domain/entity";
import {
  ControllerResult,
  genErrorControllerResult,
  genSuccessControllerResult,
} from "@adapter/controller/result";

export function useStatusController() {
  const { statusUsecase, statusService } = useDependency();

  const getStatusList = useCallback(
    async (signal?: AbortSignal): Promise<ControllerResult<Status[]>> => {
      const { result, error } = await statusUsecase.getStatusList(
        statusService,
        signal
      );

      if (error != null) {
        return genErrorControllerResult(error);
      }

      return genSuccessControllerResult(result);
    },
    []
  );

  return {
    getStatusList,
  };
}
