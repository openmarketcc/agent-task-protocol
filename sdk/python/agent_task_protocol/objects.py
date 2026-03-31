def create_task_object(payload: dict) -> dict:
    task = dict(payload)
    task.setdefault("task", {})
    task["task"].setdefault("version", "1.0")
    task["task"].setdefault("status", "pending")
    return task


def create_receipt_object(payload: dict) -> dict:
    return dict(payload)
