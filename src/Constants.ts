export const STATUSES = {
	WATCHING: "watching",
	COMPLETED: "completed",
	PLANNED: "planned",
};

export const ACTIONS_TEXT: { [key: string]: string } = {
	watching: "Complete",
	completed: "Completed",
	planned: "Start Watching",
};

export const STATUS_TEXT: { [key: string]: string } = {
	watching: "Currently watching",
	completed: "Completed",
	planned: "Next planned"
}
