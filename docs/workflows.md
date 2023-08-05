# WorkflowsManager


- [List workflows](#list-workflows)
- [Starts workflow based on request body](#starts-workflow-based-on-request-body)

## List workflows

Returns list of workflows that act on a given `folder ID`, and
have a flow with a trigger type of `WORKFLOW_MANUAL_START`.

You application must be authorized to use the `Manage Box Relay` application
scope within the developer console in to use this endpoint.

This operation is performed by calling function `getWorkflows`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-workflows/).

*Currently we don't have an example for calling `getWorkflows` in integration tests*

### Arguments

- queryParams `GetWorkflowsQueryParamsArg`
  - Query parameters of getWorkflows method
- headers `GetWorkflowsHeadersArg`
  - Headers of getWorkflows method


### Returns

This function returns a value of type `Workflows`.

Returns the workflow.


## Starts workflow based on request body

Initiates a flow with a trigger type of `WORKFLOW_MANUAL_START`.

You application must be authorized to use the `Manage Box Relay` application
scope within the developer console.

This operation is performed by calling function `createWorkflowStart`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-workflows-id-start/).

*Currently we don't have an example for calling `createWorkflowStart` in integration tests*

### Arguments

- workflowId `string`
  - The ID of the workflow. Example: "12345"
- requestBody `CreateWorkflowStartRequestBodyArg`
  - Request body of createWorkflowStart method
- headers `CreateWorkflowStartHeadersArg`
  - Headers of createWorkflowStart method


### Returns

This function returns a value of type `undefined`.

Starts the workflow.


