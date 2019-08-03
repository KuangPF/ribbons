var isObject = function (value) {
    var type = typeof value;
    return value !== null && (type === 'object' || type === 'function');
};
var Ribbons = /** @class */ (function () {
    function Ribbons(option) {
        this.config = this.extractConfig(option);
        this.init();
    }
    Ribbons.prototype.init = function () {
        console.log('init');
    };
    Ribbons.prototype.extractConfig = function (option) {
        if (isObject(option)) {
            return Object.assign(this.config, option);
        }
        return option;
    };
    return Ribbons;
}());
//# sourceMappingURL=index.js.map

export default Ribbons;
