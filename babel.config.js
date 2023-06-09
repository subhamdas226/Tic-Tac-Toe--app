module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins : [
      ["module-resolver", {
        alias  : {
          "@screens" : "./src/screens",
          "@components" : "./src/components",
          "@config" : "./src/config",
          "@contexts" : "./src/contexts",
          "@utils" : "./src/utils",
          "@assets" : "./assets",
        }
      }]
    ]
  };
};
