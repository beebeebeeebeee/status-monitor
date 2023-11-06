import {
  BaseAxiosClient,
  genSystemServiceRsp,
  SETTING_CONSTANT,
  Status,
  SystemServiceRsp,
} from "@infrastructure/axios";

export class SettingAxiosClient extends BaseAxiosClient {
  async getSetting(signal?: AbortSignal): Promise<SystemServiceRsp<Status[]>> {
    const { data, status } = await this.api.get<Status[]>(
      SETTING_CONSTANT.PATH.SETTING_GET,
      { signal }
    );
    return genSystemServiceRsp(data, status);
  }
}
