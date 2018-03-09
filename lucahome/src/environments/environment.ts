// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  securityUrl: "http://lucahome.fritz.box:8081",
  temperatureUrl: "http://lucahome.fritz.box/cgi-bin/webgui.py",
  version: "2018.03.09",
  copyright: "2018"
};
