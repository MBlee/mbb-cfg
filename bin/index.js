#!/usr/bin/env node
import { Command } from 'commander';
import { help } from './module/help.js';
import { prettier } from './module/prettier.js';
import { ts } from './module/ts.js';
import { git } from './module/git.js';
import { vscode } from './module/vscode.js';
import { babel } from './module/babel.js';
const cmd = new Command();
cmd.useCmd = function (cmd) {
    cmd && cmd(this);
};
cmd.version('1.0.0');
/* 命令行模块 */
cmd.useCmd(help);
cmd.useCmd(prettier);
cmd.useCmd(ts);
cmd.useCmd(git);
cmd.useCmd(vscode);
cmd.useCmd(babel);
cmd.parse();
