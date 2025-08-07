import { ShieldListsV2025R0 } from '../schemas/v2025R0/shieldListsV2025R0.generated.js';
import { BoxVersionHeaderV2025R0 } from '../parameters/v2025R0/boxVersionHeaderV2025R0.generated.js';
import { ShieldListV2025R0 } from '../schemas/v2025R0/shieldListV2025R0.generated.js';
import { ShieldListsCreateV2025R0 } from '../schemas/v2025R0/shieldListsCreateV2025R0.generated.js';
import { ShieldListsUpdateV2025R0 } from '../schemas/v2025R0/shieldListsUpdateV2025R0.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
export declare class CreateShieldListV2025R0Optionals {
    readonly headers: CreateShieldListV2025R0Headers;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateShieldListV2025R0Optionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateShieldListV2025R0Optionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateShieldListV2025R0OptionalsInput {
    readonly headers?: CreateShieldListV2025R0Headers;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetShieldListByIdV2025R0Optionals {
    readonly headers: GetShieldListByIdV2025R0Headers;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetShieldListByIdV2025R0Optionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetShieldListByIdV2025R0Optionals, 'headers' | 'cancellationToken'>>);
}
export interface GetShieldListByIdV2025R0OptionalsInput {
    readonly headers?: GetShieldListByIdV2025R0Headers;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteShieldListByIdV2025R0Optionals {
    readonly headers: DeleteShieldListByIdV2025R0Headers;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteShieldListByIdV2025R0Optionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteShieldListByIdV2025R0Optionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteShieldListByIdV2025R0OptionalsInput {
    readonly headers?: DeleteShieldListByIdV2025R0Headers;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateShieldListByIdV2025R0Optionals {
    readonly headers: UpdateShieldListByIdV2025R0Headers;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateShieldListByIdV2025R0Optionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateShieldListByIdV2025R0Optionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateShieldListByIdV2025R0OptionalsInput {
    readonly headers?: UpdateShieldListByIdV2025R0Headers;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetShieldListsV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetShieldListsV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<GetShieldListsV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface GetShieldListsV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class CreateShieldListV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateShieldListV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<CreateShieldListV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface CreateShieldListV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetShieldListByIdV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetShieldListByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<GetShieldListByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface GetShieldListByIdV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteShieldListByIdV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteShieldListByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<DeleteShieldListByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface DeleteShieldListByIdV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class UpdateShieldListByIdV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateShieldListByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<UpdateShieldListByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface UpdateShieldListByIdV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class ShieldListsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<ShieldListsManager, 'networkSession' | 'getShieldListsV2025R0' | 'createShieldListV2025R0' | 'getShieldListByIdV2025R0' | 'deleteShieldListByIdV2025R0' | 'updateShieldListByIdV2025R0'> & Partial<Pick<ShieldListsManager, 'networkSession'>>);
    /**
     * Retrieves all shield lists in the enterprise.
     * @param {GetShieldListsV2025R0HeadersInput} headersInput Headers of getShieldListsV2025R0 method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<ShieldListsV2025R0>}
     */
    getShieldListsV2025R0(headersInput?: GetShieldListsV2025R0HeadersInput, cancellationToken?: CancellationToken): Promise<ShieldListsV2025R0>;
    /**
     * Creates a shield list.
     * @param {ShieldListsCreateV2025R0} requestBody Request body of createShieldListV2025R0 method
     * @param {CreateShieldListV2025R0OptionalsInput} optionalsInput
     * @returns {Promise<ShieldListV2025R0>}
     */
    createShieldListV2025R0(requestBody: ShieldListsCreateV2025R0, optionalsInput?: CreateShieldListV2025R0OptionalsInput): Promise<ShieldListV2025R0>;
    /**
       * Retrieves a single shield list by its ID.
       * @param {string} shieldListId The unique identifier that represents a shield list.
      The ID for any Shield List can be determined by the response from the endpoint
      fetching all shield lists for the enterprise.
      Example: "90fb0e17-c332-40ed-b4f9-fa8908fbbb24 "
       * @param {GetShieldListByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<ShieldListV2025R0>}
       */
    getShieldListByIdV2025R0(shieldListId: string, optionalsInput?: GetShieldListByIdV2025R0OptionalsInput): Promise<ShieldListV2025R0>;
    /**
       * Delete a single shield list by its ID.
       * @param {string} shieldListId The unique identifier that represents a shield list.
      The ID for any Shield List can be determined by the response from the endpoint
      fetching all shield lists for the enterprise.
      Example: "90fb0e17-c332-40ed-b4f9-fa8908fbbb24 "
       * @param {DeleteShieldListByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteShieldListByIdV2025R0(shieldListId: string, optionalsInput?: DeleteShieldListByIdV2025R0OptionalsInput): Promise<undefined>;
    /**
       * Updates a shield list.
       * @param {string} shieldListId The unique identifier that represents a shield list.
      The ID for any Shield List can be determined by the response from the endpoint
      fetching all shield lists for the enterprise.
      Example: "90fb0e17-c332-40ed-b4f9-fa8908fbbb24 "
       * @param {ShieldListsUpdateV2025R0} requestBody Request body of updateShieldListByIdV2025R0 method
       * @param {UpdateShieldListByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<ShieldListV2025R0>}
       */
    updateShieldListByIdV2025R0(shieldListId: string, requestBody: ShieldListsUpdateV2025R0, optionalsInput?: UpdateShieldListByIdV2025R0OptionalsInput): Promise<ShieldListV2025R0>;
}
export interface ShieldListsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
//# sourceMappingURL=shieldLists.generated.d.ts.map