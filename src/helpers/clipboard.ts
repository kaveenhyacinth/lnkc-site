/**
 * copyTextToClipboard fn uses clipboard API if available.
 * However some workers don't support it. Therefore deprecated execCommand is also implemented
 * @param text String to copy
 * @returns Promise<boolean | void>
 */
export const copyTextToClipboard = async (text: string) => {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand("copy", true, text);
  }
};
