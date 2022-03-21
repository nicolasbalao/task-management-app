const taskBoardList = [
  {
    name: "to do",
    id: 1,
    tasks: [
      {
        creationDate: new Date("2022-03-14"),
        name: "Read Clean code",
        description: "read clean code for improve my code structure",
        state: "to do",
        tags: ["personal", "book"],
      },
      {
        creationDate: new Date("2022-03-24"),
        name: "Work on the project",
        description: "read clean code for improve my code structure",
        state: "to do",
        tags: ["personal", "taskManager"],
      },
      {
        creationDate: new Date("2022-03-11"),
        name: "Drink lot of Water",
        description: "read clean code for improve my code structure",
        state: "to do",
        tags: ["personal", "healthy"],
      },
    ],
  },
  {
    name: "Done",
    id: 2,
    tasks: [
      {
        creationDate: new Date("2022-03-16"),
        name: "Clean my room",
        description: "read clean code for improve my code structure",
        state: "done",
        tags: ["personal", "weekly"],
      },
      {
        creationDate: new Date("2022-03-17"),
        name: "Clean my room",
        description: "read clean code for improve my code structure",
        state: "done",
        tags: ["personal", "weekly"],
      },
    ],
  },
];

export default taskBoardList;
