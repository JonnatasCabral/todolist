class TaskStatusEnum:
	OPEN = 1
	DONE = 2


TASK_STATUS_CHOICES = (
	(TaskStatusEnum.OPEN, 'Open'),
	(TaskStatusEnum.DONE, 'Done')
	)