import { Status as AxiosStatus } from "@infrastructure/axios";
import { Status as DomainStatus } from "@domain/entity";

export function infrastructureToDomain(status: AxiosStatus): DomainStatus {
  return new DomainStatus({
    content: status.content,
    errorMonths: status.errorMonths,
    status: status.status,
    title: status.title,
  });
}

export const statusConverter = { infrastructureToDomain };
