import { serializeFileReferenceV2025R0 } from './fileReferenceV2025R0.generated';
import { deserializeFileReferenceV2025R0 } from './fileReferenceV2025R0.generated';
import { serializeFileVersionBaseV2025R0 } from './fileVersionBaseV2025R0.generated';
import { deserializeFileVersionBaseV2025R0 } from './fileVersionBaseV2025R0.generated';
import { serializeDocGenDocumentGenerationDataV2025R0 } from './docGenDocumentGenerationDataV2025R0.generated';
import { deserializeDocGenDocumentGenerationDataV2025R0 } from './docGenDocumentGenerationDataV2025R0.generated';
import { FileReferenceV2025R0 } from './fileReferenceV2025R0.generated';
import { FileVersionBaseV2025R0 } from './fileVersionBaseV2025R0.generated';
import { DocGenDocumentGenerationDataV2025R0 } from './docGenDocumentGenerationDataV2025R0.generated';
import { BoxSdkError } from '../../box/errors';
import { SerializedData } from '../../serialization/json';
import { sdIsEmpty } from '../../serialization/json';
import { sdIsBoolean } from '../../serialization/json';
import { sdIsNumber } from '../../serialization/json';
import { sdIsString } from '../../serialization/json';
import { sdIsList } from '../../serialization/json';
import { sdIsMap } from '../../serialization/json';
export type DocGenBatchCreateRequestV2025R0DestinationFolderTypeField =
  'folder';
export class DocGenBatchCreateRequestV2025R0DestinationFolderField {
  /**
   * The value will always be `folder`. */
  readonly type: DocGenBatchCreateRequestV2025R0DestinationFolderTypeField =
    'folder' as DocGenBatchCreateRequestV2025R0DestinationFolderTypeField;
  /**
   * ID of the folder. */
  readonly id!: string;
  readonly rawData?: SerializedData;
  constructor(
    fields: Omit<
      DocGenBatchCreateRequestV2025R0DestinationFolderField,
      'type'
    > &
      Partial<
        Pick<DocGenBatchCreateRequestV2025R0DestinationFolderField, 'type'>
      >,
  ) {
    if (fields.type !== undefined) {
      this.type = fields.type;
    }
    if (fields.id !== undefined) {
      this.id = fields.id;
    }
    if (fields.rawData !== undefined) {
      this.rawData = fields.rawData;
    }
  }
}
export interface DocGenBatchCreateRequestV2025R0DestinationFolderFieldInput {
  /**
   * The value will always be `folder`. */
  readonly type?: DocGenBatchCreateRequestV2025R0DestinationFolderTypeField;
  /**
   * ID of the folder. */
  readonly id: string;
  readonly rawData?: SerializedData;
}
export interface DocGenBatchCreateRequestV2025R0 {
  readonly file: FileReferenceV2025R0;
  readonly fileVersion?: FileVersionBaseV2025R0;
  /**
   * Source of input. The value has to be `api` for all the API-based document generation requests. */
  readonly inputSource: string;
  readonly destinationFolder: DocGenBatchCreateRequestV2025R0DestinationFolderField;
  /**
   * Type of the output file. */
  readonly outputType: string;
  readonly documentGenerationData: readonly DocGenDocumentGenerationDataV2025R0[];
  readonly rawData?: SerializedData;
}
export function serializeDocGenBatchCreateRequestV2025R0DestinationFolderTypeField(
  val: DocGenBatchCreateRequestV2025R0DestinationFolderTypeField,
): SerializedData {
  return val;
}
export function deserializeDocGenBatchCreateRequestV2025R0DestinationFolderTypeField(
  val: SerializedData,
): DocGenBatchCreateRequestV2025R0DestinationFolderTypeField {
  if (val == 'folder') {
    return val;
  }
  throw new BoxSdkError({
    message:
      "Can't deserialize DocGenBatchCreateRequestV2025R0DestinationFolderTypeField",
  });
}
export function serializeDocGenBatchCreateRequestV2025R0DestinationFolderField(
  val: DocGenBatchCreateRequestV2025R0DestinationFolderField,
): SerializedData {
  return {
    ['type']:
      serializeDocGenBatchCreateRequestV2025R0DestinationFolderTypeField(
        val.type,
      ),
    ['id']: val.id,
  };
}
export function deserializeDocGenBatchCreateRequestV2025R0DestinationFolderField(
  val: SerializedData,
): DocGenBatchCreateRequestV2025R0DestinationFolderField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "DocGenBatchCreateRequestV2025R0DestinationFolderField"',
    });
  }
  if (val.type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "type" of type "DocGenBatchCreateRequestV2025R0DestinationFolderField" to be defined',
    });
  }
  const type: DocGenBatchCreateRequestV2025R0DestinationFolderTypeField =
    deserializeDocGenBatchCreateRequestV2025R0DestinationFolderTypeField(
      val.type,
    );
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "DocGenBatchCreateRequestV2025R0DestinationFolderField" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "DocGenBatchCreateRequestV2025R0DestinationFolderField"',
    });
  }
  const id: string = val.id;
  return {
    type: type,
    id: id,
  } satisfies DocGenBatchCreateRequestV2025R0DestinationFolderField;
}
export function serializeDocGenBatchCreateRequestV2025R0DestinationFolderFieldInput(
  val: DocGenBatchCreateRequestV2025R0DestinationFolderFieldInput,
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? val.type
        : serializeDocGenBatchCreateRequestV2025R0DestinationFolderTypeField(
            val.type,
          ),
    ['id']: val.id,
  };
}
export function deserializeDocGenBatchCreateRequestV2025R0DestinationFolderFieldInput(
  val: SerializedData,
): DocGenBatchCreateRequestV2025R0DestinationFolderFieldInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "DocGenBatchCreateRequestV2025R0DestinationFolderFieldInput"',
    });
  }
  const type:
    | undefined
    | DocGenBatchCreateRequestV2025R0DestinationFolderTypeField =
    val.type == void 0
      ? void 0
      : deserializeDocGenBatchCreateRequestV2025R0DestinationFolderTypeField(
          val.type,
        );
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "DocGenBatchCreateRequestV2025R0DestinationFolderFieldInput" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "DocGenBatchCreateRequestV2025R0DestinationFolderFieldInput"',
    });
  }
  const id: string = val.id;
  return {
    type: type,
    id: id,
  } satisfies DocGenBatchCreateRequestV2025R0DestinationFolderFieldInput;
}
export function serializeDocGenBatchCreateRequestV2025R0(
  val: DocGenBatchCreateRequestV2025R0,
): SerializedData {
  return {
    ['file']: serializeFileReferenceV2025R0(val.file),
    ['file_version']:
      val.fileVersion == void 0
        ? val.fileVersion
        : serializeFileVersionBaseV2025R0(val.fileVersion),
    ['input_source']: val.inputSource,
    ['destination_folder']:
      serializeDocGenBatchCreateRequestV2025R0DestinationFolderField(
        val.destinationFolder,
      ),
    ['output_type']: val.outputType,
    ['document_generation_data']: val.documentGenerationData.map(function (
      item: DocGenDocumentGenerationDataV2025R0,
    ): SerializedData {
      return serializeDocGenDocumentGenerationDataV2025R0(item);
    }) as readonly any[],
  };
}
export function deserializeDocGenBatchCreateRequestV2025R0(
  val: SerializedData,
): DocGenBatchCreateRequestV2025R0 {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "DocGenBatchCreateRequestV2025R0"',
    });
  }
  if (val.file == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "file" of type "DocGenBatchCreateRequestV2025R0" to be defined',
    });
  }
  const file: FileReferenceV2025R0 = deserializeFileReferenceV2025R0(val.file);
  const fileVersion: undefined | FileVersionBaseV2025R0 =
    val.file_version == void 0
      ? void 0
      : deserializeFileVersionBaseV2025R0(val.file_version);
  if (val.input_source == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "input_source" of type "DocGenBatchCreateRequestV2025R0" to be defined',
    });
  }
  if (!sdIsString(val.input_source)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "input_source" of type "DocGenBatchCreateRequestV2025R0"',
    });
  }
  const inputSource: string = val.input_source;
  if (val.destination_folder == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "destination_folder" of type "DocGenBatchCreateRequestV2025R0" to be defined',
    });
  }
  const destinationFolder: DocGenBatchCreateRequestV2025R0DestinationFolderField =
    deserializeDocGenBatchCreateRequestV2025R0DestinationFolderField(
      val.destination_folder,
    );
  if (val.output_type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "output_type" of type "DocGenBatchCreateRequestV2025R0" to be defined',
    });
  }
  if (!sdIsString(val.output_type)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "output_type" of type "DocGenBatchCreateRequestV2025R0"',
    });
  }
  const outputType: string = val.output_type;
  if (val.document_generation_data == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "document_generation_data" of type "DocGenBatchCreateRequestV2025R0" to be defined',
    });
  }
  if (!sdIsList(val.document_generation_data)) {
    throw new BoxSdkError({
      message:
        'Expecting array for "document_generation_data" of type "DocGenBatchCreateRequestV2025R0"',
    });
  }
  const documentGenerationData: readonly DocGenDocumentGenerationDataV2025R0[] =
    sdIsList(val.document_generation_data)
      ? (val.document_generation_data.map(function (
          itm: SerializedData,
        ): DocGenDocumentGenerationDataV2025R0 {
          return deserializeDocGenDocumentGenerationDataV2025R0(itm);
        }) as readonly any[])
      : [];
  return {
    file: file,
    fileVersion: fileVersion,
    inputSource: inputSource,
    destinationFolder: destinationFolder,
    outputType: outputType,
    documentGenerationData: documentGenerationData,
  } satisfies DocGenBatchCreateRequestV2025R0;
}
