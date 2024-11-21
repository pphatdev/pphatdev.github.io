export const minify = (string) => {
    if (!string) return ''

    return String(string)
        .replace(/\s+/g, ' ')         // Convert multiple spaces to single space
        .replace(/>\s+</g, '><')      // Remove spaces between HTML tags
        .replace(/\n/g, '')           // Remove newlines
        .replace(/\r/g, '')           // Remove carriage returns
        .replace(/\t/g, '')           // Remove tabs
        .trim()                       // Remove leading/trailing whitespace
}
