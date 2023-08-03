# WorkflowsManager

## List workflows

Returns list of workflows that act on a given &#x60;folder ID&#x60;, and
have a flow with a trigger type of &#x60;WORKFLOW_MANUAL_START&#x60;.

You application must be authorized to use the &#x60;Manage Box Relay&#x60; application
scope within the developer console in to use this endpoint.

This operation is performed by calling function `getWorkflows`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-workflows/).

*Currently we don't have an example for calling `getWorkflows` in integration tests*

### Arguments

- queryParams `GetWorkflowsQueryParamsArg`
  - Used as queryParams for the API call
- headers `GetWorkflowsHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `Workflows`.

Returns the workflow.


## Starts workflow based on request body

Initiates a flow with a trigger type of &#x60;WORKFLOW_MANUAL_START&#x60;.

You application must be authorized to use the &#x60;Manage Box Relay&#x60; application
scope within the developer console.

This operation is performed by calling function `createWorkflowStart`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-workflows-id-start/).

*Currently we don't have an example for calling `createWorkflowStart` in integration tests*

### Arguments

- workflowId `string`
  - The ID of the workflow.
  - Used as `workflow_id` in path `path` of the API call
- requestBody `CreateWorkflowStartRequestBodyArg`
  - Used as requestBody for the API call
- headers `CreateWorkflowStartHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `undefined`.

Starts the workflow.


