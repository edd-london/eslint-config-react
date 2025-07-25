// ESLint configuration for @eddlondon/eslint-config-react
// Supports both legacy (.eslintrc) and flat config formats

// Simple version detection without external dependencies
function isESLint9Plus() {
  try {
    const eslintVersion = require('eslint/package.json').version;
    const majorVersion = parseInt(eslintVersion.split('.')[0], 10);
    return majorVersion >= 9;
  } catch (error) {
    // If we can't determine the version, default to legacy for compatibility
    return false;
  }
}

// ESLint v9+ uses flat config by default
if (isESLint9Plus()) {
  module.exports = require('./flat.js');
} else {
  module.exports = require('./legacy.js');
}
