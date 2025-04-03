#!/bin/sh

# Decrypt the file

# --batch to prevent interactive command
# --yes to assume "yes" for questions
gpg --quiet --batch --yes --decrypt --passphrase="$SECRETS_PASSPHRASE" \
--output $HOME/work/web-tests/web-tests/secrets/secret.json secrets/secret.json.gpg

echo Decrypted file should appear in the following directory as secrets.json
echo ls $HOME/work/web-tests/web-tests/secrets/
ls $HOME/work/web-tests/web-tests/secrets/
