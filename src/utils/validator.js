const notEmpty = str => str.replace(/\s+/, "").length;

export const validateText = text => notEmpty(text) && text !== null;
