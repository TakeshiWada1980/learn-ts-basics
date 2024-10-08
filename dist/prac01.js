"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date2str_1 = require("./utils/date2str");
const deadline = new Date(2024, 10, 2, 11, 45);
const cratedAt = new Date(); // 引数なしで現在日時を取得
let str = `期限 ${(0, date2str_1.date2str)(deadline)} (登録日 ${(0, date2str_1.date2str)(cratedAt)})`;
console.log(str);
