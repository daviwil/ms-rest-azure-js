const dependencies = require("./dependencies");

const localDependencies = dependencies.getDependenciesWithClonedRepositories();
for (const localDependency of localDependencies) {
  const version = dependencies.getNpmPackageVersion(localDependency, "latest");
  dependencies.updatePackageJsonDependency(localDependency, `^${version}`);
}