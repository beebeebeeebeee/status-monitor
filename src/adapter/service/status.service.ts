import {
  genErrorServiceResult,
  genSuccessServiceResult,
  IStatusService,
  ServiceResult,
} from "@domain/service";
import { Status } from "@domain/entity";
import { SettingAxiosClient } from "@adapter/service";
import { HttpStatusCode } from "axios";
import { statusConverter } from "@adapter/util";

export class StatusService implements IStatusService {
  private readonly settingHttpClient: SettingAxiosClient;

  constructor(settingHttpClient: SettingAxiosClient) {
    this.settingHttpClient = settingHttpClient;
  }

  async getStatusList(signal?: AbortSignal): Promise<ServiceResult<Status[]>> {
    const { data, status } = await this.settingHttpClient.getSetting(signal);

    if (status !== HttpStatusCode.Ok) {
      return genErrorServiceResult(status);
    }

    return genSuccessServiceResult(
      data.map((status) => statusConverter.infrastructureToDomain(status))
    );
  }
}
