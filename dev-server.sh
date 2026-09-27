#!/bin/bash
export PATH="$HOME/.local/node/node-v26.7.0-darwin-arm64/bin:$PATH"
cd "$(dirname "$0")"
exec npm run dev -- -p 3800
