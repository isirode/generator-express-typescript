var Generator = require('yeoman-generator');

module.exports = class extends Generator {

  updatingPackageJSON() {
    const pkgJson = {
      license: "SEE LICENSE IN LICENSE",
      main: "dist/main.js",
      scripts: {
        doInstall: "npm install",
        prestart: "enviro",
        start: "ts-node-dev ./src/app.ts",
        prebuild: "rimraf dist",
        build: "tsc",
        test: "jest --config jest.config.js"
      },
      dependencies: {
        "express": "4.18.2",
        "dotenv": "16.2.0"
      },
      devDependencies: {
        "@types/node": "20.1.4",
        "@types/jest": "29.4.0",
        "@types/express": "4.17.17",
        "typescript": "5.0.4",
        "rimraf": "4.1.3",
        "jest": "29.4.2",
        "ts-jest": "29.0.5",
        "ts-mockito": "2.6.1",
        "ts-node-dev": "2.0.0"
      },
    };
    
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
  }

  copyResources() {
    this.fs.copyTpl(
      this.templatePath('src/app.ts'),
      this.destinationPath('src/app.ts'),
      { /*aKey: 'a value'*/ }
    );
    this.fs.copyTpl(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore'),
      { /*aKey: 'a value'*/ }
    );
    this.fs.copyTpl(
      this.templatePath('jest.config.js'),
      this.destinationPath('jest.config.js'),
      { /*aKey: 'a value'*/ }
    );
    // TODO : could support multiple licenses
    this.fs.copyTpl(
      this.templatePath('LICENSE'),
      this.destinationPath('LICENSE'),
      { /*aKey: 'a value'*/ }
    );
    // TODO : add the license at the end of the README
    this.fs.copyTpl(
      this.templatePath('DEVELOPER.md'),
      this.destinationPath('DEVELOPER.md'),
      { /*aKey: 'a value'*/ }
    );
  }

  info() {
    this.log('You can run `npx tsc --init` if you want to initialize the project with the default typescript configuration')
  }
};