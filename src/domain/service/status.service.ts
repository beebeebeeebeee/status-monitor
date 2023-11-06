import { Status } from "@domain/entity";
import { ServiceResult } from "@domain/service";

export interface IStatusService {
  getStatusList(signal?: AbortSignal): Promise<ServiceResult<Status[]>>;
}
