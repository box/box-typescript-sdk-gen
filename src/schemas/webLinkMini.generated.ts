import { serializeWebLinkBaseTypeField } from './webLinkBase.generated.js';
import { deserializeWebLinkBaseTypeField } from './webLinkBase.generated.js';
import { serializeWebLinkBase } from './webLinkBase.generated.js';
import { deserializeWebLinkBase } from './webLinkBase.generated.js';
import { WebLinkBaseTypeField } from './webLinkBase.generated.js';
import { WebLinkBase } from './webLinkBase.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class WebLinkMini extends WebLinkBase {
  readonly url?: string;
  readonly sequenceId?: string;
  readonly name?: string;
  constructor(fields: WebLinkMini) {
    super(fields);
  }
}
export function serializeWebLinkMini(val: WebLinkMini): SerializedData {
  const base: any = serializeWebLinkBase(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({ message: 'Expecting a map for "WebLinkMini"' });
  }
  return {
    ...base,
    ...{
      ['url']: val.url == void 0 ? void 0 : val.url,
      ['sequence_id']: val.sequenceId == void 0 ? void 0 : val.sequenceId,
      ['name']: val.name == void 0 ? void 0 : val.name,
    },
  };
}
export function deserializeWebLinkMini(val: any): WebLinkMini {
  const url: undefined | string = val.url == void 0 ? void 0 : val.url;
  const sequenceId: undefined | string =
    val.sequence_id == void 0 ? void 0 : val.sequence_id;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const id: string = val.id;
  const type: WebLinkBaseTypeField = deserializeWebLinkBaseTypeField(val.type);
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  return {
    url: url,
    sequenceId: sequenceId,
    name: name,
    id: id,
    type: type,
    etag: etag,
  } satisfies WebLinkMini;
}
