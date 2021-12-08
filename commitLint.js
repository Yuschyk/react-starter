module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feature', 'fix', 'docs', 'style', 'refactor', 'test', 'revert', 'perf', 'ci', 'build', 'chore'],
    ],
    'header-max-length': [0],
    'subject-case': [0],
    'subject-full-stop': [0],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*)(?:\((.*)\))?: (RPE-\d*) ([\w\s].*)/,
      headerCorrespondence: ['type', 'scope', 'ticket', 'subject'],
    },
  },
};
