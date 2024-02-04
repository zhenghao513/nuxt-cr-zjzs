export interface NoticeRes {
  retCode: number;
  obj: {
    bindType: number;
    content: string;
    title: string;
  };
  msg: {
    businessCode: number;
    prompt: string;
    error: string;
  };
}

export function queryNotice(bindType: number) {
  return useFetch<NoticeRes>('/server/api/common/option/get-system-use', {
    method: 'POST',
    body: {
      args: {
        bindType,
      },
    },
  });
}
