# create-file-webpack-plugin

> [Webpack](https://webpack.js.org) plugin for creating a file with static or dynamic content


## Install

```
$ npm install create-file-webpack-plugin
```


## Usage

```js
const CreateFilePlugin = require('create-file-webpack-plugin');

module.exports = {
	// …
	plugins: [
		new CreateFilePlugin('file.js', `
			console.log('This is a dynamically created file');
		`)
	]
};
```


## API

### CreateFilePlugin({filePath, fileName, content})

#### filePath

Type: `string`

Relative path to where the file should be created

#### fileName

Type: `string`

Name of file to be created

#### content

Type: `string | (({filePath, fileName, compilation}) => string)`

File content or a function that returns the file content.

If a function, it will receive an object with the following data `filePath`, `fileName` and [`compilation` instance](https://webpack.js.org/api/compilation/).


## License

MIT © [Ricard Fredin](https://github.com/cordazar)