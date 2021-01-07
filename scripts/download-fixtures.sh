#!/usr/bin/env bash

[[ "$TRACE" ]] && set -o xtrace
set -o errexit
set -o nounset
set -o pipefail
set -o noclobber


BASE_URL="https://staging.trade-tariff.service.gov.uk"
COMM_CODES="7202118000 0201100021 0406103010 8518400010 8708701080 6907220000 1905319100 0702000007 2203001000 8406810000 2402100000 1704903000 1704907100 2206001000"

# This script enables a user to download fixture data for the commodities referenced in the COMM_CODES variables below
# You can set the BASE_URL variable to download the fixtures from a specified trade-tariff backend
# Currently the script is configured to enable downloading both V1 and V2 api json payloads.

# If we add new apis we will need to extend this script.

# You can invoke the script with a date and it will download commodity information for that specified date:
# $ script/download-fixtures.sh 2021-01-01

# Or you can invoke the script without specifying a date and it will download today's commodities
# $ script/download-fixtures.sh


if [ $# -ge 1 ]; then
        DATE="$1"
        QUERY_PARAMS="?as_of=${DATE}"
else
        DATE=$(date +%F)
        QUERY_PARAMS=""
fi

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
                local URL="${BASE_URL}${SERVICE_PREFIX}/${COMMODITY_PATH}/${COMM_CODE}.json${QUERY_PARAMS}"
                local DIRECTORY="cypress/Data/${SERVICE}/${VERSION}/"
                local FILENAME="cypress/Data/${SERVICE}/${VERSION}/${COMM_CODE}-${DATE}.json"

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
