import { useContext } from "react";
import { DependencyContext, DependencyValue } from "@presentation/providers";

export function useDependency(): DependencyValue {
  const dependencyValue = useContext(DependencyContext);
  if (dependencyValue === undefined) {
    throw new Error("dependencyValue is empty!");
  }
  return dependencyValue;
}
