import { Command } from 'commander';
// import chalk from "chalk";
import { downGit } from '../utils/downGit.js';
import { babelGits } from '../constants/gitUrl.js';
const babel = (cmd: Command) => {
  cmd
    .command('babel')
    .description('生成babel配置文件')
    .action(async () => {
      await downGit(babelGits.default, './');
    });
};

export { babel };
