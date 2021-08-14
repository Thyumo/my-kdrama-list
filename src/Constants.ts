const STATUSES = {
  WATCHING: "watching",
  COMPLETED: "completed",
  PLANNED: "planned",
  HIDDEN: "hidden"
};

const ACTIONS_TEXT: { [status: string]: string } = {
  watching: "Complete",
  completed: "Completed",
  planned: "Start Watching",
  hidden: "Hidden"
};

const STATUS_TEXT: { [status: string]: string } = {
  watching: "Currently watching",
  completed: "Completed",
  planned: "Next planned",
  hidden: "Hidden"
};

const PAGE_SIZE = 4;

export { STATUSES, ACTIONS_TEXT, STATUS_TEXT, PAGE_SIZE };
