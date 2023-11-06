import { IStatusService } from "@domain/service";
import { Status } from "@domain/entity";
import {
  genErrorUsecaseResult,
  genSuccessUsecaseResult,
  UsecaseResult,
} from "@domain/usecase/result";

export class StatusUsecase {
  async getStatusList(
    statusService: IStatusService,
    signal?: AbortSignal
  ): Promise<UsecaseResult<Status[]>> {
    const { result, error } = await statusService.getStatusList(signal);

    if (error != null) {
      return genErrorUsecaseResult(error);
    }

    return genSuccessUsecaseResult(result);
  }
}
