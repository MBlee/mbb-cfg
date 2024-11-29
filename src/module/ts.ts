import { Command } from "commander";
// import chalk from "chalk";
// import ora from "ora";
// import download from 'download-git-repo'
import { downGit } from "../utils/downGit.js";
const ts = (cmd: Command) => {
	cmd.command('ts').description('生成ts配置文件').action(async()=>{
       await downGit('MBlee/mbb-cfg-ts','./')
	})
};

export { ts };
