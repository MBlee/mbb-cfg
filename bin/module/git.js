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
// import ora from "ora";
// import download from 'download-git-repo'
import { downGit } from '../utils/downGit.js';
const git = (cmd) => {
    cmd
        .command('git')
        .description('生成git配置文件')
        .action(() => __awaiter(void 0, void 0, void 0, function* () {
        yield downGit('MBlee/mbb-cfg-git', './');
    }));
};
export { git };
