import type { SpecialtyInfoRes } from '~/api/plan';

export default function useCityCounter(array: SpecialtyInfoRes['obj']['list']) {
  interface City {
    name: string;
    counties: string[];
  }

  const cities: City[] = [
    {
      name: '杭州市',
      counties: [
        '上城区',
        '下城区',
        '江干区',
        '拱墅区',
        '西湖区',
        '滨江区',
        '萧山区',
        '余杭区',
        '建德市',
        '富阳市',
        '临安市',
        '桐庐县',
        '淳安县',
      ],
    },
    {
      name: '宁波市',
      counties: [
        '海曙区',
        '江东区',
        '江北区',
        '北仑区',
        '镇海区',
        '鄞州区',
        '余姚市',
        '慈溪市',
        '奉化市',
        '宁海县',
        '象山县',
      ],
    },
    {
      name: '温州市',
      counties: [
        '鹿城区',
        '龙湾区',
        '瓯海区',
        '洞头区',
        '瑞安市',
        '乐清市',
        '永嘉县',
        '平阳县',
        '苍南县',
        '文成县',
        '泰顺县',
      ],
    },
    {
      name: '嘉兴市',
      counties: ['南湖区', '秀洲区', '嘉善县', '海盐县', '海宁市', '平湖市', '桐乡市'],
    },
    {
      name: '湖州市',
      counties: ['吴兴区', '南浔区', '德清县', '长兴县', '安吉县'],
    },
    {
      name: '绍兴市',
      counties: ['越城区', '柯桥区', '上虞区', '新昌县', '诸暨市', '嵊州市'],
    },
    {
      name: '金华市',
      counties: [
        '婺城区',
        '金东区',
        '武义县',
        '浦江县',
        '磐安县',
        '兰溪市',
        '义乌市',
        '东阳市',
        '永康市',
      ],
    },
    {
      name: '衢州市',
      counties: ['柯城区', '衢江区', '常山县', '开化县', '龙游县', '江山市'],
    },
    {
      name: '舟山市',
      counties: ['定海区', '普陀区', '岱山县', '嵊泗县'],
    },
    {
      name: '台州市',
      counties: [
        '椒江区',
        '黄岩区',
        '路桥区',
        '三门县',
        '天台县',
        '仙居县',
        '温岭市',
        '临海市',
        '玉环市',
      ],
    },
    {
      name: '丽水市',
      counties: [
        '莲都区',
        '青田县',
        '缙云县',
        '遂昌县',
        '松阳县',
        '云和县',
        '庆元县',
        '景宁畲族自治县',
        '龙泉市',
      ],
    },
  ];

  const result: { [key: string]: number } = {};

  array.forEach((info) => {
    const city = cities.find((city) => info.bz.includes(city.name));
    if (city) {
      if (result.hasOwnProperty(city.name)) {
        result[city.name]++;
      } else {
        result[city.name] = 1;
      }
    }
  });

  return result;
}
