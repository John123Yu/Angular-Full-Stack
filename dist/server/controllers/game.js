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
var game_1 = require("../models/game");
var base_1 = require("./base");
var GameCtrl = /** @class */ (function (_super) {
    __extends(GameCtrl, _super);
    function GameCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = game_1.default;
        _this.initiate = function (req, res) {
            var userList = req.body.userList;
            var ogTitle = req.body.title;
            var tournament = req.body._id;
            var userListLen = userList.length;
            var possibleSizes = {
                traditional: [2, 4, 8, 16, 32],
            };
            var statusCode = 20 + userListLen.toString();
            for (var i = 0; i < userListLen; i += 2) {
                var count = i;
                var user1 = userList[i];
                var user2 = userList[i + 1];
                var title = ogTitle + count;
                var game_id = tournament + count;
                console.log(statusCode);
                _this.insert({
                    game_id: game_id, user1: user1, user2: user2, tournament: tournament,
                }, res.sendStatus(statusCode));
            }
        };
        return _this;
    }
    return GameCtrl;
}(base_1.default));
exports.default = GameCtrl;
//# sourceMappingURL=game.js.map