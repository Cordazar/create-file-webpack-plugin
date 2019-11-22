'use strict';

const write = require('write');
const path = require('path');

module.exports = class CreateFilePlugin {
  constructor(options) {
    if (!options) {
      throw new Error(`Please provide 'options' for the CreateFilePlugin config`);
    }

    const missingOptions = [];

    if (options.filePath == null) missingOptions.push('filePath');
    if (options.fileName == null) missingOptions.push('fileName');
    if (options.content == null) missingOptions.push('content');

    if (missingOptions.length)
      throw new Error(
        `Please provide the following option${
          missingOptions.length > 1 ? 's' : ''
        } in the CreateFilePlugin config: ${missingOptions.join(', ')}`
      );

    this.options = options;
  }

  _createFile({ filePath, fileName, content }, compilation) {
    const fullPath = path.join(filePath, fileName);
    const contentData = typeof content === 'function' ? content({ filePath, fileName, compilation }) : content;
    write.sync(fullPath, contentData);
  }

  apply(compiler) {
    compiler.hooks.emit.tapPromise('CreateFilePlugin', async compilation => {
      this._createFile(this.options, compilation);
    });
  }
};
