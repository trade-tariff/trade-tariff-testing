#!/usr/bin/env bash

[[ "$TRACE" ]] && set -o xtrace
set -o errexit
set -o nounset
set -o pipefail
set -o noclobber

function clear_caches() {
  local CACHE_SERVICES="tariff-uk-dev-redis-4x tariff-xi-dev-redis-4x tariff-dev-redis-4x"

  for cache_service in $CACHE_SERVICES; do
    echo "Clearing cache for $cache_service"
    cf conduit "$cache_service" -- redis-cli FLUSHALL >/dev/null
  done
}

clear_caches

npx cypress run --spec "cypress/integration/UK/FE/randomCommCode-UK.spec.js"
