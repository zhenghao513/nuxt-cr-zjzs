export interface SpecialtyInfoParam {
  ccdmList: string[];
  keywords: string;
  pageIndex: number;
  pageSize: number;
  xxxsdmList: string[];
  hasBbjhs: number;
}

export interface SpecialtyInfoResult {
  retCode: number;
  obj: {
    totalCount: number;
    list: [
      {
        yxdm: string;
        yxmc: string;
        zydm: string;
        zymc: string;
        kl: string;
        cc: string;
        xxxs: string;
        xz: string;
        zsfw: string;
        jhs: string;
        bbjhs: string;
        bz: string;
        yxUrl: null;
      },
    ];
  };
  msg: {
    businessCode: number;
    prompt: string;
    error: string;
  };
}

export interface CodeResult {
  retCode: number;
  obj: {
    list: [
      {
        optionCode: string;
        optionName: string;
      },
      {
        optionCode: string;
        optionName: string;
      },
      {
        optionCode: string;
        optionName: string;
      },
    ];
  };
  msg: {
    businessCode: number;
    prompt: string;
    error: string;
  };
}

export function queryHierarchicalCode() {
  return useFetch('https://cr.zjzs.net/api/common/option/get-ccdm-option', {
    method: 'POST',
    body: {
      args: {},
      token: 'dreamtouch',
      deviceInfo:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.362023-07-31 21:58:36',
      channel: 'pc_h5_ksd',
    },
  });
}

export function queryLearningFormalCode() {
  return useFetch('https://cr.zjzs.net/api/common/option/get-xxxsdm-option', {
    method: 'POST',
    body: {
      args: {},
      token: 'dreamtouch',
      deviceInfo:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.362023-07-31 21:58:36',
      channel: 'pc_h5_ksd',
    },
  });
}

export function querySpecialtyInfo(args: SpecialtyInfoParam) {
  return useFetch('https://cr.zjzs.net/api/front/student/get-zyxx-list', {
    method: 'POST',
    body: {
      args,
      token: 'dreamtouch',
      deviceInfo:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.362023-07-31 21:47:41',
      channel: 'pc_h5_ksd',
    },
  });
}
