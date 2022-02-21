### Build a Code Editor Workshop Guide:

This workshop will teach you how to build a code editor using [monaco editor](https://microsoft.github.io/monaco-editor/), an open source library maintained by Microsoft and is the core engine that powers VS Code
 
 By the end of this workshop you'll have a better understanding of how modern code editors work behind the scene and make your own customized code editor

### Prerequisites
> **Basic familiarity with the following concepts**
 1. [Online IDE ecosystem](https://www.dlvhdr.me/posts/online-ides-ecosystem)
 1. [Working with web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
 2. [Language server protocol](https://microsoft.github.io/language-server-protocol/) (because why not)

### Getting Started
  1. Star this repository so I know you have taken this workshop! 😄
  2. Use this repository as a template ("Use This Template" should appear in the main repository page)
  3. Clone the generated repository to your local machine
  4. cd and run `yarn && yarn start`

### Tasks
> **Complete as many tasks as possible**
  - [ ] Assign a default text and change the editor language to `typescript`
  - [ ] Pimp your editor with some custom styles and behavior (full set of options [here](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.IStandaloneEditorConstructionOptions.html))
  - [ ] Create a new customized theme and replace the built-in one
  - [ ] Add an action that duplicates the current line (attach the shortkey <kbd>⌘</kbd>+<kbd>SHIFT</kbd>+<kbd>D</kbd>)
  - [ ] Support the following in code completion :
     * Snippet for `superduperlog` that will execute
       ```js
       console.log("==========");
       console.log();
       console.log("==========");
       ```
       and set the cursor in the middle log command
     * add the global variable `$` with different apis
  - [ ] Load external type definitions into the code editor (link random `d.ts` here)
  - [ ] Multiple file support (don't go too hard on file navigation, simply have two or more files and allow swapping between them somehow)
  - [ ] Integrate some more language features (code lens, highlights or similar, full list of APIs can be found [here](https://microsoft.github.io/monaco-editor/api/modules/monaco.languages.html))
  - [ ]  Got that far? 😮 here are additional ideas to experiment with:
    - Create an additional web worker that will handle code styling (eslint for instance, but you can go with any code analysis tool you love)
    - Allow user to customized their own theme
    - Go to definition
    - Anything which is cool
