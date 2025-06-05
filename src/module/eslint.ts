import { Command } from 'commander';
// import chalk from "chalk";
// import ora from "ora";
// import download from 'download-git-repo'
import { downGit } from '../utils/downGit.js';
const eslint = (cmd: Command) => {
  cmd
    .command('eslint')
    .description('生成eslint配置文件')
    .action(async () => {
      await downGit('MBlee/mbb-cfg-eslint', './');
    });
};

export { eslint };
