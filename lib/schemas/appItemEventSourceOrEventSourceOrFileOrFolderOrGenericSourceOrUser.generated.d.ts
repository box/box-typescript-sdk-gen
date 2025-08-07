import { AppItemEventSource } from './appItemEventSource.generated.js';
import { EventSource } from './eventSource.generated.js';
import { File } from './file.generated.js';
import { Folder } from './folder.generated.js';
import { GenericSource } from './genericSource.generated.js';
import { User } from './user.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AppItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser = AppItemEventSource | EventSource | File | Folder | GenericSource | User;
export declare function serializeAppItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser(val: any): SerializedData;
export declare function deserializeAppItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser(val: SerializedData): AppItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser;
//# sourceMappingURL=appItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser.generated.d.ts.map