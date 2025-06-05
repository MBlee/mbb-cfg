#!/usr/bin/env node

import { Command } from 'commander';
// import inquirer from 'inquirer'
// import ora from 'ora'
import chalk from 'chalk';
import clipboard from 'clipboardy';

import { prettier } from './module/prettier.js';
import { ts } from './module/ts.js';
import { eslint } from './module/eslint.js';
import { git } from './module/git.js';
import { vscode } from './module/vscode.js';
import { babel } from './module/babel.js';

interface TCMD extends Command {
  useCmd?: (cmd: any) => void;
}
const cmd: TCMD = new Command();
cmd.useCmd = function (cmd) {
  cmd && cmd(this);
};
cmd.version('1.0.0');

/* 命令行模块 */
cmd.useCmd(prettier);
cmd.useCmd(ts);
cmd.useCmd(eslint);
cmd.useCmd(git);
cmd.useCmd(vscode);
cmd.useCmd(babel);

cmd.parse();
