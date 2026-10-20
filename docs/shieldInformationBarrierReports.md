# ShieldInformationBarrierReportsManager

<!-- box-typescript-sdk-gen deprecation banner -->
> [!CAUTION]
> **`box-typescript-sdk-gen` is deprecated and no longer maintained.** As of September 17, 2025, it receives no new features, bug fixes, or security patches. Do not use it for new projects.
>
> Use [`box-node-sdk`](https://github.com/box/box-node-sdk) v10+ instead: `npm install box-node-sdk`.
> The equivalent of this page is [box-node-sdk/docs/shieldInformationBarrierReports.md](https://github.com/box/box-node-sdk/blob/main/docs/shieldInformationBarrierReports.md). To migrate existing code, see the [migration guide](https://github.com/box/box-node-sdk/blob/main/migration-guides/from-box-typescript-sdk-gen-v1-to-box-node-sdk.md).

- [List shield information barrier reports](#list-shield-information-barrier-reports)
- [Create shield information barrier report](#create-shield-information-barrier-report)
- [Get shield information barrier report by ID](#get-shield-information-barrier-report-by-id)

## List shield information barrier reports

Lists shield information barrier reports.

This operation is performed by calling function `getShieldInformationBarrierReports`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-shield-information-barrier-reports/).

<!-- sample get_shield_information_barrier_reports -->

```ts
await client.shieldInformationBarrierReports.getShieldInformationBarrierReports(
  {
    shieldInformationBarrierId: barrierId,
  } satisfies GetShieldInformationBarrierReportsQueryParams,
);
```

### Arguments

- queryParams `GetShieldInformationBarrierReportsQueryParams`
  - Query parameters of getShieldInformationBarrierReports method
- optionalsInput `GetShieldInformationBarrierReportsOptionalsInput`

### Returns

This function returns a value of type `ShieldInformationBarrierReports`.

Returns a paginated list of shield information barrier report objects.

## Create shield information barrier report

Creates a shield information barrier report for a given barrier.

This operation is performed by calling function `createShieldInformationBarrierReport`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-shield-information-barrier-reports/).

<!-- sample post_shield_information_barrier_reports -->

```ts
await client.shieldInformationBarrierReports.createShieldInformationBarrierReport(
  {
    shieldInformationBarrier: {
      id: barrierId,
      type: 'shield_information_barrier' as ShieldInformationBarrierBaseTypeField,
    } satisfies ShieldInformationBarrierBase,
  } satisfies ShieldInformationBarrierReference,
);
```

### Arguments

- requestBody `ShieldInformationBarrierReference`
  - Request body of createShieldInformationBarrierReport method
- optionalsInput `CreateShieldInformationBarrierReportOptionalsInput`

### Returns

This function returns a value of type `ShieldInformationBarrierReport`.

Returns the shield information barrier report information object.

## Get shield information barrier report by ID

Retrieves a shield information barrier report by its ID.

This operation is performed by calling function `getShieldInformationBarrierReportById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-shield-information-barrier-reports-id/).

<!-- sample get_shield_information_barrier_reports_id -->

```ts
await client.shieldInformationBarrierReports.getShieldInformationBarrierReportById(
  createdReport.id!,
);
```

### Arguments

- shieldInformationBarrierReportId `string`
  - The ID of the shield information barrier Report. Example: "3423"
- optionalsInput `GetShieldInformationBarrierReportByIdOptionalsInput`

### Returns

This function returns a value of type `ShieldInformationBarrierReport`.

Returns the shield information barrier report object.
