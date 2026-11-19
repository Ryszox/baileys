// Auto-generated from WAProto.proto (WhatsApp Version: 2.3000.1029496320) for Baileys by ryszox
export type Long = any;
export namespace proto {
    export interface IADVDeviceIdentity {
        rawId?: number | null;
        timestamp?: number | Long | null;
        keyIndex?: number | null;
        accountType?: proto.IADVEncryptionType | null;
        deviceType?: proto.IADVEncryptionType | null;
    }
    export class ADVDeviceIdentity implements IADVDeviceIdentity {
        constructor(properties?: IADVDeviceIdentity);
        public static create(properties?: IADVDeviceIdentity): ADVDeviceIdentity;
        public static encode(message: IADVDeviceIdentity, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): ADVDeviceIdentity;
        public static fromObject(object: { [k: string]: any }): ADVDeviceIdentity;
        public static toObject(message: ADVDeviceIdentity, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export enum ADVEncryptionType {
        E2EE = 0,
        HOSTED = 1,
    }
    export type IADVEncryptionType = ADVEncryptionType;
    export interface IADVKeyIndexList {
        rawId?: number | null;
        timestamp?: number | Long | null;
        currentIndex?: number | null;
        validIndexes?: (number)[] | null;
        accountType?: proto.IADVEncryptionType | null;
    }
    export class ADVKeyIndexList implements IADVKeyIndexList {
        constructor(properties?: IADVKeyIndexList);
        public static create(properties?: IADVKeyIndexList): ADVKeyIndexList;
        public static encode(message: IADVKeyIndexList, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): ADVKeyIndexList;
        public static fromObject(object: { [k: string]: any }): ADVKeyIndexList;
        public static toObject(message: ADVKeyIndexList, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IADVSignedDeviceIdentity {
        details?: Uint8Array | null;
        accountSignatureKey?: Uint8Array | null;
        accountSignature?: Uint8Array | null;
        deviceSignature?: Uint8Array | null;
    }
    export class ADVSignedDeviceIdentity implements IADVSignedDeviceIdentity {
        constructor(properties?: IADVSignedDeviceIdentity);
        public static create(properties?: IADVSignedDeviceIdentity): ADVSignedDeviceIdentity;
        public static encode(message: IADVSignedDeviceIdentity, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): ADVSignedDeviceIdentity;
        public static fromObject(object: { [k: string]: any }): ADVSignedDeviceIdentity;
        public static toObject(message: ADVSignedDeviceIdentity, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IADVSignedDeviceIdentityHMAC {
        details?: Uint8Array | null;
        hmac?: Uint8Array | null;
        accountType?: proto.IADVEncryptionType | null;
    }
    export class ADVSignedDeviceIdentityHMAC implements IADVSignedDeviceIdentityHMAC {
        constructor(properties?: IADVSignedDeviceIdentityHMAC);
        public static create(properties?: IADVSignedDeviceIdentityHMAC): ADVSignedDeviceIdentityHMAC;
        public static encode(message: IADVSignedDeviceIdentityHMAC, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): ADVSignedDeviceIdentityHMAC;
        public static fromObject(object: { [k: string]: any }): ADVSignedDeviceIdentityHMAC;
        public static toObject(message: ADVSignedDeviceIdentityHMAC, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IADVSignedKeyIndexList {
        details?: Uint8Array | null;
        accountSignature?: Uint8Array | null;
        accountSignatureKey?: Uint8Array | null;
    }
    export class ADVSignedKeyIndexList implements IADVSignedKeyIndexList {
        constructor(properties?: IADVSignedKeyIndexList);
        public static create(properties?: IADVSignedKeyIndexList): ADVSignedKeyIndexList;
        public static encode(message: IADVSignedKeyIndexList, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): ADVSignedKeyIndexList;
        public static fromObject(object: { [k: string]: any }): ADVSignedKeyIndexList;
        public static toObject(message: ADVSignedKeyIndexList, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IAIHomeState {
        lastFetchTime?: number | Long | null;
        capabilityOptions?: (proto.IAIHomeOption)[] | null;
        conversationOptions?: (proto.IAIHomeOption)[] | null;
    }
    export class AIHomeState implements IAIHomeState {
        constructor(properties?: IAIHomeState);
        public static create(properties?: IAIHomeState): AIHomeState;
        public static encode(message: IAIHomeState, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): AIHomeState;
        public static fromObject(object: { [k: string]: any }): AIHomeState;
        public static toObject(message: AIHomeState, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace AIHomeState {
        export interface IAIHomeOption {
            type?: proto.IAIHomeActionType | null;
            title?: string | null;
            promptText?: string | null;
            sessionId?: string | null;
            imageWdsIdentifier?: string | null;
            imageTintColor?: string | null;
            imageBackgroundColor?: string | null;
        }
        export class AIHomeOption implements IAIHomeOption {
            constructor(properties?: IAIHomeOption);
            public static create(properties?: IAIHomeOption): AIHomeOption;
            public static encode(message: IAIHomeOption, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): AIHomeOption;
            public static fromObject(object: { [k: string]: any }): AIHomeOption;
            public static toObject(message: AIHomeOption, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace AIHomeOption {
            export enum AIHomeActionType {
                PROMPT = 0,
                CREATE_IMAGE = 1,
                ANIMATE_PHOTO = 2,
                ANALYZE_FILE = 3,
            }
            export type IAIHomeActionType = AIHomeActionType;
        }
    }
    export interface IAIQueryFanout {
        messageKey?: proto.IMessageKey | null;
        message?: proto.IMessage | null;
        timestamp?: number | Long | null;
    }
    export class AIQueryFanout implements IAIQueryFanout {
        constructor(properties?: IAIQueryFanout);
        public static create(properties?: IAIQueryFanout): AIQueryFanout;
        public static encode(message: IAIQueryFanout, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): AIQueryFanout;
        public static fromObject(object: { [k: string]: any }): AIQueryFanout;
        public static toObject(message: AIQueryFanout, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IAIRegenerateMetadata {
        messageKey?: proto.IMessageKey | null;
        responseTimestampMs?: number | Long | null;
    }
    export class AIRegenerateMetadata implements IAIRegenerateMetadata {
        constructor(properties?: IAIRegenerateMetadata);
        public static create(properties?: IAIRegenerateMetadata): AIRegenerateMetadata;
        public static encode(message: IAIRegenerateMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): AIRegenerateMetadata;
        public static fromObject(object: { [k: string]: any }): AIRegenerateMetadata;
        public static toObject(message: AIRegenerateMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IAIRichResponseCodeMetadata {
        codeLanguage?: string | null;
        codeBlocks?: (proto.IAIRichResponseCodeBlock)[] | null;
    }
    export class AIRichResponseCodeMetadata implements IAIRichResponseCodeMetadata {
        constructor(properties?: IAIRichResponseCodeMetadata);
        public static create(properties?: IAIRichResponseCodeMetadata): AIRichResponseCodeMetadata;
        public static encode(message: IAIRichResponseCodeMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): AIRichResponseCodeMetadata;
        public static fromObject(object: { [k: string]: any }): AIRichResponseCodeMetadata;
        public static toObject(message: AIRichResponseCodeMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace AIRichResponseCodeMetadata {
        export interface IAIRichResponseCodeBlock {
            highlightType?: proto.AIRichResponseCodeMetadata.AIRichResponseCodeHighlightType | null;
            codeContent?: string | null;
        }
        export class AIRichResponseCodeBlock implements IAIRichResponseCodeBlock {
            constructor(properties?: IAIRichResponseCodeBlock);
            public static create(properties?: IAIRichResponseCodeBlock): AIRichResponseCodeBlock;
            public static encode(message: IAIRichResponseCodeBlock, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): AIRichResponseCodeBlock;
            public static fromObject(object: { [k: string]: any }): AIRichResponseCodeBlock;
            public static toObject(message: AIRichResponseCodeBlock, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export enum AIRichResponseCodeHighlightType {
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_DEFAULT = 0,
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_KEYWORD = 1,
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_METHOD = 2,
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_STRING = 3,
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_NUMBER = 4,
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_COMMENT = 5,
        }
        export type IAIRichResponseCodeHighlightType = AIRichResponseCodeHighlightType;
    }
    export interface IAIRichResponseContentItemsMetadata {
        itemsMetadata?: (proto.IAIRichResponseContentItemMetadata)[] | null;
        contentType?: proto.IContentType | null;
    }
    export class AIRichResponseContentItemsMetadata implements IAIRichResponseContentItemsMetadata {
        constructor(properties?: IAIRichResponseContentItemsMetadata);
        public static create(properties?: IAIRichResponseContentItemsMetadata): AIRichResponseContentItemsMetadata;
        public static encode(message: IAIRichResponseContentItemsMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): AIRichResponseContentItemsMetadata;
        public static fromObject(object: { [k: string]: any }): AIRichResponseContentItemsMetadata;
        public static toObject(message: AIRichResponseContentItemsMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace AIRichResponseContentItemsMetadata {
        export interface IAIRichResponseContentItemMetadata {
            reelItem?: proto.AIRichResponseContentItemsMetadata.AIRichResponseReelItem | null;
        }
        export class AIRichResponseContentItemMetadata implements IAIRichResponseContentItemMetadata {
            constructor(properties?: IAIRichResponseContentItemMetadata);
            public static create(properties?: IAIRichResponseContentItemMetadata): AIRichResponseContentItemMetadata;
            public static encode(message: IAIRichResponseContentItemMetadata, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): AIRichResponseContentItemMetadata;
            public static fromObject(object: { [k: string]: any }): AIRichResponseContentItemMetadata;
            public static toObject(message: AIRichResponseContentItemMetadata, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IAIRichResponseReelItem {
            title?: string | null;
            profileIconUrl?: string | null;
            thumbnailUrl?: string | null;
            videoUrl?: string | null;
        }
        export class AIRichResponseReelItem implements IAIRichResponseReelItem {
            constructor(properties?: IAIRichResponseReelItem);
            public static create(properties?: IAIRichResponseReelItem): AIRichResponseReelItem;
            public static encode(message: IAIRichResponseReelItem, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): AIRichResponseReelItem;
            public static fromObject(object: { [k: string]: any }): AIRichResponseReelItem;
            public static toObject(message: AIRichResponseReelItem, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export enum ContentType {
            DEFAULT = 0,
            CAROUSEL = 1,
        }
        export type IContentType = ContentType;
    }
    export interface IAIRichResponseDynamicMetadata {
        type?: proto.IAIRichResponseDynamicMetadataType | null;
        version?: number | Long | null;
        url?: string | null;
        loopCount?: number | null;
    }
    export class AIRichResponseDynamicMetadata implements IAIRichResponseDynamicMetadata {
        constructor(properties?: IAIRichResponseDynamicMetadata);
        public static create(properties?: IAIRichResponseDynamicMetadata): AIRichResponseDynamicMetadata;
        public static encode(message: IAIRichResponseDynamicMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): AIRichResponseDynamicMetadata;
        public static fromObject(object: { [k: string]: any }): AIRichResponseDynamicMetadata;
        public static toObject(message: AIRichResponseDynamicMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace AIRichResponseDynamicMetadata {
        export enum AIRichResponseDynamicMetadataType {
            AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_UNKNOWN = 0,
            AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_IMAGE = 1,
            AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_GIF = 2,
        }
        export type IAIRichResponseDynamicMetadataType = AIRichResponseDynamicMetadataType;
    }
    export interface IAIRichResponseGridImageMetadata {
        gridImageUrl?: proto.IAIRichResponseImageURL | null;
        imageUrls?: (proto.IAIRichResponseImageURL)[] | null;
    }
    export class AIRichResponseGridImageMetadata implements IAIRichResponseGridImageMetadata {
        constructor(properties?: IAIRichResponseGridImageMetadata);
        public static create(properties?: IAIRichResponseGridImageMetadata): AIRichResponseGridImageMetadata;
        public static encode(message: IAIRichResponseGridImageMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): AIRichResponseGridImageMetadata;
        public static fromObject(object: { [k: string]: any }): AIRichResponseGridImageMetadata;
        public static toObject(message: AIRichResponseGridImageMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IAIRichResponseImageURL {
        imagePreviewUrl?: string | null;
        imageHighResUrl?: string | null;
        sourceUrl?: string | null;
    }
    export class AIRichResponseImageURL implements IAIRichResponseImageURL {
        constructor(properties?: IAIRichResponseImageURL);
        public static create(properties?: IAIRichResponseImageURL): AIRichResponseImageURL;
        public static encode(message: IAIRichResponseImageURL, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): AIRichResponseImageURL;
        public static fromObject(object: { [k: string]: any }): AIRichResponseImageURL;
        public static toObject(message: AIRichResponseImageURL, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IAIRichResponseInlineImageMetadata {
        imageUrl?: proto.IAIRichResponseImageURL | null;
        imageText?: string | null;
        alignment?: proto.IAIRichResponseImageAlignment | null;
        tapLinkUrl?: string | null;
    }
    export class AIRichResponseInlineImageMetadata implements IAIRichResponseInlineImageMetadata {
        constructor(properties?: IAIRichResponseInlineImageMetadata);
        public static create(properties?: IAIRichResponseInlineImageMetadata): AIRichResponseInlineImageMetadata;
        public static encode(message: IAIRichResponseInlineImageMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): AIRichResponseInlineImageMetadata;
        public static fromObject(object: { [k: string]: any }): AIRichResponseInlineImageMetadata;
        public static toObject(message: AIRichResponseInlineImageMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace AIRichResponseInlineImageMetadata {
        export enum AIRichResponseImageAlignment {
            AI_RICH_RESPONSE_IMAGE_LAYOUT_LEADING_ALIGNED = 0,
            AI_RICH_RESPONSE_IMAGE_LAYOUT_TRAILING_ALIGNED = 1,
            AI_RICH_RESPONSE_IMAGE_LAYOUT_CENTER_ALIGNED = 2,
        }
        export type IAIRichResponseImageAlignment = AIRichResponseImageAlignment;
    }
    export interface IAIRichResponseLatexMetadata {
        text?: string | null;
        expressions?: (proto.IAIRichResponseLatexExpression)[] | null;
    }
    export class AIRichResponseLatexMetadata implements IAIRichResponseLatexMetadata {
        constructor(properties?: IAIRichResponseLatexMetadata);
        public static create(properties?: IAIRichResponseLatexMetadata): AIRichResponseLatexMetadata;
        public static encode(message: IAIRichResponseLatexMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): AIRichResponseLatexMetadata;
        public static fromObject(object: { [k: string]: any }): AIRichResponseLatexMetadata;
        public static toObject(message: AIRichResponseLatexMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace AIRichResponseLatexMetadata {
        export interface IAIRichResponseLatexExpression {
            latexExpression?: string | null;
            url?: string | null;
            width?: number | null;
            height?: number | null;
            fontHeight?: number | null;
            imageTopPadding?: number | null;
            imageLeadingPadding?: number | null;
            imageBottomPadding?: number | null;
            imageTrailingPadding?: number | null;
        }
        export class AIRichResponseLatexExpression implements IAIRichResponseLatexExpression {
            constructor(properties?: IAIRichResponseLatexExpression);
            public static create(properties?: IAIRichResponseLatexExpression): AIRichResponseLatexExpression;
            public static encode(message: IAIRichResponseLatexExpression, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): AIRichResponseLatexExpression;
            public static fromObject(object: { [k: string]: any }): AIRichResponseLatexExpression;
            public static toObject(message: AIRichResponseLatexExpression, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
    }
    export interface IAIRichResponseMapMetadata {
        centerLatitude?: number | null;
        centerLongitude?: number | null;
        latitudeDelta?: number | null;
        longitudeDelta?: number | null;
        annotations?: (proto.IAIRichResponseMapAnnotation)[] | null;
        showInfoList?: boolean | null;
    }
    export class AIRichResponseMapMetadata implements IAIRichResponseMapMetadata {
        constructor(properties?: IAIRichResponseMapMetadata);
        public static create(properties?: IAIRichResponseMapMetadata): AIRichResponseMapMetadata;
        public static encode(message: IAIRichResponseMapMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): AIRichResponseMapMetadata;
        public static fromObject(object: { [k: string]: any }): AIRichResponseMapMetadata;
        public static toObject(message: AIRichResponseMapMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace AIRichResponseMapMetadata {
        export interface IAIRichResponseMapAnnotation {
            annotationNumber?: number | null;
            latitude?: number | null;
            longitude?: number | null;
            title?: string | null;
            body?: string | null;
        }
        export class AIRichResponseMapAnnotation implements IAIRichResponseMapAnnotation {
            constructor(properties?: IAIRichResponseMapAnnotation);
            public static create(properties?: IAIRichResponseMapAnnotation): AIRichResponseMapAnnotation;
            public static encode(message: IAIRichResponseMapAnnotation, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): AIRichResponseMapAnnotation;
            public static fromObject(object: { [k: string]: any }): AIRichResponseMapAnnotation;
            public static toObject(message: AIRichResponseMapAnnotation, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
    }
    export interface IAIRichResponseMessage {
        messageType?: proto.IAIRichResponseMessageType | null;
        submessages?: (proto.IAIRichResponseSubMessage)[] | null;
        unifiedResponse?: proto.IAIRichResponseUnifiedResponse | null;
        contextInfo?: proto.IContextInfo | null;
    }
    export class AIRichResponseMessage implements IAIRichResponseMessage {
        constructor(properties?: IAIRichResponseMessage);
        public static create(properties?: IAIRichResponseMessage): AIRichResponseMessage;
        public static encode(message: IAIRichResponseMessage, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): AIRichResponseMessage;
        public static fromObject(object: { [k: string]: any }): AIRichResponseMessage;
        public static toObject(message: AIRichResponseMessage, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export enum AIRichResponseMessageType {
        AI_RICH_RESPONSE_TYPE_UNKNOWN = 0,
        AI_RICH_RESPONSE_TYPE_STANDARD = 1,
    }
    export type IAIRichResponseMessageType = AIRichResponseMessageType;
    export interface IAIRichResponseSubMessage {
        messageType?: proto.IAIRichResponseSubMessageType | null;
        gridImageMetadata?: proto.IAIRichResponseGridImageMetadata | null;
        messageText?: string | null;
        imageMetadata?: proto.IAIRichResponseInlineImageMetadata | null;
        codeMetadata?: proto.IAIRichResponseCodeMetadata | null;
        tableMetadata?: proto.IAIRichResponseTableMetadata | null;
        dynamicMetadata?: proto.IAIRichResponseDynamicMetadata | null;
        latexMetadata?: proto.IAIRichResponseLatexMetadata | null;
        mapMetadata?: proto.IAIRichResponseMapMetadata | null;
        contentItemsMetadata?: proto.IAIRichResponseContentItemsMetadata | null;
    }
    export class AIRichResponseSubMessage implements IAIRichResponseSubMessage {
        constructor(properties?: IAIRichResponseSubMessage);
        public static create(properties?: IAIRichResponseSubMessage): AIRichResponseSubMessage;
        public static encode(message: IAIRichResponseSubMessage, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): AIRichResponseSubMessage;
        public static fromObject(object: { [k: string]: any }): AIRichResponseSubMessage;
        public static toObject(message: AIRichResponseSubMessage, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export enum AIRichResponseSubMessageType {
        AI_RICH_RESPONSE_UNKNOWN = 0,
        AI_RICH_RESPONSE_GRID_IMAGE = 1,
        AI_RICH_RESPONSE_TEXT = 2,
        AI_RICH_RESPONSE_INLINE_IMAGE = 3,
        AI_RICH_RESPONSE_TABLE = 4,
        AI_RICH_RESPONSE_CODE = 5,
        AI_RICH_RESPONSE_DYNAMIC = 6,
        AI_RICH_RESPONSE_MAP = 7,
        AI_RICH_RESPONSE_LATEX = 8,
        AI_RICH_RESPONSE_CONTENT_ITEMS = 9,
    }
    export type IAIRichResponseSubMessageType = AIRichResponseSubMessageType;
    export interface IAIRichResponseTableMetadata {
        rows?: (proto.IAIRichResponseTableRow)[] | null;
        title?: string | null;
    }
    export class AIRichResponseTableMetadata implements IAIRichResponseTableMetadata {
        constructor(properties?: IAIRichResponseTableMetadata);
        public static create(properties?: IAIRichResponseTableMetadata): AIRichResponseTableMetadata;
        public static encode(message: IAIRichResponseTableMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): AIRichResponseTableMetadata;
        public static fromObject(object: { [k: string]: any }): AIRichResponseTableMetadata;
        public static toObject(message: AIRichResponseTableMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace AIRichResponseTableMetadata {
        export interface IAIRichResponseTableRow {
            items?: (string)[] | null;
            isHeading?: boolean | null;
        }
        export class AIRichResponseTableRow implements IAIRichResponseTableRow {
            constructor(properties?: IAIRichResponseTableRow);
            public static create(properties?: IAIRichResponseTableRow): AIRichResponseTableRow;
            public static encode(message: IAIRichResponseTableRow, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): AIRichResponseTableRow;
            public static fromObject(object: { [k: string]: any }): AIRichResponseTableRow;
            public static toObject(message: AIRichResponseTableRow, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
    }
    export interface IAIRichResponseUnifiedResponse {
        data?: Uint8Array | null;
    }
    export class AIRichResponseUnifiedResponse implements IAIRichResponseUnifiedResponse {
        constructor(properties?: IAIRichResponseUnifiedResponse);
        public static create(properties?: IAIRichResponseUnifiedResponse): AIRichResponseUnifiedResponse;
        public static encode(message: IAIRichResponseUnifiedResponse, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): AIRichResponseUnifiedResponse;
        public static fromObject(object: { [k: string]: any }): AIRichResponseUnifiedResponse;
        public static toObject(message: AIRichResponseUnifiedResponse, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IAIThreadInfo {
        serverInfo?: proto.IAIThreadServerInfo | null;
        clientInfo?: proto.IAIThreadClientInfo | null;
    }
    export class AIThreadInfo implements IAIThreadInfo {
        constructor(properties?: IAIThreadInfo);
        public static create(properties?: IAIThreadInfo): AIThreadInfo;
        public static encode(message: IAIThreadInfo, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): AIThreadInfo;
        public static fromObject(object: { [k: string]: any }): AIThreadInfo;
        public static toObject(message: AIThreadInfo, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace AIThreadInfo {
        export interface IAIThreadClientInfo {
            type?: proto.IAIThreadType | null;
        }
        export class AIThreadClientInfo implements IAIThreadClientInfo {
            constructor(properties?: IAIThreadClientInfo);
            public static create(properties?: IAIThreadClientInfo): AIThreadClientInfo;
            public static encode(message: IAIThreadClientInfo, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): AIThreadClientInfo;
            public static fromObject(object: { [k: string]: any }): AIThreadClientInfo;
            public static toObject(message: AIThreadClientInfo, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace AIThreadClientInfo {
            export enum AIThreadType {
                UNKNOWN = 0,
                DEFAULT = 1,
                INCOGNITO = 2,
            }
            export type IAIThreadType = AIThreadType;
        }
        export interface IAIThreadServerInfo {
            title?: string | null;
        }
        export class AIThreadServerInfo implements IAIThreadServerInfo {
            constructor(properties?: IAIThreadServerInfo);
            public static create(properties?: IAIThreadServerInfo): AIThreadServerInfo;
            public static encode(message: IAIThreadServerInfo, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): AIThreadServerInfo;
            public static fromObject(object: { [k: string]: any }): AIThreadServerInfo;
            public static toObject(message: AIThreadServerInfo, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
    }
    export interface IAccount {
        lid?: string | null;
        username?: string | null;
        countryCode?: string | null;
        isUsernameDeleted?: boolean | null;
    }
    export class Account implements IAccount {
        constructor(properties?: IAccount);
        public static create(properties?: IAccount): Account;
        public static encode(message: IAccount, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): Account;
        public static fromObject(object: { [k: string]: any }): Account;
        public static toObject(message: Account, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IActionLink {
        url?: string | null;
        buttonTitle?: string | null;
    }
    export class ActionLink implements IActionLink {
        constructor(properties?: IActionLink);
        public static create(properties?: IActionLink): ActionLink;
        public static encode(message: IActionLink, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): ActionLink;
        public static fromObject(object: { [k: string]: any }): ActionLink;
        public static toObject(message: ActionLink, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IAutoDownloadSettings {
        downloadImages?: boolean | null;
        downloadAudio?: boolean | null;
        downloadVideo?: boolean | null;
        downloadDocuments?: boolean | null;
    }
    export class AutoDownloadSettings implements IAutoDownloadSettings {
        constructor(properties?: IAutoDownloadSettings);
        public static create(properties?: IAutoDownloadSettings): AutoDownloadSettings;
        public static encode(message: IAutoDownloadSettings, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): AutoDownloadSettings;
        public static fromObject(object: { [k: string]: any }): AutoDownloadSettings;
        public static toObject(message: AutoDownloadSettings, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IAvatarUserSettings {
        fbid?: string | null;
        password?: string | null;
    }
    export class AvatarUserSettings implements IAvatarUserSettings {
        constructor(properties?: IAvatarUserSettings);
        public static create(properties?: IAvatarUserSettings): AvatarUserSettings;
        public static encode(message: IAvatarUserSettings, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): AvatarUserSettings;
        public static fromObject(object: { [k: string]: any }): AvatarUserSettings;
        public static toObject(message: AvatarUserSettings, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IBizAccountLinkInfo {
        whatsappBizAcctFbid?: number | Long | null;
        whatsappAcctNumber?: string | null;
        issueTime?: number | Long | null;
        hostStorage?: proto.IHostStorageType | null;
        accountType?: proto.IAccountType | null;
    }
    export class BizAccountLinkInfo implements IBizAccountLinkInfo {
        constructor(properties?: IBizAccountLinkInfo);
        public static create(properties?: IBizAccountLinkInfo): BizAccountLinkInfo;
        public static encode(message: IBizAccountLinkInfo, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BizAccountLinkInfo;
        public static fromObject(object: { [k: string]: any }): BizAccountLinkInfo;
        public static toObject(message: BizAccountLinkInfo, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace BizAccountLinkInfo {
        export enum AccountType {
            ENTERPRISE = 0,
        }
        export type IAccountType = AccountType;
        export enum HostStorageType {
            ON_PREMISE = 0,
            FACEBOOK = 1,
        }
        export type IHostStorageType = HostStorageType;
    }
    export interface IBizAccountPayload {
        vnameCert?: proto.IVerifiedNameCertificate | null;
        bizAcctLinkInfo?: Uint8Array | null;
    }
    export class BizAccountPayload implements IBizAccountPayload {
        constructor(properties?: IBizAccountPayload);
        public static create(properties?: IBizAccountPayload): BizAccountPayload;
        public static encode(message: IBizAccountPayload, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BizAccountPayload;
        public static fromObject(object: { [k: string]: any }): BizAccountPayload;
        public static toObject(message: BizAccountPayload, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IBizIdentityInfo {
        vlevel?: proto.IVerifiedLevelValue | null;
        vnameCert?: proto.IVerifiedNameCertificate | null;
        signed?: boolean | null;
        revoked?: boolean | null;
        hostStorage?: proto.IHostStorageType | null;
        actualActors?: proto.IActualActorsType | null;
        privacyModeTs?: number | Long | null;
        featureControls?: number | Long | null;
    }
    export class BizIdentityInfo implements IBizIdentityInfo {
        constructor(properties?: IBizIdentityInfo);
        public static create(properties?: IBizIdentityInfo): BizIdentityInfo;
        public static encode(message: IBizIdentityInfo, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BizIdentityInfo;
        public static fromObject(object: { [k: string]: any }): BizIdentityInfo;
        public static toObject(message: BizIdentityInfo, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace BizIdentityInfo {
        export enum ActualActorsType {
            SELF = 0,
            BSP = 1,
        }
        export type IActualActorsType = ActualActorsType;
        export enum HostStorageType {
            ON_PREMISE = 0,
            FACEBOOK = 1,
        }
        export type IHostStorageType = HostStorageType;
        export enum VerifiedLevelValue {
            UNKNOWN = 0,
            LOW = 1,
            HIGH = 2,
        }
        export type IVerifiedLevelValue = VerifiedLevelValue;
    }
    export interface IBotAgeCollectionMetadata {
        ageCollectionEligible?: boolean | null;
        shouldTriggerAgeCollectionOnClient?: boolean | null;
        ageCollectionType?: proto.IAgeCollectionType | null;
    }
    export class BotAgeCollectionMetadata implements IBotAgeCollectionMetadata {
        constructor(properties?: IBotAgeCollectionMetadata);
        public static create(properties?: IBotAgeCollectionMetadata): BotAgeCollectionMetadata;
        public static encode(message: IBotAgeCollectionMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotAgeCollectionMetadata;
        public static fromObject(object: { [k: string]: any }): BotAgeCollectionMetadata;
        public static toObject(message: BotAgeCollectionMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace BotAgeCollectionMetadata {
        export enum AgeCollectionType {
            O18_BINARY = 0,
            WAFFLE = 1,
        }
        export type IAgeCollectionType = AgeCollectionType;
    }
    export interface IBotAvatarMetadata {
        sentiment?: number | null;
        behaviorGraph?: string | null;
        action?: number | null;
        intensity?: number | null;
        wordCount?: number | null;
    }
    export class BotAvatarMetadata implements IBotAvatarMetadata {
        constructor(properties?: IBotAvatarMetadata);
        public static create(properties?: IBotAvatarMetadata): BotAvatarMetadata;
        public static encode(message: IBotAvatarMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotAvatarMetadata;
        public static fromObject(object: { [k: string]: any }): BotAvatarMetadata;
        public static toObject(message: BotAvatarMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IBotCapabilityMetadata {
        capabilities?: (proto.IBotCapabilityType)[] | null;
    }
    export class BotCapabilityMetadata implements IBotCapabilityMetadata {
        constructor(properties?: IBotCapabilityMetadata);
        public static create(properties?: IBotCapabilityMetadata): BotCapabilityMetadata;
        public static encode(message: IBotCapabilityMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotCapabilityMetadata;
        public static fromObject(object: { [k: string]: any }): BotCapabilityMetadata;
        public static toObject(message: BotCapabilityMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace BotCapabilityMetadata {
        export enum BotCapabilityType {
            UNKNOWN = 0,
            PROGRESS_INDICATOR = 1,
            RICH_RESPONSE_HEADING = 2,
            RICH_RESPONSE_NESTED_LIST = 3,
            AI_MEMORY = 4,
            RICH_RESPONSE_THREAD_SURFING = 5,
            RICH_RESPONSE_TABLE = 6,
            RICH_RESPONSE_CODE = 7,
            RICH_RESPONSE_STRUCTURED_RESPONSE = 8,
            RICH_RESPONSE_INLINE_IMAGE = 9,
            WA_IG_1P_PLUGIN_RANKING_CONTROL = 10,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_1 = 11,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_2 = 12,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_3 = 13,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_4 = 14,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_5 = 15,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_6 = 16,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_7 = 17,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_8 = 18,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_9 = 19,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_10 = 20,
            RICH_RESPONSE_SUB_HEADING = 21,
            RICH_RESPONSE_GRID_IMAGE = 22,
            AI_STUDIO_UGC_MEMORY = 23,
            RICH_RESPONSE_LATEX = 24,
            RICH_RESPONSE_MAPS = 25,
            RICH_RESPONSE_INLINE_REELS = 26,
            AGENTIC_PLANNING = 27,
            ACCOUNT_LINKING = 28,
            STREAMING_DISAGGREGATION = 29,
            RICH_RESPONSE_GRID_IMAGE_3P = 30,
            RICH_RESPONSE_LATEX_INLINE = 31,
            QUERY_PLAN = 32,
            PROACTIVE_MESSAGE = 33,
            RICH_RESPONSE_UNIFIED_RESPONSE = 34,
            PROMOTION_MESSAGE = 35,
            SIMPLIFIED_PROFILE_PAGE = 36,
            RICH_RESPONSE_SOURCES_IN_MESSAGE = 37,
            RICH_RESPONSE_SIDE_BY_SIDE_SURVEY = 38,
            RICH_RESPONSE_UNIFIED_TEXT_COMPONENT = 39,
            AI_SHARED_MEMORY = 40,
            RICH_RESPONSE_UNIFIED_SOURCES = 41,
            RICH_RESPONSE_UNIFIED_DOMAIN_CITATIONS = 42,
            RICH_RESPONSE_UR_INLINE_REELS_ENABLED = 43,
            RICH_RESPONSE_UR_MEDIA_GRID_ENABLED = 44,
            RICH_RESPONSE_UR_TIMESTAMP_PLACEHOLDER = 45,
            RICH_RESPONSE_IN_APP_SURVEY = 46,
            AI_RESPONSE_MODEL_BRANDING = 47,
            SESSION_TRANSPARENCY_SYSTEM_MESSAGE = 48,
            RICH_RESPONSE_UR_REASONING = 49,
        }
        export type IBotCapabilityType = BotCapabilityType;
    }
    export interface IBotFeedbackMessage {
        messageKey?: proto.IMessageKey | null;
        kind?: proto.IBotFeedbackKind | null;
        text?: string | null;
        kindNegative?: number | Long | null;
        kindPositive?: number | Long | null;
        kindReport?: proto.IReportKind | null;
        sideBySideSurveyMetadata?: proto.ISideBySideSurveyMetadata | null;
    }
    export class BotFeedbackMessage implements IBotFeedbackMessage {
        constructor(properties?: IBotFeedbackMessage);
        public static create(properties?: IBotFeedbackMessage): BotFeedbackMessage;
        public static encode(message: IBotFeedbackMessage, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotFeedbackMessage;
        public static fromObject(object: { [k: string]: any }): BotFeedbackMessage;
        public static toObject(message: BotFeedbackMessage, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace BotFeedbackMessage {
        export enum BotFeedbackKind {
            BOT_FEEDBACK_POSITIVE = 0,
            BOT_FEEDBACK_NEGATIVE_GENERIC = 1,
            BOT_FEEDBACK_NEGATIVE_HELPFUL = 2,
            BOT_FEEDBACK_NEGATIVE_INTERESTING = 3,
            BOT_FEEDBACK_NEGATIVE_ACCURATE = 4,
            BOT_FEEDBACK_NEGATIVE_SAFE = 5,
            BOT_FEEDBACK_NEGATIVE_OTHER = 6,
            BOT_FEEDBACK_NEGATIVE_REFUSED = 7,
            BOT_FEEDBACK_NEGATIVE_NOT_VISUALLY_APPEALING = 8,
            BOT_FEEDBACK_NEGATIVE_NOT_RELEVANT_TO_TEXT = 9,
            BOT_FEEDBACK_NEGATIVE_PERSONALIZED = 10,
            BOT_FEEDBACK_NEGATIVE_CLARITY = 11,
            BOT_FEEDBACK_NEGATIVE_DOESNT_LOOK_LIKE_THE_PERSON = 12,
            BOT_FEEDBACK_NEGATIVE_HALLUCINATION_INTERNAL_ONLY = 13,
            BOT_FEEDBACK_NEGATIVE = 14,
        }
        export type IBotFeedbackKind = BotFeedbackKind;
        export enum BotFeedbackKindMultipleNegative {
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_GENERIC = 1,
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_HELPFUL = 2,
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_INTERESTING = 4,
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_ACCURATE = 8,
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_SAFE = 16,
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_OTHER = 32,
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_REFUSED = 64,
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_VISUALLY_APPEALING = 128,
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_RELEVANT_TO_TEXT = 256,
        }
        export type IBotFeedbackKindMultipleNegative = BotFeedbackKindMultipleNegative;
        export enum BotFeedbackKindMultiplePositive {
            BOT_FEEDBACK_MULTIPLE_POSITIVE_GENERIC = 1,
        }
        export type IBotFeedbackKindMultiplePositive = BotFeedbackKindMultiplePositive;
        export enum ReportKind {
            NONE = 0,
            GENERIC = 1,
        }
        export type IReportKind = ReportKind;
        export interface ISideBySideSurveyMetadata {
            selectedRequestId?: string | null;
            surveyId?: number | null;
            simonSessionFbid?: string | null;
            responseOtid?: string | null;
            responseTimestampMsString?: string | null;
            isSelectedResponsePrimary?: boolean | null;
            messageIdToEdit?: string | null;
            analyticsData?: proto.ISideBySideSurveyAnalyticsData | null;
            metaAiAnalyticsData?: proto.ISidebySideSurveyMetaAiAnalyticsData | null;
        }
        export class SideBySideSurveyMetadata implements ISideBySideSurveyMetadata {
            constructor(properties?: ISideBySideSurveyMetadata);
            public static create(properties?: ISideBySideSurveyMetadata): SideBySideSurveyMetadata;
            public static encode(message: ISideBySideSurveyMetadata, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): SideBySideSurveyMetadata;
            public static fromObject(object: { [k: string]: any }): SideBySideSurveyMetadata;
            public static toObject(message: SideBySideSurveyMetadata, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace SideBySideSurveyMetadata {
            export interface ISideBySideSurveyAnalyticsData {
                tessaEvent?: string | null;
                tessaSessionFbid?: string | null;
                simonSessionFbid?: string | null;
            }
            export class SideBySideSurveyAnalyticsData implements ISideBySideSurveyAnalyticsData {
                constructor(properties?: ISideBySideSurveyAnalyticsData);
                public static create(properties?: ISideBySideSurveyAnalyticsData): SideBySideSurveyAnalyticsData;
                public static encode(message: ISideBySideSurveyAnalyticsData, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): SideBySideSurveyAnalyticsData;
                public static fromObject(object: { [k: string]: any }): SideBySideSurveyAnalyticsData;
                public static toObject(message: SideBySideSurveyAnalyticsData, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export interface ISidebySideSurveyMetaAiAnalyticsData {
                surveyId?: number | null;
                primaryResponseId?: string | null;
                testArmName?: string | null;
                timestampMsString?: string | null;
                ctaImpressionEvent?: proto.ISideBySideSurveyCTAImpressionEventData | null;
                ctaClickEvent?: proto.ISideBySideSurveyCTAClickEventData | null;
                cardImpressionEvent?: proto.ISideBySideSurveyCardImpressionEventData | null;
                responseEvent?: proto.ISideBySideSurveyResponseEventData | null;
                abandonEvent?: proto.ISideBySideSurveyAbandonEventData | null;
            }
            export class SidebySideSurveyMetaAiAnalyticsData implements ISidebySideSurveyMetaAiAnalyticsData {
                constructor(properties?: ISidebySideSurveyMetaAiAnalyticsData);
                public static create(properties?: ISidebySideSurveyMetaAiAnalyticsData): SidebySideSurveyMetaAiAnalyticsData;
                public static encode(message: ISidebySideSurveyMetaAiAnalyticsData, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): SidebySideSurveyMetaAiAnalyticsData;
                public static fromObject(object: { [k: string]: any }): SidebySideSurveyMetaAiAnalyticsData;
                public static toObject(message: SidebySideSurveyMetaAiAnalyticsData, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export namespace SidebySideSurveyMetaAiAnalyticsData {
                export interface ISideBySideSurveyAbandonEventData {
                    abandonDwellTimeMsString?: string | null;
                }
                export class SideBySideSurveyAbandonEventData implements ISideBySideSurveyAbandonEventData {
                    constructor(properties?: ISideBySideSurveyAbandonEventData);
                    public static create(properties?: ISideBySideSurveyAbandonEventData): SideBySideSurveyAbandonEventData;
                    public static encode(message: ISideBySideSurveyAbandonEventData, writer?: any): any;
                    public static decode(reader: Uint8Array | any, length?: number): SideBySideSurveyAbandonEventData;
                    public static fromObject(object: { [k: string]: any }): SideBySideSurveyAbandonEventData;
                    public static toObject(message: SideBySideSurveyAbandonEventData, options?: any): { [k: string]: any };
                    public static verify(message: { [k: string]: any }): string | null;
                }
                export interface ISideBySideSurveyCTAClickEventData {
                    isSurveyExpired?: boolean | null;
                    clickDwellTimeMsString?: string | null;
                }
                export class SideBySideSurveyCTAClickEventData implements ISideBySideSurveyCTAClickEventData {
                    constructor(properties?: ISideBySideSurveyCTAClickEventData);
                    public static create(properties?: ISideBySideSurveyCTAClickEventData): SideBySideSurveyCTAClickEventData;
                    public static encode(message: ISideBySideSurveyCTAClickEventData, writer?: any): any;
                    public static decode(reader: Uint8Array | any, length?: number): SideBySideSurveyCTAClickEventData;
                    public static fromObject(object: { [k: string]: any }): SideBySideSurveyCTAClickEventData;
                    public static toObject(message: SideBySideSurveyCTAClickEventData, options?: any): { [k: string]: any };
                    public static verify(message: { [k: string]: any }): string | null;
                }
                export interface ISideBySideSurveyCTAImpressionEventData {
                    isSurveyExpired?: boolean | null;
                }
                export class SideBySideSurveyCTAImpressionEventData implements ISideBySideSurveyCTAImpressionEventData {
                    constructor(properties?: ISideBySideSurveyCTAImpressionEventData);
                    public static create(properties?: ISideBySideSurveyCTAImpressionEventData): SideBySideSurveyCTAImpressionEventData;
                    public static encode(message: ISideBySideSurveyCTAImpressionEventData, writer?: any): any;
                    public static decode(reader: Uint8Array | any, length?: number): SideBySideSurveyCTAImpressionEventData;
                    public static fromObject(object: { [k: string]: any }): SideBySideSurveyCTAImpressionEventData;
                    public static toObject(message: SideBySideSurveyCTAImpressionEventData, options?: any): { [k: string]: any };
                    public static verify(message: { [k: string]: any }): string | null;
                }
                export interface ISideBySideSurveyCardImpressionEventData {
                }
                export class SideBySideSurveyCardImpressionEventData implements ISideBySideSurveyCardImpressionEventData {
                    constructor(properties?: ISideBySideSurveyCardImpressionEventData);
                    public static create(properties?: ISideBySideSurveyCardImpressionEventData): SideBySideSurveyCardImpressionEventData;
                    public static encode(message: ISideBySideSurveyCardImpressionEventData, writer?: any): any;
                    public static decode(reader: Uint8Array | any, length?: number): SideBySideSurveyCardImpressionEventData;
                    public static fromObject(object: { [k: string]: any }): SideBySideSurveyCardImpressionEventData;
                    public static toObject(message: SideBySideSurveyCardImpressionEventData, options?: any): { [k: string]: any };
                    public static verify(message: { [k: string]: any }): string | null;
                }
                export interface ISideBySideSurveyResponseEventData {
                    responseDwellTimeMsString?: string | null;
                    selectedResponseId?: string | null;
                }
                export class SideBySideSurveyResponseEventData implements ISideBySideSurveyResponseEventData {
                    constructor(properties?: ISideBySideSurveyResponseEventData);
                    public static create(properties?: ISideBySideSurveyResponseEventData): SideBySideSurveyResponseEventData;
                    public static encode(message: ISideBySideSurveyResponseEventData, writer?: any): any;
                    public static decode(reader: Uint8Array | any, length?: number): SideBySideSurveyResponseEventData;
                    public static fromObject(object: { [k: string]: any }): SideBySideSurveyResponseEventData;
                    public static toObject(message: SideBySideSurveyResponseEventData, options?: any): { [k: string]: any };
                    public static verify(message: { [k: string]: any }): string | null;
                }
            }
        }
    }
    export interface IBotImagineMetadata {
        imagineType?: proto.IImagineType | null;
    }
    export class BotImagineMetadata implements IBotImagineMetadata {
        constructor(properties?: IBotImagineMetadata);
        public static create(properties?: IBotImagineMetadata): BotImagineMetadata;
        public static encode(message: IBotImagineMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotImagineMetadata;
        public static fromObject(object: { [k: string]: any }): BotImagineMetadata;
        public static toObject(message: BotImagineMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace BotImagineMetadata {
        export enum ImagineType {
            UNKNOWN = 0,
            IMAGINE = 1,
            MEMU = 2,
            FLASH = 3,
            EDIT = 4,
        }
        export type IImagineType = ImagineType;
    }
    export interface IBotLinkedAccount {
        type?: proto.IBotLinkedAccountType | null;
    }
    export class BotLinkedAccount implements IBotLinkedAccount {
        constructor(properties?: IBotLinkedAccount);
        public static create(properties?: IBotLinkedAccount): BotLinkedAccount;
        public static encode(message: IBotLinkedAccount, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotLinkedAccount;
        public static fromObject(object: { [k: string]: any }): BotLinkedAccount;
        public static toObject(message: BotLinkedAccount, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace BotLinkedAccount {
        export enum BotLinkedAccountType {
            BOT_LINKED_ACCOUNT_TYPE_1P = 0,
        }
        export type IBotLinkedAccountType = BotLinkedAccountType;
    }
    export interface IBotLinkedAccountsMetadata {
        accounts?: (proto.IBotLinkedAccount)[] | null;
        acAuthTokens?: Uint8Array | null;
        acErrorCode?: number | null;
    }
    export class BotLinkedAccountsMetadata implements IBotLinkedAccountsMetadata {
        constructor(properties?: IBotLinkedAccountsMetadata);
        public static create(properties?: IBotLinkedAccountsMetadata): BotLinkedAccountsMetadata;
        public static encode(message: IBotLinkedAccountsMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotLinkedAccountsMetadata;
        public static fromObject(object: { [k: string]: any }): BotLinkedAccountsMetadata;
        public static toObject(message: BotLinkedAccountsMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IBotMediaMetadata {
        fileSha256?: string | null;
        mediaKey?: string | null;
        fileEncSha256?: string | null;
        directPath?: string | null;
        mediaKeyTimestamp?: number | Long | null;
        mimetype?: string | null;
        orientationType?: proto.IOrientationType | null;
    }
    export class BotMediaMetadata implements IBotMediaMetadata {
        constructor(properties?: IBotMediaMetadata);
        public static create(properties?: IBotMediaMetadata): BotMediaMetadata;
        public static encode(message: IBotMediaMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotMediaMetadata;
        public static fromObject(object: { [k: string]: any }): BotMediaMetadata;
        public static toObject(message: BotMediaMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace BotMediaMetadata {
        export enum OrientationType {
            CENTER = 1,
            LEFT = 2,
            RIGHT = 3,
        }
        export type IOrientationType = OrientationType;
    }
    export interface IBotMemoryFact {
        fact?: string | null;
        factId?: string | null;
    }
    export class BotMemoryFact implements IBotMemoryFact {
        constructor(properties?: IBotMemoryFact);
        public static create(properties?: IBotMemoryFact): BotMemoryFact;
        public static encode(message: IBotMemoryFact, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotMemoryFact;
        public static fromObject(object: { [k: string]: any }): BotMemoryFact;
        public static toObject(message: BotMemoryFact, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IBotMemoryMetadata {
        addedFacts?: (proto.IBotMemoryFact)[] | null;
        removedFacts?: (proto.IBotMemoryFact)[] | null;
        disclaimer?: string | null;
    }
    export class BotMemoryMetadata implements IBotMemoryMetadata {
        constructor(properties?: IBotMemoryMetadata);
        public static create(properties?: IBotMemoryMetadata): BotMemoryMetadata;
        public static encode(message: IBotMemoryMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotMemoryMetadata;
        public static fromObject(object: { [k: string]: any }): BotMemoryMetadata;
        public static toObject(message: BotMemoryMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IBotMemuMetadata {
        faceImages?: (proto.IBotMediaMetadata)[] | null;
    }
    export class BotMemuMetadata implements IBotMemuMetadata {
        constructor(properties?: IBotMemuMetadata);
        public static create(properties?: IBotMemuMetadata): BotMemuMetadata;
        public static encode(message: IBotMemuMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotMemuMetadata;
        public static fromObject(object: { [k: string]: any }): BotMemuMetadata;
        public static toObject(message: BotMemuMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IBotMessageOrigin {
        type?: proto.IBotMessageOriginType | null;
    }
    export class BotMessageOrigin implements IBotMessageOrigin {
        constructor(properties?: IBotMessageOrigin);
        public static create(properties?: IBotMessageOrigin): BotMessageOrigin;
        public static encode(message: IBotMessageOrigin, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotMessageOrigin;
        public static fromObject(object: { [k: string]: any }): BotMessageOrigin;
        public static toObject(message: BotMessageOrigin, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace BotMessageOrigin {
        export enum BotMessageOriginType {
            BOT_MESSAGE_ORIGIN_TYPE_AI_INITIATED = 0,
        }
        export type IBotMessageOriginType = BotMessageOriginType;
    }
    export interface IBotMessageOriginMetadata {
        origins?: (proto.IBotMessageOrigin)[] | null;
    }
    export class BotMessageOriginMetadata implements IBotMessageOriginMetadata {
        constructor(properties?: IBotMessageOriginMetadata);
        public static create(properties?: IBotMessageOriginMetadata): BotMessageOriginMetadata;
        public static encode(message: IBotMessageOriginMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotMessageOriginMetadata;
        public static fromObject(object: { [k: string]: any }): BotMessageOriginMetadata;
        public static toObject(message: BotMessageOriginMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IBotMessageSharingInfo {
        botEntryPointOrigin?: proto.IBotMetricsEntryPoint | null;
        forwardScore?: number | null;
    }
    export class BotMessageSharingInfo implements IBotMessageSharingInfo {
        constructor(properties?: IBotMessageSharingInfo);
        public static create(properties?: IBotMessageSharingInfo): BotMessageSharingInfo;
        public static encode(message: IBotMessageSharingInfo, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotMessageSharingInfo;
        public static fromObject(object: { [k: string]: any }): BotMessageSharingInfo;
        public static toObject(message: BotMessageSharingInfo, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IBotMetadata {
        avatarMetadata?: proto.IBotAvatarMetadata | null;
        personaId?: string | null;
        pluginMetadata?: proto.IBotPluginMetadata | null;
        suggestedPromptMetadata?: proto.IBotSuggestedPromptMetadata | null;
        invokerJid?: string | null;
        sessionMetadata?: proto.IBotSessionMetadata | null;
        memuMetadata?: proto.IBotMemuMetadata | null;
        timezone?: string | null;
        reminderMetadata?: proto.IBotReminderMetadata | null;
        modelMetadata?: proto.IBotModelMetadata | null;
        messageDisclaimerText?: string | null;
        progressIndicatorMetadata?: proto.IBotProgressIndicatorMetadata | null;
        capabilityMetadata?: proto.IBotCapabilityMetadata | null;
        imagineMetadata?: proto.IBotImagineMetadata | null;
        memoryMetadata?: proto.IBotMemoryMetadata | null;
        renderingMetadata?: proto.IBotRenderingMetadata | null;
        botMetricsMetadata?: proto.IBotMetricsMetadata | null;
        botLinkedAccountsMetadata?: proto.IBotLinkedAccountsMetadata | null;
        richResponseSourcesMetadata?: proto.IBotSourcesMetadata | null;
        aiConversationContext?: Uint8Array | null;
        botPromotionMessageMetadata?: proto.IBotPromotionMessageMetadata | null;
        botModeSelectionMetadata?: proto.IBotModeSelectionMetadata | null;
        botQuotaMetadata?: proto.IBotQuotaMetadata | null;
        botAgeCollectionMetadata?: proto.IBotAgeCollectionMetadata | null;
        conversationStarterPromptId?: string | null;
        botResponseId?: string | null;
        verificationMetadata?: proto.IBotSignatureVerificationMetadata | null;
        unifiedResponseMutation?: proto.IBotUnifiedResponseMutation | null;
        botMessageOriginMetadata?: proto.IBotMessageOriginMetadata | null;
        inThreadSurveyMetadata?: proto.IInThreadSurveyMetadata | null;
        botThreadInfo?: proto.IAIThreadInfo | null;
        regenerateMetadata?: proto.IAIRegenerateMetadata | null;
        sessionTransparencyMetadata?: proto.ISessionTransparencyMetadata | null;
        internalMetadata?: Uint8Array | null;
    }
    export class BotMetadata implements IBotMetadata {
        constructor(properties?: IBotMetadata);
        public static create(properties?: IBotMetadata): BotMetadata;
        public static encode(message: IBotMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotMetadata;
        public static fromObject(object: { [k: string]: any }): BotMetadata;
        public static toObject(message: BotMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export enum BotMetricsEntryPoint {
        UNDEFINED_ENTRY_POINT = 0,
        FAVICON = 1,
        CHATLIST = 2,
        AISEARCH_NULL_STATE_PAPER_PLANE = 3,
        AISEARCH_NULL_STATE_SUGGESTION = 4,
        AISEARCH_TYPE_AHEAD_SUGGESTION = 5,
        AISEARCH_TYPE_AHEAD_PAPER_PLANE = 6,
        AISEARCH_TYPE_AHEAD_RESULT_CHATLIST = 7,
        AISEARCH_TYPE_AHEAD_RESULT_MESSAGES = 8,
        AIVOICE_SEARCH_BAR = 9,
        AIVOICE_FAVICON = 10,
        AISTUDIO = 11,
        DEEPLINK = 12,
        NOTIFICATION = 13,
        PROFILE_MESSAGE_BUTTON = 14,
        FORWARD = 15,
        APP_SHORTCUT = 16,
        FF_FAMILY = 17,
        AI_TAB = 18,
        AI_HOME = 19,
        AI_DEEPLINK_IMMERSIVE = 20,
        AI_DEEPLINK = 21,
        META_AI_CHAT_SHORTCUT_AI_STUDIO = 22,
        UGC_CHAT_SHORTCUT_AI_STUDIO = 23,
        NEW_CHAT_AI_STUDIO = 24,
        AIVOICE_FAVICON_CALL_HISTORY = 25,
        ASK_META_AI_CONTEXT_MENU = 26,
        ASK_META_AI_CONTEXT_MENU_1ON1 = 27,
        ASK_META_AI_CONTEXT_MENU_GROUP = 28,
        INVOKE_META_AI_1ON1 = 29,
        INVOKE_META_AI_GROUP = 30,
        META_AI_FORWARD = 31,
        NEW_CHAT_AI_CONTACT = 32,
        MESSAGE_QUICK_ACTION_1_ON_1_CHAT = 33,
        MESSAGE_QUICK_ACTION_GROUP_CHAT = 34,
        ATTACHMENT_TRAY_1_ON_1_CHAT = 35,
        ATTACHMENT_TRAY_GROUP_CHAT = 36,
        ASK_META_AI_MEDIA_VIEWER_1ON1 = 37,
        ASK_META_AI_MEDIA_VIEWER_GROUP = 38,
    }
    export type IBotMetricsEntryPoint = BotMetricsEntryPoint;
    export interface IBotMetricsMetadata {
        destinationId?: string | null;
        destinationEntryPoint?: proto.IBotMetricsEntryPoint | null;
        threadOrigin?: proto.IBotMetricsThreadEntryPoint | null;
    }
    export class BotMetricsMetadata implements IBotMetricsMetadata {
        constructor(properties?: IBotMetricsMetadata);
        public static create(properties?: IBotMetricsMetadata): BotMetricsMetadata;
        public static encode(message: IBotMetricsMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotMetricsMetadata;
        public static fromObject(object: { [k: string]: any }): BotMetricsMetadata;
        public static toObject(message: BotMetricsMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export enum BotMetricsThreadEntryPoint {
        AI_TAB_THREAD = 1,
        AI_HOME_THREAD = 2,
        AI_DEEPLINK_IMMERSIVE_THREAD = 3,
        AI_DEEPLINK_THREAD = 4,
        ASK_META_AI_CONTEXT_MENU_THREAD = 5,
    }
    export type IBotMetricsThreadEntryPoint = BotMetricsThreadEntryPoint;
    export interface IBotModeSelectionMetadata {
        mode?: (proto.IBotUserSelectionMode)[] | null;
    }
    export class BotModeSelectionMetadata implements IBotModeSelectionMetadata {
        constructor(properties?: IBotModeSelectionMetadata);
        public static create(properties?: IBotModeSelectionMetadata): BotModeSelectionMetadata;
        public static encode(message: IBotModeSelectionMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotModeSelectionMetadata;
        public static fromObject(object: { [k: string]: any }): BotModeSelectionMetadata;
        public static toObject(message: BotModeSelectionMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace BotModeSelectionMetadata {
        export enum BotUserSelectionMode {
            UNKNOWN_MODE = 0,
            REASONING_MODE = 1,
        }
        export type IBotUserSelectionMode = BotUserSelectionMode;
    }
    export interface IBotModelMetadata {
        modelType?: proto.IModelType | null;
        premiumModelStatus?: proto.IPremiumModelStatus | null;
        modelNameOverride?: string | null;
    }
    export class BotModelMetadata implements IBotModelMetadata {
        constructor(properties?: IBotModelMetadata);
        public static create(properties?: IBotModelMetadata): BotModelMetadata;
        public static encode(message: IBotModelMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotModelMetadata;
        public static fromObject(object: { [k: string]: any }): BotModelMetadata;
        public static toObject(message: BotModelMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace BotModelMetadata {
        export enum ModelType {
            UNKNOWN_TYPE = 0,
            LLAMA_PROD = 1,
            LLAMA_PROD_PREMIUM = 2,
        }
        export type IModelType = ModelType;
        export enum PremiumModelStatus {
            UNKNOWN_STATUS = 0,
            AVAILABLE = 1,
            QUOTA_EXCEED_LIMIT = 2,
        }
        export type IPremiumModelStatus = PremiumModelStatus;
    }
    export interface IBotPluginMetadata {
        provider?: proto.ISearchProvider | null;
        pluginType?: proto.IPluginType | null;
        thumbnailCdnUrl?: string | null;
        profilePhotoCdnUrl?: string | null;
        searchProviderUrl?: string | null;
        referenceIndex?: number | null;
        expectedLinksCount?: number | null;
        searchQuery?: string | null;
        parentPluginMessageKey?: proto.IMessageKey | null;
        deprecatedField?: proto.IPluginType | null;
        parentPluginType?: proto.IPluginType | null;
        faviconCdnUrl?: string | null;
    }
    export class BotPluginMetadata implements IBotPluginMetadata {
        constructor(properties?: IBotPluginMetadata);
        public static create(properties?: IBotPluginMetadata): BotPluginMetadata;
        public static encode(message: IBotPluginMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotPluginMetadata;
        public static fromObject(object: { [k: string]: any }): BotPluginMetadata;
        public static toObject(message: BotPluginMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace BotPluginMetadata {
        export enum PluginType {
            UNKNOWN_PLUGIN = 0,
            REELS = 1,
            SEARCH = 2,
        }
        export type IPluginType = PluginType;
        export enum SearchProvider {
            UNKNOWN = 0,
            BING = 1,
            GOOGLE = 2,
            SUPPORT = 3,
        }
        export type ISearchProvider = SearchProvider;
    }
    export interface IBotProgressIndicatorMetadata {
        progressDescription?: string | null;
        stepsMetadata?: (proto.IBotPlanningStepMetadata)[] | null;
    }
    export class BotProgressIndicatorMetadata implements IBotProgressIndicatorMetadata {
        constructor(properties?: IBotProgressIndicatorMetadata);
        public static create(properties?: IBotProgressIndicatorMetadata): BotProgressIndicatorMetadata;
        public static encode(message: IBotProgressIndicatorMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotProgressIndicatorMetadata;
        public static fromObject(object: { [k: string]: any }): BotProgressIndicatorMetadata;
        public static toObject(message: BotProgressIndicatorMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace BotProgressIndicatorMetadata {
        export interface IBotPlanningStepMetadata {
            statusTitle?: string | null;
            statusBody?: string | null;
            sourcesMetadata?: (proto.IBotPlanningSearchSourcesMetadata)[] | null;
            status?: proto.IPlanningStepStatus | null;
            isReasoning?: boolean | null;
            isEnhancedSearch?: boolean | null;
            sections?: (proto.IBotPlanningStepSectionMetadata)[] | null;
        }
        export class BotPlanningStepMetadata implements IBotPlanningStepMetadata {
            constructor(properties?: IBotPlanningStepMetadata);
            public static create(properties?: IBotPlanningStepMetadata): BotPlanningStepMetadata;
            public static encode(message: IBotPlanningStepMetadata, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): BotPlanningStepMetadata;
            public static fromObject(object: { [k: string]: any }): BotPlanningStepMetadata;
            public static toObject(message: BotPlanningStepMetadata, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace BotPlanningStepMetadata {
            export interface IBotPlanningSearchSourceMetadata {
                title?: string | null;
                provider?: proto.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotSearchSourceProvider | null;
                sourceUrl?: string | null;
                favIconUrl?: string | null;
            }
            export class BotPlanningSearchSourceMetadata implements IBotPlanningSearchSourceMetadata {
                constructor(properties?: IBotPlanningSearchSourceMetadata);
                public static create(properties?: IBotPlanningSearchSourceMetadata): BotPlanningSearchSourceMetadata;
                public static encode(message: IBotPlanningSearchSourceMetadata, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): BotPlanningSearchSourceMetadata;
                public static fromObject(object: { [k: string]: any }): BotPlanningSearchSourceMetadata;
                public static toObject(message: BotPlanningSearchSourceMetadata, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export interface IBotPlanningSearchSourcesMetadata {
                sourceTitle?: string | null;
                provider?: proto.IBotPlanningSearchSourceProvider | null;
                sourceUrl?: string | null;
            }
            export class BotPlanningSearchSourcesMetadata implements IBotPlanningSearchSourcesMetadata {
                constructor(properties?: IBotPlanningSearchSourcesMetadata);
                public static create(properties?: IBotPlanningSearchSourcesMetadata): BotPlanningSearchSourcesMetadata;
                public static encode(message: IBotPlanningSearchSourcesMetadata, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): BotPlanningSearchSourcesMetadata;
                public static fromObject(object: { [k: string]: any }): BotPlanningSearchSourcesMetadata;
                public static toObject(message: BotPlanningSearchSourcesMetadata, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export namespace BotPlanningSearchSourcesMetadata {
                export enum BotPlanningSearchSourceProvider {
                    UNKNOWN = 0,
                    OTHER = 1,
                    GOOGLE = 2,
                    BING = 3,
                }
                export type IBotPlanningSearchSourceProvider = BotPlanningSearchSourceProvider;
            }
            export interface IBotPlanningStepSectionMetadata {
                sectionTitle?: string | null;
                sectionBody?: string | null;
                sourcesMetadata?: (proto.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata)[] | null;
            }
            export class BotPlanningStepSectionMetadata implements IBotPlanningStepSectionMetadata {
                constructor(properties?: IBotPlanningStepSectionMetadata);
                public static create(properties?: IBotPlanningStepSectionMetadata): BotPlanningStepSectionMetadata;
                public static encode(message: IBotPlanningStepSectionMetadata, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): BotPlanningStepSectionMetadata;
                public static fromObject(object: { [k: string]: any }): BotPlanningStepSectionMetadata;
                public static toObject(message: BotPlanningStepSectionMetadata, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export enum BotSearchSourceProvider {
                UNKNOWN_PROVIDER = 0,
                OTHER = 1,
                GOOGLE = 2,
                BING = 3,
            }
            export type IBotSearchSourceProvider = BotSearchSourceProvider;
            export enum PlanningStepStatus {
                UNKNOWN = 0,
                PLANNED = 1,
                EXECUTING = 2,
                FINISHED = 3,
            }
            export type IPlanningStepStatus = PlanningStepStatus;
        }
    }
    export interface IBotPromotionMessageMetadata {
        promotionType?: proto.IBotPromotionType | null;
        buttonTitle?: string | null;
    }
    export class BotPromotionMessageMetadata implements IBotPromotionMessageMetadata {
        constructor(properties?: IBotPromotionMessageMetadata);
        public static create(properties?: IBotPromotionMessageMetadata): BotPromotionMessageMetadata;
        public static encode(message: IBotPromotionMessageMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotPromotionMessageMetadata;
        public static fromObject(object: { [k: string]: any }): BotPromotionMessageMetadata;
        public static toObject(message: BotPromotionMessageMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace BotPromotionMessageMetadata {
        export enum BotPromotionType {
            UNKNOWN_TYPE = 0,
            C50 = 1,
            SURVEY_PLATFORM = 2,
        }
        export type IBotPromotionType = BotPromotionType;
    }
    export interface IBotPromptSuggestion {
        prompt?: string | null;
        promptId?: string | null;
    }
    export class BotPromptSuggestion implements IBotPromptSuggestion {
        constructor(properties?: IBotPromptSuggestion);
        public static create(properties?: IBotPromptSuggestion): BotPromptSuggestion;
        public static encode(message: IBotPromptSuggestion, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotPromptSuggestion;
        public static fromObject(object: { [k: string]: any }): BotPromptSuggestion;
        public static toObject(message: BotPromptSuggestion, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IBotPromptSuggestions {
        suggestions?: (proto.IBotPromptSuggestion)[] | null;
    }
    export class BotPromptSuggestions implements IBotPromptSuggestions {
        constructor(properties?: IBotPromptSuggestions);
        public static create(properties?: IBotPromptSuggestions): BotPromptSuggestions;
        public static encode(message: IBotPromptSuggestions, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotPromptSuggestions;
        public static fromObject(object: { [k: string]: any }): BotPromptSuggestions;
        public static toObject(message: BotPromptSuggestions, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IBotQuotaMetadata {
        botFeatureQuotaMetadata?: (proto.IBotFeatureQuotaMetadata)[] | null;
    }
    export class BotQuotaMetadata implements IBotQuotaMetadata {
        constructor(properties?: IBotQuotaMetadata);
        public static create(properties?: IBotQuotaMetadata): BotQuotaMetadata;
        public static encode(message: IBotQuotaMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotQuotaMetadata;
        public static fromObject(object: { [k: string]: any }): BotQuotaMetadata;
        public static toObject(message: BotQuotaMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace BotQuotaMetadata {
        export interface IBotFeatureQuotaMetadata {
            featureType?: proto.IBotFeatureType | null;
            remainingQuota?: number | null;
            expirationTimestamp?: number | Long | null;
        }
        export class BotFeatureQuotaMetadata implements IBotFeatureQuotaMetadata {
            constructor(properties?: IBotFeatureQuotaMetadata);
            public static create(properties?: IBotFeatureQuotaMetadata): BotFeatureQuotaMetadata;
            public static encode(message: IBotFeatureQuotaMetadata, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): BotFeatureQuotaMetadata;
            public static fromObject(object: { [k: string]: any }): BotFeatureQuotaMetadata;
            public static toObject(message: BotFeatureQuotaMetadata, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace BotFeatureQuotaMetadata {
            export enum BotFeatureType {
                UNKNOWN_FEATURE = 0,
                REASONING_FEATURE = 1,
            }
            export type IBotFeatureType = BotFeatureType;
        }
    }
    export interface IBotReminderMetadata {
        requestMessageKey?: proto.IMessageKey | null;
        action?: proto.IReminderAction | null;
        name?: string | null;
        nextTriggerTimestamp?: number | Long | null;
        frequency?: proto.IReminderFrequency | null;
    }
    export class BotReminderMetadata implements IBotReminderMetadata {
        constructor(properties?: IBotReminderMetadata);
        public static create(properties?: IBotReminderMetadata): BotReminderMetadata;
        public static encode(message: IBotReminderMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotReminderMetadata;
        public static fromObject(object: { [k: string]: any }): BotReminderMetadata;
        public static toObject(message: BotReminderMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace BotReminderMetadata {
        export enum ReminderAction {
            NOTIFY = 1,
            CREATE = 2,
            DELETE = 3,
            UPDATE = 4,
        }
        export type IReminderAction = ReminderAction;
        export enum ReminderFrequency {
            ONCE = 1,
            DAILY = 2,
            WEEKLY = 3,
            BIWEEKLY = 4,
            MONTHLY = 5,
        }
        export type IReminderFrequency = ReminderFrequency;
    }
    export interface IBotRenderingMetadata {
        keywords?: (proto.IKeyword)[] | null;
    }
    export class BotRenderingMetadata implements IBotRenderingMetadata {
        constructor(properties?: IBotRenderingMetadata);
        public static create(properties?: IBotRenderingMetadata): BotRenderingMetadata;
        public static encode(message: IBotRenderingMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotRenderingMetadata;
        public static fromObject(object: { [k: string]: any }): BotRenderingMetadata;
        public static toObject(message: BotRenderingMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace BotRenderingMetadata {
        export interface IKeyword {
            value?: string | null;
            associatedPrompts?: (string)[] | null;
        }
        export class Keyword implements IKeyword {
            constructor(properties?: IKeyword);
            public static create(properties?: IKeyword): Keyword;
            public static encode(message: IKeyword, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): Keyword;
            public static fromObject(object: { [k: string]: any }): Keyword;
            public static toObject(message: Keyword, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
    }
    export interface IBotSessionMetadata {
        sessionId?: string | null;
        sessionSource?: proto.IBotSessionSource | null;
    }
    export class BotSessionMetadata implements IBotSessionMetadata {
        constructor(properties?: IBotSessionMetadata);
        public static create(properties?: IBotSessionMetadata): BotSessionMetadata;
        public static encode(message: IBotSessionMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotSessionMetadata;
        public static fromObject(object: { [k: string]: any }): BotSessionMetadata;
        public static toObject(message: BotSessionMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export enum BotSessionSource {
        NONE = 0,
        NULL_STATE = 1,
        TYPEAHEAD = 2,
        USER_INPUT = 3,
        EMU_FLASH = 4,
        EMU_FLASH_FOLLOWUP = 5,
        VOICE = 6,
    }
    export type IBotSessionSource = BotSessionSource;
    export interface IBotSignatureVerificationMetadata {
        proofs?: (proto.IBotSignatureVerificationUseCaseProof)[] | null;
    }
    export class BotSignatureVerificationMetadata implements IBotSignatureVerificationMetadata {
        constructor(properties?: IBotSignatureVerificationMetadata);
        public static create(properties?: IBotSignatureVerificationMetadata): BotSignatureVerificationMetadata;
        public static encode(message: IBotSignatureVerificationMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotSignatureVerificationMetadata;
        public static fromObject(object: { [k: string]: any }): BotSignatureVerificationMetadata;
        public static toObject(message: BotSignatureVerificationMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IBotSignatureVerificationUseCaseProof {
        version?: number | null;
        useCase?: proto.IBotSignatureUseCase | null;
        signature?: Uint8Array | null;
        certificateChain?: (Uint8Array)[] | null;
    }
    export class BotSignatureVerificationUseCaseProof implements IBotSignatureVerificationUseCaseProof {
        constructor(properties?: IBotSignatureVerificationUseCaseProof);
        public static create(properties?: IBotSignatureVerificationUseCaseProof): BotSignatureVerificationUseCaseProof;
        public static encode(message: IBotSignatureVerificationUseCaseProof, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotSignatureVerificationUseCaseProof;
        public static fromObject(object: { [k: string]: any }): BotSignatureVerificationUseCaseProof;
        public static toObject(message: BotSignatureVerificationUseCaseProof, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace BotSignatureVerificationUseCaseProof {
        export enum BotSignatureUseCase {
            UNSPECIFIED = 0,
            WA_BOT_MSG = 1,
        }
        export type IBotSignatureUseCase = BotSignatureUseCase;
    }
    export interface IBotSourcesMetadata {
        sources?: (proto.IBotSourceItem)[] | null;
    }
    export class BotSourcesMetadata implements IBotSourcesMetadata {
        constructor(properties?: IBotSourcesMetadata);
        public static create(properties?: IBotSourcesMetadata): BotSourcesMetadata;
        public static encode(message: IBotSourcesMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotSourcesMetadata;
        public static fromObject(object: { [k: string]: any }): BotSourcesMetadata;
        public static toObject(message: BotSourcesMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace BotSourcesMetadata {
        export interface IBotSourceItem {
            provider?: proto.ISourceProvider | null;
            thumbnailCdnUrl?: string | null;
            sourceProviderUrl?: string | null;
            sourceQuery?: string | null;
            faviconCdnUrl?: string | null;
            citationNumber?: number | null;
            sourceTitle?: string | null;
        }
        export class BotSourceItem implements IBotSourceItem {
            constructor(properties?: IBotSourceItem);
            public static create(properties?: IBotSourceItem): BotSourceItem;
            public static encode(message: IBotSourceItem, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): BotSourceItem;
            public static fromObject(object: { [k: string]: any }): BotSourceItem;
            public static toObject(message: BotSourceItem, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace BotSourceItem {
            export enum SourceProvider {
                UNKNOWN = 0,
                BING = 1,
                GOOGLE = 2,
                SUPPORT = 3,
                OTHER = 4,
            }
            export type ISourceProvider = SourceProvider;
        }
    }
    export interface IBotSuggestedPromptMetadata {
        suggestedPrompts?: (string)[] | null;
        selectedPromptIndex?: number | null;
        promptSuggestions?: proto.IBotPromptSuggestions | null;
        selectedPromptId?: string | null;
    }
    export class BotSuggestedPromptMetadata implements IBotSuggestedPromptMetadata {
        constructor(properties?: IBotSuggestedPromptMetadata);
        public static create(properties?: IBotSuggestedPromptMetadata): BotSuggestedPromptMetadata;
        public static encode(message: IBotSuggestedPromptMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotSuggestedPromptMetadata;
        public static fromObject(object: { [k: string]: any }): BotSuggestedPromptMetadata;
        public static toObject(message: BotSuggestedPromptMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IBotUnifiedResponseMutation {
        sbsMetadata?: proto.ISideBySideMetadata | null;
        mediaDetailsMetadataList?: (proto.IMediaDetailsMetadata)[] | null;
    }
    export class BotUnifiedResponseMutation implements IBotUnifiedResponseMutation {
        constructor(properties?: IBotUnifiedResponseMutation);
        public static create(properties?: IBotUnifiedResponseMutation): BotUnifiedResponseMutation;
        public static encode(message: IBotUnifiedResponseMutation, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): BotUnifiedResponseMutation;
        public static fromObject(object: { [k: string]: any }): BotUnifiedResponseMutation;
        public static toObject(message: BotUnifiedResponseMutation, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace BotUnifiedResponseMutation {
        export interface IMediaDetailsMetadata {
            id?: string | null;
            highResMedia?: proto.IBotMediaMetadata | null;
            previewMedia?: proto.IBotMediaMetadata | null;
        }
        export class MediaDetailsMetadata implements IMediaDetailsMetadata {
            constructor(properties?: IMediaDetailsMetadata);
            public static create(properties?: IMediaDetailsMetadata): MediaDetailsMetadata;
            public static encode(message: IMediaDetailsMetadata, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): MediaDetailsMetadata;
            public static fromObject(object: { [k: string]: any }): MediaDetailsMetadata;
            public static toObject(message: MediaDetailsMetadata, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface ISideBySideMetadata {
            primaryResponseId?: string | null;
            surveyCtaHasRendered?: boolean | null;
        }
        export class SideBySideMetadata implements ISideBySideMetadata {
            constructor(properties?: ISideBySideMetadata);
            public static create(properties?: ISideBySideMetadata): SideBySideMetadata;
            public static encode(message: ISideBySideMetadata, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): SideBySideMetadata;
            public static fromObject(object: { [k: string]: any }): SideBySideMetadata;
            public static toObject(message: SideBySideMetadata, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
    }
    export interface ICallLogRecord {
        callResult?: proto.ICallResult | null;
        isDndMode?: boolean | null;
        silenceReason?: proto.ISilenceReason | null;
        duration?: number | Long | null;
        startTime?: number | Long | null;
        isIncoming?: boolean | null;
        isVideo?: boolean | null;
        isCallLink?: boolean | null;
        callLinkToken?: string | null;
        scheduledCallId?: string | null;
        callId?: string | null;
        callCreatorJid?: string | null;
        groupJid?: string | null;
        participants?: (proto.IParticipantInfo)[] | null;
        callType?: proto.ICallType | null;
    }
    export class CallLogRecord implements ICallLogRecord {
        constructor(properties?: ICallLogRecord);
        public static create(properties?: ICallLogRecord): CallLogRecord;
        public static encode(message: ICallLogRecord, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): CallLogRecord;
        public static fromObject(object: { [k: string]: any }): CallLogRecord;
        public static toObject(message: CallLogRecord, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace CallLogRecord {
        export enum CallResult {
            CONNECTED = 0,
            REJECTED = 1,
            CANCELLED = 2,
            ACCEPTEDELSEWHERE = 3,
            MISSED = 4,
            INVALID = 5,
            UNAVAILABLE = 6,
            UPCOMING = 7,
            FAILED = 8,
            ABANDONED = 9,
            ONGOING = 10,
        }
        export type ICallResult = CallResult;
        export enum CallType {
            REGULAR = 0,
            SCHEDULED_CALL = 1,
            VOICE_CHAT = 2,
        }
        export type ICallType = CallType;
        export interface IParticipantInfo {
            userJid?: string | null;
            callResult?: proto.CallLogRecord.CallResult | null;
        }
        export class ParticipantInfo implements IParticipantInfo {
            constructor(properties?: IParticipantInfo);
            public static create(properties?: IParticipantInfo): ParticipantInfo;
            public static encode(message: IParticipantInfo, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): ParticipantInfo;
            public static fromObject(object: { [k: string]: any }): ParticipantInfo;
            public static toObject(message: ParticipantInfo, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export enum SilenceReason {
            NONE = 0,
            SCHEDULED = 1,
            PRIVACY = 2,
            LIGHTWEIGHT = 3,
        }
        export type ISilenceReason = SilenceReason;
    }
    export interface ICertChain {
        leaf?: proto.INoiseCertificate | null;
        intermediate?: proto.INoiseCertificate | null;
    }
    export class CertChain implements ICertChain {
        constructor(properties?: ICertChain);
        public static create(properties?: ICertChain): CertChain;
        public static encode(message: ICertChain, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): CertChain;
        public static fromObject(object: { [k: string]: any }): CertChain;
        public static toObject(message: CertChain, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace CertChain {
        export interface INoiseCertificate {
            details?: Uint8Array | null;
            signature?: Uint8Array | null;
        }
        export class NoiseCertificate implements INoiseCertificate {
            constructor(properties?: INoiseCertificate);
            public static create(properties?: INoiseCertificate): NoiseCertificate;
            public static encode(message: INoiseCertificate, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): NoiseCertificate;
            public static fromObject(object: { [k: string]: any }): NoiseCertificate;
            public static toObject(message: NoiseCertificate, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace NoiseCertificate {
            export interface IDetails {
                serial?: number | null;
                issuerSerial?: number | null;
                key?: Uint8Array | null;
                notBefore?: number | Long | null;
                notAfter?: number | Long | null;
            }
            export class Details implements IDetails {
                constructor(properties?: IDetails);
                public static create(properties?: IDetails): Details;
                public static encode(message: IDetails, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): Details;
                public static fromObject(object: { [k: string]: any }): Details;
                public static toObject(message: Details, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
        }
    }
    export interface IChatLockSettings {
        hideLockedChats?: boolean | null;
        secretCode?: proto.IUserPassword | null;
    }
    export class ChatLockSettings implements IChatLockSettings {
        constructor(properties?: IChatLockSettings);
        public static create(properties?: IChatLockSettings): ChatLockSettings;
        public static encode(message: IChatLockSettings, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): ChatLockSettings;
        public static fromObject(object: { [k: string]: any }): ChatLockSettings;
        public static toObject(message: ChatLockSettings, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IChatRowOpaqueData {
        draftMessage?: proto.IDraftMessage | null;
    }
    export class ChatRowOpaqueData implements IChatRowOpaqueData {
        constructor(properties?: IChatRowOpaqueData);
        public static create(properties?: IChatRowOpaqueData): ChatRowOpaqueData;
        public static encode(message: IChatRowOpaqueData, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): ChatRowOpaqueData;
        public static fromObject(object: { [k: string]: any }): ChatRowOpaqueData;
        public static toObject(message: ChatRowOpaqueData, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace ChatRowOpaqueData {
        export interface IDraftMessage {
            text?: string | null;
            omittedUrl?: string | null;
            ctwaContextLinkData?: proto.ICtwaContextLinkData | null;
            ctwaContext?: proto.ICtwaContextData | null;
            timestamp?: number | Long | null;
        }
        export class DraftMessage implements IDraftMessage {
            constructor(properties?: IDraftMessage);
            public static create(properties?: IDraftMessage): DraftMessage;
            public static encode(message: IDraftMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): DraftMessage;
            public static fromObject(object: { [k: string]: any }): DraftMessage;
            public static toObject(message: DraftMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace DraftMessage {
            export interface ICtwaContextData {
                conversionSource?: string | null;
                conversionData?: Uint8Array | null;
                sourceUrl?: string | null;
                sourceId?: string | null;
                sourceType?: string | null;
                title?: string | null;
                description?: string | null;
                thumbnail?: string | null;
                thumbnailUrl?: string | null;
                mediaType?: proto.IContextInfoExternalAdReplyInfoMediaType | null;
                mediaUrl?: string | null;
                isSuspiciousLink?: boolean | null;
            }
            export class CtwaContextData implements ICtwaContextData {
                constructor(properties?: ICtwaContextData);
                public static create(properties?: ICtwaContextData): CtwaContextData;
                public static encode(message: ICtwaContextData, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): CtwaContextData;
                public static fromObject(object: { [k: string]: any }): CtwaContextData;
                public static toObject(message: CtwaContextData, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export namespace CtwaContextData {
                export enum ContextInfoExternalAdReplyInfoMediaType {
                    NONE = 0,
                    IMAGE = 1,
                    VIDEO = 2,
                }
                export type IContextInfoExternalAdReplyInfoMediaType = ContextInfoExternalAdReplyInfoMediaType;
            }
            export interface ICtwaContextLinkData {
                context?: string | null;
                sourceUrl?: string | null;
                icebreaker?: string | null;
                phone?: string | null;
            }
            export class CtwaContextLinkData implements ICtwaContextLinkData {
                constructor(properties?: ICtwaContextLinkData);
                public static create(properties?: ICtwaContextLinkData): CtwaContextLinkData;
                public static encode(message: ICtwaContextLinkData, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): CtwaContextLinkData;
                public static fromObject(object: { [k: string]: any }): CtwaContextLinkData;
                public static toObject(message: CtwaContextLinkData, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
        }
    }
    export interface ICitation {
        title?: string | null;
        subtitle?: string | null;
        cmsId?: string | null;
        imageUrl?: string | null;
    }
    export class Citation implements ICitation {
        constructor(properties?: ICitation);
        public static create(properties?: ICitation): Citation;
        public static encode(message: ICitation, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): Citation;
        public static fromObject(object: { [k: string]: any }): Citation;
        public static toObject(message: Citation, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IClientPairingProps {
        isChatDbLidMigrated?: boolean | null;
        isSyncdPureLidSession?: boolean | null;
        isSyncdSnapshotRecoveryEnabled?: boolean | null;
    }
    export class ClientPairingProps implements IClientPairingProps {
        constructor(properties?: IClientPairingProps);
        public static create(properties?: IClientPairingProps): ClientPairingProps;
        public static encode(message: IClientPairingProps, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): ClientPairingProps;
        public static fromObject(object: { [k: string]: any }): ClientPairingProps;
        public static toObject(message: ClientPairingProps, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IClientPayload {
        username?: number | Long | null;
        passive?: boolean | null;
        userAgent?: proto.IUserAgent | null;
        webInfo?: proto.IWebInfo | null;
        pushName?: string | null;
        sessionId?: number | null;
        shortConnect?: boolean | null;
        connectType?: proto.IConnectType | null;
        connectReason?: proto.IConnectReason | null;
        shards?: (number)[] | null;
        dnsSource?: proto.IDNSSource | null;
        connectAttemptCount?: number | null;
        device?: number | null;
        devicePairingData?: proto.IDevicePairingRegistrationData | null;
        product?: proto.IProduct | null;
        fbCat?: Uint8Array | null;
        fbUserAgent?: Uint8Array | null;
        oc?: boolean | null;
        lc?: number | null;
        iosAppExtension?: proto.IIOSAppExtension | null;
        fbAppId?: number | Long | null;
        fbDeviceId?: Uint8Array | null;
        pull?: boolean | null;
        paddingBytes?: Uint8Array | null;
        yearClass?: number | null;
        memClass?: number | null;
        interopData?: proto.IInteropData | null;
        trafficAnonymization?: proto.ITrafficAnonymization | null;
        lidDbMigrated?: boolean | null;
        accountType?: proto.IAccountType | null;
        connectionSequenceInfo?: number | null;
        paaLink?: boolean | null;
        preacksCount?: number | null;
        processingQueueSize?: number | null;
    }
    export class ClientPayload implements IClientPayload {
        constructor(properties?: IClientPayload);
        public static create(properties?: IClientPayload): ClientPayload;
        public static encode(message: IClientPayload, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): ClientPayload;
        public static fromObject(object: { [k: string]: any }): ClientPayload;
        public static toObject(message: ClientPayload, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace ClientPayload {
        export enum AccountType {
            DEFAULT = 0,
            GUEST = 1,
        }
        export type IAccountType = AccountType;
        export enum ConnectReason {
            PUSH = 0,
            USER_ACTIVATED = 1,
            SCHEDULED = 2,
            ERROR_RECONNECT = 3,
            NETWORK_SWITCH = 4,
            PING_RECONNECT = 5,
            UNKNOWN = 6,
        }
        export type IConnectReason = ConnectReason;
        export enum ConnectType {
            CELLULAR_UNKNOWN = 0,
            WIFI_UNKNOWN = 1,
            CELLULAR_EDGE = 100,
            CELLULAR_IDEN = 101,
            CELLULAR_UMTS = 102,
            CELLULAR_EVDO = 103,
            CELLULAR_GPRS = 104,
            CELLULAR_HSDPA = 105,
            CELLULAR_HSUPA = 106,
            CELLULAR_HSPA = 107,
            CELLULAR_CDMA = 108,
            CELLULAR_1XRTT = 109,
            CELLULAR_EHRPD = 110,
            CELLULAR_LTE = 111,
            CELLULAR_HSPAP = 112,
        }
        export type IConnectType = ConnectType;
        export interface IDNSSource {
            dnsMethod?: proto.IDNSResolutionMethod | null;
            appCached?: boolean | null;
        }
        export class DNSSource implements IDNSSource {
            constructor(properties?: IDNSSource);
            public static create(properties?: IDNSSource): DNSSource;
            public static encode(message: IDNSSource, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): DNSSource;
            public static fromObject(object: { [k: string]: any }): DNSSource;
            public static toObject(message: DNSSource, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace DNSSource {
            export enum DNSResolutionMethod {
                SYSTEM = 0,
                GOOGLE = 1,
                HARDCODED = 2,
                OVERRIDE = 3,
                FALLBACK = 4,
                MNS = 5,
            }
            export type IDNSResolutionMethod = DNSResolutionMethod;
        }
        export interface IDevicePairingRegistrationData {
            eRegid?: Uint8Array | null;
            eKeytype?: Uint8Array | null;
            eIdent?: Uint8Array | null;
            eSkeyId?: Uint8Array | null;
            eSkeyVal?: Uint8Array | null;
            eSkeySig?: Uint8Array | null;
            buildHash?: Uint8Array | null;
            deviceProps?: Uint8Array | null;
        }
        export class DevicePairingRegistrationData implements IDevicePairingRegistrationData {
            constructor(properties?: IDevicePairingRegistrationData);
            public static create(properties?: IDevicePairingRegistrationData): DevicePairingRegistrationData;
            public static encode(message: IDevicePairingRegistrationData, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): DevicePairingRegistrationData;
            public static fromObject(object: { [k: string]: any }): DevicePairingRegistrationData;
            public static toObject(message: DevicePairingRegistrationData, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export enum IOSAppExtension {
            SHARE_EXTENSION = 0,
            SERVICE_EXTENSION = 1,
            INTENTS_EXTENSION = 2,
        }
        export type IIOSAppExtension = IOSAppExtension;
        export interface IInteropData {
            accountId?: number | Long | null;
            token?: Uint8Array | null;
            enableReadReceipts?: boolean | null;
        }
        export class InteropData implements IInteropData {
            constructor(properties?: IInteropData);
            public static create(properties?: IInteropData): InteropData;
            public static encode(message: IInteropData, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): InteropData;
            public static fromObject(object: { [k: string]: any }): InteropData;
            public static toObject(message: InteropData, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export enum Product {
            WHATSAPP = 0,
            MESSENGER = 1,
            INTEROP = 2,
            INTEROP_MSGR = 3,
            WHATSAPP_LID = 4,
        }
        export type IProduct = Product;
        export enum TrafficAnonymization {
            OFF = 0,
            STANDARD = 1,
        }
        export type ITrafficAnonymization = TrafficAnonymization;
        export interface IUserAgent {
            platform?: proto.IPlatform | null;
            appVersion?: proto.IAppVersion | null;
            mcc?: string | null;
            mnc?: string | null;
            osVersion?: string | null;
            manufacturer?: string | null;
            device?: string | null;
            osBuildNumber?: string | null;
            phoneId?: string | null;
            releaseChannel?: proto.IReleaseChannel | null;
            localeLanguageIso6391?: string | null;
            localeCountryIso31661Alpha2?: string | null;
            deviceBoard?: string | null;
            deviceExpId?: string | null;
            deviceType?: proto.IDeviceType | null;
            deviceModelType?: string | null;
        }
        export class UserAgent implements IUserAgent {
            constructor(properties?: IUserAgent);
            public static create(properties?: IUserAgent): UserAgent;
            public static encode(message: IUserAgent, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): UserAgent;
            public static fromObject(object: { [k: string]: any }): UserAgent;
            public static toObject(message: UserAgent, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace UserAgent {
            export interface IAppVersion {
                primary?: number | null;
                secondary?: number | null;
                tertiary?: number | null;
                quaternary?: number | null;
                quinary?: number | null;
            }
            export class AppVersion implements IAppVersion {
                constructor(properties?: IAppVersion);
                public static create(properties?: IAppVersion): AppVersion;
                public static encode(message: IAppVersion, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): AppVersion;
                public static fromObject(object: { [k: string]: any }): AppVersion;
                public static toObject(message: AppVersion, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export enum DeviceType {
                PHONE = 0,
                TABLET = 1,
                DESKTOP = 2,
                WEARABLE = 3,
                VR = 4,
            }
            export type IDeviceType = DeviceType;
            export enum Platform {
                ANDROID = 0,
                IOS = 1,
                WINDOWS_PHONE = 2,
                BLACKBERRY = 3,
                BLACKBERRYX = 4,
                S40 = 5,
                S60 = 6,
                PYTHON_CLIENT = 7,
                TIZEN = 8,
                ENTERPRISE = 9,
                SMB_ANDROID = 10,
                KAIOS = 11,
                SMB_IOS = 12,
                WINDOWS = 13,
                WEB = 14,
                PORTAL = 15,
                GREEN_ANDROID = 16,
                GREEN_IPHONE = 17,
                BLUE_ANDROID = 18,
                BLUE_IPHONE = 19,
                FBLITE_ANDROID = 20,
                MLITE_ANDROID = 21,
                IGLITE_ANDROID = 22,
                PAGE = 23,
                MACOS = 24,
                OCULUS_MSG = 25,
                OCULUS_CALL = 26,
                MILAN = 27,
                CAPI = 28,
                WEAROS = 29,
                ARDEVICE = 30,
                VRDEVICE = 31,
                BLUE_WEB = 32,
                IPAD = 33,
                TEST = 34,
                SMART_GLASSES = 35,
                BLUE_VR = 36,
                AR_WRIST = 37,
            }
            export type IPlatform = Platform;
            export enum ReleaseChannel {
                RELEASE = 0,
                BETA = 1,
                ALPHA = 2,
                DEBUG = 3,
            }
            export type IReleaseChannel = ReleaseChannel;
        }
        export interface IWebInfo {
            refToken?: string | null;
            version?: string | null;
            webdPayload?: proto.IWebdPayload | null;
            webSubPlatform?: proto.IWebSubPlatform | null;
        }
        export class WebInfo implements IWebInfo {
            constructor(properties?: IWebInfo);
            public static create(properties?: IWebInfo): WebInfo;
            public static encode(message: IWebInfo, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): WebInfo;
            public static fromObject(object: { [k: string]: any }): WebInfo;
            public static toObject(message: WebInfo, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace WebInfo {
            export enum WebSubPlatform {
                WEB_BROWSER = 0,
                APP_STORE = 1,
                WIN_STORE = 2,
                DARWIN = 3,
                WIN32 = 4,
                WIN_HYBRID = 5,
            }
            export type IWebSubPlatform = WebSubPlatform;
            export interface IWebdPayload {
                usesParticipantInKey?: boolean | null;
                supportsStarredMessages?: boolean | null;
                supportsDocumentMessages?: boolean | null;
                supportsUrlMessages?: boolean | null;
                supportsMediaRetry?: boolean | null;
                supportsE2EImage?: boolean | null;
                supportsE2EVideo?: boolean | null;
                supportsE2EAudio?: boolean | null;
                supportsE2EDocument?: boolean | null;
                documentTypes?: string | null;
                features?: Uint8Array | null;
            }
            export class WebdPayload implements IWebdPayload {
                constructor(properties?: IWebdPayload);
                public static create(properties?: IWebdPayload): WebdPayload;
                public static encode(message: IWebdPayload, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): WebdPayload;
                public static fromObject(object: { [k: string]: any }): WebdPayload;
                public static toObject(message: WebdPayload, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
        }
    }
    export enum CollectionName {
        COLLECTION_NAME_UNKNOWN = 0,
        REGULAR = 1,
        REGULAR_LOW = 2,
        REGULAR_HIGH = 3,
        CRITICAL_BLOCK = 4,
        CRITICAL_UNBLOCK_LOW = 5,
    }
    export type ICollectionName = CollectionName;
    export interface ICommentMetadata {
        commentParentKey?: proto.IMessageKey | null;
        replyCount?: number | null;
    }
    export class CommentMetadata implements ICommentMetadata {
        constructor(properties?: ICommentMetadata);
        public static create(properties?: ICommentMetadata): CommentMetadata;
        public static encode(message: ICommentMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): CommentMetadata;
        public static fromObject(object: { [k: string]: any }): CommentMetadata;
        public static toObject(message: CommentMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface ICompanionCommitment {
        hash?: Uint8Array | null;
    }
    export class CompanionCommitment implements ICompanionCommitment {
        constructor(properties?: ICompanionCommitment);
        public static create(properties?: ICompanionCommitment): CompanionCommitment;
        public static encode(message: ICompanionCommitment, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): CompanionCommitment;
        public static fromObject(object: { [k: string]: any }): CompanionCommitment;
        public static toObject(message: CompanionCommitment, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface ICompanionEphemeralIdentity {
        publicKey?: Uint8Array | null;
        deviceType?: proto.DeviceProps.PlatformType | null;
        ref?: string | null;
    }
    export class CompanionEphemeralIdentity implements ICompanionEphemeralIdentity {
        constructor(properties?: ICompanionEphemeralIdentity);
        public static create(properties?: ICompanionEphemeralIdentity): CompanionEphemeralIdentity;
        public static encode(message: ICompanionEphemeralIdentity, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): CompanionEphemeralIdentity;
        public static fromObject(object: { [k: string]: any }): CompanionEphemeralIdentity;
        public static toObject(message: CompanionEphemeralIdentity, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IConfig {
        field?: { [k: number]: proto.IField } | null;
        version?: number | null;
    }
    export class Config implements IConfig {
        constructor(properties?: IConfig);
        public static create(properties?: IConfig): Config;
        public static encode(message: IConfig, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): Config;
        public static fromObject(object: { [k: string]: any }): Config;
        public static toObject(message: Config, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IContextInfo {
        stanzaId?: string | null;
        participant?: string | null;
        quotedMessage?: proto.IMessage | null;
        remoteJid?: string | null;
        mentionedJid?: (string)[] | null;
        conversionSource?: string | null;
        conversionData?: Uint8Array | null;
        conversionDelaySeconds?: number | null;
        forwardingScore?: number | null;
        isForwarded?: boolean | null;
        quotedAd?: proto.IAdReplyInfo | null;
        placeholderKey?: proto.IMessageKey | null;
        expiration?: number | null;
        ephemeralSettingTimestamp?: number | Long | null;
        ephemeralSharedSecret?: Uint8Array | null;
        externalAdReply?: proto.IExternalAdReplyInfo | null;
        entryPointConversionSource?: string | null;
        entryPointConversionApp?: string | null;
        entryPointConversionDelaySeconds?: number | null;
        disappearingMode?: proto.IDisappearingMode | null;
        actionLink?: proto.IActionLink | null;
        groupSubject?: string | null;
        parentGroupJid?: string | null;
        trustBannerType?: string | null;
        trustBannerAction?: number | null;
        isSampled?: boolean | null;
        groupMentions?: (proto.IGroupMention)[] | null;
        utm?: proto.IUTMInfo | null;
        forwardedNewsletterMessageInfo?: proto.IForwardedNewsletterMessageInfo | null;
        businessMessageForwardInfo?: proto.IBusinessMessageForwardInfo | null;
        smbClientCampaignId?: string | null;
        smbServerCampaignId?: string | null;
        dataSharingContext?: proto.IDataSharingContext | null;
        alwaysShowAdAttribution?: boolean | null;
        featureEligibilities?: proto.IFeatureEligibilities | null;
        entryPointConversionExternalSource?: string | null;
        entryPointConversionExternalMedium?: string | null;
        ctwaSignals?: string | null;
        ctwaPayload?: Uint8Array | null;
        forwardedAiBotMessageInfo?: proto.IForwardedAIBotMessageInfo | null;
        statusAttributionType?: proto.IStatusAttributionType | null;
        urlTrackingMap?: proto.IUrlTrackingMap | null;
        pairedMediaType?: proto.IPairedMediaType | null;
        rankingVersion?: number | null;
        memberLabel?: proto.IMemberLabel | null;
        isQuestion?: boolean | null;
        statusSourceType?: proto.IStatusSourceType | null;
        statusAttributions?: (proto.IStatusAttribution)[] | null;
        isGroupStatus?: boolean | null;
        forwardOrigin?: proto.IForwardOrigin | null;
        questionReplyQuotedMessage?: proto.IQuestionReplyQuotedMessage | null;
        statusAudienceMetadata?: proto.IStatusAudienceMetadata | null;
        nonJidMentions?: number | null;
        quotedType?: proto.IQuotedType | null;
        botMessageSharingInfo?: proto.IBotMessageSharingInfo | null;
    }
    export class ContextInfo implements IContextInfo {
        constructor(properties?: IContextInfo);
        public static create(properties?: IContextInfo): ContextInfo;
        public static encode(message: IContextInfo, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): ContextInfo;
        public static fromObject(object: { [k: string]: any }): ContextInfo;
        public static toObject(message: ContextInfo, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace ContextInfo {
        export interface IAdReplyInfo {
            advertiserName?: string | null;
            mediaType?: proto.IMediaType | null;
            jpegThumbnail?: Uint8Array | null;
            caption?: string | null;
        }
        export class AdReplyInfo implements IAdReplyInfo {
            constructor(properties?: IAdReplyInfo);
            public static create(properties?: IAdReplyInfo): AdReplyInfo;
            public static encode(message: IAdReplyInfo, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): AdReplyInfo;
            public static fromObject(object: { [k: string]: any }): AdReplyInfo;
            public static toObject(message: AdReplyInfo, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace AdReplyInfo {
            export enum MediaType {
                NONE = 0,
                IMAGE = 1,
                VIDEO = 2,
            }
            export type IMediaType = MediaType;
        }
        export interface IBusinessMessageForwardInfo {
            businessOwnerJid?: string | null;
        }
        export class BusinessMessageForwardInfo implements IBusinessMessageForwardInfo {
            constructor(properties?: IBusinessMessageForwardInfo);
            public static create(properties?: IBusinessMessageForwardInfo): BusinessMessageForwardInfo;
            public static encode(message: IBusinessMessageForwardInfo, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): BusinessMessageForwardInfo;
            public static fromObject(object: { [k: string]: any }): BusinessMessageForwardInfo;
            public static toObject(message: BusinessMessageForwardInfo, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IDataSharingContext {
            showMmDisclosure?: boolean | null;
            encryptedSignalTokenConsented?: string | null;
            parameters?: (proto.IParameters)[] | null;
            dataSharingFlags?: number | null;
        }
        export class DataSharingContext implements IDataSharingContext {
            constructor(properties?: IDataSharingContext);
            public static create(properties?: IDataSharingContext): DataSharingContext;
            public static encode(message: IDataSharingContext, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): DataSharingContext;
            public static fromObject(object: { [k: string]: any }): DataSharingContext;
            public static toObject(message: DataSharingContext, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace DataSharingContext {
            export enum DataSharingFlags {
                SHOW_MM_DISCLOSURE_ON_CLICK = 1,
                SHOW_MM_DISCLOSURE_ON_READ = 2,
            }
            export type IDataSharingFlags = DataSharingFlags;
            export interface IParameters {
                key?: string | null;
                stringData?: string | null;
                intData?: number | Long | null;
                floatData?: number | null;
                contents?: proto.ContextInfo.DataSharingContext.Parameters | null;
            }
            export class Parameters implements IParameters {
                constructor(properties?: IParameters);
                public static create(properties?: IParameters): Parameters;
                public static encode(message: IParameters, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): Parameters;
                public static fromObject(object: { [k: string]: any }): Parameters;
                public static toObject(message: Parameters, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
        }
        export interface IExternalAdReplyInfo {
            title?: string | null;
            body?: string | null;
            mediaType?: proto.IMediaType | null;
            thumbnailUrl?: string | null;
            mediaUrl?: string | null;
            thumbnail?: Uint8Array | null;
            sourceType?: string | null;
            sourceId?: string | null;
            sourceUrl?: string | null;
            containsAutoReply?: boolean | null;
            renderLargerThumbnail?: boolean | null;
            showAdAttribution?: boolean | null;
            ctwaClid?: string | null;
            ref?: string | null;
            clickToWhatsappCall?: boolean | null;
            adContextPreviewDismissed?: boolean | null;
            sourceApp?: string | null;
            automatedGreetingMessageShown?: boolean | null;
            greetingMessageBody?: string | null;
            ctaPayload?: string | null;
            disableNudge?: boolean | null;
            originalImageUrl?: string | null;
            automatedGreetingMessageCtaType?: string | null;
            wtwaAdFormat?: boolean | null;
            adType?: proto.IAdType | null;
            wtwaWebsiteUrl?: string | null;
            adPreviewUrl?: string | null;
        }
        export class ExternalAdReplyInfo implements IExternalAdReplyInfo {
            constructor(properties?: IExternalAdReplyInfo);
            public static create(properties?: IExternalAdReplyInfo): ExternalAdReplyInfo;
            public static encode(message: IExternalAdReplyInfo, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): ExternalAdReplyInfo;
            public static fromObject(object: { [k: string]: any }): ExternalAdReplyInfo;
            public static toObject(message: ExternalAdReplyInfo, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace ExternalAdReplyInfo {
            export enum AdType {
                CTWA = 0,
                CAWC = 1,
            }
            export type IAdType = AdType;
            export enum MediaType {
                NONE = 0,
                IMAGE = 1,
                VIDEO = 2,
            }
            export type IMediaType = MediaType;
        }
        export interface IFeatureEligibilities {
            cannotBeReactedTo?: boolean | null;
            cannotBeRanked?: boolean | null;
            canRequestFeedback?: boolean | null;
            canBeReshared?: boolean | null;
            canReceiveMultiReact?: boolean | null;
        }
        export class FeatureEligibilities implements IFeatureEligibilities {
            constructor(properties?: IFeatureEligibilities);
            public static create(properties?: IFeatureEligibilities): FeatureEligibilities;
            public static encode(message: IFeatureEligibilities, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): FeatureEligibilities;
            public static fromObject(object: { [k: string]: any }): FeatureEligibilities;
            public static toObject(message: FeatureEligibilities, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export enum ForwardOrigin {
            UNKNOWN = 0,
            CHAT = 1,
            STATUS = 2,
            CHANNELS = 3,
            META_AI = 4,
            UGC = 5,
        }
        export type IForwardOrigin = ForwardOrigin;
        export interface IForwardedNewsletterMessageInfo {
            newsletterJid?: string | null;
            serverMessageId?: number | null;
            newsletterName?: string | null;
            contentType?: proto.IContentType | null;
            accessibilityText?: string | null;
        }
        export class ForwardedNewsletterMessageInfo implements IForwardedNewsletterMessageInfo {
            constructor(properties?: IForwardedNewsletterMessageInfo);
            public static create(properties?: IForwardedNewsletterMessageInfo): ForwardedNewsletterMessageInfo;
            public static encode(message: IForwardedNewsletterMessageInfo, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): ForwardedNewsletterMessageInfo;
            public static fromObject(object: { [k: string]: any }): ForwardedNewsletterMessageInfo;
            public static toObject(message: ForwardedNewsletterMessageInfo, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace ForwardedNewsletterMessageInfo {
            export enum ContentType {
                UPDATE = 1,
                UPDATE_CARD = 2,
                LINK_CARD = 3,
            }
            export type IContentType = ContentType;
        }
        export enum PairedMediaType {
            NOT_PAIRED_MEDIA = 0,
            SD_VIDEO_PARENT = 1,
            HD_VIDEO_CHILD = 2,
            SD_IMAGE_PARENT = 3,
            HD_IMAGE_CHILD = 4,
            MOTION_PHOTO_PARENT = 5,
            MOTION_PHOTO_CHILD = 6,
            HEVC_VIDEO_PARENT = 7,
            HEVC_VIDEO_CHILD = 8,
        }
        export type IPairedMediaType = PairedMediaType;
        export interface IQuestionReplyQuotedMessage {
            serverQuestionId?: number | null;
            quotedQuestion?: proto.IMessage | null;
            quotedResponse?: proto.IMessage | null;
        }
        export class QuestionReplyQuotedMessage implements IQuestionReplyQuotedMessage {
            constructor(properties?: IQuestionReplyQuotedMessage);
            public static create(properties?: IQuestionReplyQuotedMessage): QuestionReplyQuotedMessage;
            public static encode(message: IQuestionReplyQuotedMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): QuestionReplyQuotedMessage;
            public static fromObject(object: { [k: string]: any }): QuestionReplyQuotedMessage;
            public static toObject(message: QuestionReplyQuotedMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export enum QuotedType {
            EXPLICIT = 0,
            AUTO = 1,
        }
        export type IQuotedType = QuotedType;
        export enum StatusAttributionType {
            NONE = 0,
            RESHARED_FROM_MENTION = 1,
            RESHARED_FROM_POST = 2,
            RESHARED_FROM_POST_MANY_TIMES = 3,
            FORWARDED_FROM_STATUS = 4,
        }
        export type IStatusAttributionType = StatusAttributionType;
        export interface IStatusAudienceMetadata {
            audienceType?: proto.IAudienceType | null;
        }
        export class StatusAudienceMetadata implements IStatusAudienceMetadata {
            constructor(properties?: IStatusAudienceMetadata);
            public static create(properties?: IStatusAudienceMetadata): StatusAudienceMetadata;
            public static encode(message: IStatusAudienceMetadata, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): StatusAudienceMetadata;
            public static fromObject(object: { [k: string]: any }): StatusAudienceMetadata;
            public static toObject(message: StatusAudienceMetadata, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace StatusAudienceMetadata {
            export enum AudienceType {
                UNKNOWN = 0,
                CLOSE_FRIENDS = 1,
            }
            export type IAudienceType = AudienceType;
        }
        export enum StatusSourceType {
            IMAGE = 0,
            VIDEO = 1,
            GIF = 2,
            AUDIO = 3,
            TEXT = 4,
            MUSIC_STANDALONE = 5,
        }
        export type IStatusSourceType = StatusSourceType;
        export interface IUTMInfo {
            utmSource?: string | null;
            utmCampaign?: string | null;
        }
        export class UTMInfo implements IUTMInfo {
            constructor(properties?: IUTMInfo);
            public static create(properties?: IUTMInfo): UTMInfo;
            public static encode(message: IUTMInfo, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): UTMInfo;
            public static fromObject(object: { [k: string]: any }): UTMInfo;
            public static toObject(message: UTMInfo, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
    }
    export interface IConversation {
        id?: string | null;
        messages?: (proto.IHistorySyncMsg)[] | null;
        newJid?: string | null;
        oldJid?: string | null;
        lastMsgTimestamp?: number | Long | null;
        unreadCount?: number | null;
        readOnly?: boolean | null;
        endOfHistoryTransfer?: boolean | null;
        ephemeralExpiration?: number | null;
        ephemeralSettingTimestamp?: number | Long | null;
        endOfHistoryTransferType?: proto.IEndOfHistoryTransferType | null;
        conversationTimestamp?: number | Long | null;
        name?: string | null;
        pHash?: string | null;
        notSpam?: boolean | null;
        archived?: boolean | null;
        disappearingMode?: proto.IDisappearingMode | null;
        unreadMentionCount?: number | null;
        markedAsUnread?: boolean | null;
        participant?: (proto.IGroupParticipant)[] | null;
        tcToken?: Uint8Array | null;
        tcTokenTimestamp?: number | Long | null;
        contactPrimaryIdentityKey?: Uint8Array | null;
        pinned?: number | null;
        muteEndTime?: number | Long | null;
        wallpaper?: proto.IWallpaperSettings | null;
        mediaVisibility?: proto.IMediaVisibility | null;
        tcTokenSenderTimestamp?: number | Long | null;
        suspended?: boolean | null;
        terminated?: boolean | null;
        createdAt?: number | Long | null;
        createdBy?: string | null;
        description?: string | null;
        support?: boolean | null;
        isParentGroup?: boolean | null;
        parentGroupId?: string | null;
        isDefaultSubgroup?: boolean | null;
        displayName?: string | null;
        pnJid?: string | null;
        shareOwnPn?: boolean | null;
        pnhDuplicateLidThread?: boolean | null;
        lidJid?: string | null;
        username?: string | null;
        lidOriginType?: string | null;
        commentsCount?: number | null;
        locked?: boolean | null;
        systemMessageToInsert?: proto.IPrivacySystemMessage | null;
        capiCreatedGroup?: boolean | null;
        accountLid?: string | null;
        limitSharing?: boolean | null;
        limitSharingSettingTimestamp?: number | Long | null;
        limitSharingTrigger?: proto.LimitSharing.TriggerType | null;
        limitSharingInitiatedByMe?: boolean | null;
        maibaAiThreadEnabled?: boolean | null;
    }
    export class Conversation implements IConversation {
        constructor(properties?: IConversation);
        public static create(properties?: IConversation): Conversation;
        public static encode(message: IConversation, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): Conversation;
        public static fromObject(object: { [k: string]: any }): Conversation;
        public static toObject(message: Conversation, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace Conversation {
        export enum EndOfHistoryTransferType {
            COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY = 0,
            COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY = 1,
            COMPLETE_ON_DEMAND_SYNC_BUT_MORE_MSG_REMAIN_ON_PRIMARY = 2,
        }
        export type IEndOfHistoryTransferType = EndOfHistoryTransferType;
    }
    export interface IDeviceCapabilities {
        chatLockSupportLevel?: proto.IChatLockSupportLevel | null;
        lidMigration?: proto.ILIDMigration | null;
        businessBroadcast?: proto.IBusinessBroadcast | null;
        userHasAvatar?: proto.IUserHasAvatar | null;
        memberNameTagPrimarySupport?: proto.IMemberNameTagPrimarySupport | null;
    }
    export class DeviceCapabilities implements IDeviceCapabilities {
        constructor(properties?: IDeviceCapabilities);
        public static create(properties?: IDeviceCapabilities): DeviceCapabilities;
        public static encode(message: IDeviceCapabilities, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): DeviceCapabilities;
        public static fromObject(object: { [k: string]: any }): DeviceCapabilities;
        public static toObject(message: DeviceCapabilities, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace DeviceCapabilities {
        export interface IBusinessBroadcast {
            importListEnabled?: boolean | null;
        }
        export class BusinessBroadcast implements IBusinessBroadcast {
            constructor(properties?: IBusinessBroadcast);
            public static create(properties?: IBusinessBroadcast): BusinessBroadcast;
            public static encode(message: IBusinessBroadcast, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): BusinessBroadcast;
            public static fromObject(object: { [k: string]: any }): BusinessBroadcast;
            public static toObject(message: BusinessBroadcast, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export enum ChatLockSupportLevel {
            NONE = 0,
            MINIMAL = 1,
            FULL = 2,
        }
        export type IChatLockSupportLevel = ChatLockSupportLevel;
        export interface ILIDMigration {
            chatDbMigrationTimestamp?: number | Long | null;
        }
        export class LIDMigration implements ILIDMigration {
            constructor(properties?: ILIDMigration);
            public static create(properties?: ILIDMigration): LIDMigration;
            public static encode(message: ILIDMigration, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): LIDMigration;
            public static fromObject(object: { [k: string]: any }): LIDMigration;
            public static toObject(message: LIDMigration, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export enum MemberNameTagPrimarySupport {
            DISABLED = 0,
            RECEIVER_ENABLED = 1,
            SENDER_ENABLED = 2,
        }
        export type IMemberNameTagPrimarySupport = MemberNameTagPrimarySupport;
        export interface IUserHasAvatar {
            userHasAvatar?: boolean | null;
        }
        export class UserHasAvatar implements IUserHasAvatar {
            constructor(properties?: IUserHasAvatar);
            public static create(properties?: IUserHasAvatar): UserHasAvatar;
            public static encode(message: IUserHasAvatar, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): UserHasAvatar;
            public static fromObject(object: { [k: string]: any }): UserHasAvatar;
            public static toObject(message: UserHasAvatar, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
    }
    export interface IDeviceConsistencyCodeMessage {
        generation?: number | null;
        signature?: Uint8Array | null;
    }
    export class DeviceConsistencyCodeMessage implements IDeviceConsistencyCodeMessage {
        constructor(properties?: IDeviceConsistencyCodeMessage);
        public static create(properties?: IDeviceConsistencyCodeMessage): DeviceConsistencyCodeMessage;
        public static encode(message: IDeviceConsistencyCodeMessage, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): DeviceConsistencyCodeMessage;
        public static fromObject(object: { [k: string]: any }): DeviceConsistencyCodeMessage;
        public static toObject(message: DeviceConsistencyCodeMessage, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IDeviceListMetadata {
        senderKeyHash?: Uint8Array | null;
        senderTimestamp?: number | Long | null;
        senderKeyIndexes?: (number)[] | null;
        senderAccountType?: proto.IADVEncryptionType | null;
        receiverAccountType?: proto.IADVEncryptionType | null;
        recipientKeyHash?: Uint8Array | null;
        recipientTimestamp?: number | Long | null;
        recipientKeyIndexes?: (number)[] | null;
    }
    export class DeviceListMetadata implements IDeviceListMetadata {
        constructor(properties?: IDeviceListMetadata);
        public static create(properties?: IDeviceListMetadata): DeviceListMetadata;
        public static encode(message: IDeviceListMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): DeviceListMetadata;
        public static fromObject(object: { [k: string]: any }): DeviceListMetadata;
        public static toObject(message: DeviceListMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IDeviceProps {
        os?: string | null;
        version?: proto.IAppVersion | null;
        platformType?: proto.IPlatformType | null;
        requireFullSync?: boolean | null;
        historySyncConfig?: proto.IHistorySyncConfig | null;
    }
    export class DeviceProps implements IDeviceProps {
        constructor(properties?: IDeviceProps);
        public static create(properties?: IDeviceProps): DeviceProps;
        public static encode(message: IDeviceProps, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): DeviceProps;
        public static fromObject(object: { [k: string]: any }): DeviceProps;
        public static toObject(message: DeviceProps, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace DeviceProps {
        export interface IAppVersion {
            primary?: number | null;
            secondary?: number | null;
            tertiary?: number | null;
            quaternary?: number | null;
            quinary?: number | null;
        }
        export class AppVersion implements IAppVersion {
            constructor(properties?: IAppVersion);
            public static create(properties?: IAppVersion): AppVersion;
            public static encode(message: IAppVersion, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): AppVersion;
            public static fromObject(object: { [k: string]: any }): AppVersion;
            public static toObject(message: AppVersion, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IHistorySyncConfig {
            fullSyncDaysLimit?: number | null;
            fullSyncSizeMbLimit?: number | null;
            storageQuotaMb?: number | null;
            inlineInitialPayloadInE2EeMsg?: boolean | null;
            recentSyncDaysLimit?: number | null;
            supportCallLogHistory?: boolean | null;
            supportBotUserAgentChatHistory?: boolean | null;
            supportCagReactionsAndPolls?: boolean | null;
            supportBizHostedMsg?: boolean | null;
            supportRecentSyncChunkMessageCountTuning?: boolean | null;
            supportHostedGroupMsg?: boolean | null;
            supportFbidBotChatHistory?: boolean | null;
            supportAddOnHistorySyncMigration?: boolean | null;
            supportMessageAssociation?: boolean | null;
            supportGroupHistory?: boolean | null;
            onDemandReady?: boolean | null;
            supportGuestChat?: boolean | null;
            completeOnDemandReady?: boolean | null;
            thumbnailSyncDaysLimit?: number | null;
        }
        export class HistorySyncConfig implements IHistorySyncConfig {
            constructor(properties?: IHistorySyncConfig);
            public static create(properties?: IHistorySyncConfig): HistorySyncConfig;
            public static encode(message: IHistorySyncConfig, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): HistorySyncConfig;
            public static fromObject(object: { [k: string]: any }): HistorySyncConfig;
            public static toObject(message: HistorySyncConfig, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export enum PlatformType {
            UNKNOWN = 0,
            CHROME = 1,
            FIREFOX = 2,
            IE = 3,
            OPERA = 4,
            SAFARI = 5,
            EDGE = 6,
            DESKTOP = 7,
            IPAD = 8,
            ANDROID_TABLET = 9,
            OHANA = 10,
            ALOHA = 11,
            CATALINA = 12,
            TCL_TV = 13,
            IOS_PHONE = 14,
            IOS_CATALYST = 15,
            ANDROID_PHONE = 16,
            ANDROID_AMBIGUOUS = 17,
            WEAR_OS = 18,
            AR_WRIST = 19,
            AR_DEVICE = 20,
            UWP = 21,
            VR = 22,
            CLOUD_API = 23,
            SMARTGLASSES = 24,
        }
        export type IPlatformType = PlatformType;
    }
    export interface IDisappearingMode {
        initiator?: proto.IInitiator | null;
        trigger?: proto.ITrigger | null;
        initiatorDeviceJid?: string | null;
        initiatedByMe?: boolean | null;
    }
    export class DisappearingMode implements IDisappearingMode {
        constructor(properties?: IDisappearingMode);
        public static create(properties?: IDisappearingMode): DisappearingMode;
        public static encode(message: IDisappearingMode, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): DisappearingMode;
        public static fromObject(object: { [k: string]: any }): DisappearingMode;
        public static toObject(message: DisappearingMode, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace DisappearingMode {
        export enum Initiator {
            CHANGED_IN_CHAT = 0,
            INITIATED_BY_ME = 1,
            INITIATED_BY_OTHER = 2,
            BIZ_UPGRADE_FB_HOSTING = 3,
        }
        export type IInitiator = Initiator;
        export enum Trigger {
            UNKNOWN = 0,
            CHAT_SETTING = 1,
            ACCOUNT_SETTING = 2,
            BULK_CHANGE = 3,
            BIZ_SUPPORTS_FB_HOSTING = 4,
            UNKNOWN_GROUPS = 5,
        }
        export type ITrigger = Trigger;
    }
    export interface IEmbeddedContent {
        embeddedMessage?: proto.IEmbeddedMessage | null;
        embeddedMusic?: proto.IEmbeddedMusic | null;
    }
    export class EmbeddedContent implements IEmbeddedContent {
        constructor(properties?: IEmbeddedContent);
        public static create(properties?: IEmbeddedContent): EmbeddedContent;
        public static encode(message: IEmbeddedContent, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): EmbeddedContent;
        public static fromObject(object: { [k: string]: any }): EmbeddedContent;
        public static toObject(message: EmbeddedContent, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IEmbeddedMessage {
        stanzaId?: string | null;
        message?: proto.IMessage | null;
    }
    export class EmbeddedMessage implements IEmbeddedMessage {
        constructor(properties?: IEmbeddedMessage);
        public static create(properties?: IEmbeddedMessage): EmbeddedMessage;
        public static encode(message: IEmbeddedMessage, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): EmbeddedMessage;
        public static fromObject(object: { [k: string]: any }): EmbeddedMessage;
        public static toObject(message: EmbeddedMessage, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IEmbeddedMusic {
        musicContentMediaId?: string | null;
        songId?: string | null;
        author?: string | null;
        title?: string | null;
        artworkDirectPath?: string | null;
        artworkSha256?: Uint8Array | null;
        artworkEncSha256?: Uint8Array | null;
        artistAttribution?: string | null;
        countryBlocklist?: Uint8Array | null;
        isExplicit?: boolean | null;
        artworkMediaKey?: Uint8Array | null;
        musicSongStartTimeInMs?: number | Long | null;
        derivedContentStartTimeInMs?: number | Long | null;
        overlapDurationInMs?: number | Long | null;
    }
    export class EmbeddedMusic implements IEmbeddedMusic {
        constructor(properties?: IEmbeddedMusic);
        public static create(properties?: IEmbeddedMusic): EmbeddedMusic;
        public static encode(message: IEmbeddedMusic, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): EmbeddedMusic;
        public static fromObject(object: { [k: string]: any }): EmbeddedMusic;
        public static toObject(message: EmbeddedMusic, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IEncryptedPairingRequest {
        encryptedPayload?: Uint8Array | null;
        iv?: Uint8Array | null;
    }
    export class EncryptedPairingRequest implements IEncryptedPairingRequest {
        constructor(properties?: IEncryptedPairingRequest);
        public static create(properties?: IEncryptedPairingRequest): EncryptedPairingRequest;
        public static encode(message: IEncryptedPairingRequest, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): EncryptedPairingRequest;
        public static fromObject(object: { [k: string]: any }): EncryptedPairingRequest;
        public static toObject(message: EncryptedPairingRequest, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IEphemeralSetting {
        duration?: number | null;
        timestamp?: number | Long | null;
    }
    export class EphemeralSetting implements IEphemeralSetting {
        constructor(properties?: IEphemeralSetting);
        public static create(properties?: IEphemeralSetting): EphemeralSetting;
        public static encode(message: IEphemeralSetting, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): EphemeralSetting;
        public static fromObject(object: { [k: string]: any }): EphemeralSetting;
        public static toObject(message: EphemeralSetting, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IEventAdditionalMetadata {
        isStale?: boolean | null;
    }
    export class EventAdditionalMetadata implements IEventAdditionalMetadata {
        constructor(properties?: IEventAdditionalMetadata);
        public static create(properties?: IEventAdditionalMetadata): EventAdditionalMetadata;
        public static encode(message: IEventAdditionalMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): EventAdditionalMetadata;
        public static fromObject(object: { [k: string]: any }): EventAdditionalMetadata;
        public static toObject(message: EventAdditionalMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IEventResponse {
        eventResponseMessageKey?: proto.IMessageKey | null;
        timestampMs?: number | Long | null;
        eventResponseMessage?: proto.Message.EventResponseMessage | null;
        unread?: boolean | null;
    }
    export class EventResponse implements IEventResponse {
        constructor(properties?: IEventResponse);
        public static create(properties?: IEventResponse): EventResponse;
        public static encode(message: IEventResponse, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): EventResponse;
        public static fromObject(object: { [k: string]: any }): EventResponse;
        public static toObject(message: EventResponse, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IExitCode {
        code?: number | Long | null;
        text?: string | null;
    }
    export class ExitCode implements IExitCode {
        constructor(properties?: IExitCode);
        public static create(properties?: IExitCode): ExitCode;
        public static encode(message: IExitCode, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): ExitCode;
        public static fromObject(object: { [k: string]: any }): ExitCode;
        public static toObject(message: ExitCode, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IExternalBlobReference {
        mediaKey?: Uint8Array | null;
        directPath?: string | null;
        handle?: string | null;
        fileSizeBytes?: number | Long | null;
        fileSha256?: Uint8Array | null;
        fileEncSha256?: Uint8Array | null;
    }
    export class ExternalBlobReference implements IExternalBlobReference {
        constructor(properties?: IExternalBlobReference);
        public static create(properties?: IExternalBlobReference): ExternalBlobReference;
        public static encode(message: IExternalBlobReference, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): ExternalBlobReference;
        public static fromObject(object: { [k: string]: any }): ExternalBlobReference;
        public static toObject(message: ExternalBlobReference, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IField {
        minVersion?: number | null;
        maxVersion?: number | null;
        notReportableMinVersion?: number | null;
        isMessage?: boolean | null;
        subfield?: { [k: number]: proto.IField } | null;
    }
    export class Field implements IField {
        constructor(properties?: IField);
        public static create(properties?: IField): Field;
        public static encode(message: IField, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): Field;
        public static fromObject(object: { [k: string]: any }): Field;
        public static toObject(message: Field, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IForwardedAIBotMessageInfo {
        botName?: string | null;
        botJid?: string | null;
        creatorName?: string | null;
    }
    export class ForwardedAIBotMessageInfo implements IForwardedAIBotMessageInfo {
        constructor(properties?: IForwardedAIBotMessageInfo);
        public static create(properties?: IForwardedAIBotMessageInfo): ForwardedAIBotMessageInfo;
        public static encode(message: IForwardedAIBotMessageInfo, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): ForwardedAIBotMessageInfo;
        public static fromObject(object: { [k: string]: any }): ForwardedAIBotMessageInfo;
        public static toObject(message: ForwardedAIBotMessageInfo, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IGlobalSettings {
        lightThemeWallpaper?: proto.IWallpaperSettings | null;
        mediaVisibility?: proto.IMediaVisibility | null;
        darkThemeWallpaper?: proto.IWallpaperSettings | null;
        autoDownloadWiFi?: proto.IAutoDownloadSettings | null;
        autoDownloadCellular?: proto.IAutoDownloadSettings | null;
        autoDownloadRoaming?: proto.IAutoDownloadSettings | null;
        showIndividualNotificationsPreview?: boolean | null;
        showGroupNotificationsPreview?: boolean | null;
        disappearingModeDuration?: number | null;
        disappearingModeTimestamp?: number | Long | null;
        avatarUserSettings?: proto.IAvatarUserSettings | null;
        fontSize?: number | null;
        securityNotifications?: boolean | null;
        autoUnarchiveChats?: boolean | null;
        videoQualityMode?: number | null;
        photoQualityMode?: number | null;
        individualNotificationSettings?: proto.INotificationSettings | null;
        groupNotificationSettings?: proto.INotificationSettings | null;
        chatLockSettings?: proto.IChatLockSettings | null;
        chatDbLidMigrationTimestamp?: number | Long | null;
    }
    export class GlobalSettings implements IGlobalSettings {
        constructor(properties?: IGlobalSettings);
        public static create(properties?: IGlobalSettings): GlobalSettings;
        public static encode(message: IGlobalSettings, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): GlobalSettings;
        public static fromObject(object: { [k: string]: any }): GlobalSettings;
        public static toObject(message: GlobalSettings, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IGroupHistoryBundleInfo {
        deprecatedMessageHistoryBundle?: proto.Message.MessageHistoryBundle | null;
        processState?: proto.IProcessState | null;
    }
    export class GroupHistoryBundleInfo implements IGroupHistoryBundleInfo {
        constructor(properties?: IGroupHistoryBundleInfo);
        public static create(properties?: IGroupHistoryBundleInfo): GroupHistoryBundleInfo;
        public static encode(message: IGroupHistoryBundleInfo, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): GroupHistoryBundleInfo;
        public static fromObject(object: { [k: string]: any }): GroupHistoryBundleInfo;
        public static toObject(message: GroupHistoryBundleInfo, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace GroupHistoryBundleInfo {
        export enum ProcessState {
            NOT_INJECTED = 0,
            INJECTED = 1,
            INJECTED_PARTIAL = 2,
            INJECTION_FAILED = 3,
            INJECTION_FAILED_NO_RETRY = 4,
        }
        export type IProcessState = ProcessState;
    }
    export interface IGroupHistoryIndividualMessageInfo {
        bundleMessageKey?: proto.IMessageKey | null;
        editedAfterReceivedAsHistory?: boolean | null;
    }
    export class GroupHistoryIndividualMessageInfo implements IGroupHistoryIndividualMessageInfo {
        constructor(properties?: IGroupHistoryIndividualMessageInfo);
        public static create(properties?: IGroupHistoryIndividualMessageInfo): GroupHistoryIndividualMessageInfo;
        public static encode(message: IGroupHistoryIndividualMessageInfo, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): GroupHistoryIndividualMessageInfo;
        public static fromObject(object: { [k: string]: any }): GroupHistoryIndividualMessageInfo;
        public static toObject(message: GroupHistoryIndividualMessageInfo, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IGroupMention {
        groupJid?: string | null;
        groupSubject?: string | null;
    }
    export class GroupMention implements IGroupMention {
        constructor(properties?: IGroupMention);
        public static create(properties?: IGroupMention): GroupMention;
        public static encode(message: IGroupMention, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): GroupMention;
        public static fromObject(object: { [k: string]: any }): GroupMention;
        public static toObject(message: GroupMention, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IGroupParticipant {
        userJid?: string | null;
        rank?: proto.IRank | null;
        memberLabel?: proto.IMemberLabel | null;
    }
    export class GroupParticipant implements IGroupParticipant {
        constructor(properties?: IGroupParticipant);
        public static create(properties?: IGroupParticipant): GroupParticipant;
        public static encode(message: IGroupParticipant, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): GroupParticipant;
        public static fromObject(object: { [k: string]: any }): GroupParticipant;
        public static toObject(message: GroupParticipant, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace GroupParticipant {
        export enum Rank {
            REGULAR = 0,
            ADMIN = 1,
            SUPERADMIN = 2,
        }
        export type IRank = Rank;
    }
    export interface IHandshakeMessage {
        clientHello?: proto.IClientHello | null;
        serverHello?: proto.IServerHello | null;
        clientFinish?: proto.IClientFinish | null;
    }
    export class HandshakeMessage implements IHandshakeMessage {
        constructor(properties?: IHandshakeMessage);
        public static create(properties?: IHandshakeMessage): HandshakeMessage;
        public static encode(message: IHandshakeMessage, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): HandshakeMessage;
        public static fromObject(object: { [k: string]: any }): HandshakeMessage;
        public static toObject(message: HandshakeMessage, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace HandshakeMessage {
        export interface IClientFinish {
            static?: Uint8Array | null;
            payload?: Uint8Array | null;
            extendedCiphertext?: Uint8Array | null;
        }
        export class ClientFinish implements IClientFinish {
            constructor(properties?: IClientFinish);
            public static create(properties?: IClientFinish): ClientFinish;
            public static encode(message: IClientFinish, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): ClientFinish;
            public static fromObject(object: { [k: string]: any }): ClientFinish;
            public static toObject(message: ClientFinish, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IClientHello {
            ephemeral?: Uint8Array | null;
            static?: Uint8Array | null;
            payload?: Uint8Array | null;
            useExtended?: boolean | null;
            extendedCiphertext?: Uint8Array | null;
        }
        export class ClientHello implements IClientHello {
            constructor(properties?: IClientHello);
            public static create(properties?: IClientHello): ClientHello;
            public static encode(message: IClientHello, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): ClientHello;
            public static fromObject(object: { [k: string]: any }): ClientHello;
            public static toObject(message: ClientHello, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IServerHello {
            ephemeral?: Uint8Array | null;
            static?: Uint8Array | null;
            payload?: Uint8Array | null;
            extendedStatic?: Uint8Array | null;
        }
        export class ServerHello implements IServerHello {
            constructor(properties?: IServerHello);
            public static create(properties?: IServerHello): ServerHello;
            public static encode(message: IServerHello, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): ServerHello;
            public static fromObject(object: { [k: string]: any }): ServerHello;
            public static toObject(message: ServerHello, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
    }
    export interface IHistorySync {
        syncType?: proto.IHistorySyncType | null;
        conversations?: (proto.IConversation)[] | null;
        statusV3Messages?: (proto.IWebMessageInfo)[] | null;
        chunkOrder?: number | null;
        progress?: number | null;
        pushnames?: (proto.IPushname)[] | null;
        globalSettings?: proto.IGlobalSettings | null;
        threadIdUserSecret?: Uint8Array | null;
        threadDsTimeframeOffset?: number | null;
        recentStickers?: (proto.IStickerMetadata)[] | null;
        pastParticipants?: (proto.IPastParticipants)[] | null;
        callLogRecords?: (proto.ICallLogRecord)[] | null;
        aiWaitListState?: proto.IBotAIWaitListState | null;
        phoneNumberToLidMappings?: (proto.IPhoneNumberToLIDMapping)[] | null;
        companionMetaNonce?: string | null;
        shareableChatIdentifierEncryptionKey?: Uint8Array | null;
        accounts?: (proto.IAccount)[] | null;
    }
    export class HistorySync implements IHistorySync {
        constructor(properties?: IHistorySync);
        public static create(properties?: IHistorySync): HistorySync;
        public static encode(message: IHistorySync, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): HistorySync;
        public static fromObject(object: { [k: string]: any }): HistorySync;
        public static toObject(message: HistorySync, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace HistorySync {
        export enum BotAIWaitListState {
            IN_WAITLIST = 0,
            AI_AVAILABLE = 1,
        }
        export type IBotAIWaitListState = BotAIWaitListState;
        export enum HistorySyncType {
            INITIAL_BOOTSTRAP = 0,
            INITIAL_STATUS_V3 = 1,
            FULL = 2,
            RECENT = 3,
            PUSH_NAME = 4,
            NON_BLOCKING_DATA = 5,
            ON_DEMAND = 6,
        }
        export type IHistorySyncType = HistorySyncType;
    }
    export interface IHistorySyncMsg {
        message?: proto.IWebMessageInfo | null;
        msgOrderId?: number | Long | null;
    }
    export class HistorySyncMsg implements IHistorySyncMsg {
        constructor(properties?: IHistorySyncMsg);
        public static create(properties?: IHistorySyncMsg): HistorySyncMsg;
        public static encode(message: IHistorySyncMsg, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): HistorySyncMsg;
        public static fromObject(object: { [k: string]: any }): HistorySyncMsg;
        public static toObject(message: HistorySyncMsg, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IHydratedTemplateButton {
        index?: number | null;
        quickReplyButton?: proto.HydratedTemplateButton.HydratedQuickReplyButton | null;
        urlButton?: proto.HydratedTemplateButton.HydratedURLButton | null;
        callButton?: proto.HydratedTemplateButton.HydratedCallButton | null;
    }
    export class HydratedTemplateButton implements IHydratedTemplateButton {
        constructor(properties?: IHydratedTemplateButton);
        public static create(properties?: IHydratedTemplateButton): HydratedTemplateButton;
        public static encode(message: IHydratedTemplateButton, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): HydratedTemplateButton;
        public static fromObject(object: { [k: string]: any }): HydratedTemplateButton;
        public static toObject(message: HydratedTemplateButton, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace HydratedTemplateButton {
        export interface IHydratedCallButton {
            displayText?: string | null;
            phoneNumber?: string | null;
        }
        export class HydratedCallButton implements IHydratedCallButton {
            constructor(properties?: IHydratedCallButton);
            public static create(properties?: IHydratedCallButton): HydratedCallButton;
            public static encode(message: IHydratedCallButton, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): HydratedCallButton;
            public static fromObject(object: { [k: string]: any }): HydratedCallButton;
            public static toObject(message: HydratedCallButton, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IHydratedQuickReplyButton {
            displayText?: string | null;
            id?: string | null;
        }
        export class HydratedQuickReplyButton implements IHydratedQuickReplyButton {
            constructor(properties?: IHydratedQuickReplyButton);
            public static create(properties?: IHydratedQuickReplyButton): HydratedQuickReplyButton;
            public static encode(message: IHydratedQuickReplyButton, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): HydratedQuickReplyButton;
            public static fromObject(object: { [k: string]: any }): HydratedQuickReplyButton;
            public static toObject(message: HydratedQuickReplyButton, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IHydratedURLButton {
            displayText?: string | null;
            url?: string | null;
            consentedUsersUrl?: string | null;
            webviewPresentation?: proto.IWebviewPresentationType | null;
        }
        export class HydratedURLButton implements IHydratedURLButton {
            constructor(properties?: IHydratedURLButton);
            public static create(properties?: IHydratedURLButton): HydratedURLButton;
            public static encode(message: IHydratedURLButton, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): HydratedURLButton;
            public static fromObject(object: { [k: string]: any }): HydratedURLButton;
            public static toObject(message: HydratedURLButton, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace HydratedURLButton {
            export enum WebviewPresentationType {
                FULL = 1,
                TALL = 2,
                COMPACT = 3,
            }
            export type IWebviewPresentationType = WebviewPresentationType;
        }
    }
    export interface IIdentityKeyPairStructure {
        publicKey?: Uint8Array | null;
        privateKey?: Uint8Array | null;
    }
    export class IdentityKeyPairStructure implements IIdentityKeyPairStructure {
        constructor(properties?: IIdentityKeyPairStructure);
        public static create(properties?: IIdentityKeyPairStructure): IdentityKeyPairStructure;
        public static encode(message: IIdentityKeyPairStructure, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): IdentityKeyPairStructure;
        public static fromObject(object: { [k: string]: any }): IdentityKeyPairStructure;
        public static toObject(message: IdentityKeyPairStructure, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IInThreadSurveyMetadata {
        tessaSessionId?: string | null;
        simonSessionId?: string | null;
        simonSurveyId?: string | null;
        tessaRootId?: string | null;
        requestId?: string | null;
        tessaEvent?: string | null;
        invitationHeaderText?: string | null;
        invitationBodyText?: string | null;
        invitationCtaText?: string | null;
        invitationCtaUrl?: string | null;
        surveyTitle?: string | null;
        questions?: (proto.IInThreadSurveyQuestion)[] | null;
        surveyContinueButtonText?: string | null;
        surveySubmitButtonText?: string | null;
        privacyStatementFull?: string | null;
        privacyStatementParts?: (proto.IInThreadSurveyPrivacyStatementPart)[] | null;
        feedbackToastText?: string | null;
    }
    export class InThreadSurveyMetadata implements IInThreadSurveyMetadata {
        constructor(properties?: IInThreadSurveyMetadata);
        public static create(properties?: IInThreadSurveyMetadata): InThreadSurveyMetadata;
        public static encode(message: IInThreadSurveyMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): InThreadSurveyMetadata;
        public static fromObject(object: { [k: string]: any }): InThreadSurveyMetadata;
        public static toObject(message: InThreadSurveyMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace InThreadSurveyMetadata {
        export interface IInThreadSurveyOption {
            stringValue?: string | null;
            numericValue?: number | null;
            textTranslated?: string | null;
        }
        export class InThreadSurveyOption implements IInThreadSurveyOption {
            constructor(properties?: IInThreadSurveyOption);
            public static create(properties?: IInThreadSurveyOption): InThreadSurveyOption;
            public static encode(message: IInThreadSurveyOption, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): InThreadSurveyOption;
            public static fromObject(object: { [k: string]: any }): InThreadSurveyOption;
            public static toObject(message: InThreadSurveyOption, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IInThreadSurveyPrivacyStatementPart {
            text?: string | null;
            url?: string | null;
        }
        export class InThreadSurveyPrivacyStatementPart implements IInThreadSurveyPrivacyStatementPart {
            constructor(properties?: IInThreadSurveyPrivacyStatementPart);
            public static create(properties?: IInThreadSurveyPrivacyStatementPart): InThreadSurveyPrivacyStatementPart;
            public static encode(message: IInThreadSurveyPrivacyStatementPart, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): InThreadSurveyPrivacyStatementPart;
            public static fromObject(object: { [k: string]: any }): InThreadSurveyPrivacyStatementPart;
            public static toObject(message: InThreadSurveyPrivacyStatementPart, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IInThreadSurveyQuestion {
            questionText?: string | null;
            questionId?: string | null;
            questionOptions?: (proto.InThreadSurveyMetadata.InThreadSurveyOption)[] | null;
        }
        export class InThreadSurveyQuestion implements IInThreadSurveyQuestion {
            constructor(properties?: IInThreadSurveyQuestion);
            public static create(properties?: IInThreadSurveyQuestion): InThreadSurveyQuestion;
            public static encode(message: IInThreadSurveyQuestion, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): InThreadSurveyQuestion;
            public static fromObject(object: { [k: string]: any }): InThreadSurveyQuestion;
            public static toObject(message: InThreadSurveyQuestion, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
    }
    export interface IInteractiveAnnotation {
        polygonVertices?: (proto.IPoint)[] | null;
        shouldSkipConfirmation?: boolean | null;
        embeddedContent?: proto.IEmbeddedContent | null;
        statusLinkType?: proto.IStatusLinkType | null;
        location?: proto.ILocation | null;
        newsletter?: proto.ContextInfo.ForwardedNewsletterMessageInfo | null;
        embeddedAction?: boolean | null;
        tapAction?: proto.ITapLinkAction | null;
    }
    export class InteractiveAnnotation implements IInteractiveAnnotation {
        constructor(properties?: IInteractiveAnnotation);
        public static create(properties?: IInteractiveAnnotation): InteractiveAnnotation;
        public static encode(message: IInteractiveAnnotation, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): InteractiveAnnotation;
        public static fromObject(object: { [k: string]: any }): InteractiveAnnotation;
        public static toObject(message: InteractiveAnnotation, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace InteractiveAnnotation {
        export enum StatusLinkType {
            RASTERIZED_LINK_PREVIEW = 1,
            RASTERIZED_LINK_TRUNCATED = 2,
            RASTERIZED_LINK_FULL_URL = 3,
        }
        export type IStatusLinkType = StatusLinkType;
    }
    export interface IInteractiveMessageAdditionalMetadata {
        isGalaxyFlowCompleted?: boolean | null;
    }
    export class InteractiveMessageAdditionalMetadata implements IInteractiveMessageAdditionalMetadata {
        constructor(properties?: IInteractiveMessageAdditionalMetadata);
        public static create(properties?: IInteractiveMessageAdditionalMetadata): InteractiveMessageAdditionalMetadata;
        public static encode(message: IInteractiveMessageAdditionalMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): InteractiveMessageAdditionalMetadata;
        public static fromObject(object: { [k: string]: any }): InteractiveMessageAdditionalMetadata;
        public static toObject(message: InteractiveMessageAdditionalMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IKeepInChat {
        keepType?: proto.IKeepType | null;
        serverTimestamp?: number | Long | null;
        key?: proto.IMessageKey | null;
        deviceJid?: string | null;
        clientTimestampMs?: number | Long | null;
        serverTimestampMs?: number | Long | null;
    }
    export class KeepInChat implements IKeepInChat {
        constructor(properties?: IKeepInChat);
        public static create(properties?: IKeepInChat): KeepInChat;
        public static encode(message: IKeepInChat, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): KeepInChat;
        public static fromObject(object: { [k: string]: any }): KeepInChat;
        public static toObject(message: KeepInChat, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export enum KeepType {
        UNKNOWN = 0,
        KEEP_FOR_ALL = 1,
        UNDO_KEEP_FOR_ALL = 2,
    }
    export type IKeepType = KeepType;
    export interface IKeyExchangeMessage {
        id?: number | null;
        baseKey?: Uint8Array | null;
        ratchetKey?: Uint8Array | null;
        identityKey?: Uint8Array | null;
        baseKeySignature?: Uint8Array | null;
    }
    export class KeyExchangeMessage implements IKeyExchangeMessage {
        constructor(properties?: IKeyExchangeMessage);
        public static create(properties?: IKeyExchangeMessage): KeyExchangeMessage;
        public static encode(message: IKeyExchangeMessage, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): KeyExchangeMessage;
        public static fromObject(object: { [k: string]: any }): KeyExchangeMessage;
        public static toObject(message: KeyExchangeMessage, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IKeyId {
        id?: Uint8Array | null;
    }
    export class KeyId implements IKeyId {
        constructor(properties?: IKeyId);
        public static create(properties?: IKeyId): KeyId;
        public static encode(message: IKeyId, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): KeyId;
        public static fromObject(object: { [k: string]: any }): KeyId;
        public static toObject(message: KeyId, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface ILIDMigrationMapping {
        pn?: number | Long | null;
        assignedLid?: number | Long | null;
        latestLid?: number | Long | null;
    }
    export class LIDMigrationMapping implements ILIDMigrationMapping {
        constructor(properties?: ILIDMigrationMapping);
        public static create(properties?: ILIDMigrationMapping): LIDMigrationMapping;
        public static encode(message: ILIDMigrationMapping, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): LIDMigrationMapping;
        public static fromObject(object: { [k: string]: any }): LIDMigrationMapping;
        public static toObject(message: LIDMigrationMapping, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface ILIDMigrationMappingSyncMessage {
        encodedMappingPayload?: Uint8Array | null;
    }
    export class LIDMigrationMappingSyncMessage implements ILIDMigrationMappingSyncMessage {
        constructor(properties?: ILIDMigrationMappingSyncMessage);
        public static create(properties?: ILIDMigrationMappingSyncMessage): LIDMigrationMappingSyncMessage;
        public static encode(message: ILIDMigrationMappingSyncMessage, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): LIDMigrationMappingSyncMessage;
        public static fromObject(object: { [k: string]: any }): LIDMigrationMappingSyncMessage;
        public static toObject(message: LIDMigrationMappingSyncMessage, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface ILIDMigrationMappingSyncPayload {
        pnToLidMappings?: (proto.ILIDMigrationMapping)[] | null;
        chatDbMigrationTimestamp?: number | Long | null;
    }
    export class LIDMigrationMappingSyncPayload implements ILIDMigrationMappingSyncPayload {
        constructor(properties?: ILIDMigrationMappingSyncPayload);
        public static create(properties?: ILIDMigrationMappingSyncPayload): LIDMigrationMappingSyncPayload;
        public static encode(message: ILIDMigrationMappingSyncPayload, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): LIDMigrationMappingSyncPayload;
        public static fromObject(object: { [k: string]: any }): LIDMigrationMappingSyncPayload;
        public static toObject(message: LIDMigrationMappingSyncPayload, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface ILegacyMessage {
        eventResponseMessage?: proto.Message.EventResponseMessage | null;
        pollVote?: proto.Message.PollVoteMessage | null;
    }
    export class LegacyMessage implements ILegacyMessage {
        constructor(properties?: ILegacyMessage);
        public static create(properties?: ILegacyMessage): LegacyMessage;
        public static encode(message: ILegacyMessage, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): LegacyMessage;
        public static fromObject(object: { [k: string]: any }): LegacyMessage;
        public static toObject(message: LegacyMessage, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface ILimitSharing {
        sharingLimited?: boolean | null;
        trigger?: proto.ITriggerType | null;
        limitSharingSettingTimestamp?: number | Long | null;
        initiatedByMe?: boolean | null;
    }
    export class LimitSharing implements ILimitSharing {
        constructor(properties?: ILimitSharing);
        public static create(properties?: ILimitSharing): LimitSharing;
        public static encode(message: ILimitSharing, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): LimitSharing;
        public static fromObject(object: { [k: string]: any }): LimitSharing;
        public static toObject(message: LimitSharing, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace LimitSharing {
        export enum TriggerType {
            UNKNOWN = 0,
            CHAT_SETTING = 1,
            BIZ_SUPPORTS_FB_HOSTING = 2,
            UNKNOWN_GROUP = 3,
        }
        export type ITriggerType = TriggerType;
    }
    export interface ILocalizedName {
        lg?: string | null;
        lc?: string | null;
        verifiedName?: string | null;
    }
    export class LocalizedName implements ILocalizedName {
        constructor(properties?: ILocalizedName);
        public static create(properties?: ILocalizedName): LocalizedName;
        public static encode(message: ILocalizedName, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): LocalizedName;
        public static fromObject(object: { [k: string]: any }): LocalizedName;
        public static toObject(message: LocalizedName, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface ILocation {
        degreesLatitude?: number | null;
        degreesLongitude?: number | null;
        name?: string | null;
    }
    export class Location implements ILocation {
        constructor(properties?: ILocation);
        public static create(properties?: ILocation): Location;
        public static encode(message: ILocation, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): Location;
        public static fromObject(object: { [k: string]: any }): Location;
        public static toObject(message: Location, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IMediaData {
        localPath?: string | null;
    }
    export class MediaData implements IMediaData {
        constructor(properties?: IMediaData);
        public static create(properties?: IMediaData): MediaData;
        public static encode(message: IMediaData, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): MediaData;
        public static fromObject(object: { [k: string]: any }): MediaData;
        public static toObject(message: MediaData, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IMediaNotifyMessage {
        expressPathUrl?: string | null;
        fileEncSha256?: Uint8Array | null;
        fileLength?: number | Long | null;
    }
    export class MediaNotifyMessage implements IMediaNotifyMessage {
        constructor(properties?: IMediaNotifyMessage);
        public static create(properties?: IMediaNotifyMessage): MediaNotifyMessage;
        public static encode(message: IMediaNotifyMessage, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): MediaNotifyMessage;
        public static fromObject(object: { [k: string]: any }): MediaNotifyMessage;
        public static toObject(message: MediaNotifyMessage, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IMediaRetryNotification {
        stanzaId?: string | null;
        directPath?: string | null;
        result?: proto.IResultType | null;
        messageSecret?: Uint8Array | null;
    }
    export class MediaRetryNotification implements IMediaRetryNotification {
        constructor(properties?: IMediaRetryNotification);
        public static create(properties?: IMediaRetryNotification): MediaRetryNotification;
        public static encode(message: IMediaRetryNotification, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): MediaRetryNotification;
        public static fromObject(object: { [k: string]: any }): MediaRetryNotification;
        public static toObject(message: MediaRetryNotification, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace MediaRetryNotification {
        export enum ResultType {
            GENERAL_ERROR = 0,
            SUCCESS = 1,
            NOT_FOUND = 2,
            DECRYPTION_ERROR = 3,
        }
        export type IResultType = ResultType;
    }
    export enum MediaVisibility {
        DEFAULT = 0,
        OFF = 1,
        ON = 2,
    }
    export type IMediaVisibility = MediaVisibility;
    export interface IMemberLabel {
        label?: string | null;
        labelTimestamp?: number | Long | null;
    }
    export class MemberLabel implements IMemberLabel {
        constructor(properties?: IMemberLabel);
        public static create(properties?: IMemberLabel): MemberLabel;
        public static encode(message: IMemberLabel, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): MemberLabel;
        public static fromObject(object: { [k: string]: any }): MemberLabel;
        public static toObject(message: MemberLabel, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IMessage {
        conversation?: string | null;
        senderKeyDistributionMessage?: proto.ISenderKeyDistributionMessage | null;
        imageMessage?: proto.IImageMessage | null;
        contactMessage?: proto.IContactMessage | null;
        locationMessage?: proto.ILocationMessage | null;
        extendedTextMessage?: proto.IExtendedTextMessage | null;
        documentMessage?: proto.IDocumentMessage | null;
        audioMessage?: proto.IAudioMessage | null;
        videoMessage?: proto.IVideoMessage | null;
        call?: proto.ICall | null;
        chat?: proto.IChat | null;
        protocolMessage?: proto.IProtocolMessage | null;
        contactsArrayMessage?: proto.IContactsArrayMessage | null;
        highlyStructuredMessage?: proto.IHighlyStructuredMessage | null;
        fastRatchetKeySenderKeyDistributionMessage?: proto.ISenderKeyDistributionMessage | null;
        sendPaymentMessage?: proto.ISendPaymentMessage | null;
        liveLocationMessage?: proto.ILiveLocationMessage | null;
        requestPaymentMessage?: proto.IRequestPaymentMessage | null;
        declinePaymentRequestMessage?: proto.IDeclinePaymentRequestMessage | null;
        cancelPaymentRequestMessage?: proto.ICancelPaymentRequestMessage | null;
        templateMessage?: proto.ITemplateMessage | null;
        stickerMessage?: proto.IStickerMessage | null;
        groupInviteMessage?: proto.IGroupInviteMessage | null;
        templateButtonReplyMessage?: proto.ITemplateButtonReplyMessage | null;
        productMessage?: proto.IProductMessage | null;
        deviceSentMessage?: proto.IDeviceSentMessage | null;
        messageContextInfo?: proto.IMessageContextInfo | null;
        listMessage?: proto.IListMessage | null;
        viewOnceMessage?: proto.IFutureProofMessage | null;
        orderMessage?: proto.IOrderMessage | null;
        listResponseMessage?: proto.IListResponseMessage | null;
        ephemeralMessage?: proto.IFutureProofMessage | null;
        invoiceMessage?: proto.IInvoiceMessage | null;
        buttonsMessage?: proto.IButtonsMessage | null;
        buttonsResponseMessage?: proto.IButtonsResponseMessage | null;
        paymentInviteMessage?: proto.IPaymentInviteMessage | null;
        interactiveMessage?: proto.IInteractiveMessage | null;
        reactionMessage?: proto.IReactionMessage | null;
        stickerSyncRmrMessage?: proto.IStickerSyncRMRMessage | null;
        interactiveResponseMessage?: proto.IInteractiveResponseMessage | null;
        pollCreationMessage?: proto.IPollCreationMessage | null;
        pollUpdateMessage?: proto.IPollUpdateMessage | null;
        keepInChatMessage?: proto.IKeepInChatMessage | null;
        documentWithCaptionMessage?: proto.IFutureProofMessage | null;
        requestPhoneNumberMessage?: proto.IRequestPhoneNumberMessage | null;
        viewOnceMessageV2?: proto.IFutureProofMessage | null;
        encReactionMessage?: proto.IEncReactionMessage | null;
        editedMessage?: proto.IFutureProofMessage | null;
        viewOnceMessageV2Extension?: proto.IFutureProofMessage | null;
        pollCreationMessageV2?: proto.IPollCreationMessage | null;
        scheduledCallCreationMessage?: proto.IScheduledCallCreationMessage | null;
        groupMentionedMessage?: proto.IFutureProofMessage | null;
        pinInChatMessage?: proto.IPinInChatMessage | null;
        pollCreationMessageV3?: proto.IPollCreationMessage | null;
        scheduledCallEditMessage?: proto.IScheduledCallEditMessage | null;
        ptvMessage?: proto.IVideoMessage | null;
        botInvokeMessage?: proto.IFutureProofMessage | null;
        callLogMesssage?: proto.ICallLogMessage | null;
        messageHistoryBundle?: proto.IMessageHistoryBundle | null;
        encCommentMessage?: proto.IEncCommentMessage | null;
        bcallMessage?: proto.IBCallMessage | null;
        lottieStickerMessage?: proto.IFutureProofMessage | null;
        eventMessage?: proto.IEventMessage | null;
        encEventResponseMessage?: proto.IEncEventResponseMessage | null;
        commentMessage?: proto.ICommentMessage | null;
        newsletterAdminInviteMessage?: proto.INewsletterAdminInviteMessage | null;
        placeholderMessage?: proto.IPlaceholderMessage | null;
        secretEncryptedMessage?: proto.ISecretEncryptedMessage | null;
        albumMessage?: proto.IAlbumMessage | null;
        eventCoverImage?: proto.IFutureProofMessage | null;
        stickerPackMessage?: proto.IStickerPackMessage | null;
        statusMentionMessage?: proto.IFutureProofMessage | null;
        pollResultSnapshotMessage?: proto.IPollResultSnapshotMessage | null;
        pollCreationOptionImageMessage?: proto.IFutureProofMessage | null;
        associatedChildMessage?: proto.IFutureProofMessage | null;
        groupStatusMentionMessage?: proto.IFutureProofMessage | null;
        pollCreationMessageV4?: proto.IFutureProofMessage | null;
        statusAddYours?: proto.IFutureProofMessage | null;
        groupStatusMessage?: proto.IFutureProofMessage | null;
        richResponseMessage?: proto.IAIRichResponseMessage | null;
        statusNotificationMessage?: proto.IStatusNotificationMessage | null;
        limitSharingMessage?: proto.IFutureProofMessage | null;
        botTaskMessage?: proto.IFutureProofMessage | null;
        questionMessage?: proto.IFutureProofMessage | null;
        messageHistoryNotice?: proto.IMessageHistoryNotice | null;
        groupStatusMessageV2?: proto.IFutureProofMessage | null;
        botForwardedMessage?: proto.IFutureProofMessage | null;
        statusQuestionAnswerMessage?: proto.IStatusQuestionAnswerMessage | null;
        questionReplyMessage?: proto.IFutureProofMessage | null;
        questionResponseMessage?: proto.IQuestionResponseMessage | null;
        statusQuotedMessage?: proto.IStatusQuotedMessage | null;
        statusStickerInteractionMessage?: proto.IStatusStickerInteractionMessage | null;
        pollCreationMessageV5?: proto.IPollCreationMessage | null;
        newsletterFollowerInviteMessageV2?: proto.INewsletterFollowerInviteMessage | null;
        pollResultSnapshotMessageV3?: proto.IPollResultSnapshotMessage | null;
    }
    export class Message implements IMessage {
        constructor(properties?: IMessage);
        public static create(properties?: IMessage): Message;
        public static encode(message: IMessage, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): Message;
        public static fromObject(object: { [k: string]: any }): Message;
        public static toObject(message: Message, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace Message {
        export interface IAlbumMessage {
            expectedImageCount?: number | null;
            expectedVideoCount?: number | null;
            contextInfo?: proto.IContextInfo | null;
        }
        export class AlbumMessage implements IAlbumMessage {
            constructor(properties?: IAlbumMessage);
            public static create(properties?: IAlbumMessage): AlbumMessage;
            public static encode(message: IAlbumMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): AlbumMessage;
            public static fromObject(object: { [k: string]: any }): AlbumMessage;
            public static toObject(message: AlbumMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IAppStateFatalExceptionNotification {
            collectionNames?: (string)[] | null;
            timestamp?: number | Long | null;
        }
        export class AppStateFatalExceptionNotification implements IAppStateFatalExceptionNotification {
            constructor(properties?: IAppStateFatalExceptionNotification);
            public static create(properties?: IAppStateFatalExceptionNotification): AppStateFatalExceptionNotification;
            public static encode(message: IAppStateFatalExceptionNotification, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): AppStateFatalExceptionNotification;
            public static fromObject(object: { [k: string]: any }): AppStateFatalExceptionNotification;
            public static toObject(message: AppStateFatalExceptionNotification, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IAppStateSyncKey {
            keyId?: proto.Message.AppStateSyncKeyId | null;
            keyData?: proto.Message.AppStateSyncKeyData | null;
        }
        export class AppStateSyncKey implements IAppStateSyncKey {
            constructor(properties?: IAppStateSyncKey);
            public static create(properties?: IAppStateSyncKey): AppStateSyncKey;
            public static encode(message: IAppStateSyncKey, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): AppStateSyncKey;
            public static fromObject(object: { [k: string]: any }): AppStateSyncKey;
            public static toObject(message: AppStateSyncKey, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IAppStateSyncKeyData {
            keyData?: Uint8Array | null;
            fingerprint?: proto.Message.AppStateSyncKeyFingerprint | null;
            timestamp?: number | Long | null;
        }
        export class AppStateSyncKeyData implements IAppStateSyncKeyData {
            constructor(properties?: IAppStateSyncKeyData);
            public static create(properties?: IAppStateSyncKeyData): AppStateSyncKeyData;
            public static encode(message: IAppStateSyncKeyData, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): AppStateSyncKeyData;
            public static fromObject(object: { [k: string]: any }): AppStateSyncKeyData;
            public static toObject(message: AppStateSyncKeyData, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IAppStateSyncKeyFingerprint {
            rawId?: number | null;
            currentIndex?: number | null;
            deviceIndexes?: (number)[] | null;
        }
        export class AppStateSyncKeyFingerprint implements IAppStateSyncKeyFingerprint {
            constructor(properties?: IAppStateSyncKeyFingerprint);
            public static create(properties?: IAppStateSyncKeyFingerprint): AppStateSyncKeyFingerprint;
            public static encode(message: IAppStateSyncKeyFingerprint, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): AppStateSyncKeyFingerprint;
            public static fromObject(object: { [k: string]: any }): AppStateSyncKeyFingerprint;
            public static toObject(message: AppStateSyncKeyFingerprint, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IAppStateSyncKeyId {
            keyId?: Uint8Array | null;
        }
        export class AppStateSyncKeyId implements IAppStateSyncKeyId {
            constructor(properties?: IAppStateSyncKeyId);
            public static create(properties?: IAppStateSyncKeyId): AppStateSyncKeyId;
            public static encode(message: IAppStateSyncKeyId, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): AppStateSyncKeyId;
            public static fromObject(object: { [k: string]: any }): AppStateSyncKeyId;
            public static toObject(message: AppStateSyncKeyId, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IAppStateSyncKeyRequest {
            keyIds?: (proto.Message.AppStateSyncKeyId)[] | null;
        }
        export class AppStateSyncKeyRequest implements IAppStateSyncKeyRequest {
            constructor(properties?: IAppStateSyncKeyRequest);
            public static create(properties?: IAppStateSyncKeyRequest): AppStateSyncKeyRequest;
            public static encode(message: IAppStateSyncKeyRequest, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): AppStateSyncKeyRequest;
            public static fromObject(object: { [k: string]: any }): AppStateSyncKeyRequest;
            public static toObject(message: AppStateSyncKeyRequest, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IAppStateSyncKeyShare {
            keys?: (proto.Message.AppStateSyncKey)[] | null;
        }
        export class AppStateSyncKeyShare implements IAppStateSyncKeyShare {
            constructor(properties?: IAppStateSyncKeyShare);
            public static create(properties?: IAppStateSyncKeyShare): AppStateSyncKeyShare;
            public static encode(message: IAppStateSyncKeyShare, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): AppStateSyncKeyShare;
            public static fromObject(object: { [k: string]: any }): AppStateSyncKeyShare;
            public static toObject(message: AppStateSyncKeyShare, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IAudioMessage {
            url?: string | null;
            mimetype?: string | null;
            fileSha256?: Uint8Array | null;
            fileLength?: number | Long | null;
            seconds?: number | null;
            ptt?: boolean | null;
            mediaKey?: Uint8Array | null;
            fileEncSha256?: Uint8Array | null;
            directPath?: string | null;
            mediaKeyTimestamp?: number | Long | null;
            contextInfo?: proto.IContextInfo | null;
            streamingSidecar?: Uint8Array | null;
            waveform?: Uint8Array | null;
            backgroundArgb?: number | null;
            viewOnce?: boolean | null;
            accessibilityLabel?: string | null;
            mediaKeyDomain?: proto.Message.MediaKeyDomain | null;
        }
        export class AudioMessage implements IAudioMessage {
            constructor(properties?: IAudioMessage);
            public static create(properties?: IAudioMessage): AudioMessage;
            public static encode(message: IAudioMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): AudioMessage;
            public static fromObject(object: { [k: string]: any }): AudioMessage;
            public static toObject(message: AudioMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IBCallMessage {
            sessionId?: string | null;
            mediaType?: proto.IMediaType | null;
            masterKey?: Uint8Array | null;
            caption?: string | null;
        }
        export class BCallMessage implements IBCallMessage {
            constructor(properties?: IBCallMessage);
            public static create(properties?: IBCallMessage): BCallMessage;
            public static encode(message: IBCallMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): BCallMessage;
            public static fromObject(object: { [k: string]: any }): BCallMessage;
            public static toObject(message: BCallMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace BCallMessage {
            export enum MediaType {
                UNKNOWN = 0,
                AUDIO = 1,
                VIDEO = 2,
            }
            export type IMediaType = MediaType;
        }
        export interface IButtonsMessage {
            contentText?: string | null;
            footerText?: string | null;
            contextInfo?: proto.IContextInfo | null;
            buttons?: (proto.IButton)[] | null;
            headerType?: proto.IHeaderType | null;
            text?: string | null;
            documentMessage?: proto.Message.DocumentMessage | null;
            imageMessage?: proto.Message.ImageMessage | null;
            videoMessage?: proto.Message.VideoMessage | null;
            locationMessage?: proto.Message.LocationMessage | null;
        }
        export class ButtonsMessage implements IButtonsMessage {
            constructor(properties?: IButtonsMessage);
            public static create(properties?: IButtonsMessage): ButtonsMessage;
            public static encode(message: IButtonsMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): ButtonsMessage;
            public static fromObject(object: { [k: string]: any }): ButtonsMessage;
            public static toObject(message: ButtonsMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace ButtonsMessage {
            export interface IButton {
                buttonId?: string | null;
                buttonText?: proto.IButtonText | null;
                type?: proto.IType | null;
                nativeFlowInfo?: proto.INativeFlowInfo | null;
            }
            export class Button implements IButton {
                constructor(properties?: IButton);
                public static create(properties?: IButton): Button;
                public static encode(message: IButton, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): Button;
                public static fromObject(object: { [k: string]: any }): Button;
                public static toObject(message: Button, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export namespace Button {
                export interface IButtonText {
                    displayText?: string | null;
                }
                export class ButtonText implements IButtonText {
                    constructor(properties?: IButtonText);
                    public static create(properties?: IButtonText): ButtonText;
                    public static encode(message: IButtonText, writer?: any): any;
                    public static decode(reader: Uint8Array | any, length?: number): ButtonText;
                    public static fromObject(object: { [k: string]: any }): ButtonText;
                    public static toObject(message: ButtonText, options?: any): { [k: string]: any };
                    public static verify(message: { [k: string]: any }): string | null;
                }
                export interface INativeFlowInfo {
                    name?: string | null;
                    paramsJson?: string | null;
                }
                export class NativeFlowInfo implements INativeFlowInfo {
                    constructor(properties?: INativeFlowInfo);
                    public static create(properties?: INativeFlowInfo): NativeFlowInfo;
                    public static encode(message: INativeFlowInfo, writer?: any): any;
                    public static decode(reader: Uint8Array | any, length?: number): NativeFlowInfo;
                    public static fromObject(object: { [k: string]: any }): NativeFlowInfo;
                    public static toObject(message: NativeFlowInfo, options?: any): { [k: string]: any };
                    public static verify(message: { [k: string]: any }): string | null;
                }
                export enum Type {
                    UNKNOWN = 0,
                    RESPONSE = 1,
                    NATIVE_FLOW = 2,
                }
                export type IType = Type;
            }
            export enum HeaderType {
                UNKNOWN = 0,
                EMPTY = 1,
                TEXT = 2,
                DOCUMENT = 3,
                IMAGE = 4,
                VIDEO = 5,
                LOCATION = 6,
            }
            export type IHeaderType = HeaderType;
        }
        export interface IButtonsResponseMessage {
            selectedButtonId?: string | null;
            contextInfo?: proto.IContextInfo | null;
            type?: proto.IType | null;
            selectedDisplayText?: string | null;
        }
        export class ButtonsResponseMessage implements IButtonsResponseMessage {
            constructor(properties?: IButtonsResponseMessage);
            public static create(properties?: IButtonsResponseMessage): ButtonsResponseMessage;
            public static encode(message: IButtonsResponseMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): ButtonsResponseMessage;
            public static fromObject(object: { [k: string]: any }): ButtonsResponseMessage;
            public static toObject(message: ButtonsResponseMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace ButtonsResponseMessage {
            export enum Type {
                UNKNOWN = 0,
                DISPLAY_TEXT = 1,
            }
            export type IType = Type;
        }
        export interface ICall {
            callKey?: Uint8Array | null;
            conversionSource?: string | null;
            conversionData?: Uint8Array | null;
            conversionDelaySeconds?: number | null;
            ctwaSignals?: string | null;
            ctwaPayload?: Uint8Array | null;
            contextInfo?: proto.IContextInfo | null;
            nativeFlowCallButtonPayload?: string | null;
            deeplinkPayload?: string | null;
        }
        export class Call implements ICall {
            constructor(properties?: ICall);
            public static create(properties?: ICall): Call;
            public static encode(message: ICall, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): Call;
            public static fromObject(object: { [k: string]: any }): Call;
            public static toObject(message: Call, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface ICallLogMessage {
            isVideo?: boolean | null;
            callOutcome?: proto.ICallOutcome | null;
            durationSecs?: number | Long | null;
            callType?: proto.ICallType | null;
            participants?: (proto.ICallParticipant)[] | null;
        }
        export class CallLogMessage implements ICallLogMessage {
            constructor(properties?: ICallLogMessage);
            public static create(properties?: ICallLogMessage): CallLogMessage;
            public static encode(message: ICallLogMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): CallLogMessage;
            public static fromObject(object: { [k: string]: any }): CallLogMessage;
            public static toObject(message: CallLogMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace CallLogMessage {
            export enum CallOutcome {
                CONNECTED = 0,
                MISSED = 1,
                FAILED = 2,
                REJECTED = 3,
                ACCEPTED_ELSEWHERE = 4,
                ONGOING = 5,
                SILENCED_BY_DND = 6,
                SILENCED_UNKNOWN_CALLER = 7,
            }
            export type ICallOutcome = CallOutcome;
            export interface ICallParticipant {
                jid?: string | null;
                callOutcome?: proto.Message.CallLogMessage.CallOutcome | null;
            }
            export class CallParticipant implements ICallParticipant {
                constructor(properties?: ICallParticipant);
                public static create(properties?: ICallParticipant): CallParticipant;
                public static encode(message: ICallParticipant, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): CallParticipant;
                public static fromObject(object: { [k: string]: any }): CallParticipant;
                public static toObject(message: CallParticipant, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export enum CallType {
                REGULAR = 0,
                SCHEDULED_CALL = 1,
                VOICE_CHAT = 2,
            }
            export type ICallType = CallType;
        }
        export interface ICancelPaymentRequestMessage {
            key?: proto.IMessageKey | null;
        }
        export class CancelPaymentRequestMessage implements ICancelPaymentRequestMessage {
            constructor(properties?: ICancelPaymentRequestMessage);
            public static create(properties?: ICancelPaymentRequestMessage): CancelPaymentRequestMessage;
            public static encode(message: ICancelPaymentRequestMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): CancelPaymentRequestMessage;
            public static fromObject(object: { [k: string]: any }): CancelPaymentRequestMessage;
            public static toObject(message: CancelPaymentRequestMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IChat {
            displayName?: string | null;
            id?: string | null;
        }
        export class Chat implements IChat {
            constructor(properties?: IChat);
            public static create(properties?: IChat): Chat;
            public static encode(message: IChat, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): Chat;
            public static fromObject(object: { [k: string]: any }): Chat;
            public static toObject(message: Chat, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface ICloudAPIThreadControlNotification {
            status?: proto.ICloudAPIThreadControl | null;
            senderNotificationTimestampMs?: number | Long | null;
            consumerLid?: string | null;
            consumerPhoneNumber?: string | null;
            notificationContent?: proto.ICloudAPIThreadControlNotificationContent | null;
            shouldSuppressNotification?: boolean | null;
        }
        export class CloudAPIThreadControlNotification implements ICloudAPIThreadControlNotification {
            constructor(properties?: ICloudAPIThreadControlNotification);
            public static create(properties?: ICloudAPIThreadControlNotification): CloudAPIThreadControlNotification;
            public static encode(message: ICloudAPIThreadControlNotification, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): CloudAPIThreadControlNotification;
            public static fromObject(object: { [k: string]: any }): CloudAPIThreadControlNotification;
            public static toObject(message: CloudAPIThreadControlNotification, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace CloudAPIThreadControlNotification {
            export enum CloudAPIThreadControl {
                UNKNOWN = 0,
                CONTROL_PASSED = 1,
                CONTROL_TAKEN = 2,
            }
            export type ICloudAPIThreadControl = CloudAPIThreadControl;
            export interface ICloudAPIThreadControlNotificationContent {
                handoffNotificationText?: string | null;
                extraJson?: string | null;
            }
            export class CloudAPIThreadControlNotificationContent implements ICloudAPIThreadControlNotificationContent {
                constructor(properties?: ICloudAPIThreadControlNotificationContent);
                public static create(properties?: ICloudAPIThreadControlNotificationContent): CloudAPIThreadControlNotificationContent;
                public static encode(message: ICloudAPIThreadControlNotificationContent, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): CloudAPIThreadControlNotificationContent;
                public static fromObject(object: { [k: string]: any }): CloudAPIThreadControlNotificationContent;
                public static toObject(message: CloudAPIThreadControlNotificationContent, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
        }
        export interface ICommentMessage {
            message?: proto.IMessage | null;
            targetMessageKey?: proto.IMessageKey | null;
        }
        export class CommentMessage implements ICommentMessage {
            constructor(properties?: ICommentMessage);
            public static create(properties?: ICommentMessage): CommentMessage;
            public static encode(message: ICommentMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): CommentMessage;
            public static fromObject(object: { [k: string]: any }): CommentMessage;
            public static toObject(message: CommentMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IContactMessage {
            displayName?: string | null;
            vcard?: string | null;
            contextInfo?: proto.IContextInfo | null;
        }
        export class ContactMessage implements IContactMessage {
            constructor(properties?: IContactMessage);
            public static create(properties?: IContactMessage): ContactMessage;
            public static encode(message: IContactMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): ContactMessage;
            public static fromObject(object: { [k: string]: any }): ContactMessage;
            public static toObject(message: ContactMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IContactsArrayMessage {
            displayName?: string | null;
            contacts?: (proto.Message.ContactMessage)[] | null;
            contextInfo?: proto.IContextInfo | null;
        }
        export class ContactsArrayMessage implements IContactsArrayMessage {
            constructor(properties?: IContactsArrayMessage);
            public static create(properties?: IContactsArrayMessage): ContactsArrayMessage;
            public static encode(message: IContactsArrayMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): ContactsArrayMessage;
            public static fromObject(object: { [k: string]: any }): ContactsArrayMessage;
            public static toObject(message: ContactsArrayMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IDeclinePaymentRequestMessage {
            key?: proto.IMessageKey | null;
        }
        export class DeclinePaymentRequestMessage implements IDeclinePaymentRequestMessage {
            constructor(properties?: IDeclinePaymentRequestMessage);
            public static create(properties?: IDeclinePaymentRequestMessage): DeclinePaymentRequestMessage;
            public static encode(message: IDeclinePaymentRequestMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): DeclinePaymentRequestMessage;
            public static fromObject(object: { [k: string]: any }): DeclinePaymentRequestMessage;
            public static toObject(message: DeclinePaymentRequestMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IDeviceSentMessage {
            destinationJid?: string | null;
            message?: proto.IMessage | null;
            phash?: string | null;
        }
        export class DeviceSentMessage implements IDeviceSentMessage {
            constructor(properties?: IDeviceSentMessage);
            public static create(properties?: IDeviceSentMessage): DeviceSentMessage;
            public static encode(message: IDeviceSentMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): DeviceSentMessage;
            public static fromObject(object: { [k: string]: any }): DeviceSentMessage;
            public static toObject(message: DeviceSentMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IDocumentMessage {
            url?: string | null;
            mimetype?: string | null;
            title?: string | null;
            fileSha256?: Uint8Array | null;
            fileLength?: number | Long | null;
            pageCount?: number | null;
            mediaKey?: Uint8Array | null;
            fileName?: string | null;
            fileEncSha256?: Uint8Array | null;
            directPath?: string | null;
            mediaKeyTimestamp?: number | Long | null;
            contactVcard?: boolean | null;
            thumbnailDirectPath?: string | null;
            thumbnailSha256?: Uint8Array | null;
            thumbnailEncSha256?: Uint8Array | null;
            jpegThumbnail?: Uint8Array | null;
            contextInfo?: proto.IContextInfo | null;
            thumbnailHeight?: number | null;
            thumbnailWidth?: number | null;
            caption?: string | null;
            accessibilityLabel?: string | null;
            mediaKeyDomain?: proto.Message.MediaKeyDomain | null;
        }
        export class DocumentMessage implements IDocumentMessage {
            constructor(properties?: IDocumentMessage);
            public static create(properties?: IDocumentMessage): DocumentMessage;
            public static encode(message: IDocumentMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): DocumentMessage;
            public static fromObject(object: { [k: string]: any }): DocumentMessage;
            public static toObject(message: DocumentMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IEncCommentMessage {
            targetMessageKey?: proto.IMessageKey | null;
            encPayload?: Uint8Array | null;
            encIv?: Uint8Array | null;
        }
        export class EncCommentMessage implements IEncCommentMessage {
            constructor(properties?: IEncCommentMessage);
            public static create(properties?: IEncCommentMessage): EncCommentMessage;
            public static encode(message: IEncCommentMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): EncCommentMessage;
            public static fromObject(object: { [k: string]: any }): EncCommentMessage;
            public static toObject(message: EncCommentMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IEncEventResponseMessage {
            eventCreationMessageKey?: proto.IMessageKey | null;
            encPayload?: Uint8Array | null;
            encIv?: Uint8Array | null;
        }
        export class EncEventResponseMessage implements IEncEventResponseMessage {
            constructor(properties?: IEncEventResponseMessage);
            public static create(properties?: IEncEventResponseMessage): EncEventResponseMessage;
            public static encode(message: IEncEventResponseMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): EncEventResponseMessage;
            public static fromObject(object: { [k: string]: any }): EncEventResponseMessage;
            public static toObject(message: EncEventResponseMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IEncReactionMessage {
            targetMessageKey?: proto.IMessageKey | null;
            encPayload?: Uint8Array | null;
            encIv?: Uint8Array | null;
        }
        export class EncReactionMessage implements IEncReactionMessage {
            constructor(properties?: IEncReactionMessage);
            public static create(properties?: IEncReactionMessage): EncReactionMessage;
            public static encode(message: IEncReactionMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): EncReactionMessage;
            public static fromObject(object: { [k: string]: any }): EncReactionMessage;
            public static toObject(message: EncReactionMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IEventMessage {
            contextInfo?: proto.IContextInfo | null;
            isCanceled?: boolean | null;
            name?: string | null;
            description?: string | null;
            location?: proto.Message.LocationMessage | null;
            joinLink?: string | null;
            startTime?: number | Long | null;
            endTime?: number | Long | null;
            extraGuestsAllowed?: boolean | null;
            isScheduleCall?: boolean | null;
            hasReminder?: boolean | null;
            reminderOffsetSec?: number | Long | null;
        }
        export class EventMessage implements IEventMessage {
            constructor(properties?: IEventMessage);
            public static create(properties?: IEventMessage): EventMessage;
            public static encode(message: IEventMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): EventMessage;
            public static fromObject(object: { [k: string]: any }): EventMessage;
            public static toObject(message: EventMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IEventResponseMessage {
            response?: proto.IEventResponseType | null;
            timestampMs?: number | Long | null;
            extraGuestCount?: number | null;
        }
        export class EventResponseMessage implements IEventResponseMessage {
            constructor(properties?: IEventResponseMessage);
            public static create(properties?: IEventResponseMessage): EventResponseMessage;
            public static encode(message: IEventResponseMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): EventResponseMessage;
            public static fromObject(object: { [k: string]: any }): EventResponseMessage;
            public static toObject(message: EventResponseMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace EventResponseMessage {
            export enum EventResponseType {
                UNKNOWN = 0,
                GOING = 1,
                NOT_GOING = 2,
                MAYBE = 3,
            }
            export type IEventResponseType = EventResponseType;
        }
        export interface IExtendedTextMessage {
            text?: string | null;
            matchedText?: string | null;
            description?: string | null;
            title?: string | null;
            textArgb?: number | null;
            backgroundArgb?: number | null;
            font?: proto.IFontType | null;
            previewType?: proto.IPreviewType | null;
            jpegThumbnail?: Uint8Array | null;
            contextInfo?: proto.IContextInfo | null;
            doNotPlayInline?: boolean | null;
            thumbnailDirectPath?: string | null;
            thumbnailSha256?: Uint8Array | null;
            thumbnailEncSha256?: Uint8Array | null;
            mediaKey?: Uint8Array | null;
            mediaKeyTimestamp?: number | Long | null;
            thumbnailHeight?: number | null;
            thumbnailWidth?: number | null;
            inviteLinkGroupType?: proto.IInviteLinkGroupType | null;
            inviteLinkParentGroupSubjectV2?: string | null;
            inviteLinkParentGroupThumbnailV2?: Uint8Array | null;
            inviteLinkGroupTypeV2?: proto.IInviteLinkGroupType | null;
            viewOnce?: boolean | null;
            videoHeight?: number | null;
            videoWidth?: number | null;
            faviconMMSMetadata?: proto.Message.MMSThumbnailMetadata | null;
            linkPreviewMetadata?: proto.Message.LinkPreviewMetadata | null;
            paymentLinkMetadata?: proto.Message.PaymentLinkMetadata | null;
            endCardTiles?: (proto.Message.VideoEndCard)[] | null;
            videoContentUrl?: string | null;
            musicMetadata?: proto.IEmbeddedMusic | null;
            paymentExtendedMetadata?: proto.Message.PaymentExtendedMetadata | null;
        }
        export class ExtendedTextMessage implements IExtendedTextMessage {
            constructor(properties?: IExtendedTextMessage);
            public static create(properties?: IExtendedTextMessage): ExtendedTextMessage;
            public static encode(message: IExtendedTextMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): ExtendedTextMessage;
            public static fromObject(object: { [k: string]: any }): ExtendedTextMessage;
            public static toObject(message: ExtendedTextMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace ExtendedTextMessage {
            export enum FontType {
                SYSTEM = 0,
                SYSTEM_TEXT = 1,
                FB_SCRIPT = 2,
                SYSTEM_BOLD = 6,
                MORNINGBREEZE_REGULAR = 7,
                CALISTOGA_REGULAR = 8,
                EXO2_EXTRABOLD = 9,
                COURIERPRIME_BOLD = 10,
            }
            export type IFontType = FontType;
            export enum InviteLinkGroupType {
                DEFAULT = 0,
                PARENT = 1,
                SUB = 2,
                DEFAULT_SUB = 3,
            }
            export type IInviteLinkGroupType = InviteLinkGroupType;
            export enum PreviewType {
                NONE = 0,
                VIDEO = 1,
                PLACEHOLDER = 4,
                IMAGE = 5,
                PAYMENT_LINKS = 6,
                PROFILE = 7,
            }
            export type IPreviewType = PreviewType;
        }
        export interface IFullHistorySyncOnDemandRequestMetadata {
            requestId?: string | null;
        }
        export class FullHistorySyncOnDemandRequestMetadata implements IFullHistorySyncOnDemandRequestMetadata {
            constructor(properties?: IFullHistorySyncOnDemandRequestMetadata);
            public static create(properties?: IFullHistorySyncOnDemandRequestMetadata): FullHistorySyncOnDemandRequestMetadata;
            public static encode(message: IFullHistorySyncOnDemandRequestMetadata, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): FullHistorySyncOnDemandRequestMetadata;
            public static fromObject(object: { [k: string]: any }): FullHistorySyncOnDemandRequestMetadata;
            public static toObject(message: FullHistorySyncOnDemandRequestMetadata, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IFutureProofMessage {
            message?: proto.IMessage | null;
        }
        export class FutureProofMessage implements IFutureProofMessage {
            constructor(properties?: IFutureProofMessage);
            public static create(properties?: IFutureProofMessage): FutureProofMessage;
            public static encode(message: IFutureProofMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): FutureProofMessage;
            public static fromObject(object: { [k: string]: any }): FutureProofMessage;
            public static toObject(message: FutureProofMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IGroupInviteMessage {
            groupJid?: string | null;
            inviteCode?: string | null;
            inviteExpiration?: number | Long | null;
            groupName?: string | null;
            jpegThumbnail?: Uint8Array | null;
            caption?: string | null;
            contextInfo?: proto.IContextInfo | null;
            groupType?: proto.IGroupType | null;
        }
        export class GroupInviteMessage implements IGroupInviteMessage {
            constructor(properties?: IGroupInviteMessage);
            public static create(properties?: IGroupInviteMessage): GroupInviteMessage;
            public static encode(message: IGroupInviteMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): GroupInviteMessage;
            public static fromObject(object: { [k: string]: any }): GroupInviteMessage;
            public static toObject(message: GroupInviteMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace GroupInviteMessage {
            export enum GroupType {
                DEFAULT = 0,
                PARENT = 1,
            }
            export type IGroupType = GroupType;
        }
        export interface IHighlyStructuredMessage {
            namespace?: string | null;
            elementName?: string | null;
            params?: (string)[] | null;
            fallbackLg?: string | null;
            fallbackLc?: string | null;
            localizableParams?: (proto.IHSMLocalizableParameter)[] | null;
            deterministicLg?: string | null;
            deterministicLc?: string | null;
            hydratedHsm?: proto.Message.TemplateMessage | null;
        }
        export class HighlyStructuredMessage implements IHighlyStructuredMessage {
            constructor(properties?: IHighlyStructuredMessage);
            public static create(properties?: IHighlyStructuredMessage): HighlyStructuredMessage;
            public static encode(message: IHighlyStructuredMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): HighlyStructuredMessage;
            public static fromObject(object: { [k: string]: any }): HighlyStructuredMessage;
            public static toObject(message: HighlyStructuredMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace HighlyStructuredMessage {
            export interface IHSMLocalizableParameter {
                default?: string | null;
                currency?: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMCurrency | null;
                dateTime?: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime | null;
            }
            export class HSMLocalizableParameter implements IHSMLocalizableParameter {
                constructor(properties?: IHSMLocalizableParameter);
                public static create(properties?: IHSMLocalizableParameter): HSMLocalizableParameter;
                public static encode(message: IHSMLocalizableParameter, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): HSMLocalizableParameter;
                public static fromObject(object: { [k: string]: any }): HSMLocalizableParameter;
                public static toObject(message: HSMLocalizableParameter, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export namespace HSMLocalizableParameter {
                export interface IHSMCurrency {
                    currencyCode?: string | null;
                    amount1000?: number | Long | null;
                }
                export class HSMCurrency implements IHSMCurrency {
                    constructor(properties?: IHSMCurrency);
                    public static create(properties?: IHSMCurrency): HSMCurrency;
                    public static encode(message: IHSMCurrency, writer?: any): any;
                    public static decode(reader: Uint8Array | any, length?: number): HSMCurrency;
                    public static fromObject(object: { [k: string]: any }): HSMCurrency;
                    public static toObject(message: HSMCurrency, options?: any): { [k: string]: any };
                    public static verify(message: { [k: string]: any }): string | null;
                }
                export interface IHSMDateTime {
                    component?: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent | null;
                    unixEpoch?: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeUnixEpoch | null;
                }
                export class HSMDateTime implements IHSMDateTime {
                    constructor(properties?: IHSMDateTime);
                    public static create(properties?: IHSMDateTime): HSMDateTime;
                    public static encode(message: IHSMDateTime, writer?: any): any;
                    public static decode(reader: Uint8Array | any, length?: number): HSMDateTime;
                    public static fromObject(object: { [k: string]: any }): HSMDateTime;
                    public static toObject(message: HSMDateTime, options?: any): { [k: string]: any };
                    public static verify(message: { [k: string]: any }): string | null;
                }
                export namespace HSMDateTime {
                    export interface IHSMDateTimeComponent {
                        dayOfWeek?: proto.IDayOfWeekType | null;
                        year?: number | null;
                        month?: number | null;
                        dayOfMonth?: number | null;
                        hour?: number | null;
                        minute?: number | null;
                        calendar?: proto.ICalendarType | null;
                    }
                    export class HSMDateTimeComponent implements IHSMDateTimeComponent {
                        constructor(properties?: IHSMDateTimeComponent);
                        public static create(properties?: IHSMDateTimeComponent): HSMDateTimeComponent;
                        public static encode(message: IHSMDateTimeComponent, writer?: any): any;
                        public static decode(reader: Uint8Array | any, length?: number): HSMDateTimeComponent;
                        public static fromObject(object: { [k: string]: any }): HSMDateTimeComponent;
                        public static toObject(message: HSMDateTimeComponent, options?: any): { [k: string]: any };
                        public static verify(message: { [k: string]: any }): string | null;
                    }
                    export namespace HSMDateTimeComponent {
                        export enum CalendarType {
                            GREGORIAN = 1,
                            SOLAR_HIJRI = 2,
                        }
                        export type ICalendarType = CalendarType;
                        export enum DayOfWeekType {
                            MONDAY = 1,
                            TUESDAY = 2,
                            WEDNESDAY = 3,
                            THURSDAY = 4,
                            FRIDAY = 5,
                            SATURDAY = 6,
                            SUNDAY = 7,
                        }
                        export type IDayOfWeekType = DayOfWeekType;
                    }
                    export interface IHSMDateTimeUnixEpoch {
                        timestamp?: number | Long | null;
                    }
                    export class HSMDateTimeUnixEpoch implements IHSMDateTimeUnixEpoch {
                        constructor(properties?: IHSMDateTimeUnixEpoch);
                        public static create(properties?: IHSMDateTimeUnixEpoch): HSMDateTimeUnixEpoch;
                        public static encode(message: IHSMDateTimeUnixEpoch, writer?: any): any;
                        public static decode(reader: Uint8Array | any, length?: number): HSMDateTimeUnixEpoch;
                        public static fromObject(object: { [k: string]: any }): HSMDateTimeUnixEpoch;
                        public static toObject(message: HSMDateTimeUnixEpoch, options?: any): { [k: string]: any };
                        public static verify(message: { [k: string]: any }): string | null;
                    }
                }
            }
        }
        export interface IHistorySyncMessageAccessStatus {
            completeAccessGranted?: boolean | null;
        }
        export class HistorySyncMessageAccessStatus implements IHistorySyncMessageAccessStatus {
            constructor(properties?: IHistorySyncMessageAccessStatus);
            public static create(properties?: IHistorySyncMessageAccessStatus): HistorySyncMessageAccessStatus;
            public static encode(message: IHistorySyncMessageAccessStatus, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): HistorySyncMessageAccessStatus;
            public static fromObject(object: { [k: string]: any }): HistorySyncMessageAccessStatus;
            public static toObject(message: HistorySyncMessageAccessStatus, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IHistorySyncNotification {
            fileSha256?: Uint8Array | null;
            fileLength?: number | Long | null;
            mediaKey?: Uint8Array | null;
            fileEncSha256?: Uint8Array | null;
            directPath?: string | null;
            syncType?: proto.Message.HistorySyncType | null;
            chunkOrder?: number | null;
            originalMessageId?: string | null;
            progress?: number | null;
            oldestMsgInChunkTimestampSec?: number | Long | null;
            initialHistBootstrapInlinePayload?: Uint8Array | null;
            peerDataRequestSessionId?: string | null;
            fullHistorySyncOnDemandRequestMetadata?: proto.Message.FullHistorySyncOnDemandRequestMetadata | null;
            encHandle?: string | null;
            messageAccessStatus?: proto.Message.HistorySyncMessageAccessStatus | null;
        }
        export class HistorySyncNotification implements IHistorySyncNotification {
            constructor(properties?: IHistorySyncNotification);
            public static create(properties?: IHistorySyncNotification): HistorySyncNotification;
            public static encode(message: IHistorySyncNotification, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): HistorySyncNotification;
            public static fromObject(object: { [k: string]: any }): HistorySyncNotification;
            public static toObject(message: HistorySyncNotification, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export enum HistorySyncType {
            INITIAL_BOOTSTRAP = 0,
            INITIAL_STATUS_V3 = 1,
            FULL = 2,
            RECENT = 3,
            PUSH_NAME = 4,
            NON_BLOCKING_DATA = 5,
            ON_DEMAND = 6,
            NO_HISTORY = 7,
            MESSAGE_ACCESS_STATUS = 8,
        }
        export type IHistorySyncType = HistorySyncType;
        export interface IImageMessage {
            url?: string | null;
            mimetype?: string | null;
            caption?: string | null;
            fileSha256?: Uint8Array | null;
            fileLength?: number | Long | null;
            height?: number | null;
            width?: number | null;
            mediaKey?: Uint8Array | null;
            fileEncSha256?: Uint8Array | null;
            interactiveAnnotations?: (proto.IInteractiveAnnotation)[] | null;
            directPath?: string | null;
            mediaKeyTimestamp?: number | Long | null;
            jpegThumbnail?: Uint8Array | null;
            contextInfo?: proto.IContextInfo | null;
            firstScanSidecar?: Uint8Array | null;
            firstScanLength?: number | null;
            experimentGroupId?: number | null;
            scansSidecar?: Uint8Array | null;
            scanLengths?: (number)[] | null;
            midQualityFileSha256?: Uint8Array | null;
            midQualityFileEncSha256?: Uint8Array | null;
            viewOnce?: boolean | null;
            thumbnailDirectPath?: string | null;
            thumbnailSha256?: Uint8Array | null;
            thumbnailEncSha256?: Uint8Array | null;
            staticUrl?: string | null;
            annotations?: (proto.IInteractiveAnnotation)[] | null;
            imageSourceType?: proto.IImageSourceType | null;
            accessibilityLabel?: string | null;
            mediaKeyDomain?: proto.Message.MediaKeyDomain | null;
            qrUrl?: string | null;
        }
        export class ImageMessage implements IImageMessage {
            constructor(properties?: IImageMessage);
            public static create(properties?: IImageMessage): ImageMessage;
            public static encode(message: IImageMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): ImageMessage;
            public static fromObject(object: { [k: string]: any }): ImageMessage;
            public static toObject(message: ImageMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace ImageMessage {
            export enum ImageSourceType {
                USER_IMAGE = 0,
                AI_GENERATED = 1,
                AI_MODIFIED = 2,
                RASTERIZED_TEXT_STATUS = 3,
            }
            export type IImageSourceType = ImageSourceType;
        }
        export interface IInitialSecurityNotificationSettingSync {
            securityNotificationEnabled?: boolean | null;
        }
        export class InitialSecurityNotificationSettingSync implements IInitialSecurityNotificationSettingSync {
            constructor(properties?: IInitialSecurityNotificationSettingSync);
            public static create(properties?: IInitialSecurityNotificationSettingSync): InitialSecurityNotificationSettingSync;
            public static encode(message: IInitialSecurityNotificationSettingSync, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): InitialSecurityNotificationSettingSync;
            public static fromObject(object: { [k: string]: any }): InitialSecurityNotificationSettingSync;
            public static toObject(message: InitialSecurityNotificationSettingSync, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IInteractiveMessage {
            header?: proto.IHeader | null;
            body?: proto.IBody | null;
            footer?: proto.IFooter | null;
            contextInfo?: proto.IContextInfo | null;
            urlTrackingMap?: proto.IUrlTrackingMap | null;
            shopStorefrontMessage?: proto.Message.InteractiveMessage.ShopMessage | null;
            collectionMessage?: proto.Message.InteractiveMessage.CollectionMessage | null;
            nativeFlowMessage?: proto.Message.InteractiveMessage.NativeFlowMessage | null;
            carouselMessage?: proto.Message.InteractiveMessage.CarouselMessage | null;
        }
        export class InteractiveMessage implements IInteractiveMessage {
            constructor(properties?: IInteractiveMessage);
            public static create(properties?: IInteractiveMessage): InteractiveMessage;
            public static encode(message: IInteractiveMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): InteractiveMessage;
            public static fromObject(object: { [k: string]: any }): InteractiveMessage;
            public static toObject(message: InteractiveMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace InteractiveMessage {
            export interface IBody {
                text?: string | null;
            }
            export class Body implements IBody {
                constructor(properties?: IBody);
                public static create(properties?: IBody): Body;
                public static encode(message: IBody, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): Body;
                public static fromObject(object: { [k: string]: any }): Body;
                public static toObject(message: Body, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export interface ICarouselMessage {
                cards?: (proto.Message.InteractiveMessage)[] | null;
                messageVersion?: number | null;
                carouselCardType?: proto.ICarouselCardType | null;
            }
            export class CarouselMessage implements ICarouselMessage {
                constructor(properties?: ICarouselMessage);
                public static create(properties?: ICarouselMessage): CarouselMessage;
                public static encode(message: ICarouselMessage, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): CarouselMessage;
                public static fromObject(object: { [k: string]: any }): CarouselMessage;
                public static toObject(message: CarouselMessage, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export namespace CarouselMessage {
                export enum CarouselCardType {
                    UNKNOWN = 0,
                    HSCROLL_CARDS = 1,
                    ALBUM_IMAGE = 2,
                }
                export type ICarouselCardType = CarouselCardType;
            }
            export interface ICollectionMessage {
                bizJid?: string | null;
                id?: string | null;
                messageVersion?: number | null;
            }
            export class CollectionMessage implements ICollectionMessage {
                constructor(properties?: ICollectionMessage);
                public static create(properties?: ICollectionMessage): CollectionMessage;
                public static encode(message: ICollectionMessage, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): CollectionMessage;
                public static fromObject(object: { [k: string]: any }): CollectionMessage;
                public static toObject(message: CollectionMessage, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export interface IFooter {
                text?: string | null;
                hasMediaAttachment?: boolean | null;
                audioMessage?: proto.Message.AudioMessage | null;
            }
            export class Footer implements IFooter {
                constructor(properties?: IFooter);
                public static create(properties?: IFooter): Footer;
                public static encode(message: IFooter, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): Footer;
                public static fromObject(object: { [k: string]: any }): Footer;
                public static toObject(message: Footer, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export interface IHeader {
                title?: string | null;
                subtitle?: string | null;
                hasMediaAttachment?: boolean | null;
                documentMessage?: proto.Message.DocumentMessage | null;
                imageMessage?: proto.Message.ImageMessage | null;
                jpegThumbnail?: Uint8Array | null;
                videoMessage?: proto.Message.VideoMessage | null;
                locationMessage?: proto.Message.LocationMessage | null;
                productMessage?: proto.Message.ProductMessage | null;
            }
            export class Header implements IHeader {
                constructor(properties?: IHeader);
                public static create(properties?: IHeader): Header;
                public static encode(message: IHeader, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): Header;
                public static fromObject(object: { [k: string]: any }): Header;
                public static toObject(message: Header, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export interface INativeFlowMessage {
                buttons?: (proto.INativeFlowButton)[] | null;
                messageParamsJson?: string | null;
                messageVersion?: number | null;
            }
            export class NativeFlowMessage implements INativeFlowMessage {
                constructor(properties?: INativeFlowMessage);
                public static create(properties?: INativeFlowMessage): NativeFlowMessage;
                public static encode(message: INativeFlowMessage, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): NativeFlowMessage;
                public static fromObject(object: { [k: string]: any }): NativeFlowMessage;
                public static toObject(message: NativeFlowMessage, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export namespace NativeFlowMessage {
                export interface INativeFlowButton {
                    name?: string | null;
                    buttonParamsJson?: string | null;
                }
                export class NativeFlowButton implements INativeFlowButton {
                    constructor(properties?: INativeFlowButton);
                    public static create(properties?: INativeFlowButton): NativeFlowButton;
                    public static encode(message: INativeFlowButton, writer?: any): any;
                    public static decode(reader: Uint8Array | any, length?: number): NativeFlowButton;
                    public static fromObject(object: { [k: string]: any }): NativeFlowButton;
                    public static toObject(message: NativeFlowButton, options?: any): { [k: string]: any };
                    public static verify(message: { [k: string]: any }): string | null;
                }
            }
            export interface IShopMessage {
                id?: string | null;
                surface?: proto.ISurface | null;
                messageVersion?: number | null;
            }
            export class ShopMessage implements IShopMessage {
                constructor(properties?: IShopMessage);
                public static create(properties?: IShopMessage): ShopMessage;
                public static encode(message: IShopMessage, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): ShopMessage;
                public static fromObject(object: { [k: string]: any }): ShopMessage;
                public static toObject(message: ShopMessage, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export namespace ShopMessage {
                export enum Surface {
                    UNKNOWN_SURFACE = 0,
                    FB = 1,
                    IG = 2,
                    WA = 3,
                }
                export type ISurface = Surface;
            }
        }
        export interface IInteractiveResponseMessage {
            body?: proto.IBody | null;
            contextInfo?: proto.IContextInfo | null;
            nativeFlowResponseMessage?: proto.Message.InteractiveResponseMessage.NativeFlowResponseMessage | null;
        }
        export class InteractiveResponseMessage implements IInteractiveResponseMessage {
            constructor(properties?: IInteractiveResponseMessage);
            public static create(properties?: IInteractiveResponseMessage): InteractiveResponseMessage;
            public static encode(message: IInteractiveResponseMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): InteractiveResponseMessage;
            public static fromObject(object: { [k: string]: any }): InteractiveResponseMessage;
            public static toObject(message: InteractiveResponseMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace InteractiveResponseMessage {
            export interface IBody {
                text?: string | null;
                format?: proto.IFormat | null;
            }
            export class Body implements IBody {
                constructor(properties?: IBody);
                public static create(properties?: IBody): Body;
                public static encode(message: IBody, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): Body;
                public static fromObject(object: { [k: string]: any }): Body;
                public static toObject(message: Body, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export namespace Body {
                export enum Format {
                    DEFAULT = 0,
                    EXTENSIONS_1 = 1,
                }
                export type IFormat = Format;
            }
            export interface INativeFlowResponseMessage {
                name?: string | null;
                paramsJson?: string | null;
                version?: number | null;
            }
            export class NativeFlowResponseMessage implements INativeFlowResponseMessage {
                constructor(properties?: INativeFlowResponseMessage);
                public static create(properties?: INativeFlowResponseMessage): NativeFlowResponseMessage;
                public static encode(message: INativeFlowResponseMessage, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): NativeFlowResponseMessage;
                public static fromObject(object: { [k: string]: any }): NativeFlowResponseMessage;
                public static toObject(message: NativeFlowResponseMessage, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
        }
        export interface IInvoiceMessage {
            note?: string | null;
            token?: string | null;
            attachmentType?: proto.IAttachmentType | null;
            attachmentMimetype?: string | null;
            attachmentMediaKey?: Uint8Array | null;
            attachmentMediaKeyTimestamp?: number | Long | null;
            attachmentFileSha256?: Uint8Array | null;
            attachmentFileEncSha256?: Uint8Array | null;
            attachmentDirectPath?: string | null;
            attachmentJpegThumbnail?: Uint8Array | null;
        }
        export class InvoiceMessage implements IInvoiceMessage {
            constructor(properties?: IInvoiceMessage);
            public static create(properties?: IInvoiceMessage): InvoiceMessage;
            public static encode(message: IInvoiceMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): InvoiceMessage;
            public static fromObject(object: { [k: string]: any }): InvoiceMessage;
            public static toObject(message: InvoiceMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace InvoiceMessage {
            export enum AttachmentType {
                IMAGE = 0,
                PDF = 1,
            }
            export type IAttachmentType = AttachmentType;
        }
        export interface IKeepInChatMessage {
            key?: proto.IMessageKey | null;
            keepType?: proto.IKeepType | null;
            timestampMs?: number | Long | null;
        }
        export class KeepInChatMessage implements IKeepInChatMessage {
            constructor(properties?: IKeepInChatMessage);
            public static create(properties?: IKeepInChatMessage): KeepInChatMessage;
            public static encode(message: IKeepInChatMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): KeepInChatMessage;
            public static fromObject(object: { [k: string]: any }): KeepInChatMessage;
            public static toObject(message: KeepInChatMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface ILinkPreviewMetadata {
            paymentLinkMetadata?: proto.Message.PaymentLinkMetadata | null;
            urlMetadata?: proto.Message.URLMetadata | null;
            fbExperimentId?: number | null;
            linkMediaDuration?: number | null;
            socialMediaPostType?: proto.ISocialMediaPostType | null;
            linkInlineVideoMuted?: boolean | null;
            videoContentUrl?: string | null;
            musicMetadata?: proto.IEmbeddedMusic | null;
            videoContentCaption?: string | null;
        }
        export class LinkPreviewMetadata implements ILinkPreviewMetadata {
            constructor(properties?: ILinkPreviewMetadata);
            public static create(properties?: ILinkPreviewMetadata): LinkPreviewMetadata;
            public static encode(message: ILinkPreviewMetadata, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): LinkPreviewMetadata;
            public static fromObject(object: { [k: string]: any }): LinkPreviewMetadata;
            public static toObject(message: LinkPreviewMetadata, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace LinkPreviewMetadata {
            export enum SocialMediaPostType {
                NONE = 0,
                REEL = 1,
                LIVE_VIDEO = 2,
                LONG_VIDEO = 3,
                SINGLE_IMAGE = 4,
                CAROUSEL = 5,
            }
            export type ISocialMediaPostType = SocialMediaPostType;
        }
        export interface IListMessage {
            title?: string | null;
            description?: string | null;
            buttonText?: string | null;
            listType?: proto.IListType | null;
            sections?: (proto.ISection)[] | null;
            productListInfo?: proto.IProductListInfo | null;
            footerText?: string | null;
            contextInfo?: proto.IContextInfo | null;
        }
        export class ListMessage implements IListMessage {
            constructor(properties?: IListMessage);
            public static create(properties?: IListMessage): ListMessage;
            public static encode(message: IListMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): ListMessage;
            public static fromObject(object: { [k: string]: any }): ListMessage;
            public static toObject(message: ListMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace ListMessage {
            export enum ListType {
                UNKNOWN = 0,
                SINGLE_SELECT = 1,
                PRODUCT_LIST = 2,
            }
            export type IListType = ListType;
            export interface IProduct {
                productId?: string | null;
            }
            export class Product implements IProduct {
                constructor(properties?: IProduct);
                public static create(properties?: IProduct): Product;
                public static encode(message: IProduct, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): Product;
                public static fromObject(object: { [k: string]: any }): Product;
                public static toObject(message: Product, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export interface IProductListHeaderImage {
                productId?: string | null;
                jpegThumbnail?: Uint8Array | null;
            }
            export class ProductListHeaderImage implements IProductListHeaderImage {
                constructor(properties?: IProductListHeaderImage);
                public static create(properties?: IProductListHeaderImage): ProductListHeaderImage;
                public static encode(message: IProductListHeaderImage, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): ProductListHeaderImage;
                public static fromObject(object: { [k: string]: any }): ProductListHeaderImage;
                public static toObject(message: ProductListHeaderImage, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export interface IProductListInfo {
                productSections?: (proto.Message.ListMessage.ProductSection)[] | null;
                headerImage?: proto.Message.ListMessage.ProductListHeaderImage | null;
                businessOwnerJid?: string | null;
            }
            export class ProductListInfo implements IProductListInfo {
                constructor(properties?: IProductListInfo);
                public static create(properties?: IProductListInfo): ProductListInfo;
                public static encode(message: IProductListInfo, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): ProductListInfo;
                public static fromObject(object: { [k: string]: any }): ProductListInfo;
                public static toObject(message: ProductListInfo, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export interface IProductSection {
                title?: string | null;
                products?: (proto.Message.ListMessage.Product)[] | null;
            }
            export class ProductSection implements IProductSection {
                constructor(properties?: IProductSection);
                public static create(properties?: IProductSection): ProductSection;
                public static encode(message: IProductSection, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): ProductSection;
                public static fromObject(object: { [k: string]: any }): ProductSection;
                public static toObject(message: ProductSection, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export interface IRow {
                title?: string | null;
                description?: string | null;
                rowId?: string | null;
            }
            export class Row implements IRow {
                constructor(properties?: IRow);
                public static create(properties?: IRow): Row;
                public static encode(message: IRow, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): Row;
                public static fromObject(object: { [k: string]: any }): Row;
                public static toObject(message: Row, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export interface ISection {
                title?: string | null;
                rows?: (proto.Message.ListMessage.Row)[] | null;
            }
            export class Section implements ISection {
                constructor(properties?: ISection);
                public static create(properties?: ISection): Section;
                public static encode(message: ISection, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): Section;
                public static fromObject(object: { [k: string]: any }): Section;
                public static toObject(message: Section, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
        }
        export interface IListResponseMessage {
            title?: string | null;
            listType?: proto.IListType | null;
            singleSelectReply?: proto.ISingleSelectReply | null;
            contextInfo?: proto.IContextInfo | null;
            description?: string | null;
        }
        export class ListResponseMessage implements IListResponseMessage {
            constructor(properties?: IListResponseMessage);
            public static create(properties?: IListResponseMessage): ListResponseMessage;
            public static encode(message: IListResponseMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): ListResponseMessage;
            public static fromObject(object: { [k: string]: any }): ListResponseMessage;
            public static toObject(message: ListResponseMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace ListResponseMessage {
            export enum ListType {
                UNKNOWN = 0,
                SINGLE_SELECT = 1,
            }
            export type IListType = ListType;
            export interface ISingleSelectReply {
                selectedRowId?: string | null;
            }
            export class SingleSelectReply implements ISingleSelectReply {
                constructor(properties?: ISingleSelectReply);
                public static create(properties?: ISingleSelectReply): SingleSelectReply;
                public static encode(message: ISingleSelectReply, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): SingleSelectReply;
                public static fromObject(object: { [k: string]: any }): SingleSelectReply;
                public static toObject(message: SingleSelectReply, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
        }
        export interface ILiveLocationMessage {
            degreesLatitude?: number | null;
            degreesLongitude?: number | null;
            accuracyInMeters?: number | null;
            speedInMps?: number | null;
            degreesClockwiseFromMagneticNorth?: number | null;
            caption?: string | null;
            sequenceNumber?: number | Long | null;
            timeOffset?: number | null;
            jpegThumbnail?: Uint8Array | null;
            contextInfo?: proto.IContextInfo | null;
        }
        export class LiveLocationMessage implements ILiveLocationMessage {
            constructor(properties?: ILiveLocationMessage);
            public static create(properties?: ILiveLocationMessage): LiveLocationMessage;
            public static encode(message: ILiveLocationMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): LiveLocationMessage;
            public static fromObject(object: { [k: string]: any }): LiveLocationMessage;
            public static toObject(message: LiveLocationMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface ILocationMessage {
            degreesLatitude?: number | null;
            degreesLongitude?: number | null;
            name?: string | null;
            address?: string | null;
            url?: string | null;
            isLive?: boolean | null;
            accuracyInMeters?: number | null;
            speedInMps?: number | null;
            degreesClockwiseFromMagneticNorth?: number | null;
            comment?: string | null;
            jpegThumbnail?: Uint8Array | null;
            contextInfo?: proto.IContextInfo | null;
        }
        export class LocationMessage implements ILocationMessage {
            constructor(properties?: ILocationMessage);
            public static create(properties?: ILocationMessage): LocationMessage;
            public static encode(message: ILocationMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): LocationMessage;
            public static fromObject(object: { [k: string]: any }): LocationMessage;
            public static toObject(message: LocationMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IMMSThumbnailMetadata {
            thumbnailDirectPath?: string | null;
            thumbnailSha256?: Uint8Array | null;
            thumbnailEncSha256?: Uint8Array | null;
            mediaKey?: Uint8Array | null;
            mediaKeyTimestamp?: number | Long | null;
            thumbnailHeight?: number | null;
            thumbnailWidth?: number | null;
            mediaKeyDomain?: proto.Message.MediaKeyDomain | null;
        }
        export class MMSThumbnailMetadata implements IMMSThumbnailMetadata {
            constructor(properties?: IMMSThumbnailMetadata);
            public static create(properties?: IMMSThumbnailMetadata): MMSThumbnailMetadata;
            public static encode(message: IMMSThumbnailMetadata, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): MMSThumbnailMetadata;
            public static fromObject(object: { [k: string]: any }): MMSThumbnailMetadata;
            public static toObject(message: MMSThumbnailMetadata, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export enum MediaKeyDomain {
            UNSET = 0,
            E2EE_CHAT = 1,
            STATUS = 2,
            CAPI = 3,
            BOT = 4,
        }
        export type IMediaKeyDomain = MediaKeyDomain;
        export interface IMessageHistoryBundle {
            mimetype?: string | null;
            fileSha256?: Uint8Array | null;
            mediaKey?: Uint8Array | null;
            fileEncSha256?: Uint8Array | null;
            directPath?: string | null;
            mediaKeyTimestamp?: number | Long | null;
            contextInfo?: proto.IContextInfo | null;
            messageHistoryMetadata?: proto.Message.MessageHistoryMetadata | null;
        }
        export class MessageHistoryBundle implements IMessageHistoryBundle {
            constructor(properties?: IMessageHistoryBundle);
            public static create(properties?: IMessageHistoryBundle): MessageHistoryBundle;
            public static encode(message: IMessageHistoryBundle, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): MessageHistoryBundle;
            public static fromObject(object: { [k: string]: any }): MessageHistoryBundle;
            public static toObject(message: MessageHistoryBundle, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IMessageHistoryMetadata {
            historyReceivers?: (string)[] | null;
            oldestMessageTimestamp?: number | Long | null;
            messageCount?: number | Long | null;
        }
        export class MessageHistoryMetadata implements IMessageHistoryMetadata {
            constructor(properties?: IMessageHistoryMetadata);
            public static create(properties?: IMessageHistoryMetadata): MessageHistoryMetadata;
            public static encode(message: IMessageHistoryMetadata, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): MessageHistoryMetadata;
            public static fromObject(object: { [k: string]: any }): MessageHistoryMetadata;
            public static toObject(message: MessageHistoryMetadata, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IMessageHistoryNotice {
            contextInfo?: proto.IContextInfo | null;
            messageHistoryMetadata?: proto.Message.MessageHistoryMetadata | null;
        }
        export class MessageHistoryNotice implements IMessageHistoryNotice {
            constructor(properties?: IMessageHistoryNotice);
            public static create(properties?: IMessageHistoryNotice): MessageHistoryNotice;
            public static encode(message: IMessageHistoryNotice, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): MessageHistoryNotice;
            public static fromObject(object: { [k: string]: any }): MessageHistoryNotice;
            public static toObject(message: MessageHistoryNotice, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface INewsletterAdminInviteMessage {
            newsletterJid?: string | null;
            newsletterName?: string | null;
            jpegThumbnail?: Uint8Array | null;
            caption?: string | null;
            inviteExpiration?: number | Long | null;
            contextInfo?: proto.IContextInfo | null;
        }
        export class NewsletterAdminInviteMessage implements INewsletterAdminInviteMessage {
            constructor(properties?: INewsletterAdminInviteMessage);
            public static create(properties?: INewsletterAdminInviteMessage): NewsletterAdminInviteMessage;
            public static encode(message: INewsletterAdminInviteMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): NewsletterAdminInviteMessage;
            public static fromObject(object: { [k: string]: any }): NewsletterAdminInviteMessage;
            public static toObject(message: NewsletterAdminInviteMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface INewsletterFollowerInviteMessage {
            newsletterJid?: string | null;
            newsletterName?: string | null;
            jpegThumbnail?: Uint8Array | null;
            caption?: string | null;
            contextInfo?: proto.IContextInfo | null;
        }
        export class NewsletterFollowerInviteMessage implements INewsletterFollowerInviteMessage {
            constructor(properties?: INewsletterFollowerInviteMessage);
            public static create(properties?: INewsletterFollowerInviteMessage): NewsletterFollowerInviteMessage;
            public static encode(message: INewsletterFollowerInviteMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): NewsletterFollowerInviteMessage;
            public static fromObject(object: { [k: string]: any }): NewsletterFollowerInviteMessage;
            public static toObject(message: NewsletterFollowerInviteMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IOrderMessage {
            orderId?: string | null;
            thumbnail?: Uint8Array | null;
            itemCount?: number | null;
            status?: proto.IOrderStatus | null;
            surface?: proto.IOrderSurface | null;
            message?: string | null;
            orderTitle?: string | null;
            sellerJid?: string | null;
            token?: string | null;
            totalAmount1000?: number | Long | null;
            totalCurrencyCode?: string | null;
            contextInfo?: proto.IContextInfo | null;
            messageVersion?: number | null;
            orderRequestMessageId?: proto.IMessageKey | null;
            catalogType?: string | null;
        }
        export class OrderMessage implements IOrderMessage {
            constructor(properties?: IOrderMessage);
            public static create(properties?: IOrderMessage): OrderMessage;
            public static encode(message: IOrderMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): OrderMessage;
            public static fromObject(object: { [k: string]: any }): OrderMessage;
            public static toObject(message: OrderMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace OrderMessage {
            export enum OrderStatus {
                INQUIRY = 1,
                ACCEPTED = 2,
                DECLINED = 3,
            }
            export type IOrderStatus = OrderStatus;
            export enum OrderSurface {
                CATALOG = 1,
            }
            export type IOrderSurface = OrderSurface;
        }
        export interface IPaymentExtendedMetadata {
            type?: number | null;
            platform?: string | null;
            messageParamsJson?: string | null;
        }
        export class PaymentExtendedMetadata implements IPaymentExtendedMetadata {
            constructor(properties?: IPaymentExtendedMetadata);
            public static create(properties?: IPaymentExtendedMetadata): PaymentExtendedMetadata;
            public static encode(message: IPaymentExtendedMetadata, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): PaymentExtendedMetadata;
            public static fromObject(object: { [k: string]: any }): PaymentExtendedMetadata;
            public static toObject(message: PaymentExtendedMetadata, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IPaymentInviteMessage {
            serviceType?: proto.IServiceType | null;
            expiryTimestamp?: number | Long | null;
        }
        export class PaymentInviteMessage implements IPaymentInviteMessage {
            constructor(properties?: IPaymentInviteMessage);
            public static create(properties?: IPaymentInviteMessage): PaymentInviteMessage;
            public static encode(message: IPaymentInviteMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): PaymentInviteMessage;
            public static fromObject(object: { [k: string]: any }): PaymentInviteMessage;
            public static toObject(message: PaymentInviteMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace PaymentInviteMessage {
            export enum ServiceType {
                UNKNOWN = 0,
                FBPAY = 1,
                NOVI = 2,
                UPI = 3,
            }
            export type IServiceType = ServiceType;
        }
        export interface IPaymentLinkMetadata {
            button?: proto.IPaymentLinkButton | null;
            header?: proto.IPaymentLinkHeader | null;
            provider?: proto.IPaymentLinkProvider | null;
        }
        export class PaymentLinkMetadata implements IPaymentLinkMetadata {
            constructor(properties?: IPaymentLinkMetadata);
            public static create(properties?: IPaymentLinkMetadata): PaymentLinkMetadata;
            public static encode(message: IPaymentLinkMetadata, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): PaymentLinkMetadata;
            public static fromObject(object: { [k: string]: any }): PaymentLinkMetadata;
            public static toObject(message: PaymentLinkMetadata, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace PaymentLinkMetadata {
            export interface IPaymentLinkButton {
                displayText?: string | null;
            }
            export class PaymentLinkButton implements IPaymentLinkButton {
                constructor(properties?: IPaymentLinkButton);
                public static create(properties?: IPaymentLinkButton): PaymentLinkButton;
                public static encode(message: IPaymentLinkButton, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): PaymentLinkButton;
                public static fromObject(object: { [k: string]: any }): PaymentLinkButton;
                public static toObject(message: PaymentLinkButton, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export interface IPaymentLinkHeader {
                headerType?: proto.IPaymentLinkHeaderType | null;
            }
            export class PaymentLinkHeader implements IPaymentLinkHeader {
                constructor(properties?: IPaymentLinkHeader);
                public static create(properties?: IPaymentLinkHeader): PaymentLinkHeader;
                public static encode(message: IPaymentLinkHeader, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): PaymentLinkHeader;
                public static fromObject(object: { [k: string]: any }): PaymentLinkHeader;
                public static toObject(message: PaymentLinkHeader, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export namespace PaymentLinkHeader {
                export enum PaymentLinkHeaderType {
                    LINK_PREVIEW = 0,
                    ORDER = 1,
                }
                export type IPaymentLinkHeaderType = PaymentLinkHeaderType;
            }
            export interface IPaymentLinkProvider {
                paramsJson?: string | null;
            }
            export class PaymentLinkProvider implements IPaymentLinkProvider {
                constructor(properties?: IPaymentLinkProvider);
                public static create(properties?: IPaymentLinkProvider): PaymentLinkProvider;
                public static encode(message: IPaymentLinkProvider, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): PaymentLinkProvider;
                public static fromObject(object: { [k: string]: any }): PaymentLinkProvider;
                public static toObject(message: PaymentLinkProvider, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
        }
        export interface IPeerDataOperationRequestMessage {
            peerDataOperationRequestType?: proto.Message.PeerDataOperationRequestType | null;
            requestStickerReupload?: (proto.IRequestStickerReupload)[] | null;
            requestUrlPreview?: (proto.IRequestUrlPreview)[] | null;
            historySyncOnDemandRequest?: proto.IHistorySyncOnDemandRequest | null;
            placeholderMessageResendRequest?: (proto.IPlaceholderMessageResendRequest)[] | null;
            fullHistorySyncOnDemandRequest?: proto.IFullHistorySyncOnDemandRequest | null;
            syncdCollectionFatalRecoveryRequest?: proto.ISyncDCollectionFatalRecoveryRequest | null;
            historySyncChunkRetryRequest?: proto.IHistorySyncChunkRetryRequest | null;
            galaxyFlowAction?: proto.IGalaxyFlowAction | null;
        }
        export class PeerDataOperationRequestMessage implements IPeerDataOperationRequestMessage {
            constructor(properties?: IPeerDataOperationRequestMessage);
            public static create(properties?: IPeerDataOperationRequestMessage): PeerDataOperationRequestMessage;
            public static encode(message: IPeerDataOperationRequestMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): PeerDataOperationRequestMessage;
            public static fromObject(object: { [k: string]: any }): PeerDataOperationRequestMessage;
            public static toObject(message: PeerDataOperationRequestMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace PeerDataOperationRequestMessage {
            export interface IFullHistorySyncOnDemandRequest {
                requestMetadata?: proto.Message.FullHistorySyncOnDemandRequestMetadata | null;
                historySyncConfig?: proto.DeviceProps.HistorySyncConfig | null;
            }
            export class FullHistorySyncOnDemandRequest implements IFullHistorySyncOnDemandRequest {
                constructor(properties?: IFullHistorySyncOnDemandRequest);
                public static create(properties?: IFullHistorySyncOnDemandRequest): FullHistorySyncOnDemandRequest;
                public static encode(message: IFullHistorySyncOnDemandRequest, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): FullHistorySyncOnDemandRequest;
                public static fromObject(object: { [k: string]: any }): FullHistorySyncOnDemandRequest;
                public static toObject(message: FullHistorySyncOnDemandRequest, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export interface IGalaxyFlowAction {
                type?: proto.IGalaxyFlowActionType | null;
                flowId?: string | null;
                stanzaId?: string | null;
            }
            export class GalaxyFlowAction implements IGalaxyFlowAction {
                constructor(properties?: IGalaxyFlowAction);
                public static create(properties?: IGalaxyFlowAction): GalaxyFlowAction;
                public static encode(message: IGalaxyFlowAction, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): GalaxyFlowAction;
                public static fromObject(object: { [k: string]: any }): GalaxyFlowAction;
                public static toObject(message: GalaxyFlowAction, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export namespace GalaxyFlowAction {
                export enum GalaxyFlowActionType {
                    NOTIFY_LAUNCH = 1,
                }
                export type IGalaxyFlowActionType = GalaxyFlowActionType;
            }
            export interface IHistorySyncChunkRetryRequest {
                syncType?: proto.Message.HistorySyncType | null;
                chunkOrder?: number | null;
                chunkNotificationId?: string | null;
                regenerateChunk?: boolean | null;
            }
            export class HistorySyncChunkRetryRequest implements IHistorySyncChunkRetryRequest {
                constructor(properties?: IHistorySyncChunkRetryRequest);
                public static create(properties?: IHistorySyncChunkRetryRequest): HistorySyncChunkRetryRequest;
                public static encode(message: IHistorySyncChunkRetryRequest, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): HistorySyncChunkRetryRequest;
                public static fromObject(object: { [k: string]: any }): HistorySyncChunkRetryRequest;
                public static toObject(message: HistorySyncChunkRetryRequest, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export interface IHistorySyncOnDemandRequest {
                chatJid?: string | null;
                oldestMsgId?: string | null;
                oldestMsgFromMe?: boolean | null;
                onDemandMsgCount?: number | null;
                oldestMsgTimestampMs?: number | Long | null;
                accountLid?: string | null;
            }
            export class HistorySyncOnDemandRequest implements IHistorySyncOnDemandRequest {
                constructor(properties?: IHistorySyncOnDemandRequest);
                public static create(properties?: IHistorySyncOnDemandRequest): HistorySyncOnDemandRequest;
                public static encode(message: IHistorySyncOnDemandRequest, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): HistorySyncOnDemandRequest;
                public static fromObject(object: { [k: string]: any }): HistorySyncOnDemandRequest;
                public static toObject(message: HistorySyncOnDemandRequest, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export interface IPlaceholderMessageResendRequest {
                messageKey?: proto.IMessageKey | null;
            }
            export class PlaceholderMessageResendRequest implements IPlaceholderMessageResendRequest {
                constructor(properties?: IPlaceholderMessageResendRequest);
                public static create(properties?: IPlaceholderMessageResendRequest): PlaceholderMessageResendRequest;
                public static encode(message: IPlaceholderMessageResendRequest, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): PlaceholderMessageResendRequest;
                public static fromObject(object: { [k: string]: any }): PlaceholderMessageResendRequest;
                public static toObject(message: PlaceholderMessageResendRequest, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export interface IRequestStickerReupload {
                fileSha256?: string | null;
            }
            export class RequestStickerReupload implements IRequestStickerReupload {
                constructor(properties?: IRequestStickerReupload);
                public static create(properties?: IRequestStickerReupload): RequestStickerReupload;
                public static encode(message: IRequestStickerReupload, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): RequestStickerReupload;
                public static fromObject(object: { [k: string]: any }): RequestStickerReupload;
                public static toObject(message: RequestStickerReupload, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export interface IRequestUrlPreview {
                url?: string | null;
                includeHqThumbnail?: boolean | null;
            }
            export class RequestUrlPreview implements IRequestUrlPreview {
                constructor(properties?: IRequestUrlPreview);
                public static create(properties?: IRequestUrlPreview): RequestUrlPreview;
                public static encode(message: IRequestUrlPreview, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): RequestUrlPreview;
                public static fromObject(object: { [k: string]: any }): RequestUrlPreview;
                public static toObject(message: RequestUrlPreview, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export interface ISyncDCollectionFatalRecoveryRequest {
                collectionName?: string | null;
                timestamp?: number | Long | null;
            }
            export class SyncDCollectionFatalRecoveryRequest implements ISyncDCollectionFatalRecoveryRequest {
                constructor(properties?: ISyncDCollectionFatalRecoveryRequest);
                public static create(properties?: ISyncDCollectionFatalRecoveryRequest): SyncDCollectionFatalRecoveryRequest;
                public static encode(message: ISyncDCollectionFatalRecoveryRequest, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): SyncDCollectionFatalRecoveryRequest;
                public static fromObject(object: { [k: string]: any }): SyncDCollectionFatalRecoveryRequest;
                public static toObject(message: SyncDCollectionFatalRecoveryRequest, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
        }
        export interface IPeerDataOperationRequestResponseMessage {
            peerDataOperationRequestType?: proto.Message.PeerDataOperationRequestType | null;
            stanzaId?: string | null;
            peerDataOperationResult?: (proto.IPeerDataOperationResult)[] | null;
        }
        export class PeerDataOperationRequestResponseMessage implements IPeerDataOperationRequestResponseMessage {
            constructor(properties?: IPeerDataOperationRequestResponseMessage);
            public static create(properties?: IPeerDataOperationRequestResponseMessage): PeerDataOperationRequestResponseMessage;
            public static encode(message: IPeerDataOperationRequestResponseMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): PeerDataOperationRequestResponseMessage;
            public static fromObject(object: { [k: string]: any }): PeerDataOperationRequestResponseMessage;
            public static toObject(message: PeerDataOperationRequestResponseMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace PeerDataOperationRequestResponseMessage {
            export interface IPeerDataOperationResult {
                mediaUploadResult?: proto.MediaRetryNotification.ResultType | null;
                stickerMessage?: proto.Message.StickerMessage | null;
                linkPreviewResponse?: proto.ILinkPreviewResponse | null;
                placeholderMessageResendResponse?: proto.IPlaceholderMessageResendResponse | null;
                waffleNonceFetchRequestResponse?: proto.IWaffleNonceFetchResponse | null;
                fullHistorySyncOnDemandRequestResponse?: proto.IFullHistorySyncOnDemandRequestResponse | null;
                companionMetaNonceFetchRequestResponse?: proto.ICompanionMetaNonceFetchResponse | null;
                syncdSnapshotFatalRecoveryResponse?: proto.ISyncDSnapshotFatalRecoveryResponse | null;
                companionCanonicalUserNonceFetchRequestResponse?: proto.ICompanionCanonicalUserNonceFetchResponse | null;
                historySyncChunkRetryResponse?: proto.IHistorySyncChunkRetryResponse | null;
            }
            export class PeerDataOperationResult implements IPeerDataOperationResult {
                constructor(properties?: IPeerDataOperationResult);
                public static create(properties?: IPeerDataOperationResult): PeerDataOperationResult;
                public static encode(message: IPeerDataOperationResult, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): PeerDataOperationResult;
                public static fromObject(object: { [k: string]: any }): PeerDataOperationResult;
                public static toObject(message: PeerDataOperationResult, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export namespace PeerDataOperationResult {
                export interface ICompanionCanonicalUserNonceFetchResponse {
                    nonce?: string | null;
                    waFbid?: string | null;
                    forceRefresh?: boolean | null;
                }
                export class CompanionCanonicalUserNonceFetchResponse implements ICompanionCanonicalUserNonceFetchResponse {
                    constructor(properties?: ICompanionCanonicalUserNonceFetchResponse);
                    public static create(properties?: ICompanionCanonicalUserNonceFetchResponse): CompanionCanonicalUserNonceFetchResponse;
                    public static encode(message: ICompanionCanonicalUserNonceFetchResponse, writer?: any): any;
                    public static decode(reader: Uint8Array | any, length?: number): CompanionCanonicalUserNonceFetchResponse;
                    public static fromObject(object: { [k: string]: any }): CompanionCanonicalUserNonceFetchResponse;
                    public static toObject(message: CompanionCanonicalUserNonceFetchResponse, options?: any): { [k: string]: any };
                    public static verify(message: { [k: string]: any }): string | null;
                }
                export interface ICompanionMetaNonceFetchResponse {
                    nonce?: string | null;
                }
                export class CompanionMetaNonceFetchResponse implements ICompanionMetaNonceFetchResponse {
                    constructor(properties?: ICompanionMetaNonceFetchResponse);
                    public static create(properties?: ICompanionMetaNonceFetchResponse): CompanionMetaNonceFetchResponse;
                    public static encode(message: ICompanionMetaNonceFetchResponse, writer?: any): any;
                    public static decode(reader: Uint8Array | any, length?: number): CompanionMetaNonceFetchResponse;
                    public static fromObject(object: { [k: string]: any }): CompanionMetaNonceFetchResponse;
                    public static toObject(message: CompanionMetaNonceFetchResponse, options?: any): { [k: string]: any };
                    public static verify(message: { [k: string]: any }): string | null;
                }
                export interface IFullHistorySyncOnDemandRequestResponse {
                    requestMetadata?: proto.Message.FullHistorySyncOnDemandRequestMetadata | null;
                    responseCode?: proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.FullHistorySyncOnDemandResponseCode | null;
                }
                export class FullHistorySyncOnDemandRequestResponse implements IFullHistorySyncOnDemandRequestResponse {
                    constructor(properties?: IFullHistorySyncOnDemandRequestResponse);
                    public static create(properties?: IFullHistorySyncOnDemandRequestResponse): FullHistorySyncOnDemandRequestResponse;
                    public static encode(message: IFullHistorySyncOnDemandRequestResponse, writer?: any): any;
                    public static decode(reader: Uint8Array | any, length?: number): FullHistorySyncOnDemandRequestResponse;
                    public static fromObject(object: { [k: string]: any }): FullHistorySyncOnDemandRequestResponse;
                    public static toObject(message: FullHistorySyncOnDemandRequestResponse, options?: any): { [k: string]: any };
                    public static verify(message: { [k: string]: any }): string | null;
                }
                export enum FullHistorySyncOnDemandResponseCode {
                    REQUEST_SUCCESS = 0,
                    REQUEST_TIME_EXPIRED = 1,
                    DECLINED_SHARING_HISTORY = 2,
                    GENERIC_ERROR = 3,
                    ERROR_REQUEST_ON_NON_SMB_PRIMARY = 4,
                    ERROR_HOSTED_DEVICE_NOT_CONNECTED = 5,
                    ERROR_HOSTED_DEVICE_LOGIN_TIME_NOT_SET = 6,
                }
                export type IFullHistorySyncOnDemandResponseCode = FullHistorySyncOnDemandResponseCode;
                export interface IHistorySyncChunkRetryResponse {
                    syncType?: proto.Message.HistorySyncType | null;
                    chunkOrder?: number | null;
                    requestId?: string | null;
                    responseCode?: proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.HistorySyncChunkRetryResponseCode | null;
                    canRecover?: boolean | null;
                }
                export class HistorySyncChunkRetryResponse implements IHistorySyncChunkRetryResponse {
                    constructor(properties?: IHistorySyncChunkRetryResponse);
                    public static create(properties?: IHistorySyncChunkRetryResponse): HistorySyncChunkRetryResponse;
                    public static encode(message: IHistorySyncChunkRetryResponse, writer?: any): any;
                    public static decode(reader: Uint8Array | any, length?: number): HistorySyncChunkRetryResponse;
                    public static fromObject(object: { [k: string]: any }): HistorySyncChunkRetryResponse;
                    public static toObject(message: HistorySyncChunkRetryResponse, options?: any): { [k: string]: any };
                    public static verify(message: { [k: string]: any }): string | null;
                }
                export enum HistorySyncChunkRetryResponseCode {
                    GENERATION_ERROR = 1,
                    CHUNK_CONSUMED = 2,
                    TIMEOUT = 3,
                    SESSION_EXHAUSTED = 4,
                    CHUNK_EXHAUSTED = 5,
                    DUPLICATED_REQUEST = 6,
                }
                export type IHistorySyncChunkRetryResponseCode = HistorySyncChunkRetryResponseCode;
                export interface ILinkPreviewResponse {
                    url?: string | null;
                    title?: string | null;
                    description?: string | null;
                    thumbData?: Uint8Array | null;
                    matchText?: string | null;
                    previewType?: string | null;
                    hqThumbnail?: proto.ILinkPreviewHighQualityThumbnail | null;
                    previewMetadata?: proto.IPaymentLinkPreviewMetadata | null;
                }
                export class LinkPreviewResponse implements ILinkPreviewResponse {
                    constructor(properties?: ILinkPreviewResponse);
                    public static create(properties?: ILinkPreviewResponse): LinkPreviewResponse;
                    public static encode(message: ILinkPreviewResponse, writer?: any): any;
                    public static decode(reader: Uint8Array | any, length?: number): LinkPreviewResponse;
                    public static fromObject(object: { [k: string]: any }): LinkPreviewResponse;
                    public static toObject(message: LinkPreviewResponse, options?: any): { [k: string]: any };
                    public static verify(message: { [k: string]: any }): string | null;
                }
                export namespace LinkPreviewResponse {
                    export interface ILinkPreviewHighQualityThumbnail {
                        directPath?: string | null;
                        thumbHash?: string | null;
                        encThumbHash?: string | null;
                        mediaKey?: Uint8Array | null;
                        mediaKeyTimestampMs?: number | Long | null;
                        thumbWidth?: number | null;
                        thumbHeight?: number | null;
                    }
                    export class LinkPreviewHighQualityThumbnail implements ILinkPreviewHighQualityThumbnail {
                        constructor(properties?: ILinkPreviewHighQualityThumbnail);
                        public static create(properties?: ILinkPreviewHighQualityThumbnail): LinkPreviewHighQualityThumbnail;
                        public static encode(message: ILinkPreviewHighQualityThumbnail, writer?: any): any;
                        public static decode(reader: Uint8Array | any, length?: number): LinkPreviewHighQualityThumbnail;
                        public static fromObject(object: { [k: string]: any }): LinkPreviewHighQualityThumbnail;
                        public static toObject(message: LinkPreviewHighQualityThumbnail, options?: any): { [k: string]: any };
                        public static verify(message: { [k: string]: any }): string | null;
                    }
                    export interface IPaymentLinkPreviewMetadata {
                        isBusinessVerified?: boolean | null;
                        providerName?: string | null;
                    }
                    export class PaymentLinkPreviewMetadata implements IPaymentLinkPreviewMetadata {
                        constructor(properties?: IPaymentLinkPreviewMetadata);
                        public static create(properties?: IPaymentLinkPreviewMetadata): PaymentLinkPreviewMetadata;
                        public static encode(message: IPaymentLinkPreviewMetadata, writer?: any): any;
                        public static decode(reader: Uint8Array | any, length?: number): PaymentLinkPreviewMetadata;
                        public static fromObject(object: { [k: string]: any }): PaymentLinkPreviewMetadata;
                        public static toObject(message: PaymentLinkPreviewMetadata, options?: any): { [k: string]: any };
                        public static verify(message: { [k: string]: any }): string | null;
                    }
                }
                export interface IPlaceholderMessageResendResponse {
                    webMessageInfoBytes?: Uint8Array | null;
                }
                export class PlaceholderMessageResendResponse implements IPlaceholderMessageResendResponse {
                    constructor(properties?: IPlaceholderMessageResendResponse);
                    public static create(properties?: IPlaceholderMessageResendResponse): PlaceholderMessageResendResponse;
                    public static encode(message: IPlaceholderMessageResendResponse, writer?: any): any;
                    public static decode(reader: Uint8Array | any, length?: number): PlaceholderMessageResendResponse;
                    public static fromObject(object: { [k: string]: any }): PlaceholderMessageResendResponse;
                    public static toObject(message: PlaceholderMessageResendResponse, options?: any): { [k: string]: any };
                    public static verify(message: { [k: string]: any }): string | null;
                }
                export interface ISyncDSnapshotFatalRecoveryResponse {
                    collectionSnapshot?: Uint8Array | null;
                    isCompressed?: boolean | null;
                }
                export class SyncDSnapshotFatalRecoveryResponse implements ISyncDSnapshotFatalRecoveryResponse {
                    constructor(properties?: ISyncDSnapshotFatalRecoveryResponse);
                    public static create(properties?: ISyncDSnapshotFatalRecoveryResponse): SyncDSnapshotFatalRecoveryResponse;
                    public static encode(message: ISyncDSnapshotFatalRecoveryResponse, writer?: any): any;
                    public static decode(reader: Uint8Array | any, length?: number): SyncDSnapshotFatalRecoveryResponse;
                    public static fromObject(object: { [k: string]: any }): SyncDSnapshotFatalRecoveryResponse;
                    public static toObject(message: SyncDSnapshotFatalRecoveryResponse, options?: any): { [k: string]: any };
                    public static verify(message: { [k: string]: any }): string | null;
                }
                export interface IWaffleNonceFetchResponse {
                    nonce?: string | null;
                    waEntFbid?: string | null;
                }
                export class WaffleNonceFetchResponse implements IWaffleNonceFetchResponse {
                    constructor(properties?: IWaffleNonceFetchResponse);
                    public static create(properties?: IWaffleNonceFetchResponse): WaffleNonceFetchResponse;
                    public static encode(message: IWaffleNonceFetchResponse, writer?: any): any;
                    public static decode(reader: Uint8Array | any, length?: number): WaffleNonceFetchResponse;
                    public static fromObject(object: { [k: string]: any }): WaffleNonceFetchResponse;
                    public static toObject(message: WaffleNonceFetchResponse, options?: any): { [k: string]: any };
                    public static verify(message: { [k: string]: any }): string | null;
                }
            }
        }
        export enum PeerDataOperationRequestType {
            UPLOAD_STICKER = 0,
            SEND_RECENT_STICKER_BOOTSTRAP = 1,
            GENERATE_LINK_PREVIEW = 2,
            HISTORY_SYNC_ON_DEMAND = 3,
            PLACEHOLDER_MESSAGE_RESEND = 4,
            WAFFLE_LINKING_NONCE_FETCH = 5,
            FULL_HISTORY_SYNC_ON_DEMAND = 6,
            COMPANION_META_NONCE_FETCH = 7,
            COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY = 8,
            COMPANION_CANONICAL_USER_NONCE_FETCH = 9,
            HISTORY_SYNC_CHUNK_RETRY = 10,
            GALAXY_FLOW_ACTION = 11,
        }
        export type IPeerDataOperationRequestType = PeerDataOperationRequestType;
        export interface IPinInChatMessage {
            key?: proto.IMessageKey | null;
            type?: proto.IType | null;
            senderTimestampMs?: number | Long | null;
        }
        export class PinInChatMessage implements IPinInChatMessage {
            constructor(properties?: IPinInChatMessage);
            public static create(properties?: IPinInChatMessage): PinInChatMessage;
            public static encode(message: IPinInChatMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): PinInChatMessage;
            public static fromObject(object: { [k: string]: any }): PinInChatMessage;
            public static toObject(message: PinInChatMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace PinInChatMessage {
            export enum Type {
                UNKNOWN_TYPE = 0,
                PIN_FOR_ALL = 1,
                UNPIN_FOR_ALL = 2,
            }
            export type IType = Type;
        }
        export interface IPlaceholderMessage {
            type?: proto.IPlaceholderType | null;
        }
        export class PlaceholderMessage implements IPlaceholderMessage {
            constructor(properties?: IPlaceholderMessage);
            public static create(properties?: IPlaceholderMessage): PlaceholderMessage;
            public static encode(message: IPlaceholderMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): PlaceholderMessage;
            public static fromObject(object: { [k: string]: any }): PlaceholderMessage;
            public static toObject(message: PlaceholderMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace PlaceholderMessage {
            export enum PlaceholderType {
                MASK_LINKED_DEVICES = 0,
            }
            export type IPlaceholderType = PlaceholderType;
        }
        export enum PollContentType {
            UNKNOWN = 0,
            TEXT = 1,
            IMAGE = 2,
        }
        export type IPollContentType = PollContentType;
        export interface IPollCreationMessage {
            encKey?: Uint8Array | null;
            name?: string | null;
            options?: (proto.IOption)[] | null;
            selectableOptionsCount?: number | null;
            contextInfo?: proto.IContextInfo | null;
            pollContentType?: proto.Message.PollContentType | null;
            pollType?: proto.Message.PollType | null;
            correctAnswer?: proto.IOption | null;
        }
        export class PollCreationMessage implements IPollCreationMessage {
            constructor(properties?: IPollCreationMessage);
            public static create(properties?: IPollCreationMessage): PollCreationMessage;
            public static encode(message: IPollCreationMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): PollCreationMessage;
            public static fromObject(object: { [k: string]: any }): PollCreationMessage;
            public static toObject(message: PollCreationMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace PollCreationMessage {
            export interface IOption {
                optionName?: string | null;
                optionHash?: string | null;
            }
            export class Option implements IOption {
                constructor(properties?: IOption);
                public static create(properties?: IOption): Option;
                public static encode(message: IOption, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): Option;
                public static fromObject(object: { [k: string]: any }): Option;
                public static toObject(message: Option, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
        }
        export interface IPollEncValue {
            encPayload?: Uint8Array | null;
            encIv?: Uint8Array | null;
        }
        export class PollEncValue implements IPollEncValue {
            constructor(properties?: IPollEncValue);
            public static create(properties?: IPollEncValue): PollEncValue;
            public static encode(message: IPollEncValue, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): PollEncValue;
            public static fromObject(object: { [k: string]: any }): PollEncValue;
            public static toObject(message: PollEncValue, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IPollResultSnapshotMessage {
            name?: string | null;
            pollVotes?: (proto.IPollVote)[] | null;
            contextInfo?: proto.IContextInfo | null;
            pollType?: proto.Message.PollType | null;
        }
        export class PollResultSnapshotMessage implements IPollResultSnapshotMessage {
            constructor(properties?: IPollResultSnapshotMessage);
            public static create(properties?: IPollResultSnapshotMessage): PollResultSnapshotMessage;
            public static encode(message: IPollResultSnapshotMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): PollResultSnapshotMessage;
            public static fromObject(object: { [k: string]: any }): PollResultSnapshotMessage;
            public static toObject(message: PollResultSnapshotMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace PollResultSnapshotMessage {
            export interface IPollVote {
                optionName?: string | null;
                optionVoteCount?: number | Long | null;
            }
            export class PollVote implements IPollVote {
                constructor(properties?: IPollVote);
                public static create(properties?: IPollVote): PollVote;
                public static encode(message: IPollVote, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): PollVote;
                public static fromObject(object: { [k: string]: any }): PollVote;
                public static toObject(message: PollVote, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
        }
        export enum PollType {
            POLL = 0,
            QUIZ = 1,
        }
        export type IPollType = PollType;
        export interface IPollUpdateMessage {
            pollCreationMessageKey?: proto.IMessageKey | null;
            vote?: proto.Message.PollEncValue | null;
            metadata?: proto.Message.PollUpdateMessageMetadata | null;
            senderTimestampMs?: number | Long | null;
        }
        export class PollUpdateMessage implements IPollUpdateMessage {
            constructor(properties?: IPollUpdateMessage);
            public static create(properties?: IPollUpdateMessage): PollUpdateMessage;
            public static encode(message: IPollUpdateMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): PollUpdateMessage;
            public static fromObject(object: { [k: string]: any }): PollUpdateMessage;
            public static toObject(message: PollUpdateMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IPollUpdateMessageMetadata {
        }
        export class PollUpdateMessageMetadata implements IPollUpdateMessageMetadata {
            constructor(properties?: IPollUpdateMessageMetadata);
            public static create(properties?: IPollUpdateMessageMetadata): PollUpdateMessageMetadata;
            public static encode(message: IPollUpdateMessageMetadata, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): PollUpdateMessageMetadata;
            public static fromObject(object: { [k: string]: any }): PollUpdateMessageMetadata;
            public static toObject(message: PollUpdateMessageMetadata, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IPollVoteMessage {
            selectedOptions?: (Uint8Array)[] | null;
        }
        export class PollVoteMessage implements IPollVoteMessage {
            constructor(properties?: IPollVoteMessage);
            public static create(properties?: IPollVoteMessage): PollVoteMessage;
            public static encode(message: IPollVoteMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): PollVoteMessage;
            public static fromObject(object: { [k: string]: any }): PollVoteMessage;
            public static toObject(message: PollVoteMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IProductMessage {
            product?: proto.IProductSnapshot | null;
            businessOwnerJid?: string | null;
            catalog?: proto.ICatalogSnapshot | null;
            body?: string | null;
            footer?: string | null;
            contextInfo?: proto.IContextInfo | null;
        }
        export class ProductMessage implements IProductMessage {
            constructor(properties?: IProductMessage);
            public static create(properties?: IProductMessage): ProductMessage;
            public static encode(message: IProductMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): ProductMessage;
            public static fromObject(object: { [k: string]: any }): ProductMessage;
            public static toObject(message: ProductMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace ProductMessage {
            export interface ICatalogSnapshot {
                catalogImage?: proto.Message.ImageMessage | null;
                title?: string | null;
                description?: string | null;
            }
            export class CatalogSnapshot implements ICatalogSnapshot {
                constructor(properties?: ICatalogSnapshot);
                public static create(properties?: ICatalogSnapshot): CatalogSnapshot;
                public static encode(message: ICatalogSnapshot, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): CatalogSnapshot;
                public static fromObject(object: { [k: string]: any }): CatalogSnapshot;
                public static toObject(message: CatalogSnapshot, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export interface IProductSnapshot {
                productImage?: proto.Message.ImageMessage | null;
                productId?: string | null;
                title?: string | null;
                description?: string | null;
                currencyCode?: string | null;
                priceAmount1000?: number | Long | null;
                retailerId?: string | null;
                url?: string | null;
                productImageCount?: number | null;
                firstImageId?: string | null;
                salePriceAmount1000?: number | Long | null;
                signedUrl?: string | null;
            }
            export class ProductSnapshot implements IProductSnapshot {
                constructor(properties?: IProductSnapshot);
                public static create(properties?: IProductSnapshot): ProductSnapshot;
                public static encode(message: IProductSnapshot, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): ProductSnapshot;
                public static fromObject(object: { [k: string]: any }): ProductSnapshot;
                public static toObject(message: ProductSnapshot, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
        }
        export interface IProtocolMessage {
            key?: proto.IMessageKey | null;
            type?: proto.IType | null;
            ephemeralExpiration?: number | null;
            ephemeralSettingTimestamp?: number | Long | null;
            historySyncNotification?: proto.Message.HistorySyncNotification | null;
            appStateSyncKeyShare?: proto.Message.AppStateSyncKeyShare | null;
            appStateSyncKeyRequest?: proto.Message.AppStateSyncKeyRequest | null;
            initialSecurityNotificationSettingSync?: proto.Message.InitialSecurityNotificationSettingSync | null;
            appStateFatalExceptionNotification?: proto.Message.AppStateFatalExceptionNotification | null;
            disappearingMode?: proto.IDisappearingMode | null;
            editedMessage?: proto.IMessage | null;
            timestampMs?: number | Long | null;
            peerDataOperationRequestMessage?: proto.Message.PeerDataOperationRequestMessage | null;
            peerDataOperationRequestResponseMessage?: proto.Message.PeerDataOperationRequestResponseMessage | null;
            botFeedbackMessage?: proto.IBotFeedbackMessage | null;
            invokerJid?: string | null;
            requestWelcomeMessageMetadata?: proto.Message.RequestWelcomeMessageMetadata | null;
            mediaNotifyMessage?: proto.IMediaNotifyMessage | null;
            cloudApiThreadControlNotification?: proto.Message.CloudAPIThreadControlNotification | null;
            lidMigrationMappingSyncMessage?: proto.ILIDMigrationMappingSyncMessage | null;
            limitSharing?: proto.ILimitSharing | null;
            aiPsiMetadata?: Uint8Array | null;
            aiQueryFanout?: proto.IAIQueryFanout | null;
            memberLabel?: proto.IMemberLabel | null;
        }
        export class ProtocolMessage implements IProtocolMessage {
            constructor(properties?: IProtocolMessage);
            public static create(properties?: IProtocolMessage): ProtocolMessage;
            public static encode(message: IProtocolMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): ProtocolMessage;
            public static fromObject(object: { [k: string]: any }): ProtocolMessage;
            public static toObject(message: ProtocolMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace ProtocolMessage {
            export enum Type {
                REVOKE = 0,
                EPHEMERAL_SETTING = 3,
                EPHEMERAL_SYNC_RESPONSE = 4,
                HISTORY_SYNC_NOTIFICATION = 5,
                APP_STATE_SYNC_KEY_SHARE = 6,
                APP_STATE_SYNC_KEY_REQUEST = 7,
                MSG_FANOUT_BACKFILL_REQUEST = 8,
                INITIAL_SECURITY_NOTIFICATION_SETTING_SYNC = 9,
                APP_STATE_FATAL_EXCEPTION_NOTIFICATION = 10,
                SHARE_PHONE_NUMBER = 11,
                MESSAGE_EDIT = 14,
                PEER_DATA_OPERATION_REQUEST_MESSAGE = 16,
                PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE = 17,
                REQUEST_WELCOME_MESSAGE = 18,
                BOT_FEEDBACK_MESSAGE = 19,
                MEDIA_NOTIFY_MESSAGE = 20,
                CLOUD_API_THREAD_CONTROL_NOTIFICATION = 21,
                LID_MIGRATION_MAPPING_SYNC = 22,
                REMINDER_MESSAGE = 23,
                BOT_MEMU_ONBOARDING_MESSAGE = 24,
                STATUS_MENTION_MESSAGE = 25,
                STOP_GENERATION_MESSAGE = 26,
                LIMIT_SHARING = 27,
                AI_PSI_METADATA = 28,
                AI_QUERY_FANOUT = 29,
                GROUP_MEMBER_LABEL_CHANGE = 30,
            }
            export type IType = Type;
        }
        export interface IQuestionResponseMessage {
            key?: proto.IMessageKey | null;
            text?: string | null;
        }
        export class QuestionResponseMessage implements IQuestionResponseMessage {
            constructor(properties?: IQuestionResponseMessage);
            public static create(properties?: IQuestionResponseMessage): QuestionResponseMessage;
            public static encode(message: IQuestionResponseMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): QuestionResponseMessage;
            public static fromObject(object: { [k: string]: any }): QuestionResponseMessage;
            public static toObject(message: QuestionResponseMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IReactionMessage {
            key?: proto.IMessageKey | null;
            text?: string | null;
            groupingKey?: string | null;
            senderTimestampMs?: number | Long | null;
        }
        export class ReactionMessage implements IReactionMessage {
            constructor(properties?: IReactionMessage);
            public static create(properties?: IReactionMessage): ReactionMessage;
            public static encode(message: IReactionMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): ReactionMessage;
            public static fromObject(object: { [k: string]: any }): ReactionMessage;
            public static toObject(message: ReactionMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IRequestPaymentMessage {
            noteMessage?: proto.IMessage | null;
            currencyCodeIso4217?: string | null;
            amount1000?: number | Long | null;
            requestFrom?: string | null;
            expiryTimestamp?: number | Long | null;
            amount?: proto.IMoney | null;
            background?: proto.IPaymentBackground | null;
        }
        export class RequestPaymentMessage implements IRequestPaymentMessage {
            constructor(properties?: IRequestPaymentMessage);
            public static create(properties?: IRequestPaymentMessage): RequestPaymentMessage;
            public static encode(message: IRequestPaymentMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): RequestPaymentMessage;
            public static fromObject(object: { [k: string]: any }): RequestPaymentMessage;
            public static toObject(message: RequestPaymentMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IRequestPhoneNumberMessage {
            contextInfo?: proto.IContextInfo | null;
        }
        export class RequestPhoneNumberMessage implements IRequestPhoneNumberMessage {
            constructor(properties?: IRequestPhoneNumberMessage);
            public static create(properties?: IRequestPhoneNumberMessage): RequestPhoneNumberMessage;
            public static encode(message: IRequestPhoneNumberMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): RequestPhoneNumberMessage;
            public static fromObject(object: { [k: string]: any }): RequestPhoneNumberMessage;
            public static toObject(message: RequestPhoneNumberMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IRequestWelcomeMessageMetadata {
            localChatState?: proto.ILocalChatState | null;
        }
        export class RequestWelcomeMessageMetadata implements IRequestWelcomeMessageMetadata {
            constructor(properties?: IRequestWelcomeMessageMetadata);
            public static create(properties?: IRequestWelcomeMessageMetadata): RequestWelcomeMessageMetadata;
            public static encode(message: IRequestWelcomeMessageMetadata, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): RequestWelcomeMessageMetadata;
            public static fromObject(object: { [k: string]: any }): RequestWelcomeMessageMetadata;
            public static toObject(message: RequestWelcomeMessageMetadata, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace RequestWelcomeMessageMetadata {
            export enum LocalChatState {
                EMPTY = 0,
                NON_EMPTY = 1,
            }
            export type ILocalChatState = LocalChatState;
        }
        export interface IScheduledCallCreationMessage {
            scheduledTimestampMs?: number | Long | null;
            callType?: proto.ICallType | null;
            title?: string | null;
        }
        export class ScheduledCallCreationMessage implements IScheduledCallCreationMessage {
            constructor(properties?: IScheduledCallCreationMessage);
            public static create(properties?: IScheduledCallCreationMessage): ScheduledCallCreationMessage;
            public static encode(message: IScheduledCallCreationMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): ScheduledCallCreationMessage;
            public static fromObject(object: { [k: string]: any }): ScheduledCallCreationMessage;
            public static toObject(message: ScheduledCallCreationMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace ScheduledCallCreationMessage {
            export enum CallType {
                UNKNOWN = 0,
                VOICE = 1,
                VIDEO = 2,
            }
            export type ICallType = CallType;
        }
        export interface IScheduledCallEditMessage {
            key?: proto.IMessageKey | null;
            editType?: proto.IEditType | null;
        }
        export class ScheduledCallEditMessage implements IScheduledCallEditMessage {
            constructor(properties?: IScheduledCallEditMessage);
            public static create(properties?: IScheduledCallEditMessage): ScheduledCallEditMessage;
            public static encode(message: IScheduledCallEditMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): ScheduledCallEditMessage;
            public static fromObject(object: { [k: string]: any }): ScheduledCallEditMessage;
            public static toObject(message: ScheduledCallEditMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace ScheduledCallEditMessage {
            export enum EditType {
                UNKNOWN = 0,
                CANCEL = 1,
            }
            export type IEditType = EditType;
        }
        export interface ISecretEncryptedMessage {
            targetMessageKey?: proto.IMessageKey | null;
            encPayload?: Uint8Array | null;
            encIv?: Uint8Array | null;
            secretEncType?: proto.ISecretEncType | null;
        }
        export class SecretEncryptedMessage implements ISecretEncryptedMessage {
            constructor(properties?: ISecretEncryptedMessage);
            public static create(properties?: ISecretEncryptedMessage): SecretEncryptedMessage;
            public static encode(message: ISecretEncryptedMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): SecretEncryptedMessage;
            public static fromObject(object: { [k: string]: any }): SecretEncryptedMessage;
            public static toObject(message: SecretEncryptedMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace SecretEncryptedMessage {
            export enum SecretEncType {
                UNKNOWN = 0,
                EVENT_EDIT = 1,
                MESSAGE_EDIT = 2,
            }
            export type ISecretEncType = SecretEncType;
        }
        export interface ISendPaymentMessage {
            noteMessage?: proto.IMessage | null;
            requestMessageKey?: proto.IMessageKey | null;
            background?: proto.IPaymentBackground | null;
            transactionData?: string | null;
        }
        export class SendPaymentMessage implements ISendPaymentMessage {
            constructor(properties?: ISendPaymentMessage);
            public static create(properties?: ISendPaymentMessage): SendPaymentMessage;
            public static encode(message: ISendPaymentMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): SendPaymentMessage;
            public static fromObject(object: { [k: string]: any }): SendPaymentMessage;
            public static toObject(message: SendPaymentMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface ISenderKeyDistributionMessage {
            groupId?: string | null;
            axolotlSenderKeyDistributionMessage?: Uint8Array | null;
        }
        export class SenderKeyDistributionMessage implements ISenderKeyDistributionMessage {
            constructor(properties?: ISenderKeyDistributionMessage);
            public static create(properties?: ISenderKeyDistributionMessage): SenderKeyDistributionMessage;
            public static encode(message: ISenderKeyDistributionMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): SenderKeyDistributionMessage;
            public static fromObject(object: { [k: string]: any }): SenderKeyDistributionMessage;
            public static toObject(message: SenderKeyDistributionMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IStatusNotificationMessage {
            responseMessageKey?: proto.IMessageKey | null;
            originalMessageKey?: proto.IMessageKey | null;
            type?: proto.IStatusNotificationType | null;
        }
        export class StatusNotificationMessage implements IStatusNotificationMessage {
            constructor(properties?: IStatusNotificationMessage);
            public static create(properties?: IStatusNotificationMessage): StatusNotificationMessage;
            public static encode(message: IStatusNotificationMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): StatusNotificationMessage;
            public static fromObject(object: { [k: string]: any }): StatusNotificationMessage;
            public static toObject(message: StatusNotificationMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace StatusNotificationMessage {
            export enum StatusNotificationType {
                UNKNOWN = 0,
                STATUS_ADD_YOURS = 1,
                STATUS_RESHARE = 2,
                STATUS_QUESTION_ANSWER_RESHARE = 3,
            }
            export type IStatusNotificationType = StatusNotificationType;
        }
        export interface IStatusQuestionAnswerMessage {
            key?: proto.IMessageKey | null;
            text?: string | null;
        }
        export class StatusQuestionAnswerMessage implements IStatusQuestionAnswerMessage {
            constructor(properties?: IStatusQuestionAnswerMessage);
            public static create(properties?: IStatusQuestionAnswerMessage): StatusQuestionAnswerMessage;
            public static encode(message: IStatusQuestionAnswerMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): StatusQuestionAnswerMessage;
            public static fromObject(object: { [k: string]: any }): StatusQuestionAnswerMessage;
            public static toObject(message: StatusQuestionAnswerMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IStatusQuotedMessage {
            type?: proto.IStatusQuotedMessageType | null;
            text?: string | null;
            thumbnail?: Uint8Array | null;
            originalStatusId?: proto.IMessageKey | null;
        }
        export class StatusQuotedMessage implements IStatusQuotedMessage {
            constructor(properties?: IStatusQuotedMessage);
            public static create(properties?: IStatusQuotedMessage): StatusQuotedMessage;
            public static encode(message: IStatusQuotedMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): StatusQuotedMessage;
            public static fromObject(object: { [k: string]: any }): StatusQuotedMessage;
            public static toObject(message: StatusQuotedMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace StatusQuotedMessage {
            export enum StatusQuotedMessageType {
                QUESTION_ANSWER = 1,
            }
            export type IStatusQuotedMessageType = StatusQuotedMessageType;
        }
        export interface IStatusStickerInteractionMessage {
            key?: proto.IMessageKey | null;
            stickerKey?: string | null;
            type?: proto.IStatusStickerType | null;
        }
        export class StatusStickerInteractionMessage implements IStatusStickerInteractionMessage {
            constructor(properties?: IStatusStickerInteractionMessage);
            public static create(properties?: IStatusStickerInteractionMessage): StatusStickerInteractionMessage;
            public static encode(message: IStatusStickerInteractionMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): StatusStickerInteractionMessage;
            public static fromObject(object: { [k: string]: any }): StatusStickerInteractionMessage;
            public static toObject(message: StatusStickerInteractionMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace StatusStickerInteractionMessage {
            export enum StatusStickerType {
                UNKNOWN = 0,
                REACTION = 1,
            }
            export type IStatusStickerType = StatusStickerType;
        }
        export interface IStickerMessage {
            url?: string | null;
            fileSha256?: Uint8Array | null;
            fileEncSha256?: Uint8Array | null;
            mediaKey?: Uint8Array | null;
            mimetype?: string | null;
            height?: number | null;
            width?: number | null;
            directPath?: string | null;
            fileLength?: number | Long | null;
            mediaKeyTimestamp?: number | Long | null;
            firstFrameLength?: number | null;
            firstFrameSidecar?: Uint8Array | null;
            isAnimated?: boolean | null;
            pngThumbnail?: Uint8Array | null;
            contextInfo?: proto.IContextInfo | null;
            stickerSentTs?: number | Long | null;
            isAvatar?: boolean | null;
            isAiSticker?: boolean | null;
            isLottie?: boolean | null;
            accessibilityLabel?: string | null;
            mediaKeyDomain?: proto.Message.MediaKeyDomain | null;
        }
        export class StickerMessage implements IStickerMessage {
            constructor(properties?: IStickerMessage);
            public static create(properties?: IStickerMessage): StickerMessage;
            public static encode(message: IStickerMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): StickerMessage;
            public static fromObject(object: { [k: string]: any }): StickerMessage;
            public static toObject(message: StickerMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IStickerPackMessage {
            stickerPackId?: string | null;
            name?: string | null;
            publisher?: string | null;
            stickers?: (proto.ISticker)[] | null;
            fileLength?: number | Long | null;
            fileSha256?: Uint8Array | null;
            fileEncSha256?: Uint8Array | null;
            mediaKey?: Uint8Array | null;
            directPath?: string | null;
            caption?: string | null;
            contextInfo?: proto.IContextInfo | null;
            packDescription?: string | null;
            mediaKeyTimestamp?: number | Long | null;
            trayIconFileName?: string | null;
            thumbnailDirectPath?: string | null;
            thumbnailSha256?: Uint8Array | null;
            thumbnailEncSha256?: Uint8Array | null;
            thumbnailHeight?: number | null;
            thumbnailWidth?: number | null;
            imageDataHash?: string | null;
            stickerPackSize?: number | Long | null;
            stickerPackOrigin?: proto.IStickerPackOrigin | null;
        }
        export class StickerPackMessage implements IStickerPackMessage {
            constructor(properties?: IStickerPackMessage);
            public static create(properties?: IStickerPackMessage): StickerPackMessage;
            public static encode(message: IStickerPackMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): StickerPackMessage;
            public static fromObject(object: { [k: string]: any }): StickerPackMessage;
            public static toObject(message: StickerPackMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace StickerPackMessage {
            export interface ISticker {
                fileName?: string | null;
                isAnimated?: boolean | null;
                emojis?: (string)[] | null;
                accessibilityLabel?: string | null;
                isLottie?: boolean | null;
                mimetype?: string | null;
            }
            export class Sticker implements ISticker {
                constructor(properties?: ISticker);
                public static create(properties?: ISticker): Sticker;
                public static encode(message: ISticker, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): Sticker;
                public static fromObject(object: { [k: string]: any }): Sticker;
                public static toObject(message: Sticker, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export enum StickerPackOrigin {
                FIRST_PARTY = 0,
                THIRD_PARTY = 1,
                USER_CREATED = 2,
            }
            export type IStickerPackOrigin = StickerPackOrigin;
        }
        export interface IStickerSyncRMRMessage {
            filehash?: (string)[] | null;
            rmrSource?: string | null;
            requestTimestamp?: number | Long | null;
        }
        export class StickerSyncRMRMessage implements IStickerSyncRMRMessage {
            constructor(properties?: IStickerSyncRMRMessage);
            public static create(properties?: IStickerSyncRMRMessage): StickerSyncRMRMessage;
            public static encode(message: IStickerSyncRMRMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): StickerSyncRMRMessage;
            public static fromObject(object: { [k: string]: any }): StickerSyncRMRMessage;
            public static toObject(message: StickerSyncRMRMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface ITemplateButtonReplyMessage {
            selectedId?: string | null;
            selectedDisplayText?: string | null;
            contextInfo?: proto.IContextInfo | null;
            selectedIndex?: number | null;
            selectedCarouselCardIndex?: number | null;
        }
        export class TemplateButtonReplyMessage implements ITemplateButtonReplyMessage {
            constructor(properties?: ITemplateButtonReplyMessage);
            public static create(properties?: ITemplateButtonReplyMessage): TemplateButtonReplyMessage;
            public static encode(message: ITemplateButtonReplyMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): TemplateButtonReplyMessage;
            public static fromObject(object: { [k: string]: any }): TemplateButtonReplyMessage;
            public static toObject(message: TemplateButtonReplyMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface ITemplateMessage {
            contextInfo?: proto.IContextInfo | null;
            hydratedTemplate?: proto.IHydratedFourRowTemplate | null;
            templateId?: string | null;
            fourRowTemplate?: proto.Message.TemplateMessage.FourRowTemplate | null;
            hydratedFourRowTemplate?: proto.Message.TemplateMessage.HydratedFourRowTemplate | null;
            interactiveMessageTemplate?: proto.Message.InteractiveMessage | null;
        }
        export class TemplateMessage implements ITemplateMessage {
            constructor(properties?: ITemplateMessage);
            public static create(properties?: ITemplateMessage): TemplateMessage;
            public static encode(message: ITemplateMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): TemplateMessage;
            public static fromObject(object: { [k: string]: any }): TemplateMessage;
            public static toObject(message: TemplateMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace TemplateMessage {
            export interface IFourRowTemplate {
                content?: proto.Message.HighlyStructuredMessage | null;
                footer?: proto.Message.HighlyStructuredMessage | null;
                buttons?: (proto.ITemplateButton)[] | null;
                documentMessage?: proto.Message.DocumentMessage | null;
                highlyStructuredMessage?: proto.Message.HighlyStructuredMessage | null;
                imageMessage?: proto.Message.ImageMessage | null;
                videoMessage?: proto.Message.VideoMessage | null;
                locationMessage?: proto.Message.LocationMessage | null;
            }
            export class FourRowTemplate implements IFourRowTemplate {
                constructor(properties?: IFourRowTemplate);
                public static create(properties?: IFourRowTemplate): FourRowTemplate;
                public static encode(message: IFourRowTemplate, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): FourRowTemplate;
                public static fromObject(object: { [k: string]: any }): FourRowTemplate;
                public static toObject(message: FourRowTemplate, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export interface IHydratedFourRowTemplate {
                hydratedContentText?: string | null;
                hydratedFooterText?: string | null;
                hydratedButtons?: (proto.IHydratedTemplateButton)[] | null;
                templateId?: string | null;
                maskLinkedDevices?: boolean | null;
                documentMessage?: proto.Message.DocumentMessage | null;
                hydratedTitleText?: string | null;
                imageMessage?: proto.Message.ImageMessage | null;
                videoMessage?: proto.Message.VideoMessage | null;
                locationMessage?: proto.Message.LocationMessage | null;
            }
            export class HydratedFourRowTemplate implements IHydratedFourRowTemplate {
                constructor(properties?: IHydratedFourRowTemplate);
                public static create(properties?: IHydratedFourRowTemplate): HydratedFourRowTemplate;
                public static encode(message: IHydratedFourRowTemplate, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): HydratedFourRowTemplate;
                public static fromObject(object: { [k: string]: any }): HydratedFourRowTemplate;
                public static toObject(message: HydratedFourRowTemplate, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
        }
        export interface IURLMetadata {
            fbExperimentId?: number | null;
        }
        export class URLMetadata implements IURLMetadata {
            constructor(properties?: IURLMetadata);
            public static create(properties?: IURLMetadata): URLMetadata;
            public static encode(message: IURLMetadata, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): URLMetadata;
            public static fromObject(object: { [k: string]: any }): URLMetadata;
            public static toObject(message: URLMetadata, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IVideoEndCard {
            username?: string | null;
            caption?: string | null;
            thumbnailImageUrl?: string | null;
            profilePictureUrl?: string | null;
        }
        export class VideoEndCard implements IVideoEndCard {
            constructor(properties?: IVideoEndCard);
            public static create(properties?: IVideoEndCard): VideoEndCard;
            public static encode(message: IVideoEndCard, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): VideoEndCard;
            public static fromObject(object: { [k: string]: any }): VideoEndCard;
            public static toObject(message: VideoEndCard, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IVideoMessage {
            url?: string | null;
            mimetype?: string | null;
            fileSha256?: Uint8Array | null;
            fileLength?: number | Long | null;
            seconds?: number | null;
            mediaKey?: Uint8Array | null;
            caption?: string | null;
            gifPlayback?: boolean | null;
            height?: number | null;
            width?: number | null;
            fileEncSha256?: Uint8Array | null;
            interactiveAnnotations?: (proto.IInteractiveAnnotation)[] | null;
            directPath?: string | null;
            mediaKeyTimestamp?: number | Long | null;
            jpegThumbnail?: Uint8Array | null;
            contextInfo?: proto.IContextInfo | null;
            streamingSidecar?: Uint8Array | null;
            gifAttribution?: proto.IAttribution | null;
            viewOnce?: boolean | null;
            thumbnailDirectPath?: string | null;
            thumbnailSha256?: Uint8Array | null;
            thumbnailEncSha256?: Uint8Array | null;
            staticUrl?: string | null;
            annotations?: (proto.IInteractiveAnnotation)[] | null;
            accessibilityLabel?: string | null;
            processedVideos?: (proto.IProcessedVideo)[] | null;
            externalShareFullVideoDurationInSeconds?: number | null;
            motionPhotoPresentationOffsetMs?: number | Long | null;
            metadataUrl?: string | null;
            videoSourceType?: proto.IVideoSourceType | null;
            mediaKeyDomain?: proto.Message.MediaKeyDomain | null;
        }
        export class VideoMessage implements IVideoMessage {
            constructor(properties?: IVideoMessage);
            public static create(properties?: IVideoMessage): VideoMessage;
            public static encode(message: IVideoMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): VideoMessage;
            public static fromObject(object: { [k: string]: any }): VideoMessage;
            public static toObject(message: VideoMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace VideoMessage {
            export enum Attribution {
                NONE = 0,
                GIPHY = 1,
                TENOR = 2,
                KLIPY = 3,
            }
            export type IAttribution = Attribution;
            export enum VideoSourceType {
                USER_VIDEO = 0,
                AI_GENERATED = 1,
            }
            export type IVideoSourceType = VideoSourceType;
        }
    }
    export interface IMessageAddOn {
        messageAddOnType?: proto.IMessageAddOnType | null;
        messageAddOn?: proto.IMessage | null;
        senderTimestampMs?: number | Long | null;
        serverTimestampMs?: number | Long | null;
        status?: proto.WebMessageInfo.Status | null;
        addOnContextInfo?: proto.IMessageAddOnContextInfo | null;
        messageAddOnKey?: proto.IMessageKey | null;
        legacyMessage?: proto.ILegacyMessage | null;
    }
    export class MessageAddOn implements IMessageAddOn {
        constructor(properties?: IMessageAddOn);
        public static create(properties?: IMessageAddOn): MessageAddOn;
        public static encode(message: IMessageAddOn, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): MessageAddOn;
        public static fromObject(object: { [k: string]: any }): MessageAddOn;
        public static toObject(message: MessageAddOn, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace MessageAddOn {
        export enum MessageAddOnType {
            UNDEFINED = 0,
            REACTION = 1,
            EVENT_RESPONSE = 2,
            POLL_UPDATE = 3,
            PIN_IN_CHAT = 4,
        }
        export type IMessageAddOnType = MessageAddOnType;
    }
    export interface IMessageAddOnContextInfo {
        messageAddOnDurationInSecs?: number | null;
        messageAddOnExpiryType?: proto.MessageContextInfo.MessageAddonExpiryType | null;
    }
    export class MessageAddOnContextInfo implements IMessageAddOnContextInfo {
        constructor(properties?: IMessageAddOnContextInfo);
        public static create(properties?: IMessageAddOnContextInfo): MessageAddOnContextInfo;
        public static encode(message: IMessageAddOnContextInfo, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): MessageAddOnContextInfo;
        public static fromObject(object: { [k: string]: any }): MessageAddOnContextInfo;
        public static toObject(message: MessageAddOnContextInfo, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IMessageAssociation {
        associationType?: proto.IAssociationType | null;
        parentMessageKey?: proto.IMessageKey | null;
        messageIndex?: number | null;
    }
    export class MessageAssociation implements IMessageAssociation {
        constructor(properties?: IMessageAssociation);
        public static create(properties?: IMessageAssociation): MessageAssociation;
        public static encode(message: IMessageAssociation, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): MessageAssociation;
        public static fromObject(object: { [k: string]: any }): MessageAssociation;
        public static toObject(message: MessageAssociation, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace MessageAssociation {
        export enum AssociationType {
            UNKNOWN = 0,
            MEDIA_ALBUM = 1,
            BOT_PLUGIN = 2,
            EVENT_COVER_IMAGE = 3,
            STATUS_POLL = 4,
            HD_VIDEO_DUAL_UPLOAD = 5,
            STATUS_EXTERNAL_RESHARE = 6,
            MEDIA_POLL = 7,
            STATUS_ADD_YOURS = 8,
            STATUS_NOTIFICATION = 9,
            HD_IMAGE_DUAL_UPLOAD = 10,
            STICKER_ANNOTATION = 11,
            MOTION_PHOTO = 12,
            STATUS_LINK_ACTION = 13,
            VIEW_ALL_REPLIES = 14,
            STATUS_ADD_YOURS_AI_IMAGINE = 15,
            STATUS_QUESTION = 16,
            STATUS_ADD_YOURS_DIWALI = 17,
            STATUS_REACTION = 18,
            HEVC_VIDEO_DUAL_UPLOAD = 19,
        }
        export type IAssociationType = AssociationType;
    }
    export interface IMessageContextInfo {
        deviceListMetadata?: proto.IDeviceListMetadata | null;
        deviceListMetadataVersion?: number | null;
        messageSecret?: Uint8Array | null;
        paddingBytes?: Uint8Array | null;
        messageAddOnDurationInSecs?: number | null;
        botMessageSecret?: Uint8Array | null;
        botMetadata?: proto.IBotMetadata | null;
        reportingTokenVersion?: number | null;
        messageAddOnExpiryType?: proto.IMessageAddonExpiryType | null;
        messageAssociation?: proto.IMessageAssociation | null;
        capiCreatedGroup?: boolean | null;
        supportPayload?: string | null;
        limitSharing?: proto.ILimitSharing | null;
        limitSharingV2?: proto.ILimitSharing | null;
        threadId?: (proto.IThreadID)[] | null;
        weblinkRenderConfig?: proto.IWebLinkRenderConfig | null;
    }
    export class MessageContextInfo implements IMessageContextInfo {
        constructor(properties?: IMessageContextInfo);
        public static create(properties?: IMessageContextInfo): MessageContextInfo;
        public static encode(message: IMessageContextInfo, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): MessageContextInfo;
        public static fromObject(object: { [k: string]: any }): MessageContextInfo;
        public static toObject(message: MessageContextInfo, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace MessageContextInfo {
        export enum MessageAddonExpiryType {
            STATIC = 1,
            DEPENDENT_ON_PARENT = 2,
        }
        export type IMessageAddonExpiryType = MessageAddonExpiryType;
    }
    export interface IMessageKey {
        remoteJid?: string | null;
        fromMe?: boolean | null;
        id?: string | null;
        participant?: string | null;
    }
    export class MessageKey implements IMessageKey {
        constructor(properties?: IMessageKey);
        public static create(properties?: IMessageKey): MessageKey;
        public static encode(message: IMessageKey, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): MessageKey;
        public static fromObject(object: { [k: string]: any }): MessageKey;
        public static toObject(message: MessageKey, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IMessageSecretMessage {
        version?: number | null;
        encIv?: Uint8Array | null;
        encPayload?: Uint8Array | null;
    }
    export class MessageSecretMessage implements IMessageSecretMessage {
        constructor(properties?: IMessageSecretMessage);
        public static create(properties?: IMessageSecretMessage): MessageSecretMessage;
        public static encode(message: IMessageSecretMessage, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): MessageSecretMessage;
        public static fromObject(object: { [k: string]: any }): MessageSecretMessage;
        public static toObject(message: MessageSecretMessage, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IMoney {
        value?: number | Long | null;
        offset?: number | null;
        currencyCode?: string | null;
    }
    export class Money implements IMoney {
        constructor(properties?: IMoney);
        public static create(properties?: IMoney): Money;
        public static encode(message: IMoney, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): Money;
        public static fromObject(object: { [k: string]: any }): Money;
        public static toObject(message: Money, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IMsgOpaqueData {
        body?: string | null;
        caption?: string | null;
        lng?: number | null;
        isLive?: boolean | null;
        lat?: number | null;
        paymentAmount1000?: number | null;
        paymentNoteMsgBody?: string | null;
        matchedText?: string | null;
        title?: string | null;
        description?: string | null;
        futureproofBuffer?: Uint8Array | null;
        clientUrl?: string | null;
        loc?: string | null;
        pollName?: string | null;
        pollOptions?: (proto.IPollOption)[] | null;
        pollSelectableOptionsCount?: number | null;
        messageSecret?: Uint8Array | null;
        originalSelfAuthor?: string | null;
        senderTimestampMs?: number | Long | null;
        pollUpdateParentKey?: string | null;
        encPollVote?: proto.IPollEncValue | null;
        isSentCagPollCreation?: boolean | null;
        pollContentType?: proto.IPollContentType | null;
        pollType?: proto.IPollType | null;
        correctOptionIndex?: number | null;
        pollVotesSnapshot?: proto.IPollVotesSnapshot | null;
        encReactionTargetMessageKey?: string | null;
        encReactionEncPayload?: Uint8Array | null;
        encReactionEncIv?: Uint8Array | null;
        botMessageSecret?: Uint8Array | null;
        targetMessageKey?: string | null;
        encPayload?: Uint8Array | null;
        encIv?: Uint8Array | null;
        eventName?: string | null;
        isEventCanceled?: boolean | null;
        eventDescription?: string | null;
        eventJoinLink?: string | null;
        eventStartTime?: number | Long | null;
        eventLocation?: proto.IEventLocation | null;
        eventEndTime?: number | Long | null;
        eventIsScheduledCall?: boolean | null;
        eventExtraGuestsAllowed?: boolean | null;
        plainProtobufBytes?: Uint8Array | null;
    }
    export class MsgOpaqueData implements IMsgOpaqueData {
        constructor(properties?: IMsgOpaqueData);
        public static create(properties?: IMsgOpaqueData): MsgOpaqueData;
        public static encode(message: IMsgOpaqueData, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): MsgOpaqueData;
        public static fromObject(object: { [k: string]: any }): MsgOpaqueData;
        public static toObject(message: MsgOpaqueData, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace MsgOpaqueData {
        export interface IEventLocation {
            degreesLatitude?: number | null;
            degreesLongitude?: number | null;
            name?: string | null;
            address?: string | null;
            url?: string | null;
            jpegThumbnail?: Uint8Array | null;
        }
        export class EventLocation implements IEventLocation {
            constructor(properties?: IEventLocation);
            public static create(properties?: IEventLocation): EventLocation;
            public static encode(message: IEventLocation, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): EventLocation;
            public static fromObject(object: { [k: string]: any }): EventLocation;
            public static toObject(message: EventLocation, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export enum PollContentType {
            UNKNOWN = 0,
            TEXT = 1,
            IMAGE = 2,
        }
        export type IPollContentType = PollContentType;
        export interface IPollOption {
            name?: string | null;
            hash?: string | null;
        }
        export class PollOption implements IPollOption {
            constructor(properties?: IPollOption);
            public static create(properties?: IPollOption): PollOption;
            public static encode(message: IPollOption, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): PollOption;
            public static fromObject(object: { [k: string]: any }): PollOption;
            public static toObject(message: PollOption, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export enum PollType {
            POLL = 0,
            QUIZ = 1,
        }
        export type IPollType = PollType;
        export interface IPollVoteSnapshot {
            option?: proto.MsgOpaqueData.PollOption | null;
            optionVoteCount?: number | null;
        }
        export class PollVoteSnapshot implements IPollVoteSnapshot {
            constructor(properties?: IPollVoteSnapshot);
            public static create(properties?: IPollVoteSnapshot): PollVoteSnapshot;
            public static encode(message: IPollVoteSnapshot, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): PollVoteSnapshot;
            public static fromObject(object: { [k: string]: any }): PollVoteSnapshot;
            public static toObject(message: PollVoteSnapshot, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IPollVotesSnapshot {
            pollVotes?: (proto.MsgOpaqueData.PollVoteSnapshot)[] | null;
        }
        export class PollVotesSnapshot implements IPollVotesSnapshot {
            constructor(properties?: IPollVotesSnapshot);
            public static create(properties?: IPollVotesSnapshot): PollVotesSnapshot;
            public static encode(message: IPollVotesSnapshot, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): PollVotesSnapshot;
            public static fromObject(object: { [k: string]: any }): PollVotesSnapshot;
            public static toObject(message: PollVotesSnapshot, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
    }
    export interface IMsgRowOpaqueData {
        currentMsg?: proto.IMsgOpaqueData | null;
        quotedMsg?: proto.IMsgOpaqueData | null;
    }
    export class MsgRowOpaqueData implements IMsgRowOpaqueData {
        constructor(properties?: IMsgRowOpaqueData);
        public static create(properties?: IMsgRowOpaqueData): MsgRowOpaqueData;
        public static encode(message: IMsgRowOpaqueData, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): MsgRowOpaqueData;
        public static fromObject(object: { [k: string]: any }): MsgRowOpaqueData;
        public static toObject(message: MsgRowOpaqueData, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export enum MutationProps {
        STAR_ACTION = 2,
        CONTACT_ACTION = 3,
        MUTE_ACTION = 4,
        PIN_ACTION = 5,
        SECURITY_NOTIFICATION_SETTING = 6,
        PUSH_NAME_SETTING = 7,
        QUICK_REPLY_ACTION = 8,
        RECENT_EMOJI_WEIGHTS_ACTION = 11,
        LABEL_MESSAGE_ACTION = 13,
        LABEL_EDIT_ACTION = 14,
        LABEL_ASSOCIATION_ACTION = 15,
        LOCALE_SETTING = 16,
        ARCHIVE_CHAT_ACTION = 17,
        DELETE_MESSAGE_FOR_ME_ACTION = 18,
        KEY_EXPIRATION = 19,
        MARK_CHAT_AS_READ_ACTION = 20,
        CLEAR_CHAT_ACTION = 21,
        DELETE_CHAT_ACTION = 22,
        UNARCHIVE_CHATS_SETTING = 23,
        PRIMARY_FEATURE = 24,
        ANDROID_UNSUPPORTED_ACTIONS = 26,
        AGENT_ACTION = 27,
        SUBSCRIPTION_ACTION = 28,
        USER_STATUS_MUTE_ACTION = 29,
        TIME_FORMAT_ACTION = 30,
        NUX_ACTION = 31,
        PRIMARY_VERSION_ACTION = 32,
        STICKER_ACTION = 33,
        REMOVE_RECENT_STICKER_ACTION = 34,
        CHAT_ASSIGNMENT = 35,
        CHAT_ASSIGNMENT_OPENED_STATUS = 36,
        PN_FOR_LID_CHAT_ACTION = 37,
        MARKETING_MESSAGE_ACTION = 38,
        MARKETING_MESSAGE_BROADCAST_ACTION = 39,
        EXTERNAL_WEB_BETA_ACTION = 40,
        PRIVACY_SETTING_RELAY_ALL_CALLS = 41,
        CALL_LOG_ACTION = 42,
        UGC_BOT = 43,
        STATUS_PRIVACY = 44,
        BOT_WELCOME_REQUEST_ACTION = 45,
        DELETE_INDIVIDUAL_CALL_LOG = 46,
        LABEL_REORDERING_ACTION = 47,
        PAYMENT_INFO_ACTION = 48,
        CUSTOM_PAYMENT_METHODS_ACTION = 49,
        LOCK_CHAT_ACTION = 50,
        CHAT_LOCK_SETTINGS = 51,
        WAMO_USER_IDENTIFIER_ACTION = 52,
        PRIVACY_SETTING_DISABLE_LINK_PREVIEWS_ACTION = 53,
        DEVICE_CAPABILITIES = 54,
        NOTE_EDIT_ACTION = 55,
        FAVORITES_ACTION = 56,
        MERCHANT_PAYMENT_PARTNER_ACTION = 57,
        WAFFLE_ACCOUNT_LINK_STATE_ACTION = 58,
        USERNAME_CHAT_START_MODE = 59,
        NOTIFICATION_ACTIVITY_SETTING_ACTION = 60,
        LID_CONTACT_ACTION = 61,
        CTWA_PER_CUSTOMER_DATA_SHARING_ACTION = 62,
        PAYMENT_TOS_ACTION = 63,
        PRIVACY_SETTING_CHANNELS_PERSONALISED_RECOMMENDATION_ACTION = 64,
        BUSINESS_BROADCAST_ASSOCIATION_ACTION = 65,
        DETECTED_OUTCOMES_STATUS_ACTION = 66,
        MAIBA_AI_FEATURES_CONTROL_ACTION = 68,
        BUSINESS_BROADCAST_LIST_ACTION = 69,
        MUSIC_USER_ID_ACTION = 70,
        STATUS_POST_OPT_IN_NOTIFICATION_PREFERENCES_ACTION = 71,
        AVATAR_UPDATED_ACTION = 72,
        GALAXY_FLOW_ACTION = 73,
        PRIVATE_PROCESSING_SETTING_ACTION = 74,
        NEWSLETTER_SAVED_INTERESTS_ACTION = 75,
        AI_THREAD_RENAME_ACTION = 76,
        INTERACTIVE_MESSAGE_ACTION = 77,
        SHARE_OWN_PN = 10001,
        BUSINESS_BROADCAST_ACTION = 10002,
    }
    export type IMutationProps = MutationProps;
    export interface INoiseCertificate {
        details?: Uint8Array | null;
        signature?: Uint8Array | null;
    }
    export class NoiseCertificate implements INoiseCertificate {
        constructor(properties?: INoiseCertificate);
        public static create(properties?: INoiseCertificate): NoiseCertificate;
        public static encode(message: INoiseCertificate, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): NoiseCertificate;
        public static fromObject(object: { [k: string]: any }): NoiseCertificate;
        public static toObject(message: NoiseCertificate, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace NoiseCertificate {
        export interface IDetails {
            serial?: number | null;
            issuer?: string | null;
            expires?: number | Long | null;
            subject?: string | null;
            key?: Uint8Array | null;
        }
        export class Details implements IDetails {
            constructor(properties?: IDetails);
            public static create(properties?: IDetails): Details;
            public static encode(message: IDetails, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): Details;
            public static fromObject(object: { [k: string]: any }): Details;
            public static toObject(message: Details, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
    }
    export interface INotificationMessageInfo {
        key?: proto.IMessageKey | null;
        message?: proto.IMessage | null;
        messageTimestamp?: number | Long | null;
        participant?: string | null;
    }
    export class NotificationMessageInfo implements INotificationMessageInfo {
        constructor(properties?: INotificationMessageInfo);
        public static create(properties?: INotificationMessageInfo): NotificationMessageInfo;
        public static encode(message: INotificationMessageInfo, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): NotificationMessageInfo;
        public static fromObject(object: { [k: string]: any }): NotificationMessageInfo;
        public static toObject(message: NotificationMessageInfo, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface INotificationSettings {
        messageVibrate?: string | null;
        messagePopup?: string | null;
        messageLight?: string | null;
        lowPriorityNotifications?: boolean | null;
        reactionsMuted?: boolean | null;
        callVibrate?: string | null;
    }
    export class NotificationSettings implements INotificationSettings {
        constructor(properties?: INotificationSettings);
        public static create(properties?: INotificationSettings): NotificationSettings;
        public static encode(message: INotificationSettings, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): NotificationSettings;
        public static fromObject(object: { [k: string]: any }): NotificationSettings;
        public static toObject(message: NotificationSettings, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IPairingRequest {
        companionPublicKey?: Uint8Array | null;
        companionIdentityKey?: Uint8Array | null;
        advSecret?: Uint8Array | null;
    }
    export class PairingRequest implements IPairingRequest {
        constructor(properties?: IPairingRequest);
        public static create(properties?: IPairingRequest): PairingRequest;
        public static encode(message: IPairingRequest, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): PairingRequest;
        public static fromObject(object: { [k: string]: any }): PairingRequest;
        public static toObject(message: PairingRequest, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IPastParticipant {
        userJid?: string | null;
        leaveReason?: proto.ILeaveReason | null;
        leaveTs?: number | Long | null;
    }
    export class PastParticipant implements IPastParticipant {
        constructor(properties?: IPastParticipant);
        public static create(properties?: IPastParticipant): PastParticipant;
        public static encode(message: IPastParticipant, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): PastParticipant;
        public static fromObject(object: { [k: string]: any }): PastParticipant;
        public static toObject(message: PastParticipant, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace PastParticipant {
        export enum LeaveReason {
            LEFT = 0,
            REMOVED = 1,
        }
        export type ILeaveReason = LeaveReason;
    }
    export interface IPastParticipants {
        groupJid?: string | null;
        pastParticipants?: (proto.IPastParticipant)[] | null;
    }
    export class PastParticipants implements IPastParticipants {
        constructor(properties?: IPastParticipants);
        public static create(properties?: IPastParticipants): PastParticipants;
        public static encode(message: IPastParticipants, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): PastParticipants;
        public static fromObject(object: { [k: string]: any }): PastParticipants;
        public static toObject(message: PastParticipants, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IPatchDebugData {
        currentLthash?: Uint8Array | null;
        newLthash?: Uint8Array | null;
        patchVersion?: Uint8Array | null;
        collectionName?: Uint8Array | null;
        firstFourBytesFromAHashOfSnapshotMacKey?: Uint8Array | null;
        newLthashSubtract?: Uint8Array | null;
        numberAdd?: number | null;
        numberRemove?: number | null;
        numberOverride?: number | null;
        senderPlatform?: proto.IPlatform | null;
        isSenderPrimary?: boolean | null;
    }
    export class PatchDebugData implements IPatchDebugData {
        constructor(properties?: IPatchDebugData);
        public static create(properties?: IPatchDebugData): PatchDebugData;
        public static encode(message: IPatchDebugData, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): PatchDebugData;
        public static fromObject(object: { [k: string]: any }): PatchDebugData;
        public static toObject(message: PatchDebugData, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace PatchDebugData {
        export enum Platform {
            ANDROID = 0,
            SMBA = 1,
            IPHONE = 2,
            SMBI = 3,
            WEB = 4,
            UWP = 5,
            DARWIN = 6,
            IPAD = 7,
            WEAROS = 8,
            WASG = 9,
            WEARM = 10,
            CAPI = 11,
        }
        export type IPlatform = Platform;
    }
    export interface IPaymentBackground {
        id?: string | null;
        fileLength?: number | Long | null;
        width?: number | null;
        height?: number | null;
        mimetype?: string | null;
        placeholderArgb?: number | null;
        textArgb?: number | null;
        subtextArgb?: number | null;
        mediaData?: proto.IMediaData | null;
        type?: proto.IType | null;
    }
    export class PaymentBackground implements IPaymentBackground {
        constructor(properties?: IPaymentBackground);
        public static create(properties?: IPaymentBackground): PaymentBackground;
        public static encode(message: IPaymentBackground, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): PaymentBackground;
        public static fromObject(object: { [k: string]: any }): PaymentBackground;
        public static toObject(message: PaymentBackground, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace PaymentBackground {
        export interface IMediaData {
            mediaKey?: Uint8Array | null;
            mediaKeyTimestamp?: number | Long | null;
            fileSha256?: Uint8Array | null;
            fileEncSha256?: Uint8Array | null;
            directPath?: string | null;
        }
        export class MediaData implements IMediaData {
            constructor(properties?: IMediaData);
            public static create(properties?: IMediaData): MediaData;
            public static encode(message: IMediaData, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): MediaData;
            public static fromObject(object: { [k: string]: any }): MediaData;
            public static toObject(message: MediaData, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export enum Type {
            UNKNOWN = 0,
            DEFAULT = 1,
        }
        export type IType = Type;
    }
    export interface IPaymentInfo {
        currencyDeprecated?: proto.ICurrency | null;
        amount1000?: number | Long | null;
        receiverJid?: string | null;
        status?: proto.IStatus | null;
        transactionTimestamp?: number | Long | null;
        requestMessageKey?: proto.IMessageKey | null;
        expiryTimestamp?: number | Long | null;
        futureproofed?: boolean | null;
        currency?: string | null;
        txnStatus?: proto.ITxnStatus | null;
        useNoviFiatFormat?: boolean | null;
        primaryAmount?: proto.IMoney | null;
        exchangeAmount?: proto.IMoney | null;
    }
    export class PaymentInfo implements IPaymentInfo {
        constructor(properties?: IPaymentInfo);
        public static create(properties?: IPaymentInfo): PaymentInfo;
        public static encode(message: IPaymentInfo, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): PaymentInfo;
        public static fromObject(object: { [k: string]: any }): PaymentInfo;
        public static toObject(message: PaymentInfo, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace PaymentInfo {
        export enum Currency {
            UNKNOWN_CURRENCY = 0,
            INR = 1,
        }
        export type ICurrency = Currency;
        export enum Status {
            UNKNOWN_STATUS = 0,
            PROCESSING = 1,
            SENT = 2,
            NEED_TO_ACCEPT = 3,
            COMPLETE = 4,
            COULD_NOT_COMPLETE = 5,
            REFUNDED = 6,
            EXPIRED = 7,
            REJECTED = 8,
            CANCELLED = 9,
            WAITING_FOR_PAYER = 10,
            WAITING = 11,
        }
        export type IStatus = Status;
        export enum TxnStatus {
            UNKNOWN = 0,
            PENDING_SETUP = 1,
            PENDING_RECEIVER_SETUP = 2,
            INIT = 3,
            SUCCESS = 4,
            COMPLETED = 5,
            FAILED = 6,
            FAILED_RISK = 7,
            FAILED_PROCESSING = 8,
            FAILED_RECEIVER_PROCESSING = 9,
            FAILED_DA = 10,
            FAILED_DA_FINAL = 11,
            REFUNDED_TXN = 12,
            REFUND_FAILED = 13,
            REFUND_FAILED_PROCESSING = 14,
            REFUND_FAILED_DA = 15,
            EXPIRED_TXN = 16,
            AUTH_CANCELED = 17,
            AUTH_CANCEL_FAILED_PROCESSING = 18,
            AUTH_CANCEL_FAILED = 19,
            COLLECT_INIT = 20,
            COLLECT_SUCCESS = 21,
            COLLECT_FAILED = 22,
            COLLECT_FAILED_RISK = 23,
            COLLECT_REJECTED = 24,
            COLLECT_EXPIRED = 25,
            COLLECT_CANCELED = 26,
            COLLECT_CANCELLING = 27,
            IN_REVIEW = 28,
            REVERSAL_SUCCESS = 29,
            REVERSAL_PENDING = 30,
            REFUND_PENDING = 31,
        }
        export type ITxnStatus = TxnStatus;
    }
    export interface IPhoneNumberToLIDMapping {
        pnJid?: string | null;
        lidJid?: string | null;
    }
    export class PhoneNumberToLIDMapping implements IPhoneNumberToLIDMapping {
        constructor(properties?: IPhoneNumberToLIDMapping);
        public static create(properties?: IPhoneNumberToLIDMapping): PhoneNumberToLIDMapping;
        public static encode(message: IPhoneNumberToLIDMapping, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): PhoneNumberToLIDMapping;
        public static fromObject(object: { [k: string]: any }): PhoneNumberToLIDMapping;
        public static toObject(message: PhoneNumberToLIDMapping, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IPhotoChange {
        oldPhoto?: Uint8Array | null;
        newPhoto?: Uint8Array | null;
        newPhotoId?: number | null;
    }
    export class PhotoChange implements IPhotoChange {
        constructor(properties?: IPhotoChange);
        public static create(properties?: IPhotoChange): PhotoChange;
        public static encode(message: IPhotoChange, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): PhotoChange;
        public static fromObject(object: { [k: string]: any }): PhotoChange;
        public static toObject(message: PhotoChange, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IPinInChat {
        type?: proto.IType | null;
        key?: proto.IMessageKey | null;
        senderTimestampMs?: number | Long | null;
        serverTimestampMs?: number | Long | null;
        messageAddOnContextInfo?: proto.IMessageAddOnContextInfo | null;
    }
    export class PinInChat implements IPinInChat {
        constructor(properties?: IPinInChat);
        public static create(properties?: IPinInChat): PinInChat;
        public static encode(message: IPinInChat, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): PinInChat;
        public static fromObject(object: { [k: string]: any }): PinInChat;
        public static toObject(message: PinInChat, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace PinInChat {
        export enum Type {
            UNKNOWN_TYPE = 0,
            PIN_FOR_ALL = 1,
            UNPIN_FOR_ALL = 2,
        }
        export type IType = Type;
    }
    export interface IPoint {
        xDeprecated?: number | null;
        yDeprecated?: number | null;
        x?: number | null;
        y?: number | null;
    }
    export class Point implements IPoint {
        constructor(properties?: IPoint);
        public static create(properties?: IPoint): Point;
        public static encode(message: IPoint, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): Point;
        public static fromObject(object: { [k: string]: any }): Point;
        public static toObject(message: Point, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IPollAdditionalMetadata {
        pollInvalidated?: boolean | null;
    }
    export class PollAdditionalMetadata implements IPollAdditionalMetadata {
        constructor(properties?: IPollAdditionalMetadata);
        public static create(properties?: IPollAdditionalMetadata): PollAdditionalMetadata;
        public static encode(message: IPollAdditionalMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): PollAdditionalMetadata;
        public static fromObject(object: { [k: string]: any }): PollAdditionalMetadata;
        public static toObject(message: PollAdditionalMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IPollEncValue {
        encPayload?: Uint8Array | null;
        encIv?: Uint8Array | null;
    }
    export class PollEncValue implements IPollEncValue {
        constructor(properties?: IPollEncValue);
        public static create(properties?: IPollEncValue): PollEncValue;
        public static encode(message: IPollEncValue, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): PollEncValue;
        public static fromObject(object: { [k: string]: any }): PollEncValue;
        public static toObject(message: PollEncValue, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IPollUpdate {
        pollUpdateMessageKey?: proto.IMessageKey | null;
        vote?: proto.Message.PollVoteMessage | null;
        senderTimestampMs?: number | Long | null;
        serverTimestampMs?: number | Long | null;
        unread?: boolean | null;
    }
    export class PollUpdate implements IPollUpdate {
        constructor(properties?: IPollUpdate);
        public static create(properties?: IPollUpdate): PollUpdate;
        public static encode(message: IPollUpdate, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): PollUpdate;
        public static fromObject(object: { [k: string]: any }): PollUpdate;
        public static toObject(message: PollUpdate, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IPreKeyRecordStructure {
        id?: number | null;
        publicKey?: Uint8Array | null;
        privateKey?: Uint8Array | null;
    }
    export class PreKeyRecordStructure implements IPreKeyRecordStructure {
        constructor(properties?: IPreKeyRecordStructure);
        public static create(properties?: IPreKeyRecordStructure): PreKeyRecordStructure;
        public static encode(message: IPreKeyRecordStructure, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): PreKeyRecordStructure;
        public static fromObject(object: { [k: string]: any }): PreKeyRecordStructure;
        public static toObject(message: PreKeyRecordStructure, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IPreKeySignalMessage {
        registrationId?: number | null;
        preKeyId?: number | null;
        signedPreKeyId?: number | null;
        baseKey?: Uint8Array | null;
        identityKey?: Uint8Array | null;
        message?: Uint8Array | null;
    }
    export class PreKeySignalMessage implements IPreKeySignalMessage {
        constructor(properties?: IPreKeySignalMessage);
        public static create(properties?: IPreKeySignalMessage): PreKeySignalMessage;
        public static encode(message: IPreKeySignalMessage, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): PreKeySignalMessage;
        public static fromObject(object: { [k: string]: any }): PreKeySignalMessage;
        public static toObject(message: PreKeySignalMessage, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IPremiumMessageInfo {
        serverCampaignId?: string | null;
    }
    export class PremiumMessageInfo implements IPremiumMessageInfo {
        constructor(properties?: IPremiumMessageInfo);
        public static create(properties?: IPremiumMessageInfo): PremiumMessageInfo;
        public static encode(message: IPremiumMessageInfo, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): PremiumMessageInfo;
        public static fromObject(object: { [k: string]: any }): PremiumMessageInfo;
        public static toObject(message: PremiumMessageInfo, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IPrimaryEphemeralIdentity {
        publicKey?: Uint8Array | null;
        nonce?: Uint8Array | null;
    }
    export class PrimaryEphemeralIdentity implements IPrimaryEphemeralIdentity {
        constructor(properties?: IPrimaryEphemeralIdentity);
        public static create(properties?: IPrimaryEphemeralIdentity): PrimaryEphemeralIdentity;
        public static encode(message: IPrimaryEphemeralIdentity, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): PrimaryEphemeralIdentity;
        public static fromObject(object: { [k: string]: any }): PrimaryEphemeralIdentity;
        public static toObject(message: PrimaryEphemeralIdentity, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export enum PrivacySystemMessage {
        E2EE_MSG = 1,
        NE2EE_SELF = 2,
        NE2EE_OTHER = 3,
    }
    export type IPrivacySystemMessage = PrivacySystemMessage;
    export interface IProcessedVideo {
        directPath?: string | null;
        fileSha256?: Uint8Array | null;
        height?: number | null;
        width?: number | null;
        fileLength?: number | Long | null;
        bitrate?: number | null;
        quality?: proto.IVideoQuality | null;
        capabilities?: (string)[] | null;
    }
    export class ProcessedVideo implements IProcessedVideo {
        constructor(properties?: IProcessedVideo);
        public static create(properties?: IProcessedVideo): ProcessedVideo;
        public static encode(message: IProcessedVideo, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): ProcessedVideo;
        public static fromObject(object: { [k: string]: any }): ProcessedVideo;
        public static toObject(message: ProcessedVideo, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace ProcessedVideo {
        export enum VideoQuality {
            UNDEFINED = 0,
            LOW = 1,
            MID = 2,
            HIGH = 3,
        }
        export type IVideoQuality = VideoQuality;
    }
    export interface IProloguePayload {
        companionEphemeralIdentity?: Uint8Array | null;
        commitment?: proto.ICompanionCommitment | null;
    }
    export class ProloguePayload implements IProloguePayload {
        constructor(properties?: IProloguePayload);
        public static create(properties?: IProloguePayload): ProloguePayload;
        public static encode(message: IProloguePayload, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): ProloguePayload;
        public static fromObject(object: { [k: string]: any }): ProloguePayload;
        public static toObject(message: ProloguePayload, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IPushname {
        id?: string | null;
        pushname?: string | null;
    }
    export class Pushname implements IPushname {
        constructor(properties?: IPushname);
        public static create(properties?: IPushname): Pushname;
        public static encode(message: IPushname, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): Pushname;
        public static fromObject(object: { [k: string]: any }): Pushname;
        public static toObject(message: Pushname, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IQuarantinedMessage {
        originalData?: Uint8Array | null;
        extractedText?: string | null;
    }
    export class QuarantinedMessage implements IQuarantinedMessage {
        constructor(properties?: IQuarantinedMessage);
        public static create(properties?: IQuarantinedMessage): QuarantinedMessage;
        public static encode(message: IQuarantinedMessage, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): QuarantinedMessage;
        public static fromObject(object: { [k: string]: any }): QuarantinedMessage;
        public static toObject(message: QuarantinedMessage, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IReaction {
        key?: proto.IMessageKey | null;
        text?: string | null;
        groupingKey?: string | null;
        senderTimestampMs?: number | Long | null;
        unread?: boolean | null;
    }
    export class Reaction implements IReaction {
        constructor(properties?: IReaction);
        public static create(properties?: IReaction): Reaction;
        public static encode(message: IReaction, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): Reaction;
        public static fromObject(object: { [k: string]: any }): Reaction;
        public static toObject(message: Reaction, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IRecentEmojiWeight {
        emoji?: string | null;
        weight?: number | null;
    }
    export class RecentEmojiWeight implements IRecentEmojiWeight {
        constructor(properties?: IRecentEmojiWeight);
        public static create(properties?: IRecentEmojiWeight): RecentEmojiWeight;
        public static encode(message: IRecentEmojiWeight, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): RecentEmojiWeight;
        public static fromObject(object: { [k: string]: any }): RecentEmojiWeight;
        public static toObject(message: RecentEmojiWeight, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IRecordStructure {
        currentSession?: proto.ISessionStructure | null;
        previousSessions?: (proto.ISessionStructure)[] | null;
    }
    export class RecordStructure implements IRecordStructure {
        constructor(properties?: IRecordStructure);
        public static create(properties?: IRecordStructure): RecordStructure;
        public static encode(message: IRecordStructure, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): RecordStructure;
        public static fromObject(object: { [k: string]: any }): RecordStructure;
        public static toObject(message: RecordStructure, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IReportable {
        minVersion?: number | null;
        maxVersion?: number | null;
        notReportableMinVersion?: number | null;
        never?: boolean | null;
    }
    export class Reportable implements IReportable {
        constructor(properties?: IReportable);
        public static create(properties?: IReportable): Reportable;
        public static encode(message: IReportable, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): Reportable;
        public static fromObject(object: { [k: string]: any }): Reportable;
        public static toObject(message: Reportable, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IReportingTokenInfo {
        reportingTag?: Uint8Array | null;
    }
    export class ReportingTokenInfo implements IReportingTokenInfo {
        constructor(properties?: IReportingTokenInfo);
        public static create(properties?: IReportingTokenInfo): ReportingTokenInfo;
        public static encode(message: IReportingTokenInfo, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): ReportingTokenInfo;
        public static fromObject(object: { [k: string]: any }): ReportingTokenInfo;
        public static toObject(message: ReportingTokenInfo, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface ISenderKeyDistributionMessage {
        id?: number | null;
        iteration?: number | null;
        chainKey?: Uint8Array | null;
        signingKey?: Uint8Array | null;
    }
    export class SenderKeyDistributionMessage implements ISenderKeyDistributionMessage {
        constructor(properties?: ISenderKeyDistributionMessage);
        public static create(properties?: ISenderKeyDistributionMessage): SenderKeyDistributionMessage;
        public static encode(message: ISenderKeyDistributionMessage, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): SenderKeyDistributionMessage;
        public static fromObject(object: { [k: string]: any }): SenderKeyDistributionMessage;
        public static toObject(message: SenderKeyDistributionMessage, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface ISenderKeyMessage {
        id?: number | null;
        iteration?: number | null;
        ciphertext?: Uint8Array | null;
    }
    export class SenderKeyMessage implements ISenderKeyMessage {
        constructor(properties?: ISenderKeyMessage);
        public static create(properties?: ISenderKeyMessage): SenderKeyMessage;
        public static encode(message: ISenderKeyMessage, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): SenderKeyMessage;
        public static fromObject(object: { [k: string]: any }): SenderKeyMessage;
        public static toObject(message: SenderKeyMessage, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface ISenderKeyRecordStructure {
        senderKeyStates?: (proto.ISenderKeyStateStructure)[] | null;
    }
    export class SenderKeyRecordStructure implements ISenderKeyRecordStructure {
        constructor(properties?: ISenderKeyRecordStructure);
        public static create(properties?: ISenderKeyRecordStructure): SenderKeyRecordStructure;
        public static encode(message: ISenderKeyRecordStructure, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): SenderKeyRecordStructure;
        public static fromObject(object: { [k: string]: any }): SenderKeyRecordStructure;
        public static toObject(message: SenderKeyRecordStructure, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface ISenderKeyStateStructure {
        senderKeyId?: number | null;
        senderChainKey?: proto.ISenderChainKey | null;
        senderSigningKey?: proto.ISenderSigningKey | null;
        senderMessageKeys?: (proto.ISenderMessageKey)[] | null;
    }
    export class SenderKeyStateStructure implements ISenderKeyStateStructure {
        constructor(properties?: ISenderKeyStateStructure);
        public static create(properties?: ISenderKeyStateStructure): SenderKeyStateStructure;
        public static encode(message: ISenderKeyStateStructure, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): SenderKeyStateStructure;
        public static fromObject(object: { [k: string]: any }): SenderKeyStateStructure;
        public static toObject(message: SenderKeyStateStructure, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace SenderKeyStateStructure {
        export interface ISenderChainKey {
            iteration?: number | null;
            seed?: Uint8Array | null;
        }
        export class SenderChainKey implements ISenderChainKey {
            constructor(properties?: ISenderChainKey);
            public static create(properties?: ISenderChainKey): SenderChainKey;
            public static encode(message: ISenderChainKey, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): SenderChainKey;
            public static fromObject(object: { [k: string]: any }): SenderChainKey;
            public static toObject(message: SenderChainKey, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface ISenderMessageKey {
            iteration?: number | null;
            seed?: Uint8Array | null;
        }
        export class SenderMessageKey implements ISenderMessageKey {
            constructor(properties?: ISenderMessageKey);
            public static create(properties?: ISenderMessageKey): SenderMessageKey;
            public static encode(message: ISenderMessageKey, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): SenderMessageKey;
            public static fromObject(object: { [k: string]: any }): SenderMessageKey;
            public static toObject(message: SenderMessageKey, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface ISenderSigningKey {
            public?: Uint8Array | null;
            private?: Uint8Array | null;
        }
        export class SenderSigningKey implements ISenderSigningKey {
            constructor(properties?: ISenderSigningKey);
            public static create(properties?: ISenderSigningKey): SenderSigningKey;
            public static encode(message: ISenderSigningKey, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): SenderSigningKey;
            public static fromObject(object: { [k: string]: any }): SenderSigningKey;
            public static toObject(message: SenderSigningKey, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
    }
    export interface IServerErrorReceipt {
        stanzaId?: string | null;
    }
    export class ServerErrorReceipt implements IServerErrorReceipt {
        constructor(properties?: IServerErrorReceipt);
        public static create(properties?: IServerErrorReceipt): ServerErrorReceipt;
        public static encode(message: IServerErrorReceipt, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): ServerErrorReceipt;
        public static fromObject(object: { [k: string]: any }): ServerErrorReceipt;
        public static toObject(message: ServerErrorReceipt, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface ISessionStructure {
        sessionVersion?: number | null;
        localIdentityPublic?: Uint8Array | null;
        remoteIdentityPublic?: Uint8Array | null;
        rootKey?: Uint8Array | null;
        previousCounter?: number | null;
        senderChain?: proto.IChain | null;
        receiverChains?: (proto.IChain)[] | null;
        pendingKeyExchange?: proto.IPendingKeyExchange | null;
        pendingPreKey?: proto.IPendingPreKey | null;
        remoteRegistrationId?: number | null;
        localRegistrationId?: number | null;
        needsRefresh?: boolean | null;
        aliceBaseKey?: Uint8Array | null;
    }
    export class SessionStructure implements ISessionStructure {
        constructor(properties?: ISessionStructure);
        public static create(properties?: ISessionStructure): SessionStructure;
        public static encode(message: ISessionStructure, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): SessionStructure;
        public static fromObject(object: { [k: string]: any }): SessionStructure;
        public static toObject(message: SessionStructure, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace SessionStructure {
        export interface IChain {
            senderRatchetKey?: Uint8Array | null;
            senderRatchetKeyPrivate?: Uint8Array | null;
            chainKey?: proto.IChainKey | null;
            messageKeys?: (proto.IMessageKey)[] | null;
        }
        export class Chain implements IChain {
            constructor(properties?: IChain);
            public static create(properties?: IChain): Chain;
            public static encode(message: IChain, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): Chain;
            public static fromObject(object: { [k: string]: any }): Chain;
            public static toObject(message: Chain, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace Chain {
            export interface IChainKey {
                index?: number | null;
                key?: Uint8Array | null;
            }
            export class ChainKey implements IChainKey {
                constructor(properties?: IChainKey);
                public static create(properties?: IChainKey): ChainKey;
                public static encode(message: IChainKey, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): ChainKey;
                public static fromObject(object: { [k: string]: any }): ChainKey;
                public static toObject(message: ChainKey, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export interface IMessageKey {
                index?: number | null;
                cipherKey?: Uint8Array | null;
                macKey?: Uint8Array | null;
                iv?: Uint8Array | null;
            }
            export class MessageKey implements IMessageKey {
                constructor(properties?: IMessageKey);
                public static create(properties?: IMessageKey): MessageKey;
                public static encode(message: IMessageKey, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): MessageKey;
                public static fromObject(object: { [k: string]: any }): MessageKey;
                public static toObject(message: MessageKey, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
        }
        export interface IPendingKeyExchange {
            sequence?: number | null;
            localBaseKey?: Uint8Array | null;
            localBaseKeyPrivate?: Uint8Array | null;
            localRatchetKey?: Uint8Array | null;
            localRatchetKeyPrivate?: Uint8Array | null;
            localIdentityKey?: Uint8Array | null;
            localIdentityKeyPrivate?: Uint8Array | null;
        }
        export class PendingKeyExchange implements IPendingKeyExchange {
            constructor(properties?: IPendingKeyExchange);
            public static create(properties?: IPendingKeyExchange): PendingKeyExchange;
            public static encode(message: IPendingKeyExchange, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): PendingKeyExchange;
            public static fromObject(object: { [k: string]: any }): PendingKeyExchange;
            public static toObject(message: PendingKeyExchange, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IPendingPreKey {
            preKeyId?: number | null;
            signedPreKeyId?: number | null;
            baseKey?: Uint8Array | null;
        }
        export class PendingPreKey implements IPendingPreKey {
            constructor(properties?: IPendingPreKey);
            public static create(properties?: IPendingPreKey): PendingPreKey;
            public static encode(message: IPendingPreKey, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): PendingPreKey;
            public static fromObject(object: { [k: string]: any }): PendingPreKey;
            public static toObject(message: PendingPreKey, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
    }
    export interface ISessionTransparencyMetadata {
        disclaimerText?: string | null;
        hcaId?: string | null;
        sessionTransparencyType?: proto.ISessionTransparencyType | null;
    }
    export class SessionTransparencyMetadata implements ISessionTransparencyMetadata {
        constructor(properties?: ISessionTransparencyMetadata);
        public static create(properties?: ISessionTransparencyMetadata): SessionTransparencyMetadata;
        public static encode(message: ISessionTransparencyMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): SessionTransparencyMetadata;
        public static fromObject(object: { [k: string]: any }): SessionTransparencyMetadata;
        public static toObject(message: SessionTransparencyMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export enum SessionTransparencyType {
        UNKNOWN_TYPE = 0,
        NY_AI_SAFETY_DISCLAIMER = 1,
    }
    export type ISessionTransparencyType = SessionTransparencyType;
    export interface ISignalMessage {
        ratchetKey?: Uint8Array | null;
        counter?: number | null;
        previousCounter?: number | null;
        ciphertext?: Uint8Array | null;
    }
    export class SignalMessage implements ISignalMessage {
        constructor(properties?: ISignalMessage);
        public static create(properties?: ISignalMessage): SignalMessage;
        public static encode(message: ISignalMessage, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): SignalMessage;
        public static fromObject(object: { [k: string]: any }): SignalMessage;
        public static toObject(message: SignalMessage, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface ISignedPreKeyRecordStructure {
        id?: number | null;
        publicKey?: Uint8Array | null;
        privateKey?: Uint8Array | null;
        signature?: Uint8Array | null;
        timestamp?: number | Long | null;
    }
    export class SignedPreKeyRecordStructure implements ISignedPreKeyRecordStructure {
        constructor(properties?: ISignedPreKeyRecordStructure);
        public static create(properties?: ISignedPreKeyRecordStructure): SignedPreKeyRecordStructure;
        public static encode(message: ISignedPreKeyRecordStructure, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): SignedPreKeyRecordStructure;
        public static fromObject(object: { [k: string]: any }): SignedPreKeyRecordStructure;
        public static toObject(message: SignedPreKeyRecordStructure, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IStatusAttribution {
        type?: proto.IType | null;
        actionUrl?: string | null;
        statusReshare?: proto.StatusAttribution.StatusReshare | null;
        externalShare?: proto.StatusAttribution.ExternalShare | null;
        music?: proto.StatusAttribution.Music | null;
        groupStatus?: proto.StatusAttribution.GroupStatus | null;
        rlAttribution?: proto.StatusAttribution.RLAttribution | null;
        aiCreatedAttribution?: proto.StatusAttribution.AiCreatedAttribution | null;
    }
    export class StatusAttribution implements IStatusAttribution {
        constructor(properties?: IStatusAttribution);
        public static create(properties?: IStatusAttribution): StatusAttribution;
        public static encode(message: IStatusAttribution, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): StatusAttribution;
        public static fromObject(object: { [k: string]: any }): StatusAttribution;
        public static toObject(message: StatusAttribution, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace StatusAttribution {
        export interface IAiCreatedAttribution {
            source?: proto.ISource | null;
        }
        export class AiCreatedAttribution implements IAiCreatedAttribution {
            constructor(properties?: IAiCreatedAttribution);
            public static create(properties?: IAiCreatedAttribution): AiCreatedAttribution;
            public static encode(message: IAiCreatedAttribution, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): AiCreatedAttribution;
            public static fromObject(object: { [k: string]: any }): AiCreatedAttribution;
            public static toObject(message: AiCreatedAttribution, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace AiCreatedAttribution {
            export enum Source {
                UNKNOWN = 0,
                STATUS_MIMICRY = 1,
            }
            export type ISource = Source;
        }
        export interface IExternalShare {
            actionUrl?: string | null;
            source?: proto.ISource | null;
            duration?: number | null;
            actionFallbackUrl?: string | null;
        }
        export class ExternalShare implements IExternalShare {
            constructor(properties?: IExternalShare);
            public static create(properties?: IExternalShare): ExternalShare;
            public static encode(message: IExternalShare, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): ExternalShare;
            public static fromObject(object: { [k: string]: any }): ExternalShare;
            public static toObject(message: ExternalShare, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace ExternalShare {
            export enum Source {
                UNKNOWN = 0,
                INSTAGRAM = 1,
                FACEBOOK = 2,
                MESSENGER = 3,
                SPOTIFY = 4,
                YOUTUBE = 5,
                PINTEREST = 6,
                THREADS = 7,
                APPLE_MUSIC = 8,
                SHARECHAT = 9,
                GOOGLE_PHOTOS = 10,
            }
            export type ISource = Source;
        }
        export interface IGroupStatus {
            authorJid?: string | null;
        }
        export class GroupStatus implements IGroupStatus {
            constructor(properties?: IGroupStatus);
            public static create(properties?: IGroupStatus): GroupStatus;
            public static encode(message: IGroupStatus, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): GroupStatus;
            public static fromObject(object: { [k: string]: any }): GroupStatus;
            public static toObject(message: GroupStatus, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IMusic {
            authorName?: string | null;
            songId?: string | null;
            title?: string | null;
            author?: string | null;
            artistAttribution?: string | null;
            isExplicit?: boolean | null;
        }
        export class Music implements IMusic {
            constructor(properties?: IMusic);
            public static create(properties?: IMusic): Music;
            public static encode(message: IMusic, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): Music;
            public static fromObject(object: { [k: string]: any }): Music;
            public static toObject(message: Music, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IRLAttribution {
            source?: proto.ISource | null;
        }
        export class RLAttribution implements IRLAttribution {
            constructor(properties?: IRLAttribution);
            public static create(properties?: IRLAttribution): RLAttribution;
            public static encode(message: IRLAttribution, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): RLAttribution;
            public static fromObject(object: { [k: string]: any }): RLAttribution;
            public static toObject(message: RLAttribution, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace RLAttribution {
            export enum Source {
                UNKNOWN = 0,
                RAY_BAN_META_GLASSES = 1,
                OAKLEY_META_GLASSES = 2,
                HYPERNOVA_GLASSES = 3,
            }
            export type ISource = Source;
        }
        export interface IStatusReshare {
            source?: proto.ISource | null;
            metadata?: proto.IMetadata | null;
        }
        export class StatusReshare implements IStatusReshare {
            constructor(properties?: IStatusReshare);
            public static create(properties?: IStatusReshare): StatusReshare;
            public static encode(message: IStatusReshare, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): StatusReshare;
            public static fromObject(object: { [k: string]: any }): StatusReshare;
            public static toObject(message: StatusReshare, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace StatusReshare {
            export interface IMetadata {
                duration?: number | null;
                channelJid?: string | null;
                channelMessageId?: number | null;
                hasMultipleReshares?: boolean | null;
            }
            export class Metadata implements IMetadata {
                constructor(properties?: IMetadata);
                public static create(properties?: IMetadata): Metadata;
                public static encode(message: IMetadata, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): Metadata;
                public static fromObject(object: { [k: string]: any }): Metadata;
                public static toObject(message: Metadata, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
            export enum Source {
                UNKNOWN = 0,
                INTERNAL_RESHARE = 1,
                MENTION_RESHARE = 2,
                CHANNEL_RESHARE = 3,
                FORWARD = 4,
            }
            export type ISource = Source;
        }
        export enum Type {
            UNKNOWN = 0,
            RESHARE = 1,
            EXTERNAL_SHARE = 2,
            MUSIC = 3,
            STATUS_MENTION = 4,
            GROUP_STATUS = 5,
            RL_ATTRIBUTION = 6,
            AI_CREATED = 7,
            LAYOUTS = 8,
        }
        export type IType = Type;
    }
    export interface IStatusMentionMessage {
        quotedStatus?: proto.IMessage | null;
    }
    export class StatusMentionMessage implements IStatusMentionMessage {
        constructor(properties?: IStatusMentionMessage);
        public static create(properties?: IStatusMentionMessage): StatusMentionMessage;
        public static encode(message: IStatusMentionMessage, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): StatusMentionMessage;
        public static fromObject(object: { [k: string]: any }): StatusMentionMessage;
        public static toObject(message: StatusMentionMessage, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IStatusPSA {
        campaignId?: number | Long | null;
        campaignExpirationTimestamp?: number | Long | null;
    }
    export class StatusPSA implements IStatusPSA {
        constructor(properties?: IStatusPSA);
        public static create(properties?: IStatusPSA): StatusPSA;
        public static encode(message: IStatusPSA, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): StatusPSA;
        public static fromObject(object: { [k: string]: any }): StatusPSA;
        public static toObject(message: StatusPSA, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IStickerMetadata {
        url?: string | null;
        fileSha256?: Uint8Array | null;
        fileEncSha256?: Uint8Array | null;
        mediaKey?: Uint8Array | null;
        mimetype?: string | null;
        height?: number | null;
        width?: number | null;
        directPath?: string | null;
        fileLength?: number | Long | null;
        weight?: number | null;
        lastStickerSentTs?: number | Long | null;
        isLottie?: boolean | null;
        imageHash?: string | null;
        isAvatarSticker?: boolean | null;
    }
    export class StickerMetadata implements IStickerMetadata {
        constructor(properties?: IStickerMetadata);
        public static create(properties?: IStickerMetadata): StickerMetadata;
        public static encode(message: IStickerMetadata, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): StickerMetadata;
        public static fromObject(object: { [k: string]: any }): StickerMetadata;
        public static toObject(message: StickerMetadata, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface ISyncActionData {
        index?: Uint8Array | null;
        value?: proto.ISyncActionValue | null;
        padding?: Uint8Array | null;
        version?: number | null;
    }
    export class SyncActionData implements ISyncActionData {
        constructor(properties?: ISyncActionData);
        public static create(properties?: ISyncActionData): SyncActionData;
        public static encode(message: ISyncActionData, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): SyncActionData;
        public static fromObject(object: { [k: string]: any }): SyncActionData;
        public static toObject(message: SyncActionData, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface ISyncActionValue {
        timestamp?: number | Long | null;
        starAction?: proto.IStarAction | null;
        contactAction?: proto.IContactAction | null;
        muteAction?: proto.IMuteAction | null;
        pinAction?: proto.IPinAction | null;
        pushNameSetting?: proto.IPushNameSetting | null;
        quickReplyAction?: proto.IQuickReplyAction | null;
        recentEmojiWeightsAction?: proto.IRecentEmojiWeightsAction | null;
        labelEditAction?: proto.ILabelEditAction | null;
        labelAssociationAction?: proto.ILabelAssociationAction | null;
        localeSetting?: proto.ILocaleSetting | null;
        archiveChatAction?: proto.IArchiveChatAction | null;
        deleteMessageForMeAction?: proto.IDeleteMessageForMeAction | null;
        keyExpiration?: proto.IKeyExpiration | null;
        markChatAsReadAction?: proto.IMarkChatAsReadAction | null;
        clearChatAction?: proto.IClearChatAction | null;
        deleteChatAction?: proto.IDeleteChatAction | null;
        unarchiveChatsSetting?: proto.IUnarchiveChatsSetting | null;
        primaryFeature?: proto.IPrimaryFeature | null;
        androidUnsupportedActions?: proto.IAndroidUnsupportedActions | null;
        agentAction?: proto.IAgentAction | null;
        subscriptionAction?: proto.ISubscriptionAction | null;
        userStatusMuteAction?: proto.IUserStatusMuteAction | null;
        timeFormatAction?: proto.ITimeFormatAction | null;
        nuxAction?: proto.INuxAction | null;
        primaryVersionAction?: proto.IPrimaryVersionAction | null;
        stickerAction?: proto.IStickerAction | null;
        removeRecentStickerAction?: proto.IRemoveRecentStickerAction | null;
        chatAssignment?: proto.IChatAssignmentAction | null;
        chatAssignmentOpenedStatus?: proto.IChatAssignmentOpenedStatusAction | null;
        pnForLidChatAction?: proto.IPnForLidChatAction | null;
        marketingMessageAction?: proto.IMarketingMessageAction | null;
        marketingMessageBroadcastAction?: proto.IMarketingMessageBroadcastAction | null;
        externalWebBetaAction?: proto.IExternalWebBetaAction | null;
        privacySettingRelayAllCalls?: proto.IPrivacySettingRelayAllCalls | null;
        callLogAction?: proto.ICallLogAction | null;
        ugcBot?: proto.IUGCBot | null;
        statusPrivacy?: proto.IStatusPrivacyAction | null;
        botWelcomeRequestAction?: proto.IBotWelcomeRequestAction | null;
        deleteIndividualCallLog?: proto.IDeleteIndividualCallLogAction | null;
        labelReorderingAction?: proto.ILabelReorderingAction | null;
        paymentInfoAction?: proto.IPaymentInfoAction | null;
        customPaymentMethodsAction?: proto.ICustomPaymentMethodsAction | null;
        lockChatAction?: proto.ILockChatAction | null;
        chatLockSettings?: proto.IChatLockSettings | null;
        wamoUserIdentifierAction?: proto.IWamoUserIdentifierAction | null;
        privacySettingDisableLinkPreviewsAction?: proto.IPrivacySettingDisableLinkPreviewsAction | null;
        deviceCapabilities?: proto.IDeviceCapabilities | null;
        noteEditAction?: proto.INoteEditAction | null;
        favoritesAction?: proto.IFavoritesAction | null;
        merchantPaymentPartnerAction?: proto.IMerchantPaymentPartnerAction | null;
        waffleAccountLinkStateAction?: proto.IWaffleAccountLinkStateAction | null;
        usernameChatStartMode?: proto.IUsernameChatStartModeAction | null;
        notificationActivitySettingAction?: proto.INotificationActivitySettingAction | null;
        lidContactAction?: proto.ILidContactAction | null;
        ctwaPerCustomerDataSharingAction?: proto.ICtwaPerCustomerDataSharingAction | null;
        paymentTosAction?: proto.IPaymentTosAction | null;
        privacySettingChannelsPersonalisedRecommendationAction?: proto.IPrivacySettingChannelsPersonalisedRecommendationAction | null;
        businessBroadcastAssociationAction?: proto.IBusinessBroadcastAssociationAction | null;
        detectedOutcomesStatusAction?: proto.IDetectedOutcomesStatusAction | null;
        maibaAiFeaturesControlAction?: proto.IMaibaAIFeaturesControlAction | null;
        businessBroadcastListAction?: proto.IBusinessBroadcastListAction | null;
        musicUserIdAction?: proto.IMusicUserIdAction | null;
        statusPostOptInNotificationPreferencesAction?: proto.IStatusPostOptInNotificationPreferencesAction | null;
        avatarUpdatedAction?: proto.IAvatarUpdatedAction | null;
        privateProcessingSettingAction?: proto.IPrivateProcessingSettingAction | null;
        newsletterSavedInterestsAction?: proto.INewsletterSavedInterestsAction | null;
        aiThreadRenameAction?: proto.IAiThreadRenameAction | null;
        interactiveMessageAction?: proto.IInteractiveMessageAction | null;
    }
    export class SyncActionValue implements ISyncActionValue {
        constructor(properties?: ISyncActionValue);
        public static create(properties?: ISyncActionValue): SyncActionValue;
        public static encode(message: ISyncActionValue, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): SyncActionValue;
        public static fromObject(object: { [k: string]: any }): SyncActionValue;
        public static toObject(message: SyncActionValue, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace SyncActionValue {
        export interface IAgentAction {
            name?: string | null;
            deviceID?: number | null;
            isDeleted?: boolean | null;
        }
        export class AgentAction implements IAgentAction {
            constructor(properties?: IAgentAction);
            public static create(properties?: IAgentAction): AgentAction;
            public static encode(message: IAgentAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): AgentAction;
            public static fromObject(object: { [k: string]: any }): AgentAction;
            public static toObject(message: AgentAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IAiThreadRenameAction {
            newTitle?: string | null;
        }
        export class AiThreadRenameAction implements IAiThreadRenameAction {
            constructor(properties?: IAiThreadRenameAction);
            public static create(properties?: IAiThreadRenameAction): AiThreadRenameAction;
            public static encode(message: IAiThreadRenameAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): AiThreadRenameAction;
            public static fromObject(object: { [k: string]: any }): AiThreadRenameAction;
            public static toObject(message: AiThreadRenameAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IAndroidUnsupportedActions {
            allowed?: boolean | null;
        }
        export class AndroidUnsupportedActions implements IAndroidUnsupportedActions {
            constructor(properties?: IAndroidUnsupportedActions);
            public static create(properties?: IAndroidUnsupportedActions): AndroidUnsupportedActions;
            public static encode(message: IAndroidUnsupportedActions, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): AndroidUnsupportedActions;
            public static fromObject(object: { [k: string]: any }): AndroidUnsupportedActions;
            public static toObject(message: AndroidUnsupportedActions, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IArchiveChatAction {
            archived?: boolean | null;
            messageRange?: proto.SyncActionValue.SyncActionMessageRange | null;
        }
        export class ArchiveChatAction implements IArchiveChatAction {
            constructor(properties?: IArchiveChatAction);
            public static create(properties?: IArchiveChatAction): ArchiveChatAction;
            public static encode(message: IArchiveChatAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): ArchiveChatAction;
            public static fromObject(object: { [k: string]: any }): ArchiveChatAction;
            public static toObject(message: ArchiveChatAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IAvatarUpdatedAction {
            eventType?: proto.IAvatarEventType | null;
            recentAvatarStickers?: (proto.SyncActionValue.StickerAction)[] | null;
        }
        export class AvatarUpdatedAction implements IAvatarUpdatedAction {
            constructor(properties?: IAvatarUpdatedAction);
            public static create(properties?: IAvatarUpdatedAction): AvatarUpdatedAction;
            public static encode(message: IAvatarUpdatedAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): AvatarUpdatedAction;
            public static fromObject(object: { [k: string]: any }): AvatarUpdatedAction;
            public static toObject(message: AvatarUpdatedAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace AvatarUpdatedAction {
            export enum AvatarEventType {
                UPDATED = 0,
                CREATED = 1,
                DELETED = 2,
            }
            export type IAvatarEventType = AvatarEventType;
        }
        export interface IBotWelcomeRequestAction {
            isSent?: boolean | null;
        }
        export class BotWelcomeRequestAction implements IBotWelcomeRequestAction {
            constructor(properties?: IBotWelcomeRequestAction);
            public static create(properties?: IBotWelcomeRequestAction): BotWelcomeRequestAction;
            public static encode(message: IBotWelcomeRequestAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): BotWelcomeRequestAction;
            public static fromObject(object: { [k: string]: any }): BotWelcomeRequestAction;
            public static toObject(message: BotWelcomeRequestAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IBroadcastListParticipant {
            lidJid?: string | null;
            pnJid?: string | null;
        }
        export class BroadcastListParticipant implements IBroadcastListParticipant {
            constructor(properties?: IBroadcastListParticipant);
            public static create(properties?: IBroadcastListParticipant): BroadcastListParticipant;
            public static encode(message: IBroadcastListParticipant, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): BroadcastListParticipant;
            public static fromObject(object: { [k: string]: any }): BroadcastListParticipant;
            public static toObject(message: BroadcastListParticipant, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IBusinessBroadcastAssociationAction {
            deleted?: boolean | null;
        }
        export class BusinessBroadcastAssociationAction implements IBusinessBroadcastAssociationAction {
            constructor(properties?: IBusinessBroadcastAssociationAction);
            public static create(properties?: IBusinessBroadcastAssociationAction): BusinessBroadcastAssociationAction;
            public static encode(message: IBusinessBroadcastAssociationAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): BusinessBroadcastAssociationAction;
            public static fromObject(object: { [k: string]: any }): BusinessBroadcastAssociationAction;
            public static toObject(message: BusinessBroadcastAssociationAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IBusinessBroadcastListAction {
            deleted?: boolean | null;
            participants?: (proto.SyncActionValue.BroadcastListParticipant)[] | null;
            listName?: string | null;
        }
        export class BusinessBroadcastListAction implements IBusinessBroadcastListAction {
            constructor(properties?: IBusinessBroadcastListAction);
            public static create(properties?: IBusinessBroadcastListAction): BusinessBroadcastListAction;
            public static encode(message: IBusinessBroadcastListAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): BusinessBroadcastListAction;
            public static fromObject(object: { [k: string]: any }): BusinessBroadcastListAction;
            public static toObject(message: BusinessBroadcastListAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface ICallLogAction {
            callLogRecord?: proto.ICallLogRecord | null;
        }
        export class CallLogAction implements ICallLogAction {
            constructor(properties?: ICallLogAction);
            public static create(properties?: ICallLogAction): CallLogAction;
            public static encode(message: ICallLogAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): CallLogAction;
            public static fromObject(object: { [k: string]: any }): CallLogAction;
            public static toObject(message: CallLogAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IChatAssignmentAction {
            deviceAgentID?: string | null;
        }
        export class ChatAssignmentAction implements IChatAssignmentAction {
            constructor(properties?: IChatAssignmentAction);
            public static create(properties?: IChatAssignmentAction): ChatAssignmentAction;
            public static encode(message: IChatAssignmentAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): ChatAssignmentAction;
            public static fromObject(object: { [k: string]: any }): ChatAssignmentAction;
            public static toObject(message: ChatAssignmentAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IChatAssignmentOpenedStatusAction {
            chatOpened?: boolean | null;
        }
        export class ChatAssignmentOpenedStatusAction implements IChatAssignmentOpenedStatusAction {
            constructor(properties?: IChatAssignmentOpenedStatusAction);
            public static create(properties?: IChatAssignmentOpenedStatusAction): ChatAssignmentOpenedStatusAction;
            public static encode(message: IChatAssignmentOpenedStatusAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): ChatAssignmentOpenedStatusAction;
            public static fromObject(object: { [k: string]: any }): ChatAssignmentOpenedStatusAction;
            public static toObject(message: ChatAssignmentOpenedStatusAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IClearChatAction {
            messageRange?: proto.SyncActionValue.SyncActionMessageRange | null;
        }
        export class ClearChatAction implements IClearChatAction {
            constructor(properties?: IClearChatAction);
            public static create(properties?: IClearChatAction): ClearChatAction;
            public static encode(message: IClearChatAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): ClearChatAction;
            public static fromObject(object: { [k: string]: any }): ClearChatAction;
            public static toObject(message: ClearChatAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IContactAction {
            fullName?: string | null;
            firstName?: string | null;
            lidJid?: string | null;
            saveOnPrimaryAddressbook?: boolean | null;
            pnJid?: string | null;
            username?: string | null;
        }
        export class ContactAction implements IContactAction {
            constructor(properties?: IContactAction);
            public static create(properties?: IContactAction): ContactAction;
            public static encode(message: IContactAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): ContactAction;
            public static fromObject(object: { [k: string]: any }): ContactAction;
            public static toObject(message: ContactAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface ICtwaPerCustomerDataSharingAction {
            isCtwaPerCustomerDataSharingEnabled?: boolean | null;
        }
        export class CtwaPerCustomerDataSharingAction implements ICtwaPerCustomerDataSharingAction {
            constructor(properties?: ICtwaPerCustomerDataSharingAction);
            public static create(properties?: ICtwaPerCustomerDataSharingAction): CtwaPerCustomerDataSharingAction;
            public static encode(message: ICtwaPerCustomerDataSharingAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): CtwaPerCustomerDataSharingAction;
            public static fromObject(object: { [k: string]: any }): CtwaPerCustomerDataSharingAction;
            public static toObject(message: CtwaPerCustomerDataSharingAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface ICustomPaymentMethod {
            credentialId?: string | null;
            country?: string | null;
            type?: string | null;
            metadata?: (proto.SyncActionValue.CustomPaymentMethodMetadata)[] | null;
        }
        export class CustomPaymentMethod implements ICustomPaymentMethod {
            constructor(properties?: ICustomPaymentMethod);
            public static create(properties?: ICustomPaymentMethod): CustomPaymentMethod;
            public static encode(message: ICustomPaymentMethod, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): CustomPaymentMethod;
            public static fromObject(object: { [k: string]: any }): CustomPaymentMethod;
            public static toObject(message: CustomPaymentMethod, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface ICustomPaymentMethodMetadata {
            key?: string | null;
            value?: string | null;
        }
        export class CustomPaymentMethodMetadata implements ICustomPaymentMethodMetadata {
            constructor(properties?: ICustomPaymentMethodMetadata);
            public static create(properties?: ICustomPaymentMethodMetadata): CustomPaymentMethodMetadata;
            public static encode(message: ICustomPaymentMethodMetadata, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): CustomPaymentMethodMetadata;
            public static fromObject(object: { [k: string]: any }): CustomPaymentMethodMetadata;
            public static toObject(message: CustomPaymentMethodMetadata, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface ICustomPaymentMethodsAction {
            customPaymentMethods?: (proto.SyncActionValue.CustomPaymentMethod)[] | null;
        }
        export class CustomPaymentMethodsAction implements ICustomPaymentMethodsAction {
            constructor(properties?: ICustomPaymentMethodsAction);
            public static create(properties?: ICustomPaymentMethodsAction): CustomPaymentMethodsAction;
            public static encode(message: ICustomPaymentMethodsAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): CustomPaymentMethodsAction;
            public static fromObject(object: { [k: string]: any }): CustomPaymentMethodsAction;
            public static toObject(message: CustomPaymentMethodsAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IDeleteChatAction {
            messageRange?: proto.SyncActionValue.SyncActionMessageRange | null;
        }
        export class DeleteChatAction implements IDeleteChatAction {
            constructor(properties?: IDeleteChatAction);
            public static create(properties?: IDeleteChatAction): DeleteChatAction;
            public static encode(message: IDeleteChatAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): DeleteChatAction;
            public static fromObject(object: { [k: string]: any }): DeleteChatAction;
            public static toObject(message: DeleteChatAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IDeleteIndividualCallLogAction {
            peerJid?: string | null;
            isIncoming?: boolean | null;
        }
        export class DeleteIndividualCallLogAction implements IDeleteIndividualCallLogAction {
            constructor(properties?: IDeleteIndividualCallLogAction);
            public static create(properties?: IDeleteIndividualCallLogAction): DeleteIndividualCallLogAction;
            public static encode(message: IDeleteIndividualCallLogAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): DeleteIndividualCallLogAction;
            public static fromObject(object: { [k: string]: any }): DeleteIndividualCallLogAction;
            public static toObject(message: DeleteIndividualCallLogAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IDeleteMessageForMeAction {
            deleteMedia?: boolean | null;
            messageTimestamp?: number | Long | null;
        }
        export class DeleteMessageForMeAction implements IDeleteMessageForMeAction {
            constructor(properties?: IDeleteMessageForMeAction);
            public static create(properties?: IDeleteMessageForMeAction): DeleteMessageForMeAction;
            public static encode(message: IDeleteMessageForMeAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): DeleteMessageForMeAction;
            public static fromObject(object: { [k: string]: any }): DeleteMessageForMeAction;
            public static toObject(message: DeleteMessageForMeAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IDetectedOutcomesStatusAction {
            isEnabled?: boolean | null;
        }
        export class DetectedOutcomesStatusAction implements IDetectedOutcomesStatusAction {
            constructor(properties?: IDetectedOutcomesStatusAction);
            public static create(properties?: IDetectedOutcomesStatusAction): DetectedOutcomesStatusAction;
            public static encode(message: IDetectedOutcomesStatusAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): DetectedOutcomesStatusAction;
            public static fromObject(object: { [k: string]: any }): DetectedOutcomesStatusAction;
            public static toObject(message: DetectedOutcomesStatusAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IExternalWebBetaAction {
            isOptIn?: boolean | null;
        }
        export class ExternalWebBetaAction implements IExternalWebBetaAction {
            constructor(properties?: IExternalWebBetaAction);
            public static create(properties?: IExternalWebBetaAction): ExternalWebBetaAction;
            public static encode(message: IExternalWebBetaAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): ExternalWebBetaAction;
            public static fromObject(object: { [k: string]: any }): ExternalWebBetaAction;
            public static toObject(message: ExternalWebBetaAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IFavoritesAction {
            favorites?: (proto.IFavorite)[] | null;
        }
        export class FavoritesAction implements IFavoritesAction {
            constructor(properties?: IFavoritesAction);
            public static create(properties?: IFavoritesAction): FavoritesAction;
            public static encode(message: IFavoritesAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): FavoritesAction;
            public static fromObject(object: { [k: string]: any }): FavoritesAction;
            public static toObject(message: FavoritesAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace FavoritesAction {
            export interface IFavorite {
                id?: string | null;
            }
            export class Favorite implements IFavorite {
                constructor(properties?: IFavorite);
                public static create(properties?: IFavorite): Favorite;
                public static encode(message: IFavorite, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): Favorite;
                public static fromObject(object: { [k: string]: any }): Favorite;
                public static toObject(message: Favorite, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
        }
        export interface IInteractiveMessageAction {
            type?: proto.IInteractiveMessageActionMode | null;
        }
        export class InteractiveMessageAction implements IInteractiveMessageAction {
            constructor(properties?: IInteractiveMessageAction);
            public static create(properties?: IInteractiveMessageAction): InteractiveMessageAction;
            public static encode(message: IInteractiveMessageAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): InteractiveMessageAction;
            public static fromObject(object: { [k: string]: any }): InteractiveMessageAction;
            public static toObject(message: InteractiveMessageAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace InteractiveMessageAction {
            export enum InteractiveMessageActionMode {
                DISABLE_CTA = 1,
            }
            export type IInteractiveMessageActionMode = InteractiveMessageActionMode;
        }
        export interface IKeyExpiration {
            expiredKeyEpoch?: number | null;
        }
        export class KeyExpiration implements IKeyExpiration {
            constructor(properties?: IKeyExpiration);
            public static create(properties?: IKeyExpiration): KeyExpiration;
            public static encode(message: IKeyExpiration, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): KeyExpiration;
            public static fromObject(object: { [k: string]: any }): KeyExpiration;
            public static toObject(message: KeyExpiration, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface ILabelAssociationAction {
            labeled?: boolean | null;
        }
        export class LabelAssociationAction implements ILabelAssociationAction {
            constructor(properties?: ILabelAssociationAction);
            public static create(properties?: ILabelAssociationAction): LabelAssociationAction;
            public static encode(message: ILabelAssociationAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): LabelAssociationAction;
            public static fromObject(object: { [k: string]: any }): LabelAssociationAction;
            public static toObject(message: LabelAssociationAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface ILabelEditAction {
            name?: string | null;
            color?: number | null;
            predefinedId?: number | null;
            deleted?: boolean | null;
            orderIndex?: number | null;
            isActive?: boolean | null;
            type?: proto.IListType | null;
            isImmutable?: boolean | null;
            muteEndTimeMs?: number | Long | null;
        }
        export class LabelEditAction implements ILabelEditAction {
            constructor(properties?: ILabelEditAction);
            public static create(properties?: ILabelEditAction): LabelEditAction;
            public static encode(message: ILabelEditAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): LabelEditAction;
            public static fromObject(object: { [k: string]: any }): LabelEditAction;
            public static toObject(message: LabelEditAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace LabelEditAction {
            export enum ListType {
                NONE = 0,
                UNREAD = 1,
                GROUPS = 2,
                FAVORITES = 3,
                PREDEFINED = 4,
                CUSTOM = 5,
                COMMUNITY = 6,
                SERVER_ASSIGNED = 7,
                DRAFTED = 8,
                AI_HANDOFF = 9,
            }
            export type IListType = ListType;
        }
        export interface ILabelReorderingAction {
            sortedLabelIds?: (number)[] | null;
        }
        export class LabelReorderingAction implements ILabelReorderingAction {
            constructor(properties?: ILabelReorderingAction);
            public static create(properties?: ILabelReorderingAction): LabelReorderingAction;
            public static encode(message: ILabelReorderingAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): LabelReorderingAction;
            public static fromObject(object: { [k: string]: any }): LabelReorderingAction;
            public static toObject(message: LabelReorderingAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface ILidContactAction {
            fullName?: string | null;
            firstName?: string | null;
            username?: string | null;
        }
        export class LidContactAction implements ILidContactAction {
            constructor(properties?: ILidContactAction);
            public static create(properties?: ILidContactAction): LidContactAction;
            public static encode(message: ILidContactAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): LidContactAction;
            public static fromObject(object: { [k: string]: any }): LidContactAction;
            public static toObject(message: LidContactAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface ILocaleSetting {
            locale?: string | null;
        }
        export class LocaleSetting implements ILocaleSetting {
            constructor(properties?: ILocaleSetting);
            public static create(properties?: ILocaleSetting): LocaleSetting;
            public static encode(message: ILocaleSetting, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): LocaleSetting;
            public static fromObject(object: { [k: string]: any }): LocaleSetting;
            public static toObject(message: LocaleSetting, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface ILockChatAction {
            locked?: boolean | null;
        }
        export class LockChatAction implements ILockChatAction {
            constructor(properties?: ILockChatAction);
            public static create(properties?: ILockChatAction): LockChatAction;
            public static encode(message: ILockChatAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): LockChatAction;
            public static fromObject(object: { [k: string]: any }): LockChatAction;
            public static toObject(message: LockChatAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IMaibaAIFeaturesControlAction {
            aiFeatureStatus?: proto.IMaibaAIFeatureStatus | null;
        }
        export class MaibaAIFeaturesControlAction implements IMaibaAIFeaturesControlAction {
            constructor(properties?: IMaibaAIFeaturesControlAction);
            public static create(properties?: IMaibaAIFeaturesControlAction): MaibaAIFeaturesControlAction;
            public static encode(message: IMaibaAIFeaturesControlAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): MaibaAIFeaturesControlAction;
            public static fromObject(object: { [k: string]: any }): MaibaAIFeaturesControlAction;
            public static toObject(message: MaibaAIFeaturesControlAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace MaibaAIFeaturesControlAction {
            export enum MaibaAIFeatureStatus {
                ENABLED = 0,
                ENABLED_HAS_LEARNING = 1,
                DISABLED = 2,
            }
            export type IMaibaAIFeatureStatus = MaibaAIFeatureStatus;
        }
        export interface IMarkChatAsReadAction {
            read?: boolean | null;
            messageRange?: proto.SyncActionValue.SyncActionMessageRange | null;
        }
        export class MarkChatAsReadAction implements IMarkChatAsReadAction {
            constructor(properties?: IMarkChatAsReadAction);
            public static create(properties?: IMarkChatAsReadAction): MarkChatAsReadAction;
            public static encode(message: IMarkChatAsReadAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): MarkChatAsReadAction;
            public static fromObject(object: { [k: string]: any }): MarkChatAsReadAction;
            public static toObject(message: MarkChatAsReadAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IMarketingMessageAction {
            name?: string | null;
            message?: string | null;
            type?: proto.IMarketingMessagePrototypeType | null;
            createdAt?: number | Long | null;
            lastSentAt?: number | Long | null;
            isDeleted?: boolean | null;
            mediaId?: string | null;
        }
        export class MarketingMessageAction implements IMarketingMessageAction {
            constructor(properties?: IMarketingMessageAction);
            public static create(properties?: IMarketingMessageAction): MarketingMessageAction;
            public static encode(message: IMarketingMessageAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): MarketingMessageAction;
            public static fromObject(object: { [k: string]: any }): MarketingMessageAction;
            public static toObject(message: MarketingMessageAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace MarketingMessageAction {
            export enum MarketingMessagePrototypeType {
                PERSONALIZED = 0,
            }
            export type IMarketingMessagePrototypeType = MarketingMessagePrototypeType;
        }
        export interface IMarketingMessageBroadcastAction {
            repliedCount?: number | null;
        }
        export class MarketingMessageBroadcastAction implements IMarketingMessageBroadcastAction {
            constructor(properties?: IMarketingMessageBroadcastAction);
            public static create(properties?: IMarketingMessageBroadcastAction): MarketingMessageBroadcastAction;
            public static encode(message: IMarketingMessageBroadcastAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): MarketingMessageBroadcastAction;
            public static fromObject(object: { [k: string]: any }): MarketingMessageBroadcastAction;
            public static toObject(message: MarketingMessageBroadcastAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IMerchantPaymentPartnerAction {
            status?: proto.IStatus | null;
            country?: string | null;
            gatewayName?: string | null;
            credentialId?: string | null;
        }
        export class MerchantPaymentPartnerAction implements IMerchantPaymentPartnerAction {
            constructor(properties?: IMerchantPaymentPartnerAction);
            public static create(properties?: IMerchantPaymentPartnerAction): MerchantPaymentPartnerAction;
            public static encode(message: IMerchantPaymentPartnerAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): MerchantPaymentPartnerAction;
            public static fromObject(object: { [k: string]: any }): MerchantPaymentPartnerAction;
            public static toObject(message: MerchantPaymentPartnerAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace MerchantPaymentPartnerAction {
            export enum Status {
                ACTIVE = 0,
                INACTIVE = 1,
            }
            export type IStatus = Status;
        }
        export interface IMusicUserIdAction {
            musicUserId?: string | null;
            music_user_id_map?: { [k: string]: string } | null;
        }
        export class MusicUserIdAction implements IMusicUserIdAction {
            constructor(properties?: IMusicUserIdAction);
            public static create(properties?: IMusicUserIdAction): MusicUserIdAction;
            public static encode(message: IMusicUserIdAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): MusicUserIdAction;
            public static fromObject(object: { [k: string]: any }): MusicUserIdAction;
            public static toObject(message: MusicUserIdAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IMuteAction {
            muted?: boolean | null;
            muteEndTimestamp?: number | Long | null;
            autoMuted?: boolean | null;
        }
        export class MuteAction implements IMuteAction {
            constructor(properties?: IMuteAction);
            public static create(properties?: IMuteAction): MuteAction;
            public static encode(message: IMuteAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): MuteAction;
            public static fromObject(object: { [k: string]: any }): MuteAction;
            public static toObject(message: MuteAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface INewsletterSavedInterestsAction {
            newsletterSavedInterests?: string | null;
        }
        export class NewsletterSavedInterestsAction implements INewsletterSavedInterestsAction {
            constructor(properties?: INewsletterSavedInterestsAction);
            public static create(properties?: INewsletterSavedInterestsAction): NewsletterSavedInterestsAction;
            public static encode(message: INewsletterSavedInterestsAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): NewsletterSavedInterestsAction;
            public static fromObject(object: { [k: string]: any }): NewsletterSavedInterestsAction;
            public static toObject(message: NewsletterSavedInterestsAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface INoteEditAction {
            type?: proto.INoteType | null;
            chatJid?: string | null;
            createdAt?: number | Long | null;
            deleted?: boolean | null;
            unstructuredContent?: string | null;
        }
        export class NoteEditAction implements INoteEditAction {
            constructor(properties?: INoteEditAction);
            public static create(properties?: INoteEditAction): NoteEditAction;
            public static encode(message: INoteEditAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): NoteEditAction;
            public static fromObject(object: { [k: string]: any }): NoteEditAction;
            public static toObject(message: NoteEditAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace NoteEditAction {
            export enum NoteType {
                UNSTRUCTURED = 1,
                STRUCTURED = 2,
            }
            export type INoteType = NoteType;
        }
        export interface INotificationActivitySettingAction {
            notificationActivitySetting?: proto.INotificationActivitySetting | null;
        }
        export class NotificationActivitySettingAction implements INotificationActivitySettingAction {
            constructor(properties?: INotificationActivitySettingAction);
            public static create(properties?: INotificationActivitySettingAction): NotificationActivitySettingAction;
            public static encode(message: INotificationActivitySettingAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): NotificationActivitySettingAction;
            public static fromObject(object: { [k: string]: any }): NotificationActivitySettingAction;
            public static toObject(message: NotificationActivitySettingAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace NotificationActivitySettingAction {
            export enum NotificationActivitySetting {
                DEFAULT_ALL_MESSAGES = 0,
                ALL_MESSAGES = 1,
                HIGHLIGHTS = 2,
                DEFAULT_HIGHLIGHTS = 3,
            }
            export type INotificationActivitySetting = NotificationActivitySetting;
        }
        export interface INuxAction {
            acknowledged?: boolean | null;
        }
        export class NuxAction implements INuxAction {
            constructor(properties?: INuxAction);
            public static create(properties?: INuxAction): NuxAction;
            public static encode(message: INuxAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): NuxAction;
            public static fromObject(object: { [k: string]: any }): NuxAction;
            public static toObject(message: NuxAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IPaymentInfoAction {
            cpi?: string | null;
        }
        export class PaymentInfoAction implements IPaymentInfoAction {
            constructor(properties?: IPaymentInfoAction);
            public static create(properties?: IPaymentInfoAction): PaymentInfoAction;
            public static encode(message: IPaymentInfoAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): PaymentInfoAction;
            public static fromObject(object: { [k: string]: any }): PaymentInfoAction;
            public static toObject(message: PaymentInfoAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IPaymentTosAction {
            paymentNotice?: proto.IPaymentNotice | null;
            accepted?: boolean | null;
        }
        export class PaymentTosAction implements IPaymentTosAction {
            constructor(properties?: IPaymentTosAction);
            public static create(properties?: IPaymentTosAction): PaymentTosAction;
            public static encode(message: IPaymentTosAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): PaymentTosAction;
            public static fromObject(object: { [k: string]: any }): PaymentTosAction;
            public static toObject(message: PaymentTosAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace PaymentTosAction {
            export enum PaymentNotice {
                BR_PAY_PRIVACY_POLICY = 0,
            }
            export type IPaymentNotice = PaymentNotice;
        }
        export interface IPinAction {
            pinned?: boolean | null;
        }
        export class PinAction implements IPinAction {
            constructor(properties?: IPinAction);
            public static create(properties?: IPinAction): PinAction;
            public static encode(message: IPinAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): PinAction;
            public static fromObject(object: { [k: string]: any }): PinAction;
            public static toObject(message: PinAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IPnForLidChatAction {
            pnJid?: string | null;
        }
        export class PnForLidChatAction implements IPnForLidChatAction {
            constructor(properties?: IPnForLidChatAction);
            public static create(properties?: IPnForLidChatAction): PnForLidChatAction;
            public static encode(message: IPnForLidChatAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): PnForLidChatAction;
            public static fromObject(object: { [k: string]: any }): PnForLidChatAction;
            public static toObject(message: PnForLidChatAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IPrimaryFeature {
            flags?: (string)[] | null;
        }
        export class PrimaryFeature implements IPrimaryFeature {
            constructor(properties?: IPrimaryFeature);
            public static create(properties?: IPrimaryFeature): PrimaryFeature;
            public static encode(message: IPrimaryFeature, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): PrimaryFeature;
            public static fromObject(object: { [k: string]: any }): PrimaryFeature;
            public static toObject(message: PrimaryFeature, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IPrimaryVersionAction {
            version?: string | null;
        }
        export class PrimaryVersionAction implements IPrimaryVersionAction {
            constructor(properties?: IPrimaryVersionAction);
            public static create(properties?: IPrimaryVersionAction): PrimaryVersionAction;
            public static encode(message: IPrimaryVersionAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): PrimaryVersionAction;
            public static fromObject(object: { [k: string]: any }): PrimaryVersionAction;
            public static toObject(message: PrimaryVersionAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IPrivacySettingChannelsPersonalisedRecommendationAction {
            isUserOptedOut?: boolean | null;
        }
        export class PrivacySettingChannelsPersonalisedRecommendationAction implements IPrivacySettingChannelsPersonalisedRecommendationAction {
            constructor(properties?: IPrivacySettingChannelsPersonalisedRecommendationAction);
            public static create(properties?: IPrivacySettingChannelsPersonalisedRecommendationAction): PrivacySettingChannelsPersonalisedRecommendationAction;
            public static encode(message: IPrivacySettingChannelsPersonalisedRecommendationAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): PrivacySettingChannelsPersonalisedRecommendationAction;
            public static fromObject(object: { [k: string]: any }): PrivacySettingChannelsPersonalisedRecommendationAction;
            public static toObject(message: PrivacySettingChannelsPersonalisedRecommendationAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IPrivacySettingDisableLinkPreviewsAction {
            isPreviewsDisabled?: boolean | null;
        }
        export class PrivacySettingDisableLinkPreviewsAction implements IPrivacySettingDisableLinkPreviewsAction {
            constructor(properties?: IPrivacySettingDisableLinkPreviewsAction);
            public static create(properties?: IPrivacySettingDisableLinkPreviewsAction): PrivacySettingDisableLinkPreviewsAction;
            public static encode(message: IPrivacySettingDisableLinkPreviewsAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): PrivacySettingDisableLinkPreviewsAction;
            public static fromObject(object: { [k: string]: any }): PrivacySettingDisableLinkPreviewsAction;
            public static toObject(message: PrivacySettingDisableLinkPreviewsAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IPrivacySettingRelayAllCalls {
            isEnabled?: boolean | null;
        }
        export class PrivacySettingRelayAllCalls implements IPrivacySettingRelayAllCalls {
            constructor(properties?: IPrivacySettingRelayAllCalls);
            public static create(properties?: IPrivacySettingRelayAllCalls): PrivacySettingRelayAllCalls;
            public static encode(message: IPrivacySettingRelayAllCalls, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): PrivacySettingRelayAllCalls;
            public static fromObject(object: { [k: string]: any }): PrivacySettingRelayAllCalls;
            public static toObject(message: PrivacySettingRelayAllCalls, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IPrivateProcessingSettingAction {
            privateProcessingStatus?: proto.IPrivateProcessingStatus | null;
        }
        export class PrivateProcessingSettingAction implements IPrivateProcessingSettingAction {
            constructor(properties?: IPrivateProcessingSettingAction);
            public static create(properties?: IPrivateProcessingSettingAction): PrivateProcessingSettingAction;
            public static encode(message: IPrivateProcessingSettingAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): PrivateProcessingSettingAction;
            public static fromObject(object: { [k: string]: any }): PrivateProcessingSettingAction;
            public static toObject(message: PrivateProcessingSettingAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace PrivateProcessingSettingAction {
            export enum PrivateProcessingStatus {
                UNDEFINED = 0,
                ENABLED = 1,
                DISABLED = 2,
            }
            export type IPrivateProcessingStatus = PrivateProcessingStatus;
        }
        export interface IPushNameSetting {
            name?: string | null;
        }
        export class PushNameSetting implements IPushNameSetting {
            constructor(properties?: IPushNameSetting);
            public static create(properties?: IPushNameSetting): PushNameSetting;
            public static encode(message: IPushNameSetting, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): PushNameSetting;
            public static fromObject(object: { [k: string]: any }): PushNameSetting;
            public static toObject(message: PushNameSetting, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IQuickReplyAction {
            shortcut?: string | null;
            message?: string | null;
            keywords?: (string)[] | null;
            count?: number | null;
            deleted?: boolean | null;
        }
        export class QuickReplyAction implements IQuickReplyAction {
            constructor(properties?: IQuickReplyAction);
            public static create(properties?: IQuickReplyAction): QuickReplyAction;
            public static encode(message: IQuickReplyAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): QuickReplyAction;
            public static fromObject(object: { [k: string]: any }): QuickReplyAction;
            public static toObject(message: QuickReplyAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IRecentEmojiWeightsAction {
            weights?: (proto.IRecentEmojiWeight)[] | null;
        }
        export class RecentEmojiWeightsAction implements IRecentEmojiWeightsAction {
            constructor(properties?: IRecentEmojiWeightsAction);
            public static create(properties?: IRecentEmojiWeightsAction): RecentEmojiWeightsAction;
            public static encode(message: IRecentEmojiWeightsAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): RecentEmojiWeightsAction;
            public static fromObject(object: { [k: string]: any }): RecentEmojiWeightsAction;
            public static toObject(message: RecentEmojiWeightsAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IRemoveRecentStickerAction {
            lastStickerSentTs?: number | Long | null;
        }
        export class RemoveRecentStickerAction implements IRemoveRecentStickerAction {
            constructor(properties?: IRemoveRecentStickerAction);
            public static create(properties?: IRemoveRecentStickerAction): RemoveRecentStickerAction;
            public static encode(message: IRemoveRecentStickerAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): RemoveRecentStickerAction;
            public static fromObject(object: { [k: string]: any }): RemoveRecentStickerAction;
            public static toObject(message: RemoveRecentStickerAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IStarAction {
            starred?: boolean | null;
        }
        export class StarAction implements IStarAction {
            constructor(properties?: IStarAction);
            public static create(properties?: IStarAction): StarAction;
            public static encode(message: IStarAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): StarAction;
            public static fromObject(object: { [k: string]: any }): StarAction;
            public static toObject(message: StarAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IStatusPostOptInNotificationPreferencesAction {
            enabled?: boolean | null;
        }
        export class StatusPostOptInNotificationPreferencesAction implements IStatusPostOptInNotificationPreferencesAction {
            constructor(properties?: IStatusPostOptInNotificationPreferencesAction);
            public static create(properties?: IStatusPostOptInNotificationPreferencesAction): StatusPostOptInNotificationPreferencesAction;
            public static encode(message: IStatusPostOptInNotificationPreferencesAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): StatusPostOptInNotificationPreferencesAction;
            public static fromObject(object: { [k: string]: any }): StatusPostOptInNotificationPreferencesAction;
            public static toObject(message: StatusPostOptInNotificationPreferencesAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IStatusPrivacyAction {
            mode?: proto.IStatusDistributionMode | null;
            userJid?: (string)[] | null;
        }
        export class StatusPrivacyAction implements IStatusPrivacyAction {
            constructor(properties?: IStatusPrivacyAction);
            public static create(properties?: IStatusPrivacyAction): StatusPrivacyAction;
            public static encode(message: IStatusPrivacyAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): StatusPrivacyAction;
            public static fromObject(object: { [k: string]: any }): StatusPrivacyAction;
            public static toObject(message: StatusPrivacyAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace StatusPrivacyAction {
            export enum StatusDistributionMode {
                ALLOW_LIST = 0,
                DENY_LIST = 1,
                CONTACTS = 2,
                CLOSE_FRIENDS = 3,
            }
            export type IStatusDistributionMode = StatusDistributionMode;
        }
        export interface IStickerAction {
            url?: string | null;
            fileEncSha256?: Uint8Array | null;
            mediaKey?: Uint8Array | null;
            mimetype?: string | null;
            height?: number | null;
            width?: number | null;
            directPath?: string | null;
            fileLength?: number | Long | null;
            isFavorite?: boolean | null;
            deviceIdHint?: number | null;
            isLottie?: boolean | null;
            imageHash?: string | null;
            isAvatarSticker?: boolean | null;
        }
        export class StickerAction implements IStickerAction {
            constructor(properties?: IStickerAction);
            public static create(properties?: IStickerAction): StickerAction;
            public static encode(message: IStickerAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): StickerAction;
            public static fromObject(object: { [k: string]: any }): StickerAction;
            public static toObject(message: StickerAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface ISubscriptionAction {
            isDeactivated?: boolean | null;
            isAutoRenewing?: boolean | null;
            expirationDate?: number | Long | null;
        }
        export class SubscriptionAction implements ISubscriptionAction {
            constructor(properties?: ISubscriptionAction);
            public static create(properties?: ISubscriptionAction): SubscriptionAction;
            public static encode(message: ISubscriptionAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): SubscriptionAction;
            public static fromObject(object: { [k: string]: any }): SubscriptionAction;
            public static toObject(message: SubscriptionAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface ISyncActionMessage {
            key?: proto.IMessageKey | null;
            timestamp?: number | Long | null;
        }
        export class SyncActionMessage implements ISyncActionMessage {
            constructor(properties?: ISyncActionMessage);
            public static create(properties?: ISyncActionMessage): SyncActionMessage;
            public static encode(message: ISyncActionMessage, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): SyncActionMessage;
            public static fromObject(object: { [k: string]: any }): SyncActionMessage;
            public static toObject(message: SyncActionMessage, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface ISyncActionMessageRange {
            lastMessageTimestamp?: number | Long | null;
            lastSystemMessageTimestamp?: number | Long | null;
            messages?: (proto.SyncActionValue.SyncActionMessage)[] | null;
        }
        export class SyncActionMessageRange implements ISyncActionMessageRange {
            constructor(properties?: ISyncActionMessageRange);
            public static create(properties?: ISyncActionMessageRange): SyncActionMessageRange;
            public static encode(message: ISyncActionMessageRange, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): SyncActionMessageRange;
            public static fromObject(object: { [k: string]: any }): SyncActionMessageRange;
            public static toObject(message: SyncActionMessageRange, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface ITimeFormatAction {
            isTwentyFourHourFormatEnabled?: boolean | null;
        }
        export class TimeFormatAction implements ITimeFormatAction {
            constructor(properties?: ITimeFormatAction);
            public static create(properties?: ITimeFormatAction): TimeFormatAction;
            public static encode(message: ITimeFormatAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): TimeFormatAction;
            public static fromObject(object: { [k: string]: any }): TimeFormatAction;
            public static toObject(message: TimeFormatAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IUGCBot {
            definition?: Uint8Array | null;
        }
        export class UGCBot implements IUGCBot {
            constructor(properties?: IUGCBot);
            public static create(properties?: IUGCBot): UGCBot;
            public static encode(message: IUGCBot, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): UGCBot;
            public static fromObject(object: { [k: string]: any }): UGCBot;
            public static toObject(message: UGCBot, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IUnarchiveChatsSetting {
            unarchiveChats?: boolean | null;
        }
        export class UnarchiveChatsSetting implements IUnarchiveChatsSetting {
            constructor(properties?: IUnarchiveChatsSetting);
            public static create(properties?: IUnarchiveChatsSetting): UnarchiveChatsSetting;
            public static encode(message: IUnarchiveChatsSetting, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): UnarchiveChatsSetting;
            public static fromObject(object: { [k: string]: any }): UnarchiveChatsSetting;
            public static toObject(message: UnarchiveChatsSetting, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IUserStatusMuteAction {
            muted?: boolean | null;
        }
        export class UserStatusMuteAction implements IUserStatusMuteAction {
            constructor(properties?: IUserStatusMuteAction);
            public static create(properties?: IUserStatusMuteAction): UserStatusMuteAction;
            public static encode(message: IUserStatusMuteAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): UserStatusMuteAction;
            public static fromObject(object: { [k: string]: any }): UserStatusMuteAction;
            public static toObject(message: UserStatusMuteAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IUsernameChatStartModeAction {
            chatStartMode?: proto.IChatStartMode | null;
        }
        export class UsernameChatStartModeAction implements IUsernameChatStartModeAction {
            constructor(properties?: IUsernameChatStartModeAction);
            public static create(properties?: IUsernameChatStartModeAction): UsernameChatStartModeAction;
            public static encode(message: IUsernameChatStartModeAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): UsernameChatStartModeAction;
            public static fromObject(object: { [k: string]: any }): UsernameChatStartModeAction;
            public static toObject(message: UsernameChatStartModeAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace UsernameChatStartModeAction {
            export enum ChatStartMode {
                LID = 1,
                PN = 2,
            }
            export type IChatStartMode = ChatStartMode;
        }
        export interface IWaffleAccountLinkStateAction {
            linkState?: proto.IAccountLinkState | null;
        }
        export class WaffleAccountLinkStateAction implements IWaffleAccountLinkStateAction {
            constructor(properties?: IWaffleAccountLinkStateAction);
            public static create(properties?: IWaffleAccountLinkStateAction): WaffleAccountLinkStateAction;
            public static encode(message: IWaffleAccountLinkStateAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): WaffleAccountLinkStateAction;
            public static fromObject(object: { [k: string]: any }): WaffleAccountLinkStateAction;
            public static toObject(message: WaffleAccountLinkStateAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace WaffleAccountLinkStateAction {
            export enum AccountLinkState {
                ACTIVE = 0,
                PAUSED = 1,
                UNLINKED = 2,
            }
            export type IAccountLinkState = AccountLinkState;
        }
        export interface IWamoUserIdentifierAction {
            identifier?: string | null;
        }
        export class WamoUserIdentifierAction implements IWamoUserIdentifierAction {
            constructor(properties?: IWamoUserIdentifierAction);
            public static create(properties?: IWamoUserIdentifierAction): WamoUserIdentifierAction;
            public static encode(message: IWamoUserIdentifierAction, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): WamoUserIdentifierAction;
            public static fromObject(object: { [k: string]: any }): WamoUserIdentifierAction;
            public static toObject(message: WamoUserIdentifierAction, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
    }
    export interface ISyncdIndex {
        blob?: Uint8Array | null;
    }
    export class SyncdIndex implements ISyncdIndex {
        constructor(properties?: ISyncdIndex);
        public static create(properties?: ISyncdIndex): SyncdIndex;
        public static encode(message: ISyncdIndex, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): SyncdIndex;
        public static fromObject(object: { [k: string]: any }): SyncdIndex;
        public static toObject(message: SyncdIndex, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface ISyncdMutation {
        operation?: proto.ISyncdOperation | null;
        record?: proto.ISyncdRecord | null;
    }
    export class SyncdMutation implements ISyncdMutation {
        constructor(properties?: ISyncdMutation);
        public static create(properties?: ISyncdMutation): SyncdMutation;
        public static encode(message: ISyncdMutation, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): SyncdMutation;
        public static fromObject(object: { [k: string]: any }): SyncdMutation;
        public static toObject(message: SyncdMutation, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace SyncdMutation {
        export enum SyncdOperation {
            SET = 0,
            REMOVE = 1,
        }
        export type ISyncdOperation = SyncdOperation;
    }
    export interface ISyncdMutations {
        mutations?: (proto.ISyncdMutation)[] | null;
    }
    export class SyncdMutations implements ISyncdMutations {
        constructor(properties?: ISyncdMutations);
        public static create(properties?: ISyncdMutations): SyncdMutations;
        public static encode(message: ISyncdMutations, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): SyncdMutations;
        public static fromObject(object: { [k: string]: any }): SyncdMutations;
        public static toObject(message: SyncdMutations, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface ISyncdPatch {
        version?: proto.ISyncdVersion | null;
        mutations?: (proto.ISyncdMutation)[] | null;
        externalMutations?: proto.IExternalBlobReference | null;
        snapshotMac?: Uint8Array | null;
        patchMac?: Uint8Array | null;
        keyId?: proto.IKeyId | null;
        exitCode?: proto.IExitCode | null;
        deviceIndex?: number | null;
        clientDebugData?: Uint8Array | null;
    }
    export class SyncdPatch implements ISyncdPatch {
        constructor(properties?: ISyncdPatch);
        public static create(properties?: ISyncdPatch): SyncdPatch;
        public static encode(message: ISyncdPatch, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): SyncdPatch;
        public static fromObject(object: { [k: string]: any }): SyncdPatch;
        public static toObject(message: SyncdPatch, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface ISyncdRecord {
        index?: proto.ISyncdIndex | null;
        value?: proto.ISyncdValue | null;
        keyId?: proto.IKeyId | null;
    }
    export class SyncdRecord implements ISyncdRecord {
        constructor(properties?: ISyncdRecord);
        public static create(properties?: ISyncdRecord): SyncdRecord;
        public static encode(message: ISyncdRecord, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): SyncdRecord;
        public static fromObject(object: { [k: string]: any }): SyncdRecord;
        public static toObject(message: SyncdRecord, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface ISyncdSnapshot {
        version?: proto.ISyncdVersion | null;
        records?: (proto.ISyncdRecord)[] | null;
        mac?: Uint8Array | null;
        keyId?: proto.IKeyId | null;
    }
    export class SyncdSnapshot implements ISyncdSnapshot {
        constructor(properties?: ISyncdSnapshot);
        public static create(properties?: ISyncdSnapshot): SyncdSnapshot;
        public static encode(message: ISyncdSnapshot, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): SyncdSnapshot;
        public static fromObject(object: { [k: string]: any }): SyncdSnapshot;
        public static toObject(message: SyncdSnapshot, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface ISyncdValue {
        blob?: Uint8Array | null;
    }
    export class SyncdValue implements ISyncdValue {
        constructor(properties?: ISyncdValue);
        public static create(properties?: ISyncdValue): SyncdValue;
        public static encode(message: ISyncdValue, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): SyncdValue;
        public static fromObject(object: { [k: string]: any }): SyncdValue;
        public static toObject(message: SyncdValue, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface ISyncdVersion {
        version?: number | Long | null;
    }
    export class SyncdVersion implements ISyncdVersion {
        constructor(properties?: ISyncdVersion);
        public static create(properties?: ISyncdVersion): SyncdVersion;
        public static encode(message: ISyncdVersion, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): SyncdVersion;
        public static fromObject(object: { [k: string]: any }): SyncdVersion;
        public static toObject(message: SyncdVersion, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface ITapLinkAction {
        title?: string | null;
        tapUrl?: string | null;
    }
    export class TapLinkAction implements ITapLinkAction {
        constructor(properties?: ITapLinkAction);
        public static create(properties?: ITapLinkAction): TapLinkAction;
        public static encode(message: ITapLinkAction, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): TapLinkAction;
        public static fromObject(object: { [k: string]: any }): TapLinkAction;
        public static toObject(message: TapLinkAction, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface ITemplateButton {
        index?: number | null;
        quickReplyButton?: proto.TemplateButton.QuickReplyButton | null;
        urlButton?: proto.TemplateButton.URLButton | null;
        callButton?: proto.TemplateButton.CallButton | null;
    }
    export class TemplateButton implements ITemplateButton {
        constructor(properties?: ITemplateButton);
        public static create(properties?: ITemplateButton): TemplateButton;
        public static encode(message: ITemplateButton, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): TemplateButton;
        public static fromObject(object: { [k: string]: any }): TemplateButton;
        public static toObject(message: TemplateButton, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace TemplateButton {
        export interface ICallButton {
            displayText?: proto.Message.HighlyStructuredMessage | null;
            phoneNumber?: proto.Message.HighlyStructuredMessage | null;
        }
        export class CallButton implements ICallButton {
            constructor(properties?: ICallButton);
            public static create(properties?: ICallButton): CallButton;
            public static encode(message: ICallButton, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): CallButton;
            public static fromObject(object: { [k: string]: any }): CallButton;
            public static toObject(message: CallButton, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IQuickReplyButton {
            displayText?: proto.Message.HighlyStructuredMessage | null;
            id?: string | null;
        }
        export class QuickReplyButton implements IQuickReplyButton {
            constructor(properties?: IQuickReplyButton);
            public static create(properties?: IQuickReplyButton): QuickReplyButton;
            public static encode(message: IQuickReplyButton, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): QuickReplyButton;
            public static fromObject(object: { [k: string]: any }): QuickReplyButton;
            public static toObject(message: QuickReplyButton, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export interface IURLButton {
            displayText?: proto.Message.HighlyStructuredMessage | null;
            url?: proto.Message.HighlyStructuredMessage | null;
        }
        export class URLButton implements IURLButton {
            constructor(properties?: IURLButton);
            public static create(properties?: IURLButton): URLButton;
            public static encode(message: IURLButton, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): URLButton;
            public static fromObject(object: { [k: string]: any }): URLButton;
            public static toObject(message: URLButton, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
    }
    export interface IThreadID {
        threadType?: proto.IThreadType | null;
        threadKey?: proto.IMessageKey | null;
    }
    export class ThreadID implements IThreadID {
        constructor(properties?: IThreadID);
        public static create(properties?: IThreadID): ThreadID;
        public static encode(message: IThreadID, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): ThreadID;
        public static fromObject(object: { [k: string]: any }): ThreadID;
        public static toObject(message: ThreadID, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace ThreadID {
        export enum ThreadType {
            UNKNOWN = 0,
            VIEW_REPLIES = 1,
            AI_THREAD = 2,
        }
        export type IThreadType = ThreadType;
    }
    export interface IUrlTrackingMap {
        urlTrackingMapElements?: (proto.IUrlTrackingMapElement)[] | null;
    }
    export class UrlTrackingMap implements IUrlTrackingMap {
        constructor(properties?: IUrlTrackingMap);
        public static create(properties?: IUrlTrackingMap): UrlTrackingMap;
        public static encode(message: IUrlTrackingMap, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): UrlTrackingMap;
        public static fromObject(object: { [k: string]: any }): UrlTrackingMap;
        public static toObject(message: UrlTrackingMap, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace UrlTrackingMap {
        export interface IUrlTrackingMapElement {
            originalUrl?: string | null;
            unconsentedUsersUrl?: string | null;
            consentedUsersUrl?: string | null;
            cardIndex?: number | null;
        }
        export class UrlTrackingMapElement implements IUrlTrackingMapElement {
            constructor(properties?: IUrlTrackingMapElement);
            public static create(properties?: IUrlTrackingMapElement): UrlTrackingMapElement;
            public static encode(message: IUrlTrackingMapElement, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): UrlTrackingMapElement;
            public static fromObject(object: { [k: string]: any }): UrlTrackingMapElement;
            public static toObject(message: UrlTrackingMapElement, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
    }
    export interface IUserPassword {
        encoding?: proto.IEncoding | null;
        transformer?: proto.ITransformer | null;
        transformerArg?: (proto.ITransformerArg)[] | null;
        transformedData?: Uint8Array | null;
    }
    export class UserPassword implements IUserPassword {
        constructor(properties?: IUserPassword);
        public static create(properties?: IUserPassword): UserPassword;
        public static encode(message: IUserPassword, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): UserPassword;
        public static fromObject(object: { [k: string]: any }): UserPassword;
        public static toObject(message: UserPassword, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace UserPassword {
        export enum Encoding {
            UTF8 = 0,
            UTF8_BROKEN = 1,
        }
        export type IEncoding = Encoding;
        export enum Transformer {
            NONE = 0,
            PBKDF2_HMAC_SHA512 = 1,
            PBKDF2_HMAC_SHA384 = 2,
        }
        export type ITransformer = Transformer;
        export interface ITransformerArg {
            key?: string | null;
            value?: proto.IValue | null;
        }
        export class TransformerArg implements ITransformerArg {
            constructor(properties?: ITransformerArg);
            public static create(properties?: ITransformerArg): TransformerArg;
            public static encode(message: ITransformerArg, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): TransformerArg;
            public static fromObject(object: { [k: string]: any }): TransformerArg;
            public static toObject(message: TransformerArg, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
        export namespace TransformerArg {
            export interface IValue {
                asBlob?: Uint8Array | null;
                asUnsignedInteger?: number | null;
            }
            export class Value implements IValue {
                constructor(properties?: IValue);
                public static create(properties?: IValue): Value;
                public static encode(message: IValue, writer?: any): any;
                public static decode(reader: Uint8Array | any, length?: number): Value;
                public static fromObject(object: { [k: string]: any }): Value;
                public static toObject(message: Value, options?: any): { [k: string]: any };
                public static verify(message: { [k: string]: any }): string | null;
            }
        }
    }
    export interface IUserReceipt {
        userJid?: string | null;
        receiptTimestamp?: number | Long | null;
        readTimestamp?: number | Long | null;
        playedTimestamp?: number | Long | null;
        pendingDeviceJid?: (string)[] | null;
        deliveredDeviceJid?: (string)[] | null;
    }
    export class UserReceipt implements IUserReceipt {
        constructor(properties?: IUserReceipt);
        public static create(properties?: IUserReceipt): UserReceipt;
        public static encode(message: IUserReceipt, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): UserReceipt;
        public static fromObject(object: { [k: string]: any }): UserReceipt;
        public static toObject(message: UserReceipt, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IVerifiedNameCertificate {
        details?: Uint8Array | null;
        signature?: Uint8Array | null;
        serverSignature?: Uint8Array | null;
    }
    export class VerifiedNameCertificate implements IVerifiedNameCertificate {
        constructor(properties?: IVerifiedNameCertificate);
        public static create(properties?: IVerifiedNameCertificate): VerifiedNameCertificate;
        public static encode(message: IVerifiedNameCertificate, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): VerifiedNameCertificate;
        public static fromObject(object: { [k: string]: any }): VerifiedNameCertificate;
        public static toObject(message: VerifiedNameCertificate, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace VerifiedNameCertificate {
        export interface IDetails {
            serial?: number | Long | null;
            issuer?: string | null;
            verifiedName?: string | null;
            localizedNames?: (proto.ILocalizedName)[] | null;
            issueTime?: number | Long | null;
        }
        export class Details implements IDetails {
            constructor(properties?: IDetails);
            public static create(properties?: IDetails): Details;
            public static encode(message: IDetails, writer?: any): any;
            public static decode(reader: Uint8Array | any, length?: number): Details;
            public static fromObject(object: { [k: string]: any }): Details;
            public static toObject(message: Details, options?: any): { [k: string]: any };
            public static verify(message: { [k: string]: any }): string | null;
        }
    }
    export interface IWallpaperSettings {
        filename?: string | null;
        opacity?: number | null;
    }
    export class WallpaperSettings implements IWallpaperSettings {
        constructor(properties?: IWallpaperSettings);
        public static create(properties?: IWallpaperSettings): WallpaperSettings;
        public static encode(message: IWallpaperSettings, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): WallpaperSettings;
        public static fromObject(object: { [k: string]: any }): WallpaperSettings;
        public static toObject(message: WallpaperSettings, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export interface IWebFeatures {
        labelsDisplay?: proto.IFlag | null;
        voipIndividualOutgoing?: proto.IFlag | null;
        groupsV3?: proto.IFlag | null;
        groupsV3Create?: proto.IFlag | null;
        changeNumberV2?: proto.IFlag | null;
        queryStatusV3Thumbnail?: proto.IFlag | null;
        liveLocations?: proto.IFlag | null;
        queryVname?: proto.IFlag | null;
        voipIndividualIncoming?: proto.IFlag | null;
        quickRepliesQuery?: proto.IFlag | null;
        payments?: proto.IFlag | null;
        stickerPackQuery?: proto.IFlag | null;
        liveLocationsFinal?: proto.IFlag | null;
        labelsEdit?: proto.IFlag | null;
        mediaUpload?: proto.IFlag | null;
        mediaUploadRichQuickReplies?: proto.IFlag | null;
        vnameV2?: proto.IFlag | null;
        videoPlaybackUrl?: proto.IFlag | null;
        statusRanking?: proto.IFlag | null;
        voipIndividualVideo?: proto.IFlag | null;
        thirdPartyStickers?: proto.IFlag | null;
        frequentlyForwardedSetting?: proto.IFlag | null;
        groupsV4JoinPermission?: proto.IFlag | null;
        recentStickers?: proto.IFlag | null;
        catalog?: proto.IFlag | null;
        starredStickers?: proto.IFlag | null;
        voipGroupCall?: proto.IFlag | null;
        templateMessage?: proto.IFlag | null;
        templateMessageInteractivity?: proto.IFlag | null;
        ephemeralMessages?: proto.IFlag | null;
        e2ENotificationSync?: proto.IFlag | null;
        recentStickersV2?: proto.IFlag | null;
        recentStickersV3?: proto.IFlag | null;
        userNotice?: proto.IFlag | null;
        support?: proto.IFlag | null;
        groupUiiCleanup?: proto.IFlag | null;
        groupDogfoodingInternalOnly?: proto.IFlag | null;
        settingsSync?: proto.IFlag | null;
        archiveV2?: proto.IFlag | null;
        ephemeralAllowGroupMembers?: proto.IFlag | null;
        ephemeral24HDuration?: proto.IFlag | null;
        mdForceUpgrade?: proto.IFlag | null;
        disappearingMode?: proto.IFlag | null;
        externalMdOptInAvailable?: proto.IFlag | null;
        noDeleteMessageTimeLimit?: proto.IFlag | null;
    }
    export class WebFeatures implements IWebFeatures {
        constructor(properties?: IWebFeatures);
        public static create(properties?: IWebFeatures): WebFeatures;
        public static encode(message: IWebFeatures, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): WebFeatures;
        public static fromObject(object: { [k: string]: any }): WebFeatures;
        public static toObject(message: WebFeatures, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace WebFeatures {
        export enum Flag {
            NOT_STARTED = 0,
            FORCE_UPGRADE = 1,
            DEVELOPMENT = 2,
            PRODUCTION = 3,
        }
        export type IFlag = Flag;
    }
    export enum WebLinkRenderConfig {
        WEBVIEW = 0,
        SYSTEM = 1,
    }
    export type IWebLinkRenderConfig = WebLinkRenderConfig;
    export interface IWebMessageInfo {
        key?: proto.IMessageKey | null;
        message?: proto.IMessage | null;
        messageTimestamp?: number | Long | null;
        status?: proto.IStatus | null;
        participant?: string | null;
        messageC2STimestamp?: number | Long | null;
        ignore?: boolean | null;
        starred?: boolean | null;
        broadcast?: boolean | null;
        pushName?: string | null;
        mediaCiphertextSha256?: Uint8Array | null;
        multicast?: boolean | null;
        urlText?: boolean | null;
        urlNumber?: boolean | null;
        messageStubType?: proto.IStubType | null;
        clearMedia?: boolean | null;
        messageStubParameters?: (string)[] | null;
        duration?: number | null;
        labels?: (string)[] | null;
        paymentInfo?: proto.IPaymentInfo | null;
        finalLiveLocation?: proto.Message.LiveLocationMessage | null;
        quotedPaymentInfo?: proto.IPaymentInfo | null;
        ephemeralStartTimestamp?: number | Long | null;
        ephemeralDuration?: number | null;
        ephemeralOffToOn?: boolean | null;
        ephemeralOutOfSync?: boolean | null;
        bizPrivacyStatus?: proto.IBizPrivacyStatus | null;
        verifiedBizName?: string | null;
        mediaData?: proto.IMediaData | null;
        photoChange?: proto.IPhotoChange | null;
        userReceipt?: (proto.IUserReceipt)[] | null;
        reactions?: (proto.IReaction)[] | null;
        quotedStickerData?: proto.IMediaData | null;
        futureproofData?: Uint8Array | null;
        statusPsa?: proto.IStatusPSA | null;
        pollUpdates?: (proto.IPollUpdate)[] | null;
        pollAdditionalMetadata?: proto.IPollAdditionalMetadata | null;
        agentId?: string | null;
        statusAlreadyViewed?: boolean | null;
        messageSecret?: Uint8Array | null;
        keepInChat?: proto.IKeepInChat | null;
        originalSelfAuthorUserJidString?: string | null;
        revokeMessageTimestamp?: number | Long | null;
        pinInChat?: proto.IPinInChat | null;
        premiumMessageInfo?: proto.IPremiumMessageInfo | null;
        is1PBizBotMessage?: boolean | null;
        isGroupHistoryMessage?: boolean | null;
        botMessageInvokerJid?: string | null;
        commentMetadata?: proto.ICommentMetadata | null;
        eventResponses?: (proto.IEventResponse)[] | null;
        reportingTokenInfo?: proto.IReportingTokenInfo | null;
        newsletterServerId?: number | Long | null;
        eventAdditionalMetadata?: proto.IEventAdditionalMetadata | null;
        isMentionedInStatus?: boolean | null;
        statusMentions?: (string)[] | null;
        targetMessageId?: proto.IMessageKey | null;
        messageAddOns?: (proto.IMessageAddOn)[] | null;
        statusMentionMessageInfo?: proto.IStatusMentionMessage | null;
        isSupportAiMessage?: boolean | null;
        statusMentionSources?: (string)[] | null;
        supportAiCitations?: (proto.ICitation)[] | null;
        botTargetId?: string | null;
        groupHistoryIndividualMessageInfo?: proto.IGroupHistoryIndividualMessageInfo | null;
        groupHistoryBundleInfo?: proto.IGroupHistoryBundleInfo | null;
        interactiveMessageAdditionalMetadata?: proto.IInteractiveMessageAdditionalMetadata | null;
        quarantinedMessage?: proto.IQuarantinedMessage | null;
    }
    export class WebMessageInfo implements IWebMessageInfo {
        constructor(properties?: IWebMessageInfo);
        public static create(properties?: IWebMessageInfo): WebMessageInfo;
        public static encode(message: IWebMessageInfo, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): WebMessageInfo;
        public static fromObject(object: { [k: string]: any }): WebMessageInfo;
        public static toObject(message: WebMessageInfo, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
    export namespace WebMessageInfo {
        export enum BizPrivacyStatus {
            E2EE = 0,
            FB = 2,
            BSP = 1,
            BSP_AND_FB = 3,
        }
        export type IBizPrivacyStatus = BizPrivacyStatus;
        export enum Status {
            ERROR = 0,
            PENDING = 1,
            SERVER_ACK = 2,
            DELIVERY_ACK = 3,
            READ = 4,
            PLAYED = 5,
        }
        export type IStatus = Status;
        export enum StubType {
            UNKNOWN = 0,
            REVOKE = 1,
            CIPHERTEXT = 2,
            FUTUREPROOF = 3,
            NON_VERIFIED_TRANSITION = 4,
            UNVERIFIED_TRANSITION = 5,
            VERIFIED_TRANSITION = 6,
            VERIFIED_LOW_UNKNOWN = 7,
            VERIFIED_HIGH = 8,
            VERIFIED_INITIAL_UNKNOWN = 9,
            VERIFIED_INITIAL_LOW = 10,
            VERIFIED_INITIAL_HIGH = 11,
            VERIFIED_TRANSITION_ANY_TO_NONE = 12,
            VERIFIED_TRANSITION_ANY_TO_HIGH = 13,
            VERIFIED_TRANSITION_HIGH_TO_LOW = 14,
            VERIFIED_TRANSITION_HIGH_TO_UNKNOWN = 15,
            VERIFIED_TRANSITION_UNKNOWN_TO_LOW = 16,
            VERIFIED_TRANSITION_LOW_TO_UNKNOWN = 17,
            VERIFIED_TRANSITION_NONE_TO_LOW = 18,
            VERIFIED_TRANSITION_NONE_TO_UNKNOWN = 19,
            GROUP_CREATE = 20,
            GROUP_CHANGE_SUBJECT = 21,
            GROUP_CHANGE_ICON = 22,
            GROUP_CHANGE_INVITE_LINK = 23,
            GROUP_CHANGE_DESCRIPTION = 24,
            GROUP_CHANGE_RESTRICT = 25,
            GROUP_CHANGE_ANNOUNCE = 26,
            GROUP_PARTICIPANT_ADD = 27,
            GROUP_PARTICIPANT_REMOVE = 28,
            GROUP_PARTICIPANT_PROMOTE = 29,
            GROUP_PARTICIPANT_DEMOTE = 30,
            GROUP_PARTICIPANT_INVITE = 31,
            GROUP_PARTICIPANT_LEAVE = 32,
            GROUP_PARTICIPANT_CHANGE_NUMBER = 33,
            BROADCAST_CREATE = 34,
            BROADCAST_ADD = 35,
            BROADCAST_REMOVE = 36,
            GENERIC_NOTIFICATION = 37,
            E2E_IDENTITY_CHANGED = 38,
            E2E_ENCRYPTED = 39,
            CALL_MISSED_VOICE = 40,
            CALL_MISSED_VIDEO = 41,
            INDIVIDUAL_CHANGE_NUMBER = 42,
            GROUP_DELETE = 43,
            GROUP_ANNOUNCE_MODE_MESSAGE_BOUNCE = 44,
            CALL_MISSED_GROUP_VOICE = 45,
            CALL_MISSED_GROUP_VIDEO = 46,
            PAYMENT_CIPHERTEXT = 47,
            PAYMENT_FUTUREPROOF = 48,
            PAYMENT_TRANSACTION_STATUS_UPDATE_FAILED = 49,
            PAYMENT_TRANSACTION_STATUS_UPDATE_REFUNDED = 50,
            PAYMENT_TRANSACTION_STATUS_UPDATE_REFUND_FAILED = 51,
            PAYMENT_TRANSACTION_STATUS_RECEIVER_PENDING_SETUP = 52,
            PAYMENT_TRANSACTION_STATUS_RECEIVER_SUCCESS_AFTER_HICCUP = 53,
            PAYMENT_ACTION_ACCOUNT_SETUP_REMINDER = 54,
            PAYMENT_ACTION_SEND_PAYMENT_REMINDER = 55,
            PAYMENT_ACTION_SEND_PAYMENT_INVITATION = 56,
            PAYMENT_ACTION_REQUEST_DECLINED = 57,
            PAYMENT_ACTION_REQUEST_EXPIRED = 58,
            PAYMENT_ACTION_REQUEST_CANCELLED = 59,
            BIZ_VERIFIED_TRANSITION_TOP_TO_BOTTOM = 60,
            BIZ_VERIFIED_TRANSITION_BOTTOM_TO_TOP = 61,
            BIZ_INTRO_TOP = 62,
            BIZ_INTRO_BOTTOM = 63,
            BIZ_NAME_CHANGE = 64,
            BIZ_MOVE_TO_CONSUMER_APP = 65,
            BIZ_TWO_TIER_MIGRATION_TOP = 66,
            BIZ_TWO_TIER_MIGRATION_BOTTOM = 67,
            OVERSIZED = 68,
            GROUP_CHANGE_NO_FREQUENTLY_FORWARDED = 69,
            GROUP_V4_ADD_INVITE_SENT = 70,
            GROUP_PARTICIPANT_ADD_REQUEST_JOIN = 71,
            CHANGE_EPHEMERAL_SETTING = 72,
            E2E_DEVICE_CHANGED = 73,
            VIEWED_ONCE = 74,
            E2E_ENCRYPTED_NOW = 75,
            BLUE_MSG_BSP_FB_TO_BSP_PREMISE = 76,
            BLUE_MSG_BSP_FB_TO_SELF_FB = 77,
            BLUE_MSG_BSP_FB_TO_SELF_PREMISE = 78,
            BLUE_MSG_BSP_FB_UNVERIFIED = 79,
            BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED = 80,
            BLUE_MSG_BSP_FB_VERIFIED = 81,
            BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED = 82,
            BLUE_MSG_BSP_PREMISE_TO_SELF_PREMISE = 83,
            BLUE_MSG_BSP_PREMISE_UNVERIFIED = 84,
            BLUE_MSG_BSP_PREMISE_UNVERIFIED_TO_SELF_PREMISE_VERIFIED = 85,
            BLUE_MSG_BSP_PREMISE_VERIFIED = 86,
            BLUE_MSG_BSP_PREMISE_VERIFIED_TO_SELF_PREMISE_UNVERIFIED = 87,
            BLUE_MSG_CONSUMER_TO_BSP_FB_UNVERIFIED = 88,
            BLUE_MSG_CONSUMER_TO_BSP_PREMISE_UNVERIFIED = 89,
            BLUE_MSG_CONSUMER_TO_SELF_FB_UNVERIFIED = 90,
            BLUE_MSG_CONSUMER_TO_SELF_PREMISE_UNVERIFIED = 91,
            BLUE_MSG_SELF_FB_TO_BSP_PREMISE = 92,
            BLUE_MSG_SELF_FB_TO_SELF_PREMISE = 93,
            BLUE_MSG_SELF_FB_UNVERIFIED = 94,
            BLUE_MSG_SELF_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED = 95,
            BLUE_MSG_SELF_FB_VERIFIED = 96,
            BLUE_MSG_SELF_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED = 97,
            BLUE_MSG_SELF_PREMISE_TO_BSP_PREMISE = 98,
            BLUE_MSG_SELF_PREMISE_UNVERIFIED = 99,
            BLUE_MSG_SELF_PREMISE_VERIFIED = 100,
            BLUE_MSG_TO_BSP_FB = 101,
            BLUE_MSG_TO_CONSUMER = 102,
            BLUE_MSG_TO_SELF_FB = 103,
            BLUE_MSG_UNVERIFIED_TO_BSP_FB_VERIFIED = 104,
            BLUE_MSG_UNVERIFIED_TO_BSP_PREMISE_VERIFIED = 105,
            BLUE_MSG_UNVERIFIED_TO_SELF_FB_VERIFIED = 106,
            BLUE_MSG_UNVERIFIED_TO_VERIFIED = 107,
            BLUE_MSG_VERIFIED_TO_BSP_FB_UNVERIFIED = 108,
            BLUE_MSG_VERIFIED_TO_BSP_PREMISE_UNVERIFIED = 109,
            BLUE_MSG_VERIFIED_TO_SELF_FB_UNVERIFIED = 110,
            BLUE_MSG_VERIFIED_TO_UNVERIFIED = 111,
            BLUE_MSG_BSP_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED = 112,
            BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_FB_VERIFIED = 113,
            BLUE_MSG_BSP_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED = 114,
            BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_FB_UNVERIFIED = 115,
            BLUE_MSG_SELF_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED = 116,
            BLUE_MSG_SELF_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED = 117,
            E2E_IDENTITY_UNAVAILABLE = 118,
            GROUP_CREATING = 119,
            GROUP_CREATE_FAILED = 120,
            GROUP_BOUNCED = 121,
            BLOCK_CONTACT = 122,
            EPHEMERAL_SETTING_NOT_APPLIED = 123,
            SYNC_FAILED = 124,
            SYNCING = 125,
            BIZ_PRIVACY_MODE_INIT_FB = 126,
            BIZ_PRIVACY_MODE_INIT_BSP = 127,
            BIZ_PRIVACY_MODE_TO_FB = 128,
            BIZ_PRIVACY_MODE_TO_BSP = 129,
            DISAPPEARING_MODE = 130,
            E2E_DEVICE_FETCH_FAILED = 131,
            ADMIN_REVOKE = 132,
            GROUP_INVITE_LINK_GROWTH_LOCKED = 133,
            COMMUNITY_LINK_PARENT_GROUP = 134,
            COMMUNITY_LINK_SIBLING_GROUP = 135,
            COMMUNITY_LINK_SUB_GROUP = 136,
            COMMUNITY_UNLINK_PARENT_GROUP = 137,
            COMMUNITY_UNLINK_SIBLING_GROUP = 138,
            COMMUNITY_UNLINK_SUB_GROUP = 139,
            GROUP_PARTICIPANT_ACCEPT = 140,
            GROUP_PARTICIPANT_LINKED_GROUP_JOIN = 141,
            COMMUNITY_CREATE = 142,
            EPHEMERAL_KEEP_IN_CHAT = 143,
            GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST = 144,
            GROUP_MEMBERSHIP_JOIN_APPROVAL_MODE = 145,
            INTEGRITY_UNLINK_PARENT_GROUP = 146,
            COMMUNITY_PARTICIPANT_PROMOTE = 147,
            COMMUNITY_PARTICIPANT_DEMOTE = 148,
            COMMUNITY_PARENT_GROUP_DELETED = 149,
            COMMUNITY_LINK_PARENT_GROUP_MEMBERSHIP_APPROVAL = 150,
            GROUP_PARTICIPANT_JOINED_GROUP_AND_PARENT_GROUP = 151,
            MASKED_THREAD_CREATED = 152,
            MASKED_THREAD_UNMASKED = 153,
            BIZ_CHAT_ASSIGNMENT = 154,
            CHAT_PSA = 155,
            CHAT_POLL_CREATION_MESSAGE = 156,
            CAG_MASKED_THREAD_CREATED = 157,
            COMMUNITY_PARENT_GROUP_SUBJECT_CHANGED = 158,
            CAG_INVITE_AUTO_ADD = 159,
            BIZ_CHAT_ASSIGNMENT_UNASSIGN = 160,
            CAG_INVITE_AUTO_JOINED = 161,
            SCHEDULED_CALL_START_MESSAGE = 162,
            COMMUNITY_INVITE_RICH = 163,
            COMMUNITY_INVITE_AUTO_ADD_RICH = 164,
            SUB_GROUP_INVITE_RICH = 165,
            SUB_GROUP_PARTICIPANT_ADD_RICH = 166,
            COMMUNITY_LINK_PARENT_GROUP_RICH = 167,
            COMMUNITY_PARTICIPANT_ADD_RICH = 168,
            SILENCED_UNKNOWN_CALLER_AUDIO = 169,
            SILENCED_UNKNOWN_CALLER_VIDEO = 170,
            GROUP_MEMBER_ADD_MODE = 171,
            GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST_NON_ADMIN_ADD = 172,
            COMMUNITY_CHANGE_DESCRIPTION = 173,
            SENDER_INVITE = 174,
            RECEIVER_INVITE = 175,
            COMMUNITY_ALLOW_MEMBER_ADDED_GROUPS = 176,
            PINNED_MESSAGE_IN_CHAT = 177,
            PAYMENT_INVITE_SETUP_INVITER = 178,
            PAYMENT_INVITE_SETUP_INVITEE_RECEIVE_ONLY = 179,
            PAYMENT_INVITE_SETUP_INVITEE_SEND_AND_RECEIVE = 180,
            LINKED_GROUP_CALL_START = 181,
            REPORT_TO_ADMIN_ENABLED_STATUS = 182,
            EMPTY_SUBGROUP_CREATE = 183,
            SCHEDULED_CALL_CANCEL = 184,
            SUBGROUP_ADMIN_TRIGGERED_AUTO_ADD_RICH = 185,
            GROUP_CHANGE_RECENT_HISTORY_SHARING = 186,
            PAID_MESSAGE_SERVER_CAMPAIGN_ID = 187,
            GENERAL_CHAT_CREATE = 188,
            GENERAL_CHAT_ADD = 189,
            GENERAL_CHAT_AUTO_ADD_DISABLED = 190,
            SUGGESTED_SUBGROUP_ANNOUNCE = 191,
            BIZ_BOT_1P_MESSAGING_ENABLED = 192,
            CHANGE_USERNAME = 193,
            BIZ_COEX_PRIVACY_INIT_SELF = 194,
            BIZ_COEX_PRIVACY_TRANSITION_SELF = 195,
            SUPPORT_AI_EDUCATION = 196,
            BIZ_BOT_3P_MESSAGING_ENABLED = 197,
            REMINDER_SETUP_MESSAGE = 198,
            REMINDER_SENT_MESSAGE = 199,
            REMINDER_CANCEL_MESSAGE = 200,
            BIZ_COEX_PRIVACY_INIT = 201,
            BIZ_COEX_PRIVACY_TRANSITION = 202,
            GROUP_DEACTIVATED = 203,
            COMMUNITY_DEACTIVATE_SIBLING_GROUP = 204,
            EVENT_UPDATED = 205,
            EVENT_CANCELED = 206,
            COMMUNITY_OWNER_UPDATED = 207,
            COMMUNITY_SUB_GROUP_VISIBILITY_HIDDEN = 208,
            CAPI_GROUP_NE2EE_SYSTEM_MESSAGE = 209,
            STATUS_MENTION = 210,
            USER_CONTROLS_SYSTEM_MESSAGE = 211,
            SUPPORT_SYSTEM_MESSAGE = 212,
            CHANGE_LID = 213,
            BIZ_CUSTOMER_3PD_DATA_SHARING_OPT_IN_MESSAGE = 214,
            BIZ_CUSTOMER_3PD_DATA_SHARING_OPT_OUT_MESSAGE = 215,
            CHANGE_LIMIT_SHARING = 216,
            GROUP_MEMBER_LINK_MODE = 217,
            BIZ_AUTOMATICALLY_LABELED_CHAT_SYSTEM_MESSAGE = 218,
            PHONE_NUMBER_HIDING_CHAT_DEPRECATED_MESSAGE = 219,
            QUARANTINED_MESSAGE = 220,
            GROUP_MEMBER_SHARE_GROUP_HISTORY_MODE = 221,
        }
        export type IStubType = StubType;
    }
    export interface IWebNotificationsInfo {
        timestamp?: number | Long | null;
        unreadChats?: number | null;
        notifyMessageCount?: number | null;
        notifyMessages?: (proto.IWebMessageInfo)[] | null;
    }
    export class WebNotificationsInfo implements IWebNotificationsInfo {
        constructor(properties?: IWebNotificationsInfo);
        public static create(properties?: IWebNotificationsInfo): WebNotificationsInfo;
        public static encode(message: IWebNotificationsInfo, writer?: any): any;
        public static decode(reader: Uint8Array | any, length?: number): WebNotificationsInfo;
        public static fromObject(object: { [k: string]: any }): WebNotificationsInfo;
        public static toObject(message: WebNotificationsInfo, options?: any): { [k: string]: any };
        public static verify(message: { [k: string]: any }): string | null;
    }
}
export const WAProto: typeof proto;
export default proto;
