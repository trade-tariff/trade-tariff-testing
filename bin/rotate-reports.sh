#!/bin/bash

set -o errexit
set -o nounset

# Function that retrieves the last "reports_to_keep" Git logs for a specific environment workflow
get_git_log_for() {
  local environment=$1

  local reports_to_keep=$2

  git log reports --pretty=format:"%h %ad %s" --date=short --name-only \
    | grep "$environment" \
    | awk "/$environment report for/{if (!seen[\$2]) {print \$1; seen[\$2]=1}}" \
    | head -"$reports_to_keep" \
    | tac
}

# Function that retrieves the last "reports_to_keep" Git logs for multiple environments
get_combined_git_log() {
  local reports_to_keep=$1

  shift
  local environments=("$@")

  for environment in "${environments[@]}"; do
    get_git_log_for "$environment" "$reports_to_keep"
  done
}

# This function creates new commits in the "reports_temp" branch based on the latest version of the files in the "reports" branch.
create_commits_for_latest_reports() {
  local commits=$1

  for commit in $(echo "$commits"); do
    files=$(git log -1 --name-only $commit | grep "docs")

    for file in $files; do
      git checkout reports "$file"
    done

    message=$(git log -1 --pretty=format:"%s" $commit)

    git commit -m "$message"
  done
}

rotate_recent_reports() {
  local commits=$1

  git checkout main
  git checkout -b reports_temp

  create_commits_for_latest_reports "$commits"

  git branch -d reports
  git branch -m reports

  # Push the changes to the remote repository
  # git push -u origin reports
  #
  # git checkout main
}

commits=$(get_combined_git_log 7 "Development" "Staging" "Production")

rotate_recent_reports "$commits"
