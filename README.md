# imdb

This simple PoC uses React.JS framework to create a webApp that contains 3 pages.

1. A `Home page` that contains a moving carousel displaying upcoming movies and a list of the user's top 10 favorite movies _WIP_.
2. A `Movies page` that displays a list of movies. Supports pagination, modal opening and filtering _WIP_.
3. A `Favorites page` _WIP_

## Project Structure

Node is required for generation and recommended for development. `package.json` is always generated for a better development experience with prettier, commit hooks, scripts and so on.

In the project root, JHipster generates configuration files for tools like git, prettier, eslint, husk, and others that are well known and you can find references in the web.

`/src/*` structure follows default Java structure.

- `.yo-rc.json` - Yeoman configuration file
  JHipster configuration is stored in this file at `generator-jhipster` key. You may find `generator-jhipster-*` for specific blueprints configuration.
- `.yo-resolve` (optional) - Yeoman conflict resolver
  Allows to use a specific action when conflicts are found skipping prompts for files that matches a pattern. Each line should match `[pattern] [action]` with pattern been a [Minimatch](https://github.com/isaacs/minimatch#minimatch) pattern and action been one of skip (default if ommited) or force. Lines starting with `#` are considered comments and are ignored.
- `.jhipster/*.json` - JHipster entity configuration files
- `npmw` - wrapper to use locally installed npm.
  JHipster installs Node and npm locally using the build tool by default. This wrapper makes sure npm is installed locally and uses it avoiding some differences different versions can cause. By using `./npmw` instead of the traditional `npm` you can configure a Node-less environment to develop or test your application.
- `/src/main/docker` - Docker configurations for the application and services that the application depends on

## Development

Before you can build this project, you must install and configure the following dependencies on your machine:

1. [Node.js][]: We use Node to run a development web server and build the project.
   Depending on your system, you can install Node either from source or as a pre-packaged bundle.

After installing Node, you should be able to run the following command to install development tools.
You will only need to run this command when dependencies change in [package.json](package.json).

```
npm install
```

We use npm scripts and [Webpack][] as our build system.

Run the following commands in two separate terminals to create a blissful development experience where your browser
auto-refreshes when files change on your hard drive.

```
./mvnw
npm start
```

## Building for production

### Packaging as jar

To build the final jar and optimize the imdb application for production, run:

```
./mvnw -Pprod clean verify
```

This will concatenate and minify the client CSS and JavaScript files. It will also modify `index.html` so it references these new files.
To ensure everything worked, run:

```
java -jar target/*.jar
```

Then navigate to [http://localhost:8080](http://localhost:8080) in your browser.

Refer to [Using JHipster in production][] for more details.

### Packaging as war

To package your application as a war in order to deploy it to an application server, run:

```
./mvnw -Pprod,war clean verify
```

For more information, refer to the [Code quality page][].

[jhipster homepage and latest documentation]: https://www.jhipster.tech
[jhipster 7.6.0 archive]: https://www.jhipster.tech/documentation-archive/v7.6.0
[using jhipster in development]: https://www.jhipster.tech/documentation-archive/v7.6.0/development/
[using docker and docker-compose]: https://www.jhipster.tech/documentation-archive/v7.6.0/docker-compose
[using jhipster in production]: https://www.jhipster.tech/documentation-archive/v7.6.0/production/
[running tests page]: https://www.jhipster.tech/documentation-archive/v7.6.0/running-tests/
[code quality page]: https://www.jhipster.tech/documentation-archive/v7.6.0/code-quality/
[setting up continuous integration]: https://www.jhipster.tech/documentation-archive/v7.6.0/setting-up-ci/
[node.js]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[webpack]: https://webpack.github.io/
[browsersync]: https://www.browsersync.io/
[jest]: https://facebook.github.io/jest/
[leaflet]: https://leafletjs.com/
[definitelytyped]: https://definitelytyped.org/
