import { Command } from 'commander';
// import chalk from "chalk";
// import ora from "ora";
// import download from 'download-git-repo'
import { downGit } from '../utils/downGit.js';
const git = (cmd: Command) => {
  cmd
    .command('git')
    .description('生成git配置文件')
    .action(async () => {
      await downGit('MBlee/mbb-cfg-git', './');
    });
};

export { git };
