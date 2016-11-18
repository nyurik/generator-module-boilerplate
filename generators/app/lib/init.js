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
  console.log(`for production builds (ES2015, CommonJS, UMD)`);

  console.log();

  console.log(`use`, chalk.cyan(`npm run release (premajor|patch|minor|major)`));

  console.log();

  console.log(`everything is set up to push to https://github.com/${github}/${name}`);

  console.log();


};
