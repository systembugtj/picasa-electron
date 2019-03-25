module.exports = {
  "make_targets": {
    "win32": [
      "squirrel"
    ],
    "darwin": [
      "zip"
    ],
    "linux": [
      "deb",
      "rpm"
    ]
  },
  "electronPackagerConfig": {
    "packageManager": "npm"
  },
  "electronWinstallerConfig": {
    "name": "picasa"
  },
  "electronInstallerDebian": {},
  "electronInstallerRedhat": {},
  "github_repository": {
    "owner": "systembugtj",
    "name": ""
  },
  "windowsStoreConfig": {
    "packageName": "",
    "name": "picasa"
  }
};
