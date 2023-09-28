"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const validate_card_number_1 = require("./validate-card-number");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.get("/", (req, res, next) => {
    try {
        res.send("index.html");
    }
    catch (error) {
        next(error);
    }
});
app.post('/verify-credit-card-number', (req, res) => {
    res.send({ cardIsValid: (0, validate_card_number_1.validateCardNumber)(req.body.cardNumber) });
});
app.listen(3001, () => {
    console.log("App listening on port 3001");
});
