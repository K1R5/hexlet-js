import _ from 'lodash';

export const get = (obj, key, defaultValue = 'defaultValue') => {
    if( _.has(obj, key) ){
        return obj[key];
    }
    else {
        return defaultValue;
    }
}