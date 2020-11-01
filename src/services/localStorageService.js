const initialAppStore = {
  mentors: {},
  leads: {},
  students: {},
  payments: {},
  budget: {
    initialSum: 1626,
  },
  company: {},
  groups: {},
};

export const getAppData = (key) => {
  const data = localStorage.getItem("test-store");
  const parsedData = data ? JSON.parse(data) : initialAppStore;

  return key ? parsedData[key] : parsedData;
};

export const saveAppData = (key, data) => {
  const prevData = getAppData();
  prevData[key] = data;
  localStorage.setItem("test-store", JSON.stringify(prevData));
};
