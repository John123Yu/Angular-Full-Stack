"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var tournament_1 = require("../models/tournament");
var base_1 = require("./base");
var TournamentCtrl = /** @class */ (function (_super) {
    __extends(TournamentCtrl, _super);
    function TournamentCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = tournament_1.default;
        _this.addUser = function (req, res) {
            _this.model.update({ _id: req.params.id }, { $push: { userList: req.body.user } }, function (err) {
                if (err) {
                    return console.error(err);
                }
                res.json({ ok: 'ok' });
            });
        };
        return _this;
    }
    return TournamentCtrl;
}(base_1.default));
exports.default = TournamentCtrl;
//# sourceMappingURL=tournament.js.map