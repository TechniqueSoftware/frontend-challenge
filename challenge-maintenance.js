export const MEMBERS_COUNT = 1000;
export const START = new Date(2018, 0, 1);
export const END = new Date(2018, 6, 1);
export const AGREEMENT_TYPES = {
  1: 'BASIC',
  2: 'PLATINUM',
  3: 'VIP'
};

export const createCheckIns = () => {
  const checkIns = [];
  for (let i = 0; i < MEMBERS_COUNT; i++) {
    checkIns.push({
      memberId: Math.floor(Math.random() * MEMBERS_COUNT) + 1,
      date: new Date(start.getTime() + Math.random() * (END.getTime() - START.getTime())).toISOString()
    });
  }
  return JSON.stringify({ data: checkIns });
};

export const createAgreements = () => {
  const agreements = [];
  const agreementTypesCount = Object.keys(AGREEMENT_TYPES).length;
  for (let i = 0; i < MEMBERS_COUNT; i++) {
    agreements.push({
      memberId: i + 1,
      agreement: Math.floor(Math.random() * agreementTypesCount) + 1
    });
  }
  return JSON.stringify({
    metadata: {
      agreementTypes: AGREEMENT_TYPES
    },
    data: agreements
  });
};
