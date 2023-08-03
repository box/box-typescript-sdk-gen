# ShieldInformationBarrierReportsManager

## List shield information barrier reports

Lists shield information barrier reports with specific IDs.

This operation is performed by calling function `getShieldInformationBarrierReports`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-shield-information-barrier-reports/).

*Currently we don't have an example for calling `getShieldInformationBarrierReports` in integration tests*

### Arguments

- queryParams `GetShieldInformationBarrierReportsQueryParamsArg`
  - Used as queryParams for the API call
- headers `GetShieldInformationBarrierReportsHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `undefined`.

Returns a paginated list of shield information barrier report objects.


## Create shield information barrier report

Creates a shield information barrier report for a given barrier.

This operation is performed by calling function `createShieldInformationBarrierReport`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-shield-information-barrier-reports/).

*Currently we don't have an example for calling `createShieldInformationBarrierReport` in integration tests*

### Arguments

- requestBody `ShieldInformationBarrierReference`
  - Used as requestBody for the API call
- headers `CreateShieldInformationBarrierReportHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `ShieldInformationBarrierReport`.

Returns the shield information barrier report information object.


## Get shield information barrier report by ID

Retrieves a shield information barrier report by its ID.

This operation is performed by calling function `getShieldInformationBarrierReportById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-shield-information-barrier-reports-id/).

*Currently we don't have an example for calling `getShieldInformationBarrierReportById` in integration tests*

### Arguments

- shieldInformationBarrierReportId `string`
  - The ID of the shield information barrier Report.
  - Used as `shield_information_barrier_report_id` in path `path` of the API call
- headers `GetShieldInformationBarrierReportByIdHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `ShieldInformationBarrierReport`.

Returns the  shield information barrier report object.


