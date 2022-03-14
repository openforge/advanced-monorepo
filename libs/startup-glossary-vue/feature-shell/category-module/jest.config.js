module.exports = {
    displayName: 'startup-glossary-vue-category-module',
    preset: '../../../jest.preset.js',
    transform: {
        '^.+\\.vue$': 'vue3-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
    coverageDirectory: '../../../coverage/libs/startup-glossary-vue/category-module',
    snapshotSerializers: ['jest-serializer-vue'],
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.spec.json',
            babelConfig: '<rootDir>/babel.config.js',
        },
        'vue-jest': {
            tsConfig: 'libs/startup-glossary-vue/ategory-module/tsconfig.spec.json',
            babelConfig: 'libs/startup-glossary-vue/category-module/babel.config.js',
        },
    },
};
