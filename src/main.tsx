import "@fontsource/poppins";

import ReactDOM from "react-dom/client";
import { App } from "@presentation/pages";
import "./index.css";
import { DependencyProvider, DependencyValue } from "@presentation/providers";
import { SettingAxiosClient, StatusService } from "@adapter/service";
import { StatusUsecase } from "@domain/usecase";
import { appConfigs } from "@adapter/configs";

// usecase
const statusUsecase = new StatusUsecase();

// http-client
const settingAxiosClient = new SettingAxiosClient(appConfigs.baseUrl, 5000);

// service
const statusService = new StatusService(settingAxiosClient);

const dependency: DependencyValue = {
  statusUsecase,
  statusService,
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <DependencyProvider dependency={dependency}>
    <App />
  </DependencyProvider>
);
