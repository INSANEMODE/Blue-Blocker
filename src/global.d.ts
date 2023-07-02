/// <reference types="vite/client" />

interface Config {
	suspendedBlockCollection: boolean,
	showBlockPopups: boolean,
	toastsLocation: "top-left" | "top-right" | "bottom-left" | "bottom-right",
	mute: boolean,
	blockFollowing: boolean,
	blockFollowers: boolean,
	skipVerified: boolean,
	skipAffiliated: boolean,
	skip1Mplus: boolean,
	blockNftAvatars: boolean,
	blockInterval: number,
	unblocked: { [k: string]: string? },
	popupTimer: number,
	skipFollowerCount: number,
	soupcanIntegration: boolean,
	blockPromoted: boolean,
}

interface BlueBlockerUser {
	is_blue_verified: boolean,
	has_nft_avatar: boolean,
	profile_image_shape: string,
	// TODO: verify affiliates_highlighted_label
	affiliates_highlighted_label?: {
		label?: {
			userLabelType?: string,
		},
	},
	legacy: {
		blocking: boolean,
		followed_by: boolean,
		following: boolean,
		name: string,
		screen_name: string,
		verified: boolean,
		verified_type?: string,
		followers_count: number,
	},
	super_following: boolean,
	rest_id: string,
	promoted_tweet?: boolean,
}

// extension message types
type SuccessStatus = "SUCCESS";
type ErrorStatus = "ERROR";
type MessageStatus = SuccessStatus | ErrorStatus;

interface RuntimeMessage {
	action: string,
	data: any,
}

interface MessageResponse {
	status: MessageStatus,
}

interface SuccessResponse {
	status: SuccessStatus,
	result: any,
}

interface ErrorResponse {
	status: ErrorStatus,
	message: string,
}

interface TwitterApiResponse {
	request: {
		url: URL | string,
		body?: string,
		headers: { [k: string]: string },
		method: string,
	},
	url: URL | string,
	parsedUrl?: RegExpExecArray,
	ok: boolean,
	status: number,
	arrayBuffer?: ArrayBuffer,
	blob?: Blob,
	formData?: FormData,
	json?: any,
	text?: string,
}

interface BlueBlockerEvent {
	request: {
		url: URL | string,
		body?: string,
		headers: { [k: string]: string },
		method: string,
	},
	url: URL | string,
	parsedUrl: RegExpExecArray,
	ok: boolean,
	status: number,
	json: any,
}

interface BlueBlockerBound {
	success: boolean,
}

interface CustomEventMap {
	"blue-blocker-event": CustomEvent<TwitterApiResponse>,
	"blue-blocker-bound": CustomEvent<BlueBlockerBound>,
}

// https://stackoverflow.com/a/68783088/5808621
// https://github.com/microsoft/TypeScript/issues/28357#issuecomment-1493069662
interface Document {
	addEventListener<K extends keyof CustomEventMap>(
		type: K,
		listener: (this: Document, ev: CustomEventMap[K]) => void,
	): void,
	removeEventListener<K extends keyof CustomEventMap>(
		type: K,
		listener: (this: Document, ev: CustomEventMap[K]) => void,
	): void,
	dispatchEvent<K extends keyof CustomEventMap>(ev: CustomEventMap[K]): void,
}

interface BlueBlockerXLMRequest extends XMLHttpRequest {
	_method: string,
	_url: string,
	_requestHeaders: any,
	_startTime: string,
}

interface BlockUser {
	user_id: string,
	user: { name: string, screen_name: string },
	reason: number,
	external_reason?: string,
}

interface BlockedUser {
	user_id: string,
	user: { name: string, screen_name: string },
	reason: number,
	external_reason?: string,
	state: number,
	time: Date,
}
