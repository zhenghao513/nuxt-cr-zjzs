export interface AnnounceRes {
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

export function queryAnnounce(bindType: number) {
  return $fetch<AnnounceRes>('/server/api/common/option/get-system-use', {
    method: 'POST',
    body: {
      args: {
        bindType,
      },
    },
  });
}
