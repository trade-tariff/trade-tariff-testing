#!/bin/sh

if [ -z "${1}" ]; then
  echo "No Pull Request number supplied"
  exit 1
fi

export CYPRESS_SPACE=DEVELOPMENT
export CYPRESS_BASE_URL="https://tariff-frontend-pr${1}.london.cloudapps.digital"

npx cypress open
