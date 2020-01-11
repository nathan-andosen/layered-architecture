const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");
const path = require("path");

module.exports = config => {
  
  // console.log(config.resolve.plugins);
  // console.log(ModuleScopePlugin);

  // const scopePluginIndex = config.resolve.plugins.findIndex(
  //   ({ constructor }) => constructor && constructor.name === "ModuleScopePlugin"
  // );
  // config.resolve.plugins.splice(scopePluginIndex, 1);

  // config.resolve.modules.push(
  //   '/Users/nathananderson/Sites/repos_github/layered-architecture/'
  // );


  // config.resolve.plugins.forEach(plugin => {
  //   console.log(plugin.constructor.name);
  //   if (plugin instanceof ModuleScopePlugin) {
  //     plugin.allowedFiles.add(path.resolve("./config.json"));
  //     plugin.appSrcs.push(path.resolve("../domain"));
  //     plugin.appSrcs.push(path.resolve("../app-services"));

  //     plugin.appSrcs = [path.resolve("../")];
  //     // console.log(plugin);
  //   }
  // });


  // config.module.rules.forEach((rule) => {
    
  //   if (rule['oneOf']) {
  //     rule.oneOf.forEach((subRule) => {
  //       if (subRule.loader && subRule.loader.indexOf('babel-loader') > -1
  //       && subRule.include) {
  //         console.log('1111111-----1111111');
  //         subRule.include = path.resolve("../");
  //         console.log(subRule);
  //       }
        
  //     });
  //   }
  // });

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
  // console.log(JSON.stringify(config));
    // obj.fail = 1;
  return config;
};