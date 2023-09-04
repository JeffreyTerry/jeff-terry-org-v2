#!/bin/bash

set -e

npm test
npm run deploy-after-testing
