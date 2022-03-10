module.exports = {
    displayName: 'features-glossary-home-module-vue',
    preset: '../../../jest.preset.js',
    transform: {
        '^.+\\.vue$': 'vue3-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
    coverageDirectory: '../../../coverage/libs/features/glossary-home-module-vue',
    snapshotSerializers: ['jest-serializer-vue'],
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.spec.json',
            babelConfig: '<rootDir>/babel.config.js',
        },
        'vue-jest': {
            tsConfig: 'libs/features/glossary-home-module-vue/tsconfig.spec.json',
            babelConfig: 'libs/features/glossary-home-module-vue/babel.config.js',
        },
    },
};
