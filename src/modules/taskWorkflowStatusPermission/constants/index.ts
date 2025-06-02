export enum EntityType {
  TASK = 'TASK',
  EXPENSE = 'EXPENSE',
  TASK_DAY_GRAPH = 'TASK_DAY_GRAPH',
  TASK_DATE_GRAPH = 'TASK_DATE_GRAPH',
  EXPENSE_DAY_GRAPH = 'EXPENSE_DAY_GRAPH',
  EXPENSE_DATE_GRAPH = 'EXPENSE_DATE_GRAPH',
  SUBTASK = 'SUBTASK'
}

export const entityTypeList = Object.values(EntityType)

export enum OperationType {
  CREATE = 'CREATE',
  CREATE_MANY = 'CREATE_MANY',
  READ = 'READ',
  PATCH = 'PATCH',
  PATCH_MANY = 'PATCH_MANY',
  UPDATE = 'UPDATE',
  UPDATE_MANY = 'UPDATE_MANY',
  DELETE = 'DELETE',
  DELETE_MANY = 'DELETE_MANY'
}

export const operationTypeList = Object.values(OperationType)