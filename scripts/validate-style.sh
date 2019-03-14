#!/bin/bash
echo "------"
echo "Validating code formatting (npm run prettier)..."
npm run prettier
if [ $? -eq 0 ]; then
  echo "SUCCESS: All code has been formatted correctly."
else
  echo "ERROR: Part of the code is not formatted correctly."
  exit 1
fi

echo "Validing code pattern (npm run lint)..."
npm run lint
if [ $? -eq 0 ]; then
  echo "SUCCESS: lint has paassed."
else
  echo "ERROR: lint has failed."
  exit 1
fi