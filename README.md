# List of artifacts from another workflow

This action will print and set-output all artifacts from another workflow
## Inputs

### `github-token`

## Example usage

```
name: List Artifact
on:
  workflow_run:
    workflows: ["Generate Artifacts"]
    types: [completed]

jobs:
  list-artifacts:
    runs-on: ubuntu-latest
    steps:
      - name: List artifacts
        id: list-artifacts
        uses: chiaretto/github-action-list-artifacts-pr@1.0.0
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"

      - name: Print variables
        run: |
          echo artifact-name: ${{ steps.list-artifacts.outputs.artifact-name }}
```
