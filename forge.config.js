module.exports = {
  // other config here
  make_targets: {
    win32: [
      "squirrel"
    ],
    darwin: [
      "zip"
    ],
    linux: [
      "deb",
      "rpm"
    ]
  },
  electronPackagerConfig: {
    packageManager: "npm",
    osxSign: true,
    icon: "./app/resources/icon.icns",
    protocols: [
      {
        name: "Classroom Desktop",
        schemes: [
          "x-github-classroom"
        ]
      }
    ]
  },
  electronWinstallerConfig: {
    name: "classroom-desktop",
    icon: "./app/resources/icon.ico",
    authors: "GitHub, Inc."
  },
  electronInstallerDebian: {},
  electronInstallerRedhat: {},
  github_repository: {
    owner: "education",
    name: "classroom-desktop"
  },
  prerelease: true,
  windowsStoreConfig: {
    packageName: "",
    name: "classroom-desktop"
  },
}
