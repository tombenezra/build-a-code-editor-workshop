import * as monaco from 'monaco-editor';

const container = document.getElementById('root');

monaco.editor.create(container, {
	value: 'hello world!!!',
	language: 'typescript'
});