const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");
const path = require("path");

module.exports = config => {
  // console.log(JSON.stringify(config));
  // console.log(config.resolve.plugins);
  // console.log(ModuleScopePlugin);
  // const scopePluginIndex = config.resolve.plugins.findIndex(
  //   ({ constructor }) => constructor && constructor.name === "ModuleScopePlugin"
  // );

  // config.resolve.plugins.splice(scopePluginIndex, 1);
  //   // console.log(JSON.stringify(config));
  // config.resolve.modules.push(
  //   '/Users/nathananderson/Sites/repos_github/layered-architecture/'
  // );


  config.resolve.plugins.forEach(plugin => {
    if (plugin instanceof ModuleScopePlugin) {
      plugin.allowedFiles.add(path.resolve("./config.json"));
      plugin.appSrcs.push(path.resolve("../domain"));
      plugin.appSrcs.push(path.resolve("../app-services"));
    }
  });

  // config.module.rules.push({
  //   test: /\.ts(x?)$/,
  //   exclude: /node_modules/,
  //   use: [
  //     {
  //       loader: "ts-loader"
  //     }
  //   ]
  // });

  // config.module.rules.push({
  //   test: /\.ts|\.tsx$/,
  //   use: 'ts-loader',
  //   include: __dirname
  // });

  // console.log(config.resolve.plugins);

    // obj.fail = 1;
  return config;
};