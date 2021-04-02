const { process } = requireNode("@electron/remote");

export function isMacOSX() {
  return process.platform === "darwin";
}
