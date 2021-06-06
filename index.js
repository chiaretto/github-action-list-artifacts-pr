const core = require('@actions/core');
const github = require('@actions/github');

// Toolkit docs: https://github.com/actions/toolkit
async function run() {
  try {

    const inputs = {
      token: core.getInput('github-token', {required: true})
    };

    console.log(github)

    if (response.status !== 200) {
      core.error('There was an issue while trying to update the pull-request.');
    }
  } catch (error) {
    core.error(error);
    core.setFailed(error.message);
  }
}

run()
