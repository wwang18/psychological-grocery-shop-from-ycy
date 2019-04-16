export const ORIGIN = {
  localhost: 'http://localhost:3000',
  production: '',
  development: '',
}['localhost']; // 

export const topic =  {
  career: {
    url: require("./../img/btns/subtopic_career.png"),
    issueList: ["坚持下去吗", "想对同事好", "渴望转机", "我能够吗", "想被认可", "接受我吗", "想被人在意" ]
  },
  family: {
    url: require("./../img/btns/subtopic_family.png"),
    issueList: ["经营得很累", "想有能力去爱", "渴望转机", "我能够吗", "想被认可", "我想被爱", "想被贴心关怀" ]
  },
  love: {
    url: require("./../img/btns/subtopic_love.png"),
    issueList: ["坚持下去吗", "想有能力去爱", "渴望转机", "我能够吗", "想被认可", "接受我吗", "想被人在意" ]
  },
  social: {
    url: require("./../img/btns/subtopic_social.png"),
    issueList: ["经营得很累", "想对人好", "渴望转机", "我能够吗", "想被认可", "接受我吗", "想被人在意" ]
  },
  idol: {
    url: require("./../img/btns/subtopic_idol.png"),
    issueList: ["爱你爱得很艰难", "想有能力去支持你", "我不可能活得像你", "请你赐我勇气", "你比我好太多了", "我配不上被你看到", "只想向你倾诉我的委屈" ]
  }
} 