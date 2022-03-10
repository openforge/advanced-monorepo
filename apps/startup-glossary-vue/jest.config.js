module.exports = {
    displayName: 'startup-glossary-vue',
    preset: '../../jest.preset.js',
    transform: {
        '^.+\\.vue$': 'vue3-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
    coverageDirectory: '../../coverage/apps/startup-glossary-vue',
    snapshotSerializers: ['jest-serializer-vue'],
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.spec.json',
            babelConfig: '<rootDir>/babel.config.js',
        },
        'vue-jest': {
            tsConfig: 'apps/startup-glossary-vue/tsconfig.spec.json',
            babelConfig: 'apps/startup-glossary-vue/babel.config.js',
        },
    },
};
