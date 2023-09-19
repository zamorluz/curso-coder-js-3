const is_array = (variable) => Array.isArray(variable);
const is_object = (variable) => typeof variable === 'object';
const in_array = (needle, haystack) => is_array(haystack) ? $.inArray(needle, haystack) >= 0 : false;
