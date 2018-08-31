module.exports = (baseConfig, env, defaultConfig) => {
	defaultConfig.externals = {
	        'cheerio': 'window',
	        'react/addons': true, // important!!
	        'react/lib/ExecutionEnvironment': true,
	        'react/lib/ReactContext': true
     };

     return defaultConfig;
}