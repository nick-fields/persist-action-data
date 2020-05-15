module.exports = {
  name: 'Persist Data Between Jobs',
  description: {
    short: 'Allows data to be shared between jobs and accessed via env variables and step output',
  },
  inputs: [
    {
      id: 'data',
      description: {
        short: 'The data to persist from job',
      },
      required: false,
    },
    {
      id: 'variable',
      description: {
        short: 'The variable to be used to access data in other jobs',
      },
      required: false,
    },
    {
      id: 'retrieve_variables',
      description: {
        short: 'Comma delimited list of variables to load into job',
      },
      required: false,
    },
  ],
  runs: {
    using: 'node12',
    main: 'out/index.js',
  },
  usage: {
    examples: [
      {
        title: 'Example storing data',
        codeLanguage: 'yaml',
        codeBlock: `
- uses: nick-invision/persist-action-data@v1
  with:
    data: \${{ steps.some-step.output.some-output }}
    variable: SOME_STEP_OUTPUT
`.trim(),
      },
      {
        title: 'Example using data from another job via env variable',
        codeLanguage: 'yaml',
        codeBlock: `
- uses: nick-invision/persist-action-data@v1
  with:
    data: \${{ steps.some-step.output.some-output }}
    retrieve_variables: SOME_STEP_OUTPUT, SOME_OTHER_STEP_OUTPUT
- run: echo $SOME_STEP_OUTPUT
`.trim(),
      },
      {
        title: 'Example using data from another job via output',
        codeLanguage: 'yaml',
        codeBlock: `
- uses: nick-invision/persist-action-data@v1
  id: global-data
  with:
    data: \${{ steps.some-step.output.some-output }}
    retrieve_variables: SOME_STEP_OUTPUT, SOME_OTHER_STEP_OUTPUT
- run: echo $\{\{ steps.global-data.outputs.SOME_STEP_OUTPUT \}\}
`.trim(),
      },
    ],
  },
  branding: {
    color: 'green',
    icon: 'save',
  },
  badges: [
    {
      displayedText: 'License: MIT',
      badgeUrl: 'https://img.shields.io/badge/license-MIT-brightgreen.svg',
      link: 'https://opensource.org/licenses/MIT',
    },
  ],
};
