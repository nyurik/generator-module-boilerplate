const chalk = require(`chalk`);

module.exports = ({author, github, name}) => {

  console.log();

  console.log(`Hey`, author, `,`);

  console.log(`Created module`, chalk.yellow(`'${name}'`), `with generator-module-boilerplate`);
  console.log();

  console.log(`use`, chalk.cyan(`npm run build:watch`), `/`, chalk.cyan(`npm run test:watch`));
  console.log(`for development mode`);

  console.log();

  console.log(`use`, chalk.cyan(`npm run build`));
  console.log(`for production builds (ES, CommonJS, UMD)`);

  console.log();

  console.log(`use`, chalk.cyan(`npm run release`), chalk.cyan(`'major' | 'premajor' | 'patch' | 'minor'`));
  console.log(`to release a version to npm ( via https://github.com/webpro/release-it )`);

  console.log(`everything is set up to use https://github.com/${author}/${name}`);

  console.log();


};
