"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorMessages;
(function (ErrorMessages) {
    ErrorMessages["INVALID_ID_ERROR"] = "Id must have 24 valid hexadecimal characters";
    ErrorMessages["PAYLOAD_INCORRECT"] = "Data received is not the expected shape";
    ErrorMessages["OBJECT_NOT_EXIST"] = "Requested ID not exist on database";
    ErrorMessages["UNAUTHORIZED"] = "Token is wrong or missing";
    ErrorMessages["NO_USER"] = "User not found!";
    ErrorMessages["WRONG_PASSWORD"] = "Password is incorrect";
})(ErrorMessages || (ErrorMessages = {}));
exports.default = ErrorMessages;
