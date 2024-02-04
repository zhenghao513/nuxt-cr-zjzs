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
    body: JSON.stringify({
      args: {
        bindType,
      },
      token: 'dreamtouch',
      deviceInfo:
        navigator.userAgent +
        new Date()
          .toLocaleString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          })
          .replaceAll(/\//g, '-'),
      channel: 'pc_h5_ksd',
    }),
  });
}
