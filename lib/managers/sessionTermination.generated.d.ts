import { SessionTerminationMessage } from '../schemas/sessionTerminationMessage.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class TerminateUsersSessionsOptionals {
    readonly headers: TerminateUsersSessionsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<TerminateUsersSessionsOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<TerminateUsersSessionsOptionals, 'headers' | 'cancellationToken'>>);
}
export interface TerminateUsersSessionsOptionalsInput {
    readonly headers?: TerminateUsersSessionsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class TerminateGroupsSessionsOptionals {
    readonly headers: TerminateGroupsSessionsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<TerminateGroupsSessionsOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<TerminateGroupsSessionsOptionals, 'headers' | 'cancellationToken'>>);
}
export interface TerminateGroupsSessionsOptionalsInput {
    readonly headers?: TerminateGroupsSessionsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface TerminateUsersSessionsRequestBody {
    /**
     * A list of user IDs. */
    readonly userIds: readonly string[];
    /**
     * A list of user logins. */
    readonly userLogins: readonly string[];
    readonly rawData?: SerializedData;
}
export declare class TerminateUsersSessionsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<TerminateUsersSessionsHeaders, 'extraHeaders'> & Partial<Pick<TerminateUsersSessionsHeaders, 'extraHeaders'>>);
}
export interface TerminateUsersSessionsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface TerminateGroupsSessionsRequestBody {
    /**
     * A list of group IDs. */
    readonly groupIds: readonly string[];
    readonly rawData?: SerializedData;
}
export declare class TerminateGroupsSessionsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<TerminateGroupsSessionsHeaders, 'extraHeaders'> & Partial<Pick<TerminateGroupsSessionsHeaders, 'extraHeaders'>>);
}
export interface TerminateGroupsSessionsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class SessionTerminationManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<SessionTerminationManager, 'networkSession' | 'terminateUsersSessions' | 'terminateGroupsSessions'> & Partial<Pick<SessionTerminationManager, 'networkSession'>>);
    /**
     * Validates the roles and permissions of the user,
     * and creates asynchronous jobs
     * to terminate the user's sessions.
     * Returns the status for the POST request.
     * @param {TerminateUsersSessionsRequestBody} requestBody Request body of terminateUsersSessions method
     * @param {TerminateUsersSessionsOptionalsInput} optionalsInput
     * @returns {Promise<SessionTerminationMessage>}
     */
    terminateUsersSessions(requestBody: TerminateUsersSessionsRequestBody, optionalsInput?: TerminateUsersSessionsOptionalsInput): Promise<SessionTerminationMessage>;
    /**
     * Validates the roles and permissions of the group,
     * and creates asynchronous jobs
     * to terminate the group's sessions.
     * Returns the status for the POST request.
     * @param {TerminateGroupsSessionsRequestBody} requestBody Request body of terminateGroupsSessions method
     * @param {TerminateGroupsSessionsOptionalsInput} optionalsInput
     * @returns {Promise<SessionTerminationMessage>}
     */
    terminateGroupsSessions(requestBody: TerminateGroupsSessionsRequestBody, optionalsInput?: TerminateGroupsSessionsOptionalsInput): Promise<SessionTerminationMessage>;
}
export interface SessionTerminationManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeTerminateUsersSessionsRequestBody(val: TerminateUsersSessionsRequestBody): SerializedData;
export declare function deserializeTerminateUsersSessionsRequestBody(val: SerializedData): TerminateUsersSessionsRequestBody;
export declare function serializeTerminateGroupsSessionsRequestBody(val: TerminateGroupsSessionsRequestBody): SerializedData;
export declare function deserializeTerminateGroupsSessionsRequestBody(val: SerializedData): TerminateGroupsSessionsRequestBody;
//# sourceMappingURL=sessionTermination.generated.d.ts.map