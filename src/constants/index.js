export const engLevelTypes = {
  A1: "A1",
  A2: "A2",
  B1: "B1",
  B2: "B2",
  C1: "C1",
  C2: "C2",
  NATIVE: "native",
  UNKNOWN: "невідомо",
};

export const sourceTypes = {
  FACEBOOK: "фейсбук",
  INSTAGRAM: "инста",
  RECOMMEND: "рекомендація",
  RELATIVE: "родствєннік",
};

export const statusTypes = {
  NEW: "новиий",
  ACTIVATED: "активований",
  TESTED: "протестований",
  TERMINATED: "відкладений",
  WAITING_SCHEDULE: "чекає зручний час",
  STUDY: "навчається",
  DEACTIVETED: "закінчив навчання",
};

export const weekDayTypes = {
  MON: "понеділоу",
  TUE: "вівтороу",
  WED: "середа",
  THU: "четвер",
  FRI: "п'ятниця",
  SAT: "субота",
};

export const goalTypes = {
  TRAVEL: "путєшєствєннік",
  RELOCATE: "хоче жити за граніцой",
  WORK: "для роботи",
  SELF: "для себе",
  STUDY: "навчання",
  UNKNOWN: "невідомо",
};

export const workTypes = {
  IT: "айті",
  BUSINESS: "бізнесмен",
  NO: "безробітній",
  UNKNOWN: "невідомо",
};

export const PaymentTarget = {
  MENTOR: "Mentor",
  WORKER: "Worker",
  SERVICE: "Service",
  COMPANY: "Company",
  NONE: "None",
};

export const initialClient = {
  fullName: "",
  phoneNumber: "",
  level: engLevelTypes.B1,
  source: sourceTypes.FACEBOOK,
  work: workTypes.UNKNOWN,
  instagram: "",
  status: statusTypes.NEW,
  goal: goalTypes.UNKNOWN,
  description: "",
};

export const salaryTypes = {
  PERCENT: "PERCENT",
  FIX: "FIX",
};

export const initialMentor = {
  fullName: "",
  salaryType: salaryTypes.FIX,
  salary: 0,
  instagramAd: false,
  haveCert: false,
  level: engLevelTypes.B2,
  groupIds: [],
};

export const initialGroup = {
  mentorId: "",
  memberIds: [],
  schedule: [],
  startDate: "",
  name: "",
};

export const TAX_PERCENT = 0.05;

export const USD_UAH = 28;

export const TAX_SUM = 0;
