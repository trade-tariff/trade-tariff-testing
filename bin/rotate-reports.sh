#!/bin/bash

set -o errexit
set -o nounset

# Function that retrieves the last "reports_to_keep" Git logs for a specific environment workflow
get_git_log_for() {
  # Store the first argument as the environment name
  local environment=$1

  # Store the second argument as the number of reports to keep
  local reports_to_keep=$2

  # Get the Git logs for the reports branch and format the output
  # - show only the hash, date, and commit message
  # - use a short date format
  # - show only the names of the files changed in each commit
  git log reports --pretty=format:"%h %ad %s" --date=short --name-only \
    # Filter the logs to show only those that contain the environment name
    | grep "$environment" \
    # Filter the logs to show only the latest report for each date
    | awk "/$environment report for/{if (!seen[\$2]) {print \$1; seen[\$2]=1}}" \
    # Show only the first "reports_to_keep" logs
    | head -"$reports_to_keep" \
    # Reverse the order of the logs so that the most recent is first
    | tac
}

# Function that retrieves the last "reports_to_keep" Git logs for multiple environments
get_combined_git_log() {
  # Store the first argument as the number of reports to keep
  local reports_to_keep=$1

  # Shift the positional parameters to the left, storing the remaining arguments as an array of environment names
  shift
  local environments=("$@")

  # Loop through each environment
  for environment in "${environments[@]}"; do
    # Call the `get_git_log_for` function to retrieve the logs for this environment
    get_git_log_for "$environment" "$reports_to_keep"
  done
}

# This function creates new commits in the "reports_temp" branch based on the latest version of the files in the "reports" branch.
create_commits_for_latest_reports() {
  local commits=$1

  # loop through each commit hash stored in the "commits" variable
  for commit in $(echo "$commits"); do
    # get the list of files that were changed in this commit
    files=$(git log -1 --name-only $commit | grep "docs")

    # loop through each file and checkout the version from the reports branch
    for file in $files; do
      git checkout reports "$file"
    done

    # get the commit message for this commit
    message=$(git log -1 --pretty=format:"%s" $commit)

    # create a new commit in the reports_temp branch with the same message as the original commit
    git commit -m "$message"
  done
}

rotate_recent_reports() {
  local commits=$1

  # Checkout the main branch
  git checkout main

  # Create a new branch based on the main branch
  git checkout -b reports_temp

  create_commits_for_latest_reports "$commits"

  # Delete the reports branch
  git branch -d reports

  # Rename the reports_temp branch to reports
  git branch -m reports

  # Push the changes to the remote repository
  # git push -u origin reports
  #
  # git checkout main
}

commits=$(get_combined_git_log 3 "Development" "Staging" "Production")

rotate_recent_reports "$commits"
