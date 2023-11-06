const { BASE_URL, VITE_APP_TITLE, VITE_CURRENT_MONTH } = import.meta.env;

export interface IAppConfig {
  title: string;
  currentMonth: number;
  baseUrl: string;
}
export const appConfigs: IAppConfig = {
  title: VITE_APP_TITLE,
  currentMonth: Number(VITE_CURRENT_MONTH),
  baseUrl: BASE_URL,
};
