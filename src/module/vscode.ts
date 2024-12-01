import { Command } from 'commander';
// import chalk from "chalk";
// import ora from "ora";
// import download from 'download-git-repo'
import { downGit } from '../utils/downGit.js';
const vscode = (cmd: Command) => {
  cmd
    .command('vscode')
    .description('生成vscode配置文件')
    .action(async () => {
      await downGit('MBlee/mbb-cfg-vscode', './');
    });
};

export { vscode };
