import axios, { AxiosInstance } from "axios";

type PathSegments<Path extends string> =
  Path extends `${infer SegmentA}/${infer SegmentB}`
    ? ParamOnly<SegmentA> | PathSegments<SegmentB>
    : ParamOnly<Path>;

type ParamOnly<Segment extends string> = Segment extends `:${infer Param}`
  ? Param
  : never;

export class BaseAxiosClient {
  protected readonly api: AxiosInstance;

  constructor(baseURL: string, timeoutInMs: number) {
    this.api = axios.create({
      baseURL,
      timeout: timeoutInMs,
    });
  }

  protected replaceUrlParams<
    R extends undefined | string = undefined,
    T extends string = string
  >(url: T, params: Record<R extends string ? R : PathSegments<T>, string>) {
    let returnString: string = url;
    Object.entries(params as Record<string, string>).forEach(([key, value]) => {
      returnString = returnString.replace(new RegExp(`:${key}`), value);
    });
    return returnString;
  }
}
