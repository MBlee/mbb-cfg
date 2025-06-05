import chalk from 'chalk';
const help = (cmd) => {
    cmd
        .command('help')
        .description('mbb-cfg命令')
        .action(() => {
        console.log(chalk.cyan(`
			参数列表：
				prettier
				eslint
				ts
				babel
				git
				vscode
		`));
    });
};
export { help };
