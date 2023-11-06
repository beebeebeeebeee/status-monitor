import { createContext } from "react";
import { StatusUsecase } from "@domain/usecase";
import { StatusService } from "@adapter/service/status.service";

export type DependencyValue = {
  // usecase
  statusUsecase: StatusUsecase;

  // repo

  // service
  statusService: StatusService;
};

export const DependencyContext = createContext<DependencyValue | undefined>(
  undefined
);

export type DependencyProviderProps = {
  children: JSX.Element;
  dependency: DependencyValue;
};

export function DependencyProvider(
  props: DependencyProviderProps
): JSX.Element {
  const { children, dependency } = props;

  return (
    <DependencyContext.Provider value={dependency}>
      {children}
    </DependencyContext.Provider>
  );
}
