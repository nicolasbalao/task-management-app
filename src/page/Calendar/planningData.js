export const dataset = {
  events: {
    "event-1": {
      id: "event-1",
      title: "Pole emploie",
      description: "rdv",
      from: "09:00",
      to: "10:00",
    },
    "event-2": {
      id: "event-2",
      title: "Macdo",
      description: "interview",
      from: "14:00",
      to: "22:00",
    },
    "event-3": {
      id: "event-3",
      title: "Mission local",
      description: "rdv",
      from: "10:00",
      to: "12:00",
    },
  },
  dates: [
    {
      date: new Date(2022, 2, 28),
      events: ["event-1", "event-2", "event-3"],
    },
    {
      date: new Date(2022, 2, 30),
      events: ["event-3"],
    },
  ],
};
