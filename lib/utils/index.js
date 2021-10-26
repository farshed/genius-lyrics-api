const checkOptions = (options) => {
    if (!("apiKey" in options) || !options.apiKey) {
        throw '"apiKey" property is missing from options';
    } else if (!("title" in options)) {
        throw '"title" property is missing from options';
    } else if (!("artist" in options)) {
        throw '"artist" property is missing from options';
    }
};

const getTitle = (title, artist) => {
    return `${title} ${artist}`
        .toLowerCase()
        .replace(/ *\([^)]*\) */g, "")
        .replace(/ *\[[^\]]*]/, "")
        .replace(/feat.|ft./g, "")
        .replace(/\s+/g, " ")
        .trim();
};

module.exports = { checkOptions, getTitle };
