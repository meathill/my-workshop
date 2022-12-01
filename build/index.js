#!/usr/bin/env node

const {readdir, writeFile} = require('fs/promises');
const {resolve} = require('path');
const {promisify} = require('util');
const exec = promisify(require('child_process').exec);

(async () => {
  const root = resolve(__dirname, '../');
  const files = await readdir(root, {
    withFileTypes: true,
  });
  const redirect = [];
  for (const file of files) {
    // use `_xxx` as draft, should not be published
    if (!file.isFile() || !file.name.endsWith('.md') || file.name.startsWith('_') || file.name.startsWith('README')) {
      continue;
    }

    // publish slide with `slidev` command
    console.log('publishing', file.name);
    const to = file.name.replace(/\.md$/, '');
    const cmd = `slidev build ${file.name} -o dist/${to} --base /my-workshop/${to}/`;
    redirect.push(to);
    console.log('cmd:', cmd);
    const {stdout, stderr} = await exec(cmd);
    if (stderr) {
      console.error(stderr);
    }
    console.log(stdout);
    console.log('published', file.name);
  }

  // write redirect file
  const redirectFile = redirect.map((to) => `/my-workshop/${to}/*    /my-workshop/${to}/index.html    200`).join('\n');
  await writeFile(resolve(root, 'dist/_redirects'), redirectFile, 'utf8');
})();
