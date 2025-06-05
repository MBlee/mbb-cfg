#!/usr/bin/env node
import { Command } from 'commander';
import { prettier } from './module/prettier.js';
import { ts } from './module/ts.js';
import { eslint } from './module/eslint.js';
import { git } from './module/git.js';
import { vscode } from './module/vscode.js';
import { babel } from './module/babel.js';
const cmd = new Command();
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
