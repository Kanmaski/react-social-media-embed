/**
 * Specifies a frame's [browser APIs](https://developer.mozilla.org/en-US/docs/Web/API),
 * such as `window` and `document`.
 */
export interface Frame {
    window?: Window;
    document?: Document;
}
/**
 * Use the provided Frame, or fall back on the default one (if available) if none is provided.
 *
 * This hook is useful in preventing SSR issues when `window` and `document`
 * aren't defined.
 *
 * @param frame The Frame to use, if any.
 * @returns A Frame object containing references to `window` and `document`.
 */
export declare const useFrame: (frame?: Frame) => any;
