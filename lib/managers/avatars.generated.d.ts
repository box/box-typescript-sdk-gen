import { UserAvatar } from '../schemas/userAvatar.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
export declare class GetUserAvatarOptionals {
    readonly headers: GetUserAvatarHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetUserAvatarOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetUserAvatarOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetUserAvatarOptionalsInput {
    readonly headers?: GetUserAvatarHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateUserAvatarOptionals {
    readonly headers: CreateUserAvatarHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateUserAvatarOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateUserAvatarOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateUserAvatarOptionalsInput {
    readonly headers?: CreateUserAvatarHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteUserAvatarOptionals {
    readonly headers: DeleteUserAvatarHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteUserAvatarOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteUserAvatarOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteUserAvatarOptionalsInput {
    readonly headers?: DeleteUserAvatarHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetUserAvatarHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetUserAvatarHeaders, 'extraHeaders'> & Partial<Pick<GetUserAvatarHeaders, 'extraHeaders'>>);
}
export interface GetUserAvatarHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface CreateUserAvatarRequestBody {
    /**
     * The image file to be uploaded to Box.
     * Accepted file extensions are `.jpg` or `.png`.
     * The maximum file size is 1MB. */
    readonly pic: ByteStream;
    readonly picFileName?: string;
    readonly picContentType?: string;
}
export declare class CreateUserAvatarHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateUserAvatarHeaders, 'extraHeaders'> & Partial<Pick<CreateUserAvatarHeaders, 'extraHeaders'>>);
}
export interface CreateUserAvatarHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteUserAvatarHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteUserAvatarHeaders, 'extraHeaders'> & Partial<Pick<DeleteUserAvatarHeaders, 'extraHeaders'>>);
}
export interface DeleteUserAvatarHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class AvatarsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<AvatarsManager, 'networkSession' | 'getUserAvatar' | 'createUserAvatar' | 'deleteUserAvatar'> & Partial<Pick<AvatarsManager, 'networkSession'>>);
    /**
       * Retrieves an image of a the user's avatar.
       * @param {string} userId The ID of the user.
      Example: "12345"
       * @param {GetUserAvatarOptionalsInput} optionalsInput
       * @returns {Promise<ByteStream>}
       */
    getUserAvatar(userId: string, optionalsInput?: GetUserAvatarOptionalsInput): Promise<ByteStream>;
    /**
       * Adds or updates a user avatar.
       * @param {string} userId The ID of the user.
      Example: "12345"
       * @param {CreateUserAvatarRequestBody} requestBody Request body of createUserAvatar method
       * @param {CreateUserAvatarOptionalsInput} optionalsInput
       * @returns {Promise<UserAvatar>}
       */
    createUserAvatar(userId: string, requestBody: CreateUserAvatarRequestBody, optionalsInput?: CreateUserAvatarOptionalsInput): Promise<UserAvatar>;
    /**
       * Removes an existing user avatar.
       * You cannot reverse this operation.
       * @param {string} userId The ID of the user.
      Example: "12345"
       * @param {DeleteUserAvatarOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteUserAvatar(userId: string, optionalsInput?: DeleteUserAvatarOptionalsInput): Promise<undefined>;
}
export interface AvatarsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
//# sourceMappingURL=avatars.generated.d.ts.map