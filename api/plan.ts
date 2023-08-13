export interface SpecialtyInfoModel {
  ccdmList: string[];
  keywords: string;
  pageIndex: number;
  pageSize: number;
  xxxsdmList: string[];
  hasBbjhs: number;
}

export interface SpecialtyInfoRes {
  retCode: number;
  obj: {
    totalCount: number;
    list: Array<{
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
    }>;
  };
  msg: {
    businessCode: number;
    prompt: string;
    error: string;
  };
}

export interface CodeRes {
  retCode: number;
  obj: {
    list: Array<{
      optionCode: string;
      optionName: string;
    }>;
  };
  msg: {
    businessCode: number;
    prompt: string;
    error: string;
  };
}

export function queryExamLevelCode() {
  return useFetch<CodeRes>('/server/api/common/option/get-ccdm-option', {
    method: 'POST',
    body: {
      args: {},
    },
  });
}

export function queryStudyModeCode() {
  return useFetch<CodeRes>('/server/api/common/option/get-xxxsdm-option', {
    method: 'POST',
    body: {
      args: {},
    },
  });
}

export function querySpecialtyInfo(args: SpecialtyInfoModel) {
  return useFetch<SpecialtyInfoRes>('/server/api/front/student/get-zyxx-list', {
    method: 'POST',
    body: {
      args,
    },
  });
}
