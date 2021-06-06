const core = require('@actions/core');
const github = require('@actions/github');

// Toolkit docs: https://github.com/actions/toolkit
async function run() {
  try {

    const inputs = {
      token: core.getInput('github-token', {required: true})
    };

    console.log(github)

    console.log('sender')
    console.log(github.context.payload.sender)

    console.log('workflow')
    console.log(github.context.payload.workflow)

    console.log('workflow_run')
    console.log(github.context.payload.workflow_run)

  } catch (error) {
    core.error(error);
    core.setFailed(error.message);
  }
}

run()
