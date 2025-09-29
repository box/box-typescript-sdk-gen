import { serializeWorkflowMiniTypeField } from './workflowMini.generated';
import { deserializeWorkflowMiniTypeField } from './workflowMini.generated';
import { serializeWorkflowMini } from './workflowMini.generated';
import { deserializeWorkflowMini } from './workflowMini.generated';
import { serializeWorkflowFlowsField } from './workflow.generated';
import { deserializeWorkflowFlowsField } from './workflow.generated';
import { serializeWorkflow } from './workflow.generated';
import { deserializeWorkflow } from './workflow.generated';
import { serializeUserBase } from './userBase.generated';
import { deserializeUserBase } from './userBase.generated';
import { serializeDateTime } from '../internal/utils';
import { deserializeDateTime } from '../internal/utils';
import { WorkflowMiniTypeField } from './workflowMini.generated';
import { WorkflowMini } from './workflowMini.generated';
import { WorkflowFlowsField } from './workflow.generated';
import { Workflow } from './workflow.generated';
import { UserBase } from './userBase.generated';
import { BoxSdkError } from '../box/errors';
import { DateTime } from '../internal/utils';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export type WorkflowFull = Workflow & {
  /**
   * The date and time when the workflow was created on Box. */
  readonly createdAt?: DateTime;
  /**
   * The date and time when the workflow was last updated on Box. */
  readonly modifiedAt?: DateTime;
  readonly createdBy?: UserBase;
  readonly modifiedBy?: UserBase;
};
export function serializeWorkflowFull(val: WorkflowFull): SerializedData {
  const base: any = serializeWorkflow(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({ message: 'Expecting a map for "WorkflowFull"' });
  }
  return {
    ...base,
    ...{
      ['created_at']:
        val.createdAt == void 0
          ? val.createdAt
          : serializeDateTime(val.createdAt),
      ['modified_at']:
        val.modifiedAt == void 0
          ? val.modifiedAt
          : serializeDateTime(val.modifiedAt),
      ['created_by']:
        val.createdBy == void 0
          ? val.createdBy
          : serializeUserBase(val.createdBy),
      ['modified_by']:
        val.modifiedBy == void 0
          ? val.modifiedBy
          : serializeUserBase(val.modifiedBy),
    },
  };
}
export function deserializeWorkflowFull(val: SerializedData): WorkflowFull {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "WorkflowFull"' });
  }
  if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "created_at" of type "WorkflowFull"',
    });
  }
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "modified_at" of type "WorkflowFull"',
    });
  }
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
  const createdBy: undefined | UserBase =
    val.created_by == void 0 ? void 0 : deserializeUserBase(val.created_by);
  const modifiedBy: undefined | UserBase =
    val.modified_by == void 0 ? void 0 : deserializeUserBase(val.modified_by);
  if (!(val.flows == void 0) && !sdIsList(val.flows)) {
    throw new BoxSdkError({
      message: 'Expecting array for "flows" of type "WorkflowFull"',
    });
  }
  const flows: undefined | readonly WorkflowFlowsField[] =
    val.flows == void 0
      ? void 0
      : sdIsList(val.flows)
        ? (val.flows.map(function (itm: SerializedData): WorkflowFlowsField {
            return deserializeWorkflowFlowsField(itm);
          }) as readonly any[])
        : [];
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "WorkflowFull"',
    });
  }
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | WorkflowMiniTypeField =
    val.type == void 0 ? void 0 : deserializeWorkflowMiniTypeField(val.type);
  if (!(val.name == void 0) && !sdIsString(val.name)) {
    throw new BoxSdkError({
      message: 'Expecting string for "name" of type "WorkflowFull"',
    });
  }
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  if (!(val.description == void 0) && !sdIsString(val.description)) {
    throw new BoxSdkError({
      message: 'Expecting string for "description" of type "WorkflowFull"',
    });
  }
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  if (!(val.is_enabled == void 0) && !sdIsBoolean(val.is_enabled)) {
    throw new BoxSdkError({
      message: 'Expecting boolean for "is_enabled" of type "WorkflowFull"',
    });
  }
  const isEnabled: undefined | boolean =
    val.is_enabled == void 0 ? void 0 : val.is_enabled;
  return {
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    createdBy: createdBy,
    modifiedBy: modifiedBy,
    flows: flows,
    id: id,
    type: type,
    name: name,
    description: description,
    isEnabled: isEnabled,
  } satisfies WorkflowFull;
}
