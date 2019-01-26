# picasa

I like the picasa, but it doesn't update any more. So I think I may use electron and emberjs to
create one. :)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd picasa`
* `yarn install`


## Running / Development

* `ember electron`

### Windows

* Install chocolatey or scoop
* Install node version managment windows. https://github.com/coreybutler/nvm-windows
* Install https://github.com/felixrieseberg/windows-build-tools#readme
* Install vcpkg under c:\src(didn't try if install different location has effect). https://github.com/Microsoft/vcpkg
* `cd c:\src\vcpkg`
* `.\vcpkg install openssl:x64-windows-static`
* `.\vcpkg install openssl:x32-windows-static`

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember electron:test`
* `ember electron:test --server`

### Linting

* `yarn lint:js`
* `yarn lint:js --fix`

### Building

* `ember electron:build` 
* `ember electron:make` or `ember electron:packge`

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* [ember-electron](https://github.com/felixrieseberg/ember-electron)
