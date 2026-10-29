const guardian = {
  name: "Кристальный Страж",
  protocol: "Не пропускать никого",
  trust: 15,
  trustThreshold: 80,
};

const signals = [
  {
    id: 1,
    title: "Багги опускает оружие",
    trustPoints: 20,
    priority: 3,
    isSafe: true,
  },
  {
    id: 2,
    title: "Багги говорит спокойным голосом",
    trustPoints: 15,
    priority: 2,
    isSafe: true,
  },
  {
    id: 3,
    title: "Багги делает резкое движение",
    trustPoints: 30,
    priority: 5,
    isSafe: false,
  },
  {
    id: 4,
    title: "Багги протягивает открытую ладонь",
    trustPoints: 25,
    priority: 4,
    isSafe: true,
  },
  {
    id: 5,
    title: "Багги пытается пройти силой",
    trustPoints: 40,
    priority: 5,
    isSafe: false,
  },
  {
    id: 6,
    title: "Багги остаётся на расстоянии",
    trustPoints: 10,
    priority: 1,
    isSafe: true,
  },
];

function getSafeSignals(signals) {
  return signals.filter((s) => s.isSafe);
}

function sortSignalsOfPriority(signals) {
  return signals.sort((a, b) => b.priority - a.priority);
}

function getTitlesOfSignals(signals) {
  return signals.map((s) => s.title);
}

function getCountPointsofSignals(safeSignals) {
  let total = guardian.trust;
  for (let i = 0; i < safeSignals.length; i++) {
    total += safeSignals[i].trustPoints;
  }
  return total;
}

function updateGuardianProtocol(trustLevel) {
  if (trustLevel >= guardian.trustThreshold) {
    guardian.protocol = "Доверять";
  }
  return guardian.protocol;
}

const safeSignals = getSafeSignals(signals);
const sortedSafeSignals = sortSignalsOfPriority(safeSignals);
const titles = getTitlesOfSignals(sortedSafeSignals);
const trustLevel = getCountPointsofSignals(safeSignals);
const newProtocol = updateGuardianProtocol(trustLevel);

console.log("Безопасные сигналы: ", safeSignals);
console.log("Сигналы по приоритету: ", sortSignalsOfPriority);
console.log("Названия сигналов: ", titles);
console.log("Уровень доверия: ", trustLevel);
console.log("Новый протокол Стража: ", newProtocol);
