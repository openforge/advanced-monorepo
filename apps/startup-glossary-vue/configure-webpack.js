/*
 * Modify the webpack config by exporting an Object or Function.
 *
 * If the value is an Object, it will be merged into the final
 * config using `webpack-merge`.
 *
 * If the value is a function, it will receive the resolved config
 * as the argument. The function can either mutate the config and
 * return nothing, OR return a cloned or merged version of the config.
 *
 * https://cli.vuejs.org/config/#configurewebpack
 */
module.exports = config => {
    const vueRule = config.module.rules.find(rule => rule.test.exec('.vue'));
    for (const use of vueRule.use) {
        if (use.loader.includes('vue-loader')) {
            const vueLoader = use;
            if (vueLoader.options.compilerOptions) {
                vueLoader.options.compilerOptions.isCustomElement = tag => tag.startsWith('glossary-') || tag.startsWith('category-');
            } else {
                vueLoader.options.compilerOptions = {};
                vueLoader.options.compilerOptions.isCustomElement = tag => tag.startsWith('glossary-') || tag.startsWith('category-');
            }
        }
    }
};
