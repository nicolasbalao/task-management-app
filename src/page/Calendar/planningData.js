export const dataset = {
  rdv: {
    "rdv-1": {
      id: "rdv-1",
      title: "Pole emploie",
      description: "rdv",
      from: "09:00",
      to: "10:00",
    },
    "rdv-2": {
      id: "rdv-2",
      title: "Macdo",
      description: "interview",
      from: "14:00",
      to: "22:00",
    },
    "rdv-3": {
      id: "rdv-3",
      title: "Mission local",
      description: "rdv",
      from: "10:00",
      to: "12:00",
    },
  },
  dates: [
    {
      date: new Date("28/03/2022"),
      rdv: ["rdv-1", "rdv-2"],
    },
    {
      date: new Date("30/03/2022"),
      rdv: ["rdv-3"],
    },
  ],
};
