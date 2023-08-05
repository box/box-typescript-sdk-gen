# TasksManager


- [List tasks on file](#list-tasks-on-file)
- [Create task](#create-task)
- [Get task](#get-task)
- [Update task](#update-task)
- [Remove task](#remove-task)

## List tasks on file

Retrieves a list of all the tasks for a file. This
endpoint does not support pagination.

This operation is performed by calling function `getFileTasks`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-files-id-tasks/).

*Currently we don't have an example for calling `getFileTasks` in integration tests*

### Arguments

- fileId `string`
  - The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`. Example: "12345"
- headers `GetFileTasksHeadersArg`
  - Headers of getFileTasks method


### Returns

This function returns a value of type `Tasks`.

Returns a list of tasks on a file.

If there are no tasks on this file an empty collection is returned
instead.


## Create task

Creates a single task on a file. This task is not assigned to any user and
will need to be assigned separately.

This operation is performed by calling function `createTask`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-tasks/).

*Currently we don't have an example for calling `createTask` in integration tests*

### Arguments

- requestBody `CreateTaskRequestBodyArg`
  - Request body of createTask method
- headers `CreateTaskHeadersArg`
  - Headers of createTask method


### Returns

This function returns a value of type `Task`.

Returns the newly created task.


## Get task

Retrieves information about a specific task.

This operation is performed by calling function `getTaskById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-tasks-id/).

*Currently we don't have an example for calling `getTaskById` in integration tests*

### Arguments

- taskId `string`
  - The ID of the task. Example: "12345"
- headers `GetTaskByIdHeadersArg`
  - Headers of getTaskById method


### Returns

This function returns a value of type `Task`.

Returns a task object.


## Update task

Updates a task. This can be used to update a task's configuration, or to
update its completion state.

This operation is performed by calling function `updateTaskById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-tasks-id/).

*Currently we don't have an example for calling `updateTaskById` in integration tests*

### Arguments

- taskId `string`
  - The ID of the task. Example: "12345"
- requestBody `UpdateTaskByIdRequestBodyArg`
  - Request body of updateTaskById method
- headers `UpdateTaskByIdHeadersArg`
  - Headers of updateTaskById method


### Returns

This function returns a value of type `Task`.

Returns the updated task object


## Remove task

Removes a task from a file.

This operation is performed by calling function `deleteTaskById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-tasks-id/).

*Currently we don't have an example for calling `deleteTaskById` in integration tests*

### Arguments

- taskId `string`
  - The ID of the task. Example: "12345"
- headers `DeleteTaskByIdHeadersArg`
  - Headers of deleteTaskById method


### Returns

This function returns a value of type `undefined`.

Returns an empty response when the task was successfully deleted.


