#!/usr/bin/env bash

[[ "$TRACE" ]] && set -o xtrace
set -o errexit
set -o nounset
set -o pipefail
set -o noclobber

yarn run dev-tariff-duty-calculator-smoketests
yarn run dev-tariff-frontend-smoketests

# TODO: backend/frontend smoketests are the same currently. When we migrate to having smoketests defined separately we can run both sets of smoketests

# yarn run dev-tariff-backend-smoketests
