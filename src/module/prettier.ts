import { Command } from "commander";
// import chalk from "chalk";
// import ora from "ora";
// import download from 'download-git-repo'
import { downGit } from "../utils/downGit.js";

const prettier = (cmd: Command) => {
	cmd.command('prettier').description('生成prettier配置文件').action(async()=>{
       await downGit('MBlee/mbb-cfg-prettier','./')
	})
};

export { prettier };
