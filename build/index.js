#!/usr/bin/env node

const {existsSync} = require('fs');
const {readdir} = require('fs/promises');
const {resolve} = require('path');
const {promisify} = require('util');
const exec = promisify(require('child_process').exec);

(async () => {
  const slides = resolve(__dirname, '../slides');
  const root = resolve(__dirname, '../');
  const files = await readdir(slides, {
    withFileTypes: true,
  });
  for (const file of files) {
    if (file.isFile()) {
      continue;
    }

    // drafts should not be published
    if (existsSync(`${slides}/${file.name}/.draft`)) {
      console.log('draft', file.name);
      continue;
    }

    // publish slide with `slidev` command
    console.log('publishing', file.name);
    const cmd = `slidev build ${slides}/${file.name}/index.md -o ${root}/dist/${file.name} --base /${file.name}/`;
    console.log('cmd:', cmd);
    const {stdout, stderr} = await exec(cmd);
    if (stderr) {
      console.error(stderr);
    }
    console.log(stdout);
    console.log('published', file.name);
  }
})();
