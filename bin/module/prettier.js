import chalk from "chalk";
import ora from "ora";
import download from 'download-git-repo';
const prettier = (cmd) => {
    cmd.command('prettier').description('生成prettier配置文件').action(() => {
        const startTime = process.hrtime();
        const spinner = ora().start();
        spinner.text = chalk.cyan('开始下载prettier配置文件');
        download('MBlee/mbb-cfg-prettier', './', { clone: false }, err => {
            console.log(`\nMBlee/mbb-cfg-prettier 下载${err ? '失败' : '成功'}`);
            !err && spinner.succeed(chalk.green('prettier配置文件已下载'));
            const usedTime = process.hrtime(startTime)[0].toFixed();
            console.log(chalk.yellowBright(`用时：${usedTime}秒`));
        });
    });
};
export { prettier };
