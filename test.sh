#/bin/bash
for i in $(seq 0 100); do
    for j in $(seq 1 11); do
        rand=$(cat /dev/urandom | tr -dc 'a-z0-9' | fold -w $j | head -n 1);
        a=$(./challenge $rand);
        b=$(node ./challenge.js $rand);
        [[ "$a" == "$b" ]] && echo "Equal" || echo "Not equal $a $b";
done; done;
