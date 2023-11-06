export type SystemServiceRsp<T = any> = {
  data: T;
  status: number;
};

const genSystemServiceRsp = <T>(data: T, status: number): SystemServiceRsp => ({
  data,
  status,
});

export { genSystemServiceRsp };
