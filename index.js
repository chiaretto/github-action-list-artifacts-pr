const core = require('@actions/core');
const github = require('@actions/github');

// Toolkit docs: https://github.com/actions/toolkit
async function run() {
  try {

    const inputs = {
      token: core.getInput('github-token', {required: true})
    };

    const client = new github.GitHub(inputs.token);
    const run_id = github.context.payload.workflow_run.id
    const lisWorkflowsArtifacts = await client.actions.listWorkflowRunArtifacts({
        owner: github.context.repo.owner,
        repo: github.context.repo.repo,
        run_id: run_id
    });

    const suite_id = github.context.payload.workflow_run.check_suite_id
    const owner = github.context.repo.owner
    const repo = github.context.repo.repo
    const artifacts = lisWorkflowsArtifacts.data.artifacts.map((i) => {
      return {
        id: i.id,
        name: i.name,
        suite_id: suite_id,
        url_download: 'https://github.com/'+owner+'/'+repo+'/suites/'+suite_id+'/artifacts/'+i.id
      }
    })

    // Generate outputs
    artifacts.forEach((a) => {
      console.log('::set-output name='+a.name+'::'+a.url_download)
      console.log('set-output name='+a.name+'::'+a.url_download)
    })

  } catch (error) {
    core.error(error);
    core.setFailed(error.message);
  }
}

run()
