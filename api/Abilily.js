const _ability = [
  {
    id: '001',
    level: 0,
    mastery: 0,
  },
  {
    id: '002',
    level: 0,
    mastery: 0,
  },
  {
    id: '003',
    level: 0,
    mastery: 0,
  }
];

const _ability_data = {
  '001': {
    name: 'Ability 01'
  },
  '002': {
    name: 'Ability 02'
  },
  '003': {
    name: 'Ability 03'
  },
};

const getAbilityDetail = abilityArr => {
  let res = {
    nameArr: [],
    masteryAddition: 1
  };

  abilityArr.map(a => {
    let currentData = _ability_data[a];
    let current = _ability.find(data => data.id === a);
    res.nameArr.push(currentData.name);
    res.masteryAddition += current.level;
  });

  return res;
};

const getAbilities = () => {
  return _ability.map(a => {
    let {name} = _ability_data[a.id];
    return {
      id: a.id,
      name,
      level: a.level,
      mastery: a.mastery,
      max : Math.pow(10, a.level + 1)
    }
  })
};

const upgradeAbilities = () => {};

export default {
  getAbilityDetail,
  getAbilities,
}
