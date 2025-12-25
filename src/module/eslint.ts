import { Command } from 'commander';
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
