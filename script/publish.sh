#!/bin/sh

set -e

# pnpm i --frozen-lockfile

# pnpm build

cd ../dist/spicomps
# npm publish --provenance
npm publish
cd -


echo "✅ Publish completed"
