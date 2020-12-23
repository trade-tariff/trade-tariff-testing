#!/usr/bin/env bash

[[ "$TRACE" ]] && set -o xtrace
set -o errexit
set -o nounset
set -o pipefail
set -o noclobber

BASE_URL="https://dev.trade-tariff.service.gov.uk"
COMM_CODES="7202118000 0201100021 0406103010 8518400010 8708701080 1905319100 0702000007 2710124900 8406810000 2402100000 1704903000 1704907100 2206001000"

function download_api() {
        SERVICE=$1
        VERSION=$2

        if [ "$SERVICE" = "default" ]; then
                SERVICE_PREFIX=""
        else
                SERVICE_PREFIX="/$SERVICE"
        fi

        if [ "$VERSION" = "v1" ]; then
                COMMODITY_PATH="commodities"
        else
                COMMODITY_PATH="api/v2/commodities"
        fi

        for COMM_CODE in $COMM_CODES; do
                local URL="${BASE_URL}${SERVICE_PREFIX}/${COMMODITY_PATH}/${COMM_CODE}.json"
                local DIRECTORY="cypress/Data/${SERVICE}/${VERSION}/"
                local FILENAME="cypress/Data/${SERVICE}/${VERSION}/${COMM_CODE}-$(date +%F).json"

                mkdir -p $DIRECTORY
                echo "Downloading $VERSION $SERVICE $COMM_CODE..."
                curl -s $URL -o $FILENAME
        done
}

download_api "default" "v1"
download_api "default" "v2"
download_api "xi" "v1"
download_api "xi" "v2"
download_api "uk" "v1"
download_api "uk" "v2"
