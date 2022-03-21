const dataset = {
  tasks: {
    "task-1": {
      id: "task-1",
      content: "Create Wireframe",
      tags: ["figma", "UX/UI"],
    },
    "task-2": {
      id: "task-2",
      content: "Create portfolio",
      tags: ["dev", "react"],
    },
    "task-3": {
      id: "task-3",
      content: "clean room",
      tags: ["personal"],
    },
  },

  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2"],
    },
    "column-2": {
      id: "column-2",
      title: "In progress",
      taskIds: ["task-3"],
    },
  },

  columnOrder: ["column-1", "column-2"],
};

export default dataset;
