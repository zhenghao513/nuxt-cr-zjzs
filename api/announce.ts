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
  return useFetch('https://cr.zjzs.net/api/common/option/get-system-use', {
    method: 'POST',
    body: {
      args: {
        bindType,
      },
      token: 'dreamtouch',
      deviceInfo:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.362023-07-31 15:30:03',
      channel: 'pc_h5_ksd',
    },
  });
}
