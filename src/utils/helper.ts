export const joinWords = (sentence: string, connector = '-') =>
  sentence.split(' ').join(connector);

/**
 * Returns a unique id
 * @returns {String} Unique id format id123..
 */

export const getId = () => `id${Math.random().toString(16).slice(2)}`;
