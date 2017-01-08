var Cache = (function () {

    var _set = function (storeType, key, value) {

        if (!isSupported || !storeType) {
            return false;
        }


        if (value) {

            storeType.setItem(key, value);

        } else {

            _remove(storeType, key);

        }

        return true;
    };

    var _get = function (storeType, key) {

        return storeType.getItem(key);

    };

    var _remove = function (storeType, key) {

        return storeType.removeItem(key);

    };

    var _isSupported = function () {

        return (typeof (Storage) !== "undefined" || sessionStorage && localStorage);
    };
    
    return {
        isSupported: _isSupported,
        session: {
            set: function (key, value) {
                return _set(sessionStorage, key, value);
            },
            get: function (key) {
                return _get(sessionStorage, key);
            },
            remove: function (key) {
                return _remove(sessionStorage, key);
            }
        },
        local: {
            set: function (key, value) {
                return _set(localStorage, key, value);
            },
            get: function (key) {
                return _get(localStorage, key);
            },
            remove: function (key) {
                return _remove(localStorage, key);
            }
        }
    };
})();
