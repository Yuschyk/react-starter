module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'jest': true,
    },
    'extends': [
        'airbnb',
        'eslint:recommended',
    ],
    'globals': {
        'it': 'readonly',
        'describe': 'readonly',
        'test': 'readonly',
        'expect': 'readonly',
        'beforeEach': 'readonly',
        'jest': 'readonly',
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
        },
        'ecmaVersion': 2018,
        'sourceType': 'module',
    },
    'plugins': [
        'react',
        'jest',
        'import'
    ],
    'parser': '@babel/eslint-parser',
    'rules': {
        "import/order": [
            "error",
            {
                "groups": ["builtin", "external", "internal"],
                "pathGroups": [
                    {
                        "pattern": "react",
                        "group": "external",
                        "position": "before"
                    }
                ],
                "pathGroupsExcludedImportTypes": ["react"],
                "newlines-between": "always",
                "alphabetize": {
                    "order": "asc",
                    "caseInsensitive": true
                }
            }
        ],
        'react/prop-types': 0,
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
        'no-var': 'error',
        'semi': 'error',
        'quotes': ['error', 'single'],
        'no-multi-spaces': 'error',
        'indent': ['error', 2, { 'SwitchCase': 1 }],
        'no-multiple-empty-lines': ['error', { 'max': 2 }],
        'prefer-const': 'error',
        'import/newline-after-import': ['error', { 'count': 2 }],
        'max-len': ['error', { 'code': 130 }],
        'no-console': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/forbid-prop-types': 'off',
        'no-plusplus': 'off',
        'react/jsx-filename-extension': ['warn', { 'extensions': ['.js', '.jsx'] }],
        'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
        'react/button-has-type': 'off',
        'linebreak-style': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/label-has-associated-control': 'warn',
        'camelcase': 'error',
        'react/jsx-indent': 'warn',
        'no-use-before-define': 'off',
        'object-curly-newline': 'off',
        'template-curly-spacing': 'off',
        'import/no-unresolved': 'off',
        'import/no-cycle': 'off',
        'no-param-reassign': [2, { 'props': false }],
        'eqeqeq': [1, 'smart'],
        'no-shadow': 'off',
        'no-underscore-dangle': 'off',
        'no-nested-ternary': 'off',
        'consistent-return': 'off',
    },
};
