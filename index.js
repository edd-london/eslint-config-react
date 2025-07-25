// ESLint configuration for @eddlondon/eslint-config-react
// Supports both legacy (.eslintrc) and flat config formats

// Since ESLint v9 uses flat config by default, we need to detect the format
function detectConfigFormat() {
  try {
    // First try: Check if we can resolve eslint from the consumer's context
    try {
      const eslintPath = require.resolve('eslint', { paths: [process.cwd()] });
      const eslintPackage = require(eslintPath.replace(/\/lib\/.*$/, '/package.json'));
      const majorVersion = parseInt(eslintPackage.version.split('.')[0], 10);
      return majorVersion >= 9;
    } catch (e1) {
      // Second try: Check from our own context
      try {
        const eslintVersion = require('eslint/package.json').version;
        const majorVersion = parseInt(eslintVersion.split('.')[0], 10);
        return majorVersion >= 9;
      } catch (e2) {
        // Default to legacy for maximum compatibility
        return false;
      }
    }
  } catch (error) {
    return false;
  }
}

// ESLint v9+ uses flat config by default
if (detectConfigFormat()) {
  module.exports = require('./flat.js');
} else {
  module.exports = require('./legacy.js');
}
