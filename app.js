'use strict';

const PRESETS = [
  {
    id: 'yingbo',
    name: '英博冠军',
    tag: '冠军',
    desc: '2026 中超冠军，蓝色信仰金色加冕。',
    accent: '#124f91',
    secondary: '#f2c75c',
    bg: '#eef4fb',
    bg2: '#f9fcff',
    pattern: 'pitch',
    dark: false,
    radius: 6,
    team: true
  },
  {
    id: 'demon-slayer',
    name: '鬼灭之刃',
    tag: '动漫',
    desc: '水与火的呼吸，斩开崭新的一天。',
    accent: '#1f6f5c',
    secondary: '#c65050',
    bg: '#0b1412',
    bg2: '#13231e',
    pattern: 'checks',
    dark: true,
    radius: 6,
    demon: true
  },
  {
    id: 'conan',
    name: '名侦探柯南',
    tag: '推理',
    desc: '真相只有一个，每一天都有新线索。',
    accent: '#1d4f91',
    secondary: '#d8433f',
    bg: '#f2f5f8',
    bg2: '#fbfaf5',
    pattern: 'casefile',
    dark: false,
    radius: 6,
    conan: true
  },
  {
    id: 'wukong',
    name: '黑神话：悟空',
    tag: '神话',
    desc: '踏平坎坷成大道，斗罢艰险又出发。',
    accent: '#b98a3e',
    secondary: '#d6a14d',
    bg: '#0c0b08',
    bg2: '#1b1710',
    pattern: 'myth',
    dark: true,
    radius: 6,
    wukong: true
  },
  {
    id: 'forest',
    name: '晨雾松林',
    tag: '自然',
    desc: '青苔、山岚与一杯温热的茶。',
    accent: '#4f7c68',
    secondary: '#c49a5f',
    bg: '#eef4ef',
    bg2: '#f9fbf8',
    pattern: 'aurora',
    dark: false,
    radius: 6
  },
  {
    id: 'sakura',
    name: '樱花苏打',
    tag: '浪漫',
    desc: '樱花气泡水与一点春日心事。',
    accent: '#d96f8c',
    secondary: '#8fa99b',
    bg: '#fcf1f4',
    bg2: '#fff9fb',
    pattern: 'dots',
    dark: false,
    radius: 6
  },
  {
    id: 'ocean',
    name: '海盐晴空',
    tag: '清爽',
    desc: '海盐、晴空与吹过窗边的风。',
    accent: '#3a7899',
    secondary: '#dfb157',
    bg: '#edf5fa',
    bg2: '#fafdff',
    pattern: 'grid',
    dark: false,
    radius: 6
  },
  {
    id: 'sunset',
    name: '蜜桃日落',
    tag: '温暖',
    desc: '蜜桃色晚霞融化在橘子汽水里。',
    accent: '#d27657',
    secondary: '#7d9c89',
    bg: '#fbf0e7',
    bg2: '#fff9f3',
    pattern: 'aurora',
    dark: false,
    radius: 6
  },
  {
    id: 'lavender',
    name: '紫藤梦境',
    tag: '梦境',
    desc: '紫藤花架下，一场柔软的梦。',
    accent: '#7d61b2',
    secondary: '#d3a34e',
    bg: '#f2effb',
    bg2: '#fbfaff',
    pattern: 'dots',
    dark: false,
    radius: 6
  },
  {
    id: 'midnight',
    name: '午夜星河',
    tag: '夜色',
    desc: '午夜星河，和只属于你的安静。',
    accent: '#8fb6ff',
    secondary: '#efc471',
    bg: '#111827',
    bg2: '#18233a',
    pattern: 'aurora',
    dark: true,
    radius: 6
  },
  {
    id: 'citrus',
    name: '柑橘汽水',
    tag: '元气',
    desc: '柠檬气泡、阳光和刚洗过的白衬衫。',
    accent: '#b9841f',
    secondary: '#5f9a82',
    bg: '#fbf5e4',
    bg2: '#fffdf6',
    pattern: 'grid',
    dark: false,
    radius: 6
  },
  {
    id: 'film',
    name: '复古胶片',
    tag: '复古',
    desc: '旧胶片、牛皮纸和一封手写信。',
    accent: '#985d46',
    secondary: '#798b67',
    bg: '#f3eade',
    bg2: '#fcf7f0',
    pattern: 'paper',
    dark: false,
    radius: 6
  }
];

const PLAYERS = [
  {
    "id": "ge-peng",
    "name": "葛彭",
    "number": "1",
    "position": "门将",
    "image": "assets/players/roster/ge-peng.png",
    "tagline": "把守最后一道防线，为英博守住每一次希望。"
  },
  {
    "id": "mamadou-traore",
    "name": "马马杜",
    "number": "2",
    "position": "后卫",
    "image": "assets/players/roster/mamadou-traore.png",
    "tagline": "硬朗防守，寸土不让，为蓝色战袍拼到最后一刻。"
  },
  {
    "id": "ismik-alimi",
    "name": "阿利米",
    "number": "4",
    "position": "中场",
    "image": "assets/players/roster/ismik-alimi.png",
    "tagline": "连接攻防，掌控节奏，让每一次推进更有力量。"
  },
  {
    "id": "peng-shunjie",
    "name": "彭顺杰",
    "number": "5",
    "position": "后卫",
    "image": "assets/players/roster/peng-shunjie.png",
    "tagline": "硬朗防守，寸土不让，为蓝色战袍拼到最后一刻。"
  },
  {
    "id": "song-yue",
    "name": "宋岳",
    "number": "6",
    "position": "后卫",
    "image": "assets/players/roster/song-yue.png",
    "tagline": "硬朗防守，寸土不让，为蓝色战袍拼到最后一刻。"
  },
  {
    "id": "luo-jing",
    "name": "罗竞",
    "number": "7",
    "position": "中场",
    "image": "assets/players/roster/luo-jing.png",
    "tagline": "连接攻防，掌控节奏，让每一次推进更有力量。"
  },
  {
    "id": "zhang-huachen",
    "name": "张华晨",
    "number": "8",
    "position": "中场",
    "image": "assets/players/roster/zhang-huachen.png",
    "tagline": "连接攻防，掌控节奏，让每一次推进更有力量。"
  },
  {
    "id": "delgado",
    "name": "德尔加多",
    "number": "9",
    "position": "中场",
    "image": "assets/players/roster/delgado.png",
    "tagline": "连接攻防，掌控节奏，让每一次推进更有力量。"
  },
  {
    "id": "stanciu",
    "name": "斯坦丘",
    "number": "10",
    "position": "中场",
    "image": "assets/players/roster/stanciu.png",
    "tagline": "中场节拍器，一脚传球就能改变比赛的方向。",
    "actionImage": "assets/players/stanciu.jpg"
  },
  {
    "id": "malele",
    "name": "马莱莱",
    "number": "11",
    "position": "前锋",
    "image": "assets/players/roster/malele.png",
    "tagline": "高高跃起，头槌破门——把主场气氛彻底点燃。",
    "actionImage": "assets/players/malele.jpg"
  },
  {
    "id": "feng-boxuan",
    "name": "冯博轩",
    "number": "12",
    "position": "后卫",
    "image": "assets/players/roster/feng-boxuan.png",
    "tagline": "硬朗防守，寸土不让，为蓝色战袍拼到最后一刻。"
  },
  {
    "id": "wen-jiabao",
    "name": "温家宝",
    "number": "15",
    "position": "后卫",
    "image": "assets/players/roster/wen-jiabao.png",
    "tagline": "硬朗防守，寸土不让，为蓝色战袍拼到最后一刻。"
  },
  {
    "id": "zhu-pengyu",
    "name": "朱鹏宇",
    "number": "16",
    "position": "前锋",
    "image": "assets/players/roster/zhu-pengyu.png",
    "tagline": "年轻前锋的冷静一击，为足球城写下新的进球。",
    "actionImage": "assets/players/zhu-pengyu.jpg"
  },
  {
    "id": "liu-weiguo",
    "name": "刘伟国",
    "number": "20",
    "position": "门将",
    "image": "assets/players/roster/liu-weiguo.png",
    "tagline": "把守最后一道防线，为英博守住每一次希望。"
  },
  {
    "id": "lv-peng",
    "name": "吕鹏",
    "number": "21",
    "position": "中场",
    "image": "assets/players/roster/lv-peng.png",
    "tagline": "连接攻防，掌控节奏，让每一次推进更有力量。"
  },
  {
    "id": "mao-weijie",
    "name": "毛伟杰",
    "number": "22",
    "position": "中场",
    "image": "assets/players/roster/mao-weijie.png",
    "tagline": "凌空抽射，世界波划破夜空——少年自有少年锋芒。",
    "actionImage": "assets/players/mao-weijie.jpg"
  },
  {
    "id": "huang-shan",
    "name": "黄山",
    "number": "23",
    "position": "中场",
    "image": "assets/players/roster/huang-shan.png",
    "tagline": "连接攻防，掌控节奏，让每一次推进更有力量。"
  },
  {
    "id": "bi-jinhao",
    "name": "毕津浩",
    "number": "24",
    "position": "后卫",
    "image": "assets/players/roster/bi-jinhao.png",
    "tagline": "硬朗防守，寸土不让，为蓝色战袍拼到最后一刻。"
  },
  {
    "id": "huang-zihao",
    "name": "黄子豪",
    "number": "26",
    "position": "门将",
    "image": "assets/players/roster/huang-zihao.png",
    "tagline": "把守最后一道防线，为英博守住每一次希望。"
  },
  {
    "id": "yang-mingrui",
    "name": "杨铭锐",
    "number": "27",
    "position": "前锋",
    "image": "assets/players/roster/yang-mingrui.png",
    "tagline": "向前，再向前，用进球点燃梭鱼湾。"
  },
  {
    "id": "sun-kangbo",
    "name": "孙康博",
    "number": "28",
    "position": "后卫",
    "image": "assets/players/roster/sun-kangbo.png",
    "tagline": "硬朗防守，寸土不让，为蓝色战袍拼到最后一刻。"
  },
  {
    "id": "achimpong",
    "name": "阿奇姆彭",
    "number": "30",
    "position": "前锋",
    "image": "assets/players/roster/achimpong.png",
    "tagline": "向前，再向前，用进球点燃梭鱼湾。"
  },
  {
    "id": "wang-xiaofeng",
    "name": "王晓峰",
    "number": "32",
    "position": "门将",
    "image": "assets/players/roster/wang-xiaofeng.png",
    "tagline": "把守最后一道防线，为英博守住每一次希望。"
  },
  {
    "id": "cao-haiqing",
    "name": "曹海清",
    "number": "33",
    "position": "后卫",
    "image": "assets/players/roster/cao-haiqing.png",
    "tagline": "硬朗防守，寸土不让，为蓝色战袍拼到最后一刻。"
  },
  {
    "id": "zhang-chengrui",
    "name": "张城瑞",
    "number": "37",
    "position": "中场",
    "image": "assets/players/roster/zhang-chengrui.png",
    "tagline": "连接攻防，掌控节奏，让每一次推进更有力量。"
  },
  {
    "id": "lv-zhuoyi",
    "name": "吕焯毅",
    "number": "38",
    "position": "中场",
    "image": "assets/players/roster/lv-zhuoyi.png",
    "tagline": "边路往返不停歇，把蓝色战袍跑成一道风景。",
    "actionImage": "assets/players/lv-zhuoyi.jpg"
  },
  {
    "id": "liao-jintao",
    "name": "廖锦涛",
    "number": "40",
    "position": "中场",
    "image": "assets/players/roster/liao-jintao.png",
    "tagline": "沉稳与灵气并存，在中场写下属于英博的节奏。",
    "actionImage": "assets/players/liao-jintao.jpg"
  },
  {
    "id": "feng-jin",
    "name": "冯劲",
    "number": "44",
    "position": "前锋",
    "image": "assets/players/roster/feng-jin.png",
    "tagline": "向前，再向前，用进球点燃梭鱼湾。"
  },
  {
    "id": "zeng-junhao",
    "name": "曾俊豪",
    "number": "56",
    "position": "中场",
    "image": "assets/players/roster/zeng-junhao.png",
    "tagline": "连接攻防，掌控节奏，让每一次推进更有力量。"
  },
  {
    "id": "xiao-lirong",
    "name": "肖力荣",
    "number": "59",
    "position": "前锋",
    "image": "assets/players/roster/xiao-lirong.png",
    "tagline": "向前，再向前，用进球点燃梭鱼湾。"
  }
];

const MATCHES = [
  {
    "id": "54389766",
    "date": "2026-03-07",
    "time": "17:00",
    "competition": "中超",
    "home": "上海申花",
    "away": "大连英博",
    "homeScore": "5",
    "awayScore": "3",
    "status": "Played"
  },
  {
    "id": "54389779",
    "date": "2026-03-13",
    "time": "19:35",
    "competition": "中超",
    "home": "武汉三镇",
    "away": "大连英博",
    "homeScore": "4",
    "awayScore": "1",
    "status": "Played"
  },
  {
    "id": "54389787",
    "date": "2026-03-20",
    "time": "19:00",
    "competition": "中超",
    "home": "大连英博",
    "away": "上海海港",
    "homeScore": "1",
    "awayScore": "0",
    "status": "Played"
  },
  {
    "id": "54389800",
    "date": "2026-04-04",
    "time": "19:00",
    "competition": "中超",
    "home": "山东泰山",
    "away": "大连英博",
    "homeScore": "1",
    "awayScore": "2",
    "status": "Played"
  },
  {
    "id": "54389807",
    "date": "2026-04-10",
    "time": "19:35",
    "competition": "中超",
    "home": "大连英博",
    "away": "浙江",
    "homeScore": "3",
    "awayScore": "0",
    "status": "Played"
  },
  {
    "id": "54389840",
    "date": "2026-04-18",
    "time": "19:00",
    "competition": "中超",
    "home": "大连英博",
    "away": "河南",
    "homeScore": "2",
    "awayScore": "1",
    "status": "Played"
  },
  {
    "id": "54389874",
    "date": "2026-04-22",
    "time": "19:35",
    "competition": "中超",
    "home": "辽宁铁人",
    "away": "大连英博",
    "homeScore": "0",
    "awayScore": "1",
    "status": "Played"
  },
  {
    "id": "54389888",
    "date": "2026-04-26",
    "time": "19:35",
    "competition": "中超",
    "home": "大连英博",
    "away": "云南玉昆",
    "homeScore": "1",
    "awayScore": "3",
    "status": "Played"
  },
  {
    "id": "54389899",
    "date": "2026-05-01",
    "time": "19:00",
    "competition": "中超",
    "home": "大连英博",
    "away": "重庆铜梁龙",
    "homeScore": "1",
    "awayScore": "0",
    "status": "Played"
  },
  {
    "id": "54389928",
    "date": "2026-05-06",
    "time": "19:35",
    "competition": "中超",
    "home": "北京国安",
    "away": "大连英博",
    "homeScore": "3",
    "awayScore": "0",
    "status": "Played"
  },
  {
    "id": "54390026",
    "date": "2026-05-10",
    "time": "20:00",
    "competition": "中超",
    "home": "青岛海牛",
    "away": "大连英博",
    "homeScore": "3",
    "awayScore": "1",
    "status": "Played"
  },
  {
    "id": "54390045",
    "date": "2026-05-15",
    "time": "20:00",
    "competition": "中超",
    "home": "大连英博",
    "away": "青岛西海岸",
    "homeScore": "2",
    "awayScore": "3",
    "status": "Played"
  },
  {
    "id": "54390027",
    "date": "2026-05-19",
    "time": "19:35",
    "competition": "中超",
    "home": "深圳新鹏城",
    "away": "大连英博",
    "homeScore": "1",
    "awayScore": "1",
    "status": "Played"
  },
  {
    "id": "54390013",
    "date": "2026-05-23",
    "time": "20:00",
    "competition": "中超",
    "home": "大连英博",
    "away": "成都蓉城",
    "homeScore": "2",
    "awayScore": "0",
    "status": "Played"
  },
  {
    "id": "54389848",
    "date": "2026-05-31",
    "time": "19:00",
    "competition": "中超",
    "home": "天津津门虎",
    "away": "大连英博",
    "homeScore": "1",
    "awayScore": "0",
    "status": "Played"
  },
  {
    "id": "54457950",
    "date": "2026-06-19",
    "time": "19:30",
    "competition": "足协杯",
    "home": "杭州临平吴越",
    "away": "大连英博",
    "homeScore": "1",
    "awayScore": "1",
    "status": "Played"
  },
  {
    "id": "54389944",
    "date": "2026-06-28",
    "time": "19:00",
    "competition": "中超",
    "home": "大连英博",
    "away": "上海申花",
    "homeScore": "1",
    "awayScore": "4",
    "status": "Played"
  },
  {
    "id": "54389967",
    "date": "2026-07-04",
    "time": "19:35",
    "competition": "中超",
    "home": "大连英博",
    "away": "武汉三镇",
    "homeScore": "3",
    "awayScore": "2",
    "status": "Played"
  },
  {
    "id": "54389989",
    "date": "2026-07-18",
    "time": "19:35",
    "competition": "中超",
    "home": "大连英博",
    "away": "山东泰山",
    "homeScore": "3",
    "awayScore": "1",
    "status": "Played"
  },
  {
    "id": "54488702",
    "date": "2026-07-21",
    "time": "20:00",
    "competition": "足协杯",
    "home": "河南",
    "away": "大连英博",
    "homeScore": "1",
    "awayScore": "1",
    "status": "Played"
  },
  {
    "id": "54390010",
    "date": "2026-07-26",
    "time": "20:00",
    "competition": "中超",
    "home": "浙江",
    "away": "大连英博",
    "homeScore": "3",
    "awayScore": "2",
    "status": "Played"
  },
  {
    "id": "54389995",
    "date": "2026-07-31",
    "time": "19:35",
    "competition": "中超",
    "home": "河南",
    "away": "大连英博",
    "homeScore": "1",
    "awayScore": "1",
    "status": "Played"
  },
  {
    "id": "54389978",
    "date": "2026-08-08",
    "time": "19:35",
    "competition": "中超",
    "home": "大连英博",
    "away": "辽宁铁人",
    "homeScore": "1",
    "awayScore": "0",
    "status": "Played"
  },
  {
    "id": "54389972",
    "date": "2026-08-15",
    "time": "20:00",
    "competition": "中超",
    "home": "云南玉昆",
    "away": "大连英博",
    "homeScore": "3",
    "awayScore": "1",
    "status": "Played"
  },
  {
    "id": "54390001",
    "date": "2026-08-19",
    "time": "19:35",
    "competition": "中超",
    "home": "上海海港",
    "away": "大连英博",
    "homeScore": "1",
    "awayScore": "1",
    "status": "Played"
  },
  {
    "id": "54389946",
    "date": "2026-08-23",
    "time": "20:00",
    "competition": "中超",
    "home": "重庆铜梁龙",
    "away": "大连英博",
    "homeScore": "0",
    "awayScore": "1",
    "status": "Played"
  },
  {
    "id": "54389926",
    "date": "2026-08-28",
    "time": "19:35",
    "competition": "中超",
    "home": "大连英博",
    "away": "北京国安",
    "homeScore": "1",
    "awayScore": "1",
    "status": "Played"
  },
  {
    "id": "54524983",
    "date": "2026-09-01",
    "time": "19:35",
    "competition": "足协杯",
    "home": "大连英博",
    "away": "上海申花",
    "homeScore": "1",
    "awayScore": "0",
    "status": "Played"
  },
  {
    "id": "54389909",
    "date": "2026-09-05",
    "time": "19:35",
    "competition": "中超",
    "home": "大连英博",
    "away": "青岛海牛",
    "homeScore": "2",
    "awayScore": "1",
    "status": "Played"
  },
  {
    "id": "54389893",
    "date": "2026-10-11",
    "time": "18:00",
    "competition": "中超",
    "home": "青岛西海岸",
    "away": "大连英博",
    "homeScore": "0",
    "awayScore": "4",
    "status": "Played"
  },
  {
    "id": "54389849",
    "date": "2026-10-17",
    "time": "19:00",
    "competition": "中超",
    "home": "大连英博",
    "away": "深圳新鹏城",
    "homeScore": "3",
    "awayScore": "1",
    "status": "Played"
  },
  {
    "id": "54389871",
    "date": "2026-10-24",
    "time": "15:30",
    "competition": "中超",
    "home": "成都蓉城",
    "away": "大连英博",
    "homeScore": "0",
    "awayScore": "1",
    "status": "Played"
  },
  {
    "id": "54589967",
    "date": "2026-11-01",
    "time": "19:35",
    "competition": "足协杯",
    "home": "云南玉昆",
    "away": "大连英博",
    "homeScore": "4",
    "awayScore": "3",
    "status": "Played"
  },
  {
    "id": "54389817",
    "date": "2026-11-08",
    "time": "15:30",
    "competition": "中超",
    "home": "大连英博",
    "away": "天津津门虎",
    "homeScore": "3",
    "awayScore": "1",
    "status": "Played"
  }
];

const MONTH_NAMES = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
const MONTH_EN = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const WEEKDAYS = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
const WEEKDAYS_CN = ['日', '一', '二', '三', '四', '五', '六'];
const LUNAR_DAYS = [
  '', '初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十',
  '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十',
  '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十'
];

const FIXED_HOLIDAYS = {
  '1-1': '元旦',
  '2-14': '情人节',
  '3-8': '妇女节',
  '4-1': '愚人节',
  '5-1': '劳动节',
  '5-4': '青年节',
  '6-1': '儿童节',
  '7-1': '建党节',
  '8-1': '建军节',
  '9-10': '教师节',
  '10-1': '国庆节',
  '12-24': '平安夜',
  '12-25': '圣诞节'
};

const LUNAR_FESTIVALS = {
  '正月|1': '春节',
  '正月|15': '元宵节',
  '二月|2': '龙抬头',
  '五月|5': '端午节',
  '七月|7': '七夕',
  '八月|15': '中秋节',
  '九月|9': '重阳节',
  '腊月|8': '腊八节',
  '腊月|23': '小年'
};

const SOLAR_TERM_NAMES = [
  '小寒', '大寒', '立春', '雨水', '惊蛰', '春分', '清明', '谷雨',
  '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑',
  '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪', '冬至'
];

const SOLAR_TERM_INFO = [
  0, 21208, 42467, 63836, 85337, 107014, 128867, 150921,
  173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033,
  353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758
];

const PROMPT_PROFILES = [
  {
    test: /森林|雨后|苔藓|松林|竹林|绿意|自然|植物|山林|草地|春天|薄荷/,
    hue: 151, sat: 35, bgSat: 25, tag: '自然', pattern: 'aurora',
    secondaryOffset: 34, dark: false,
    names: ['苔原晨雾', '松风薄雾', '雨后青苔', '薄荷山岚']
  },
  {
    test: /海|水|湖|蓝|晴空|天空|冰川|雨/,
    hue: 204, sat: 47, bgSat: 37, tag: '清澈', pattern: 'grid',
    secondaryOffset: 144, dark: false,
    names: ['海盐晴空', '潮汐蓝调', '玻璃海岸', '微咸的风']
  },
  {
    test: /樱花|粉|桃|恋爱|少女|玫瑰|草莓/,
    hue: 340, sat: 56, bgSat: 47, tag: '浪漫', pattern: 'dots',
    secondaryOffset: 128, dark: false,
    names: ['樱花苏打', '莓果来信', '粉色絮语', '春日心跳']
  },
  {
    test: /日落|黄昏|晚霞|橙|橘|蜜桃|珊瑚|暖/,
    hue: 20, sat: 58, bgSat: 48, tag: '温暖', pattern: 'aurora',
    secondaryOffset: 122, dark: false,
    names: ['蜜桃日落', '橘子晚霞', '珊瑚时刻', '慢速黄昏']
  },
  {
    test: /紫|梦|薰衣草|月光|神秘|魔法|宇宙/,
    hue: 265, sat: 43, bgSat: 38, tag: '梦境', pattern: 'dots',
    secondaryOffset: 142, dark: false,
    names: ['紫藤梦境', '月雾紫罗兰', '星尘信笺', '柔软的夜']
  },
  {
    test: /夜|黑|暗|星|银河|露营|午夜|深空/,
    hue: 221, sat: 64, bgSat: 24, tag: '夜色', pattern: 'aurora',
    secondaryOffset: 44, dark: true,
    names: ['午夜星河', '深空蓝调', '星野露营', '黑夜微光']
  },
  {
    test: /复古|胶片|咖啡|旧书|棕|木|奶油|老电影|秋天/,
    hue: 28, sat: 31, bgSat: 34, tag: '复古', pattern: 'paper',
    secondaryOffset: 104, dark: false,
    names: ['复古胶片', '咖啡手记', '旧书页', '焦糖黄昏']
  },
  {
    test: /柠檬|黄|阳光|夏|元气|向日葵|柑橘/,
    hue: 44, sat: 65, bgSat: 52, tag: '元气', pattern: 'grid',
    secondaryOffset: 132, dark: false,
    names: ['柠檬汽水', '日光收藏', '向日葵田', '盛夏橘子']
  },
  {
    test: /极简|白|灰|简单|安静|留白|水墨|黑白/,
    hue: 205, sat: 13, bgSat: 8, tag: '极简', pattern: 'paper',
    secondaryOffset: 28, dark: false,
    names: ['呼吸留白', '灰色诗行', '安静一页', '晨间素描']
  }
];

const RANDOM_PROMPTS = [
  '雨后的森林',
  '海盐柠檬汽水',
  '复古电影胶片',
  '星空下的露营',
  '蜜桃味晚霞',
  '紫藤花与月光',
  '柑橘汽水与阳光',
  '旧书页与咖啡',
  '薄荷色的清晨',
  '深空蓝的梦'
];

const STORAGE_THEME_KEY = 'calendar-studio.theme.v2';
const STORAGE_VIEW_KEY = 'calendar-studio.view.v1';

const today = startOfDay(new Date());
let viewDate = new Date(today.getFullYear(), today.getMonth(), 1);
let selectedDate = new Date(today);
let currentView = 'month';
let currentTheme = PRESETS[0];
let featuredPlayerId = 'malele';
let pickerYear = viewDate.getFullYear();
let generateTimer = 0;
let toastTimer = 0;
let playerModalTimer = 0;
let lastPlayerTrigger = null;
let nextMatchTimer = 0;
let cheerIsPlaying = false;
const lunarCache = new Map();
const lunarFormatter = new Intl.DateTimeFormat('zh-CN-u-ca-chinese', { month: 'long', day: 'numeric' });
const lunarYearFormatter = new Intl.DateTimeFormat('zh-CN-u-ca-chinese', { year: 'numeric' });

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function addDays(date, amount) {
  const next = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  next.setDate(next.getDate() + amount);
  return next;
}

function sameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function daysInMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function dateKey(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function parseDateKey(value) {
  const parts = value.split('-').map(Number);
  return new Date(parts[0], parts[1] - 1, parts[2]);
}

function formatDate(date) {
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

const MATCH_BY_DATE = new Map(MATCHES.map((match) => [match.date, match]));

function getMatchForDate(date) {
  return MATCH_BY_DATE.get(dateKey(date)) || null;
}

function getMatchOutcome(match) {
  if (match.status !== 'Played') return 'upcoming';
  const dalianHome = match.home === '大连英博';
  const dalianScore = Number(dalianHome ? match.homeScore : match.awayScore);
  const opponentScore = Number(dalianHome ? match.awayScore : match.homeScore);
  if (dalianScore > opponentScore) return 'win';
  if (dalianScore < opponentScore) return 'loss';
  return 'draw';
}

function getMatchScoreText(match) {
  if (match.status === 'Played') return `${match.homeScore} : ${match.awayScore}`;
  return 'VS';
}

function getMatchOpponent(match) {
  return match.home === '大连英博' ? match.away : match.home;
}

function getMatchAriaText(match) {
  if (match.status === 'Played') {
    return `${match.competition}，${match.home} ${match.homeScore}比${match.awayScore} ${match.away}，已结束`;
  }
  return `${match.competition}，${match.home}对阵${match.away}，${match.date} ${match.time}，未开始`;
}

function getMatchTimestamp(match) {
  return new Date(`${match.date}T${match.time}:00+08:00`).getTime();
}

function getNextMatch() {
  const now = Date.now();
  return MATCHES
    .filter((match) => getMatchTimestamp(match) > now)
    .sort((first, second) => getMatchTimestamp(first) - getMatchTimestamp(second))[0] || null;
}

function formatNextMatchDate(match) {
  const parts = match.date.split('-').map(Number);
  const weekday = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2])).getUTCDay();
  return `${parts[1]}月${parts[2]}日 ${WEEKDAYS[weekday]} ${match.time}`;
}

function updateNextMatchCountdown() {
  const card = $('#nextMatchCard');
  const empty = $('#nextMatchEmpty');
  if (card === null || empty === null) return;

  const nextMatch = getNextMatch();
  if (nextMatch === null) {
    card.hidden = true;
    empty.hidden = false;
    return;
  }

  card.hidden = false;
  empty.hidden = true;
  const dalianHome = nextMatch.home === '大连英博';
  const opponent = dalianHome ? nextMatch.away : nextMatch.home;
  const remaining = Math.max(0, getMatchTimestamp(nextMatch) - Date.now());
  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  $('#nextMatchCompetition').textContent = nextMatch.competition;
  $('#nextMatchOpponent').textContent = opponent;
  $('#nextMatchMeta').textContent = `${dalianHome ? '主场' : '客场'} · ${formatNextMatchDate(nextMatch)}`;
  $('#nextMatchHomeAway').textContent = dalianHome ? '主场作战' : '客场作战';
  $('#nextDays').textContent = String(days).padStart(2, '0');
  $('#nextHours').textContent = String(hours).padStart(2, '0');
  $('#nextMinutes').textContent = String(minutes).padStart(2, '0');
  $('#nextSeconds').textContent = String(seconds).padStart(2, '0');
}

function startNextMatchCountdown() {
  updateNextMatchCountdown();
  window.clearInterval(nextMatchTimer);
  nextMatchTimer = window.setInterval(updateNextMatchCountdown, 1000);
}

function dayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 1);
  const current = startOfDay(date);
  return Math.floor((current - start) / 86400000) + 1;
}

function isoWeekNumber(date) {
  const target = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNumber = target.getUTCDay() || 7;
  target.setUTCDate(target.getUTCDate() + 4 - dayNumber);
  const yearStart = new Date(Date.UTC(target.getUTCFullYear(), 0, 1));
  return Math.ceil((((target - yearStart) / 86400000) + 1) / 7);
}

function hashString(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return Math.abs(hash);
}

function hslToHex(hue, saturation, lightness) {
  const h = ((hue % 360) + 360) % 360;
  const s = clamp(saturation, 0, 100) / 100;
  const l = clamp(lightness, 0, 100) / 100;
  const chroma = (1 - Math.abs((2 * l) - 1)) * s;
  const x = chroma * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - (chroma / 2);
  let r = 0;
  let g = 0;
  let b = 0;

  if (h < 60) {
    r = chroma; g = x;
  } else if (h < 120) {
    r = x; g = chroma;
  } else if (h < 180) {
    g = chroma; b = x;
  } else if (h < 240) {
    g = x; b = chroma;
  } else if (h < 300) {
    r = x; b = chroma;
  } else {
    r = chroma; b = x;
  }

  return rgbToHex((r + m) * 255, (g + m) * 255, (b + m) * 255);
}

function hexToRgb(hex) {
  let value = String(hex).replace('#', '');
  if (value.length === 3) {
    value = value.split('').map((character) => character + character).join('');
  }
  const number = Number.parseInt(value, 16);
  return {
    r: (number >> 16) & 255,
    g: (number >> 8) & 255,
    b: number & 255
  };
}

function rgbToHex(r, g, b) {
  return `#${[r, g, b].map((value) => clamp(Math.round(value), 0, 255).toString(16).padStart(2, '0')).join('')}`;
}

function mixColor(colorA, colorB, weight) {
  const first = hexToRgb(colorA);
  const second = hexToRgb(colorB);
  const ratio = clamp(weight, 0, 1);
  return rgbToHex(
    first.r + ((second.r - first.r) * ratio),
    first.g + ((second.g - first.g) * ratio),
    first.b + ((second.b - first.b) * ratio)
  );
}

function alphaColor(hex, alpha) {
  const rgb = hexToRgb(hex);
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
}

function luminance(hex) {
  const rgb = hexToRgb(hex);
  const channels = [rgb.r, rgb.g, rgb.b].map((channel) => {
    const value = channel / 255;
    return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
  });
  return (0.2126 * channels[0]) + (0.7152 * channels[1]) + (0.0722 * channels[2]);
}

function contrastRatio(colorA, colorB) {
  const first = luminance(colorA);
  const second = luminance(colorB);
  return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05);
}

function contrastColor(hex) {
  return contrastRatio(hex, '#ffffff') >= contrastRatio(hex, '#17221c') ? '#ffffff' : '#17221c';
}

function isHexColor(value) {
  return /^#[0-9a-fA-F]{6}$/.test(String(value));
}

function getLunarInfo(date) {
  const key = dateKey(date);
  if (lunarCache.has(key)) {
    return lunarCache.get(key);
  }

  let month = '农历';
  let day = 1;
  let yearName = '';

  try {
    const parts = lunarFormatter.formatToParts(date);
    const monthPart = parts.find((part) => part.type === 'month');
    const dayPart = parts.find((part) => part.type === 'day');
    const yearParts = lunarYearFormatter.formatToParts(date);
    const yearPart = yearParts.find((part) => part.type === 'yearName');
    if (monthPart) month = monthPart.value;
    if (dayPart) day = Number(dayPart.value);
    if (yearPart) yearName = `${yearPart.value}年`;
  } catch (error) {
    month = '农历';
  }

  const dayName = LUNAR_DAYS[day] || '';
  const info = {
    month,
    day,
    dayName,
    full: `${month}${dayName}`,
    yearName
  };
  lunarCache.set(key, info);
  return info;
}

function getSolarTerm(date) {
  const monthIndex = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();
  const firstIndex = monthIndex * 2;
  const secondIndex = firstIndex + 1;
  const termDate = (termIndex) => {
    const offset = (31556925974.7 * (year - 1900)) + (SOLAR_TERM_INFO[termIndex] * 60000);
    return new Date(offset + Date.UTC(1900, 0, 6, 2, 5)).getUTCDate();
  };

  if (termDate(firstIndex) === day) return SOLAR_TERM_NAMES[firstIndex];
  if (termDate(secondIndex) === day) return SOLAR_TERM_NAMES[secondIndex];
  return '';
}

function getSpecialLabel(date, lunar) {
  const fixed = FIXED_HOLIDAYS[`${date.getMonth() + 1}-${date.getDate()}`];
  if (fixed) return fixed;

  const festival = LUNAR_FESTIVALS[`${lunar.month}|${lunar.day}`];
  if (festival) return festival;

  const nextLunar = getLunarInfo(addDays(date, 1));
  if (nextLunar.month === '正月' && nextLunar.day === 1) return '除夕';

  return getSolarTerm(date);
}

function getLunarYearLabel(date) {
  const info = getLunarInfo(date);
  return info.yearName || '农历年';
}

function generateTheme(prompt) {
  const cleanPrompt = prompt.trim();
  if (cleanPrompt.length === 0) {
    $('#generateHint').textContent = '先写下一点灵感，再让配色发生。';
    $('#themePrompt').focus();
    return null;
  }

  const profile = PROMPT_PROFILES.find((item) => item.test.test(cleanPrompt)) || PROMPT_PROFILES[hashString(cleanPrompt) % PROMPT_PROFILES.length];
  const seed = hashString(cleanPrompt);
  const accentHue = (profile.hue + ((seed % 11) - 5) + 360) % 360;
  const accentSaturation = clamp(profile.sat + ((seed % 13) - 6), 18, 82);
  const accentLightness = profile.dark ? 67 + (seed % 7) : 41 + (seed % 9);
  const accent = hslToHex(accentHue, accentSaturation, accentLightness);
  const secondaryHue = (accentHue + profile.secondaryOffset + (seed % 31)) % 360;
  const secondary = hslToHex(secondaryHue, profile.dark ? 62 : 58, profile.dark ? 66 : 55);
  const backgroundHue = (profile.hue + ((seed % 17) - 8) + 360) % 360;

  let bg = '';
  let bg2 = '';
  if (profile.dark) {
    bg = hslToHex(backgroundHue, 23 + (seed % 5), 9 + (seed % 3));
    bg2 = hslToHex(backgroundHue, 22 + (seed % 6), 14 + (seed % 3));
  } else {
    bg = hslToHex(backgroundHue, profile.bgSat + (seed % 7), 94 + (seed % 3));
    bg2 = hslToHex(backgroundHue, Math.max(profile.bgSat - 12, 7), 98);
  }

  const rawName = cleanPrompt
    .replace(/^(我想要|想要|帮我|请帮我|请|生成|做|来点|一个|一款|一种)+/g, '')
    .replace(/(主题|风格|感觉|氛围|日历)+/g, '')
    .replace(/[，。,.、\s]/g, '');
  const fallbackName = profile.names[seed % profile.names.length];
  const name = rawName.length >= 2 && rawName.length <= 12 ? rawName : fallbackName;
  const shortPrompt = cleanPrompt.length > 18 ? `${cleanPrompt.slice(0, 18)}…` : cleanPrompt;

  return {
    id: `generated-${seed}`,
    name,
    tag: profile.tag,
    desc: `从「${shortPrompt}」里提取的颜色与光线。`,
    accent,
    secondary,
    bg,
    bg2,
    pattern: profile.pattern,
    dark: profile.dark,
    radius: 4 + (seed % 5),
    generated: true
  };
}

function normalizeTheme(theme) {
  const fallback = PRESETS[0];
  const source = (theme === null || typeof theme !== 'object') ? fallback : theme;
  return {
    id: typeof source.id === 'string' ? source.id : 'custom',
    name: typeof source.name === 'string' ? source.name : fallback.name,
    tag: typeof source.tag === 'string' ? source.tag : '自定',
    desc: typeof source.desc === 'string' ? source.desc : fallback.desc,
    accent: isHexColor(source.accent) ? source.accent : fallback.accent,
    secondary: isHexColor(source.secondary) ? source.secondary : fallback.secondary,
    bg: isHexColor(source.bg) ? source.bg : fallback.bg,
    bg2: isHexColor(source.bg2) ? source.bg2 : fallback.bg2,
    pattern: ['aurora', 'dots', 'grid', 'paper', 'checks', 'casefile', 'myth'].includes(source.pattern) ? source.pattern : fallback.pattern,
    dark: Boolean(source.dark),
    radius: Number.isFinite(Number(source.radius)) ? clamp(Number(source.radius), 4, 8) : fallback.radius,
    generated: Boolean(source.generated),
    team: Boolean(source.team) || source.id === 'yingbo',
    demon: Boolean(source.demon) || source.id === 'demon-slayer',
    conan: Boolean(source.conan) || source.id === 'conan',
    wukong: Boolean(source.wukong) || source.id === 'wukong'
  };
}

function applyTheme(theme, persist = true) {
  const normalized = normalizeTheme(theme);
  currentTheme = normalized;

  const dark = normalized.dark;
  const accent = normalized.accent;
  const accentStrong = dark ? mixColor(accent, '#ffffff', 0.26) : mixColor(accent, '#0b1712', 0.24);
  const surface = dark ? 'rgba(22, 30, 36, 0.72)' : 'rgba(255, 255, 255, 0.72)';
  const surfaceStrong = dark ? 'rgba(28, 37, 44, 0.92)' : 'rgba(255, 255, 255, 0.94)';
  const text = dark ? '#f2f5f2' : mixColor(accent, '#142019', 0.86);
  const muted = dark ? 'rgba(235, 241, 237, 0.58)' : mixColor(accent, '#68766f', 0.78);
  const line = dark ? 'rgba(255, 255, 255, 0.12)' : alphaColor(accent, 0.15);
  const weekend = dark ? mixColor(accent, '#ffb59e', 0.45) : mixColor(accent, '#c76f57', 0.66);
  const root = document.documentElement;

  root.style.setProperty('--accent', accent);
  root.style.setProperty('--accent-strong', accentStrong);
  root.style.setProperty('--accent-soft', alphaColor(accent, dark ? 0.24 : 0.13));
  root.style.setProperty('--accent-contrast', contrastColor(accent));
  root.style.setProperty('--bg', normalized.bg);
  root.style.setProperty('--bg-2', normalized.bg2);
  root.style.setProperty('--surface', surface);
  root.style.setProperty('--surface-strong', surfaceStrong);
  root.style.setProperty('--text', text);
  root.style.setProperty('--muted', muted);
  root.style.setProperty('--line', line);
  root.style.setProperty('--weekend', weekend);
  root.style.setProperty('--glow-a', alphaColor(accent, dark ? 0.28 : 0.23));
  root.style.setProperty('--glow-b', alphaColor(normalized.secondary, dark ? 0.18 : 0.16));
  root.style.setProperty('--radius', `${normalized.radius}px`);
  root.style.setProperty('--shadow', dark ? '0 26px 76px rgba(0, 0, 0, 0.34)' : `0 24px 72px ${alphaColor(accent, 0.13)}`);
  document.body.dataset.pattern = normalized.pattern;
  document.body.dataset.mode = dark ? 'dark' : 'light';
  document.body.classList.toggle('is-yingbo', normalized.team);
  document.body.classList.toggle('is-demon', normalized.demon);
  document.body.classList.toggle('is-conan', normalized.conan);
  document.body.classList.toggle('is-wukong', normalized.wukong);
  root.style.colorScheme = dark ? 'dark' : 'light';
  if (normalized.team) {
    document.title = '大连英博 · 2026 中超冠军 · 日历工坊';
  } else if (normalized.demon) {
    document.title = '鬼灭之刃主题 · 日历工坊';
  } else if (normalized.conan) {
    document.title = '名侦探柯南主题 · 日历工坊';
  } else if (normalized.wukong) {
    document.title = '黑神话：悟空主题 · 日历工坊';
  } else {
    document.title = '日历工坊 · Calendar Studio';
  }
  const brandName = $('#brandName');
  const brandSub = $('#brandSub');
  if (brandName) {
    if (normalized.team) brandName.textContent = '英博冠军日历';
    else if (normalized.demon) brandName.textContent = '鬼灭日历';
    else if (normalized.conan) brandName.textContent = '柯南日历';
    else if (normalized.wukong) brandName.textContent = '黑神话日历';
    else brandName.textContent = '日历工坊';
  }
  if (brandSub) {
    if (normalized.team) brandSub.textContent = 'DALIAN YINGBO · CHAMPIONS';
    else if (normalized.demon) brandSub.textContent = 'KIMETSU CALENDAR';
    else if (normalized.conan) brandSub.textContent = 'DETECTIVE CONAN';
    else if (normalized.wukong) brandSub.textContent = 'BLACK MYTH · WUKONG';
    else brandSub.textContent = 'CALENDAR STUDIO';
  }

  if (normalized.team === false) {
    closeTeamPanel();
    closePlayerModal(true);
    stopNorthStandCheer(true);
  }

  const themeColorMeta = $('meta[name="theme-color"]');
  if (themeColorMeta) themeColorMeta.setAttribute('content', normalized.bg);

  updateThemeUI();

  if (persist) {
    try {
      localStorage.setItem(STORAGE_THEME_KEY, JSON.stringify(normalized));
    } catch (error) {
      // The theme still works when storage is unavailable.
    }
  }
}

function updateThemeUI() {
  $('#currentThemeName').textContent = currentTheme.name;
  $('#currentThemeTag').textContent = currentTheme.tag;
  $('#currentThemeDesc').textContent = currentTheme.desc;
  $('#accentInput').value = currentTheme.accent;
  $('#backgroundInput').value = currentTheme.bg;
  $('#accentValue').textContent = currentTheme.accent.toUpperCase();
  $('#backgroundValue').textContent = currentTheme.bg.toUpperCase();
  $('#radiusInput').value = String(currentTheme.radius);
  $('#radiusValue').textContent = `${currentTheme.radius}px`;
  $('#darkModeInput').setAttribute('aria-checked', currentTheme.dark ? 'true' : 'false');

  $$('.preset-card').forEach((card) => {
    const active = card.dataset.themeId === currentTheme.id;
    card.classList.toggle('is-active', active);
    card.setAttribute('aria-pressed', active ? 'true' : 'false');
  });

  updateTeamPreview();
}

const PRESET_ICONS = {
  yingbo: '<svg viewBox="0 0 24 24" fill="none"><path d="M8 4h8v4.4a4 4 0 0 1-8 0V4Z" stroke="currentColor" stroke-width="1.7"/><path d="M8 6H5.3v1.4a3 3 0 0 0 3 3M16 6h2.7v1.4a3 3 0 0 1-3 3M12 12.5v4M8.7 20h6.6M9.8 17h4.4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  'demon-slayer': '<svg viewBox="0 0 24 24" fill="none"><circle cx="17" cy="7" r="4" fill="currentColor" fill-opacity=".32"/><path d="M4 20 20 4M6 18l-2 2M15 5l4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  conan: '<svg viewBox="0 0 24 24" fill="none"><circle cx="10" cy="10" r="5.6" stroke="currentColor" stroke-width="1.8"/><path d="m14.2 14.2 5.3 5.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M7.6 9.4h4.8M8 12h4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path d="M17.5 4.5 21 4l-.5 3.5-3-3Z" fill="currentColor" opacity=".7"/></svg>',
  wukong: '<svg viewBox="0 0 24 24" fill="none"><path d="M5 20 19 4" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="m15 3 6 6M3.8 19.2l2.4 2.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M5.5 10.5c-2.1 1.1-2.9 3.2-1.8 5.2 1.1 2.1 3.2 2.9 5.2 1.8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity=".72"/></svg>',
  forest: '<svg viewBox="0 0 24 24" fill="none"><path d="M20 4C12 4 5 8 5 15c0 3 2 5 5 5 7 0 10-8 10-16Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M5 20c3-6 7-9 12-11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  sakura: '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2.2" fill="currentColor"/><path d="M12 9c-3.8-3.8-4.8-6.2-2.2-7 2.2-.7 3.2 2.4 2.2 7ZM12 15c3.8 3.8 4.8 6.2 2.2 7-2.2.7-3.2-2.4-2.2-7ZM9 12c-3.8 3.8-6.2 4.8-7 2.2-.7-2.2 2.4-3.2 7-2.2ZM15 12c3.8-3.8 6.2-4.8 7-2.2.7 2.2-2.4 3.2-7 2.2Z" stroke="currentColor" stroke-width="1.4"/></svg>',
  ocean: '<svg viewBox="0 0 24 24" fill="none"><path d="M3 9c3-4 5-4 8 0s5 4 8 0M3 15c3-4 5-4 8 0s5 4 8 0" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  sunset: '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="10" r="4" stroke="currentColor" stroke-width="1.7"/><path d="M12 3v2M5.6 5.6l1.4 1.4M18.4 5.6 17 7M3 16h18M5 20h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  lavender: '<svg viewBox="0 0 24 24" fill="none"><path d="M16.5 4.5A8 8 0 1 0 19 18a6.4 6.4 0 0 1-2.5-13.5Z" stroke="currentColor" stroke-width="1.7"/><path d="m18.5 4 .7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" fill="currentColor"/></svg>',
  midnight: '<svg viewBox="0 0 24 24" fill="none"><path d="M15.8 4.2A7.6 7.6 0 1 0 20 16.8 6.2 6.2 0 0 1 15.8 4.2Z" stroke="currentColor" stroke-width="1.7"/><path d="m18 3 .6 1.5 1.5.6-1.5.6-.6 1.5-.6-1.5-1.5-.6 1.5-.6L18 3ZM6 15l.5 1.2 1.2.5-1.2.5L6 18.4l-.5-1.2-1.2-.5 1.2-.5L6 15Z" fill="currentColor"/></svg>',
  citrus: '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="2" fill="currentColor"/><path d="M12 3.5v4M12 16.5v4M3.5 12h4M16.5 12h4M6 6l2.8 2.8M15.2 15.2 18 18M18 6l-2.8 2.8M8.8 15.2 6 18" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>',
  film: '<svg viewBox="0 0 24 24" fill="none"><rect x="3.5" y="5" width="17" height="14" rx="2.5" stroke="currentColor" stroke-width="1.6"/><path d="M7 5v14M17 5v14M3.5 9h3.5M3.5 15h3.5M17 9h3.5M17 15h3.5" stroke="currentColor" stroke-width="1.4"/><path d="m10 9 4.5 3-4.5 3V9Z" fill="currentColor"/></svg>'
};

function renderPresetGrid() {
  const grid = $('#presetGrid');
  grid.innerHTML = PRESETS.map((theme) => {
    const icon = PRESET_ICONS[theme.id] || PRESET_ICONS.forest;
    return `
    <button class="preset-card" type="button" data-theme-id="${theme.id}" aria-pressed="false" title="应用${theme.name}主题">
      <span class="preset-art" data-art-pattern="${theme.pattern}" style="--art-accent:${theme.accent};--art-secondary:${theme.secondary};--art-bg:${theme.bg};--art-bg2:${theme.bg2}">
        <span class="preset-art-glow"></span>
        <span class="preset-art-mark" aria-hidden="true">${icon}</span>
      </span>
      <span class="preset-name">${theme.name}</span>
    </button>
  `;
  }).join('');
  updateThemeUI();
}

function getFeaturedPlayer() {
  return PLAYERS.find((player) => player.id === featuredPlayerId) || PLAYERS[0];
}

function updateTeamPreview() {
  const player = getFeaturedPlayer();
  const image = $('#teamPreviewImg');
  const number = $('#teamPreviewNumber');
  const name = $('#teamPreviewName');
  if (image) {
    const previewImage = player.actionImage || player.image;
    image.src = previewImage;
    image.alt = `大连英博 ${player.number} 号球员 ${player.name} 照片`;
  }
  if (number) number.textContent = player.number;
  if (name) name.textContent = player.name;

  $$('.player-card').forEach((card) => {
    card.classList.toggle('is-featured', card.dataset.playerId === player.id);
  });
}

function renderPlayerGrid() {
  const grid = $('#playerGrid');
  if (grid === null) return;
  grid.innerHTML = PLAYERS.map((player) => `
    <button class="player-card" type="button" data-player-id="${player.id}" aria-label="查看${player.name}球员资料">
      <span class="player-photo">
        <img src="${player.image}" alt="大连英博 ${player.number} 号 ${player.name}" loading="lazy">
        <span class="player-match-tag">PLAYER</span>
        <span class="player-number">${player.number}</span>
        <span class="player-photo-action" aria-hidden="true">查看资料</span>
      </span>
      <span class="player-card-info">
        <strong>${player.name}</strong>
        <span>${player.position}</span>
      </span>
    </button>
  `).join('');
  updateTeamPreview();
}

function openTeamPanel() {
  if (document.body.classList.contains('is-yingbo') === false) return;
  closeDatePicker();
  closeThemePanel();
  $('#teamPanel').classList.add('is-open');
  $('#teamScrim').classList.add('is-visible');
  $('#playerDrawerBtn').setAttribute('aria-expanded', 'true');
}

function closeTeamPanel() {
  const panel = $('#teamPanel');
  const scrim = $('#teamScrim');
  const button = $('#playerDrawerBtn');
  if (panel) panel.classList.remove('is-open');
  if (scrim) scrim.classList.remove('is-visible');
  if (button) button.setAttribute('aria-expanded', 'false');
}

function openPlayerModal(player, trigger) {
  const modal = $('#playerModal');
  if (modal === null) return;
  featuredPlayerId = player.id;
  updateTeamPreview();
  lastPlayerTrigger = trigger || null;
  window.clearTimeout(playerModalTimer);

  const image = $('#playerModalImg');
  const displayImage = player.actionImage || player.image;
  image.src = displayImage;
  image.alt = `大连英博 ${player.number} 号球员 ${player.name} 照片`;
  image.classList.toggle('is-portrait-avatar', player.actionImage === undefined);
  $('#playerModalNumber').textContent = player.number;
  $('#playerModalNumberText').textContent = player.number;
  $('#playerModalName').textContent = player.name;
  $('#playerModalPosition').textContent = player.position;
  $('#playerModalTagline').textContent = player.tagline;
  modal.hidden = false;
  document.body.classList.add('modal-open');
  requestAnimationFrame(() => {
    modal.classList.add('is-open');
    $('#playerModalClose').focus({ preventScroll: true });
  });
}

function closePlayerModal(immediate = false) {
  const modal = $('#playerModal');
  if (modal === null || modal.hidden) return;
  window.clearTimeout(playerModalTimer);
  modal.classList.remove('is-open');
  document.body.classList.remove('modal-open');
  const finish = () => {
    modal.hidden = true;
  };
  if (immediate) finish();
  else playerModalTimer = window.setTimeout(finish, 180);

  if (lastPlayerTrigger && typeof lastPlayerTrigger.focus === 'function') {
    lastPlayerTrigger.focus({ preventScroll: true });
  }
}

function updateNorthStandUI() {
  const button = $('#northStandBtn');
  const status = $('#northStandStatus');
  if (button === null || status === null) return;
  button.classList.toggle('is-playing', cheerIsPlaying);
  button.setAttribute('aria-pressed', cheerIsPlaying ? 'true' : 'false');
  button.setAttribute('aria-label', cheerIsPlaying ? '停止大连英博北看台战歌只为大连' : '播放大连英博北看台战歌只为大连');
  status.textContent = cheerIsPlaying ? '只为大连 · 点击停止' : '只为大连 · 点击播放';
}

function startNorthStandCheer() {
  if (cheerIsPlaying) return;
  const audio = $('#northStandAudio');
  if (audio === null) return;
  cheerIsPlaying = true;
  audio.currentTime = 0;
  audio.volume = 0.86;
  updateNorthStandUI();
  const playback = audio.play();
  if (playback !== undefined) {
    playback.catch(() => {
      cheerIsPlaying = false;
      updateNorthStandUI();
      showToast('音频播放失败，请检查浏览器声音权限');
    });
  }
  showToast('北看台战歌 ·《只为大连》');
}

function stopNorthStandCheer(silent = false) {
  const audio = $('#northStandAudio');
  if (audio !== null) {
    audio.pause();
    audio.currentTime = 0;
  }
  cheerIsPlaying = false;
  updateNorthStandUI();
  if (silent === false) showToast('北看台战歌已暂停');
}

function renderChampionConfetti() {
  const container = $('#championConfetti');
  if (container === null) return;
  const colors = ['#f2c75c', '#ffe49a', '#ffffff', '#2b7cc7', '#0e4f8f'];
  const pieces = [];
  for (let index = 0; index < 28; index += 1) {
    const left = (index * 37 + 11) % 100;
    const delay = -((index * 13) % 80) / 10;
    const duration = 7 + (index % 6);
    const size = 4 + ((index * 3) % 5);
    const drift = ((index % 2 === 0) ? 1 : -1) * (18 + ((index * 7) % 34));
    const color = colors[index % colors.length];
    pieces.push(`<i style="left:${left}%;--delay:${delay}s;--duration:${duration}s;--drift:${drift}px;--size:${size}px;background:${color}"></i>`);
  }
  container.innerHTML = pieces.join('');
}

function updateTodayLabels() {
  const todayText = `${today.getMonth() + 1}月${today.getDate()}日 · ${WEEKDAYS[today.getDay()]}`;
  $('#topToday').textContent = todayText;
  $('#todayEyebrow').textContent = `今日 · ${today.getMonth() + 1}月${today.getDate()}日`;
}

function updateHeader() {
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const lunarYear = getLunarYearLabel(selectedDate);

  $('#lunarYearLabel').textContent = lunarYear;

  if (currentView === 'month') {
    $('#monthTitle').textContent = MONTH_NAMES[month];
    $('#yearTitle').textContent = String(year);
  } else {
    $('#monthTitle').textContent = String(year);
    $('#yearTitle').textContent = '年度总览';
  }

  const lunar = getLunarInfo(selectedDate);
  const special = getSpecialLabel(selectedDate, lunar);
  $('#selectedLine').textContent = `${formatDate(selectedDate)} · 农历${lunar.full}${special ? ` · ${special}` : ''}`;
}

function updateSelectedDetail() {
  const lunar = getLunarInfo(selectedDate);
  const special = getSpecialLabel(selectedDate, lunar);
  const current = startOfDay(new Date());
  const difference = Math.round((startOfDay(selectedDate) - current) / 86400000);
  const yearRemaining = Math.round((new Date(selectedDate.getFullYear() + 1, 0, 1) - startOfDay(selectedDate)) / 86400000);
  let relative = `还有 ${difference} 天`;

  if (difference === 0) relative = '就是今天';
  else if (difference === 1) relative = '明天';
  else if (difference === -1) relative = '昨天';
  else if (difference < -1) relative = `已过去 ${Math.abs(difference)} 天`;

  $('#selectedDayNum').textContent = String(selectedDate.getDate());
  $('#selectedWeekday').textContent = WEEKDAYS[selectedDate.getDay()];
  $('#selectedDateText').textContent = formatDate(selectedDate);
  $('#selectedRelative').textContent = relative;
  $('#selectedLunar').textContent = `农历${lunar.full}${special ? ` · ${special}` : ''}`;
  $('#selectedWeek').textContent = `第${isoWeekNumber(selectedDate)}周`;
  $('#selectedYearDay').textContent = `今年第${dayOfYear(selectedDate)}天`;
  $('#yearRemaining').textContent = String(yearRemaining);

  const match = getMatchForDate(selectedDate);
  const footer = $('.calendar-footer');
  const matchCard = $('#selectedMatch');
  if (match) {
    const outcome = getMatchOutcome(match);
    footer.classList.add('has-match');
    matchCard.hidden = false;
    matchCard.classList.remove('is-win', 'is-loss', 'is-draw', 'is-upcoming');
    matchCard.classList.add(`is-${outcome}`);
    $('#selectedMatchComp').textContent = match.competition;
    $('#selectedMatchStatus').textContent = match.status === 'Played' ? '已结束' : '未开始';
    $('#selectedMatchHome').textContent = match.home;
    $('#selectedMatchAway').textContent = match.away;
    $('#selectedMatchScore').textContent = getMatchScoreText(match);
    $('#selectedMatchTime').textContent = match.status === 'Played' ? match.time : `${match.date} ${match.time}`;
    matchCard.setAttribute('aria-label', getMatchAriaText(match));
  } else {
    footer.classList.remove('has-match');
    matchCard.hidden = true;
    matchCard.classList.remove('is-win', 'is-loss', 'is-draw', 'is-upcoming');
  }
}

function populateDatePickerYears() {
  const select = $('#datePickerYear');
  if (select === null) return;
  const years = [];
  for (let year = 2000; year <= 2040; year += 1) {
    years.push(`<option value="${year}">${year} 年</option>`);
  }
  select.innerHTML = years.join('');
}

function renderDatePickerMonths() {
  const grid = $('#datePickerMonths');
  if (grid === null) return;
  grid.innerHTML = MONTH_NAMES.map((name, month) => {
    const inViewMonth = pickerYear === viewDate.getFullYear() && month === viewDate.getMonth();
    const isSelectedMonth = pickerYear === selectedDate.getFullYear() && month === selectedDate.getMonth();
    const monthMatchCount = MATCHES.filter((match) => {
      const parts = match.date.split('-').map(Number);
      return parts[0] === pickerYear && parts[1] - 1 === month;
    }).length;
    const classes = ['date-picker-month'];
    if (inViewMonth) classes.push('is-view-month');
    if (isSelectedMonth) classes.push('is-selected-month');
    const matchBadge = monthMatchCount > 0 ? `<span class="picker-match-count">${monthMatchCount}</span>` : '';
    return `<button class="${classes.join(' ')}" type="button" data-month="${month}" aria-pressed="${isSelectedMonth ? 'true' : 'false'}"><span>${name}</span>${matchBadge}</button>`;
  }).join('');
}

function syncDatePicker() {
  const yearSelect = $('#datePickerYear');
  const dateInput = $('#datePickerInput');
  if (yearSelect) yearSelect.value = String(pickerYear);
  if (dateInput) dateInput.value = dateKey(selectedDate);
  renderDatePickerMonths();
}

function openDatePicker() {
  pickerYear = viewDate.getFullYear();
  syncDatePicker();
  const popover = $('#datePickerPopover');
  popover.hidden = false;
  popover.classList.add('is-open');
  $('#datePickerBtn').setAttribute('aria-expanded', 'true');
  requestAnimationFrame(() => {
    const activeMonth = $('.date-picker-month.is-selected-month', popover) || $('.date-picker-month.is-view-month', popover);
    if (activeMonth) activeMonth.focus({ preventScroll: true });
  });
}

function closeDatePicker() {
  const popover = $('#datePickerPopover');
  if (popover === null) return;
  popover.classList.remove('is-open');
  popover.hidden = true;
  $('#datePickerBtn').setAttribute('aria-expanded', 'false');
}

function toggleDatePicker() {
  const popover = $('#datePickerPopover');
  if (popover === null) return;
  if (popover.hidden) openDatePicker();
  else closeDatePicker();
}

function choosePickerMonth(month) {
  const day = Math.min(selectedDate.getDate(), daysInMonth(new Date(pickerYear, month, 1)));
  selectedDate = new Date(pickerYear, month, day);
  viewDate = new Date(pickerYear, month, 1);
  currentView = 'month';
  updateStoredView();
  closeDatePicker();
  renderCalendar();
}

function updateViewSwitch() {
  $$('.view-switch button').forEach((button) => {
    const active = button.dataset.view === currentView;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-selected', active ? 'true' : 'false');
  });
}

function renderMonthGrid() {
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const offset = (firstOfMonth.getDay() + 6) % 7;
  const gridStart = addDays(firstOfMonth, -offset);
  const grid = $('#calendarGrid');
  const fragments = [];

  for (let index = 0; index < 42; index += 1) {
    const date = addDays(gridStart, index);
    const lunar = getLunarInfo(date);
    const special = getSpecialLabel(date, lunar);
    const isOtherMonth = date.getMonth() !== month;
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    const isToday = sameDay(date, today);
    const isSelected = sameDay(date, selectedDate);
    const match = getMatchForDate(date);
    const classes = ['day-cell'];

    if (isOtherMonth) classes.push('is-other-month');
    if (isWeekend) classes.push('is-weekend');
    if (isToday) classes.push('is-today');
    if (isSelected) classes.push('is-selected');
    if (special) classes.push('is-special');
    if (match) classes.push('has-match', `match-${getMatchOutcome(match)}`);

    const lunarLabel = special || (lunar.day === 1 ? lunar.month : lunar.dayName);
    const matchScore = match ? (match.status === 'Played' ? `${match.homeScore}-${match.awayScore}` : 'VS') : '';
    const matchVenue = match ? (match.home === '大连英博' ? '主' : '客') : '';
    const matchStatus = match ? (match.status === 'Played' ? '完场' : match.time) : '';
    const matchMarkup = match
      ? `<span class="day-match is-${getMatchOutcome(match)}" title="${getMatchAriaText(match)}"><span class="day-match-venue">${matchVenue}</span><b>${matchScore}</b><small>${matchStatus}</small></span>`
      : '';
    const ariaLabel = `${formatDate(date)}，${WEEKDAYS[date.getDay()]}，农历${lunar.full}${special ? `，${special}` : ''}${match ? `，${getMatchAriaText(match)}` : ''}`;

    fragments.push(`
      <button class="${classes.join(' ')}" type="button" role="gridcell" data-date="${dateKey(date)}" aria-label="${ariaLabel}" aria-selected="${isSelected ? 'true' : 'false'}">
        <span class="day-topline">
          <span class="day-number">${date.getDate()}</span>
          <span class="day-badge" aria-hidden="true"></span>
        </span>
        <span class="day-lunar">${lunarLabel}</span>
        ${matchMarkup}
      </button>
    `);
  }

  grid.innerHTML = fragments.join('');
}

function renderYearGrid() {
  const year = viewDate.getFullYear();
  const grid = $('#yearGrid');
  const fragments = [];

  for (let month = 0; month < 12; month += 1) {
    const firstOfMonth = new Date(year, month, 1);
    const offset = (firstOfMonth.getDay() + 6) % 7;
    const totalDays = daysInMonth(firstOfMonth);
    const cells = [];

    for (let blank = 0; blank < offset; blank += 1) {
      cells.push('<span class="mini-day is-empty"></span>');
    }

    for (let day = 1; day <= totalDays; day += 1) {
      const date = new Date(year, month, day);
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      const isToday = sameDay(date, today);
      const isSelected = sameDay(date, selectedDate);
      const match = getMatchForDate(date);
      const classes = ['mini-day'];
      if (isWeekend) classes.push('is-weekend');
      if (isToday) classes.push('is-today');
      if (isSelected) classes.push('is-selected');
      if (match) classes.push('has-match', `match-${getMatchOutcome(match)}`);
      const title = `${formatDate(date)}${match ? ` · ${getMatchAriaText(match)}` : ''}`;
      cells.push(`<span class="${classes.join(' ')}" title="${title}">${day}</span>`);
    }

    const currentClass = month === today.getMonth() && year === today.getFullYear() ? ' is-current' : '';
    fragments.push(`
      <div class="mini-month${currentClass}" data-month="${month}" role="button" tabindex="0" aria-label="查看${year}年${MONTH_NAMES[month]}">
        <div class="mini-header">
          <strong>${MONTH_NAMES[month]}</strong>
          <span>${MONTH_EN[month]}</span>
        </div>
        <div class="mini-weekdays" aria-hidden="true">
          <span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span><span>日</span>
        </div>
        <div class="mini-days">${cells.join('')}</div>
      </div>
    `);
  }

  grid.innerHTML = fragments.join('');
}

function updateMonthMatches() {
  const container = $('#monthMatches');
  const track = $('#monthMatchesTrack');
  if (container === null || track === null) return;

  if (currentView !== 'month') {
    container.hidden = true;
    track.innerHTML = '';
    return;
  }

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const monthMatches = MATCHES.filter((match) => {
    const parts = match.date.split('-').map(Number);
    return parts[0] === year && parts[1] - 1 === month;
  });

  if (monthMatches.length === 0) {
    container.hidden = true;
    track.innerHTML = '';
    return;
  }

  container.hidden = false;
  $('#monthMatchesText').textContent = `本月赛程 · ${monthMatches.length} 场`;
  track.innerHTML = monthMatches.map((match) => {
    const outcome = getMatchOutcome(match);
    const selected = match.date === dateKey(selectedDate) ? ' is-selected' : '';
    const score = match.status === 'Played' ? `${match.homeScore}-${match.awayScore}` : 'VS';
    const status = match.status === 'Played' ? '完场' : match.time;
    const dayLabel = match.date.slice(5).replace('-', '.');
    return `<button class="month-match-pill is-${outcome}${selected}" type="button" data-date="${match.date}" aria-label="${getMatchAriaText(match)}">
      <span class="month-match-pill-date">${dayLabel}</span>
      <span class="month-match-pill-teams"><span>${match.home}</span><b>${score}</b><span>${match.away}</span></span>
      <span class="month-match-pill-status">${status}</span>
    </button>`;
  }).join('');
}

function renderCalendar(focusSelected = false) {
  $('#monthView').hidden = currentView !== 'month';
  $('#yearView').hidden = currentView !== 'year';
  updateViewSwitch();
  updateHeader();
  updateSelectedDetail();
  updateMonthMatches();

  if (currentView === 'month') {
    renderMonthGrid();
  } else {
    renderYearGrid();
  }

  if (focusSelected && currentView === 'month') {
    requestAnimationFrame(() => {
      const selected = $(`.day-cell[data-date="${dateKey(selectedDate)}"]`);
      if (selected) selected.focus({ preventScroll: true });
    });
  }
}

function selectDate(date, focusSelected = false) {
  selectedDate = startOfDay(date);
  viewDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
  renderCalendar(focusSelected);
}

function navigate(delta, focusSelected = false) {
  if (currentView === 'month') {
    const nextMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + delta, 1);
    const nextDay = Math.min(selectedDate.getDate(), daysInMonth(nextMonth));
    viewDate = nextMonth;
    selectedDate = new Date(nextMonth.getFullYear(), nextMonth.getMonth(), nextDay);
  } else {
    const nextYear = viewDate.getFullYear() + delta;
    const month = selectedDate.getMonth();
    const nextDay = Math.min(selectedDate.getDate(), daysInMonth(new Date(nextYear, month, 1)));
    viewDate = new Date(nextYear, month, 1);
    selectedDate = new Date(nextYear, month, nextDay);
  }
  renderCalendar(focusSelected);
}

function goToToday() {
  closeDatePicker();
  selectedDate = new Date(today);
  viewDate = new Date(today.getFullYear(), today.getMonth(), 1);
  currentView = 'month';
  try {
    localStorage.setItem(STORAGE_VIEW_KEY, currentView);
  } catch (error) {
    // Keep the current view when storage is unavailable.
  }
  renderCalendar();
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 2600);
}

function openThemePanel() {
  closeDatePicker();
  closeTeamPanel();
  $('#themePanel').classList.add('is-open');
  $('#panelScrim').classList.add('is-visible');
  $('#themeDrawerBtn').setAttribute('aria-expanded', 'true');
}

function closeThemePanel() {
  $('#themePanel').classList.remove('is-open');
  $('#panelScrim').classList.remove('is-visible');
  $('#themeDrawerBtn').setAttribute('aria-expanded', 'false');
}

function handleGenerate(prompt) {
  const theme = generateTheme(prompt);
  if (theme === null) return;

  const form = $('.prompt-form');
  const button = $('#generateBtn');
  const hint = $('#generateHint');
  window.clearTimeout(generateTimer);
  form.classList.add('is-generating');
  button.disabled = true;
  hint.textContent = '正在提取颜色、光线与氛围…';

  generateTimer = window.setTimeout(() => {
    applyTheme(theme);
    form.classList.remove('is-generating');
    button.disabled = false;
    hint.textContent = `已生成「${theme.name}」，主题会记住你的选择。`;
    showToast(`新主题「${theme.name}」已应用`);
  }, 460);
}

function updateStoredView() {
  try {
    localStorage.setItem(STORAGE_VIEW_KEY, currentView);
  } catch (error) {
    // View switching still works without persistence.
  }
}

function bindEvents() {
  $('#prevBtn').addEventListener('click', () => navigate(-1));
  $('#nextBtn').addEventListener('click', () => navigate(1));
  $('#todayBtn').addEventListener('click', goToToday);

  $('#datePickerBtn').addEventListener('click', (event) => {
    event.stopPropagation();
    toggleDatePicker();
  });

  $('#datePickerPopover').addEventListener('click', (event) => {
    event.stopPropagation();
  });

  $('#pickerPrevYear').addEventListener('click', () => {
    pickerYear -= 1;
    $('#datePickerYear').value = String(pickerYear);
    renderDatePickerMonths();
  });

  $('#pickerNextYear').addEventListener('click', () => {
    pickerYear += 1;
    $('#datePickerYear').value = String(pickerYear);
    renderDatePickerMonths();
  });

  $('#datePickerYear').addEventListener('change', (event) => {
    pickerYear = Number(event.target.value);
    renderDatePickerMonths();
  });

  $('#datePickerMonths').addEventListener('click', (event) => {
    const button = event.target.closest('.date-picker-month');
    if (button === null) return;
    choosePickerMonth(Number(button.dataset.month));
  });

  $('#datePickerInput').addEventListener('change', (event) => {
    if (event.target.value === '') return;
    const parts = event.target.value.split('-').map(Number);
    const date = new Date(parts[0], parts[1] - 1, parts[2]);
    if (Number.isNaN(date.getTime())) return;
    selectDate(date, true);
    currentView = 'month';
    updateStoredView();
    closeDatePicker();
  });

  $('#datePickerToday').addEventListener('click', goToToday);
  $('#datePickerYearView').addEventListener('click', () => {
    currentView = 'year';
    viewDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    updateStoredView();
    closeDatePicker();
    renderCalendar();
  });

  document.addEventListener('click', () => {
    closeDatePicker();
  });

  $$('.view-switch button').forEach((button) => {
    button.addEventListener('click', () => {
      closeDatePicker();
      currentView = button.dataset.view;
      viewDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
      updateStoredView();
      renderCalendar();
    });
  });

  $('#monthMatchesTrack').addEventListener('click', (event) => {
    const pill = event.target.closest('.month-match-pill');
    if (pill === null) return;
    selectDate(parseDateKey(pill.dataset.date), true);
  });

  $('#calendarGrid').addEventListener('click', (event) => {
    const cell = event.target.closest('.day-cell');
    if (cell === null) return;
    selectDate(parseDateKey(cell.dataset.date), true);
  });

  $('#yearGrid').addEventListener('click', (event) => {
    const monthCard = event.target.closest('.mini-month');
    if (monthCard === null) return;
    const year = viewDate.getFullYear();
    const month = Number(monthCard.dataset.month);
    const day = year === selectedDate.getFullYear() && month === selectedDate.getMonth()
      ? selectedDate.getDate()
      : 1;
    selectedDate = new Date(year, month, Math.min(day, daysInMonth(new Date(year, month, 1))));
    viewDate = new Date(year, month, 1);
    currentView = 'month';
    updateStoredView();
    renderCalendar();
  });

  $('#yearGrid').addEventListener('keydown', (event) => {
    const monthCard = event.target.closest('.mini-month');
    if (monthCard === null) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      monthCard.click();
    }
  });

  $('#themeForm').addEventListener('submit', (event) => {
    event.preventDefault();
    handleGenerate($('#themePrompt').value);
  });

  $$('.prompt-chips button').forEach((button) => {
    button.addEventListener('click', () => {
      const prompt = button.dataset.prompt;
      $('#themePrompt').value = prompt;
      handleGenerate(prompt);
    });
  });

  $('#randomThemeBtn').addEventListener('click', () => {
    const prompt = RANDOM_PROMPTS[Math.floor(Math.random() * RANDOM_PROMPTS.length)];
    $('#themePrompt').value = prompt;
    handleGenerate(prompt);
  });

  $('#presetGrid').addEventListener('click', (event) => {
    const card = event.target.closest('.preset-card');
    if (card === null) return;
    const theme = PRESETS.find((item) => item.id === card.dataset.themeId);
    if (theme === undefined) return;
    applyTheme(theme);
    showToast(`已切换到「${theme.name}」`);
    if (window.matchMedia('(max-width: 1040px)').matches) closeThemePanel();
  });

  $('#accentInput').addEventListener('input', (event) => {
    applyTheme({
      ...currentTheme,
      id: 'custom',
      tag: '自定',
      accent: event.target.value,
      generated: true
    });
  });

  $('#backgroundInput').addEventListener('input', (event) => {
    const value = event.target.value;
    const nextIsDark = luminance(value) < 0.28;
    const nextBg2 = nextIsDark ? mixColor(value, '#ffffff', 0.08) : mixColor(value, '#ffffff', 0.48);
    applyTheme({
      ...currentTheme,
      id: 'custom',
      tag: '自定',
      bg: value,
      bg2: nextBg2,
      dark: nextIsDark,
      generated: true
    });
  });

  $('#radiusInput').addEventListener('input', (event) => {
    applyTheme({
      ...currentTheme,
      id: 'custom',
      radius: Number(event.target.value),
      generated: true
    });
  });

  $('#darkModeInput').addEventListener('click', () => {
    const nextDark = currentTheme.dark === false;
    const nextBg = nextDark ? mixColor(currentTheme.accent, '#09100d', 0.86) : mixColor(currentTheme.accent, '#ffffff', 0.9);
    const nextBg2 = nextDark ? mixColor(currentTheme.accent, '#09100d', 0.76) : mixColor(currentTheme.accent, '#ffffff', 0.96);
    applyTheme({
      ...currentTheme,
      id: 'custom',
      bg: nextBg,
      bg2: nextBg2,
      dark: nextDark,
      generated: true
    });
  });

  $('#themeDrawerBtn').addEventListener('click', openThemePanel);
  $('#closeThemeBtn').addEventListener('click', closeThemePanel);
  $('#panelScrim').addEventListener('click', closeThemePanel);

  $('#playerGrid').addEventListener('click', (event) => {
    const card = event.target.closest('.player-card');
    if (card === null) return;
    const player = PLAYERS.find((item) => item.id === card.dataset.playerId);
    if (player === undefined) return;
    openPlayerModal(player, card);
  });

  $('#teamPreviewPhoto').addEventListener('click', () => {
    if (document.body.classList.contains('is-yingbo') === false) return;
    openPlayerModal(getFeaturedPlayer(), $('#teamPreviewPhoto'));
  });

  $('#playerDrawerBtn').addEventListener('click', openTeamPanel);
  $('#teamScrim').addEventListener('click', closeTeamPanel);

  $('#northStandBtn').addEventListener('click', () => {
    if (cheerIsPlaying) stopNorthStandCheer();
    else startNorthStandCheer();
  });
  $('#playerModalClose').addEventListener('click', () => closePlayerModal());
  $('#playerModalBackdrop').addEventListener('click', () => closePlayerModal());

  document.addEventListener('keydown', (event) => {
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    const tagName = event.target.tagName;
    if (tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT') return;

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      navigate(-1, true);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      navigate(1, true);
    } else if (event.key.toLowerCase() === 't') {
      event.preventDefault();
      goToToday();
    } else if (event.key.toLowerCase() === 'd') {
      event.preventDefault();
      toggleDatePicker();
    } else if (event.key === 'Escape') {
      const modal = $('#playerModal');
      if (modal && modal.hidden === false) {
        closePlayerModal();
        return;
      }
      const picker = $('#datePickerPopover');
      if (picker && picker.hidden === false) {
        closeDatePicker();
        return;
      }
      closeTeamPanel();
      closeThemePanel();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1040) closeThemePanel();
    if (window.innerWidth > 1240) closeTeamPanel();
  });
}

function restoreTheme() {
  const params = new URLSearchParams(window.location.search);
  const requestedTheme = params.get('theme');
  if (requestedTheme !== null) {
    const requested = PRESETS.find((theme) => theme.id === requestedTheme || (requestedTheme === 'demon' && theme.id === 'demon-slayer') || (requestedTheme === 'black-myth-wukong' && theme.id === 'wukong'));
    if (requested !== undefined) {
      applyTheme(requested);
      return;
    }
  }

  let saved = null;
  try {
    saved = JSON.parse(localStorage.getItem(STORAGE_THEME_KEY));
  } catch (error) {
    saved = null;
  }
  applyTheme(saved, false);
}

function restoreView() {
  try {
    const saved = localStorage.getItem(STORAGE_VIEW_KEY);
    if (saved === 'year') currentView = 'year';
  } catch (error) {
    currentView = 'month';
  }
}

function init() {
  updateTodayLabels();
  renderChampionConfetti();
  populateDatePickerYears();
  renderPresetGrid();
  renderPlayerGrid();
  startNextMatchCountdown();
  restoreTheme();
  restoreView();
  bindEvents();
  viewDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
  renderCalendar();
}

init();
