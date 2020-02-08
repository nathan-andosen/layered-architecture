
/**
 * Check if an object is not undefined and not null
 *
 * @param {*} val
 * @returns {boolean}
 */
export const isSet = (val: any): boolean => {
  return (typeof val !== 'undefined' && val !== null);
};


/**
 * Check if email is valid
 *
 * @param {string} email
 * @returns {boolean}
 */
export const isEmail = (email: string): boolean => {
  if (!isSet(email)) return false;
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

