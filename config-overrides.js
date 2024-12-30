module.exports = function override(config, env) {
    const svgRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
  
    if (svgRule) {
      svgRule.use[0].options.throwIfNamespace = false;
    }
  
    return config;
  };
  