var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// import chalk from "chalk";
import { downGit } from '../utils/downGit.js';
import { babelGits } from '../constants/gitUrl.js';
const babel = (cmd) => {
    cmd
        .command('babel')
        .description('生成babel配置文件')
        .action(() => __awaiter(void 0, void 0, void 0, function* () {
        yield downGit(babelGits.default, './');
    }));
};
export { babel };
