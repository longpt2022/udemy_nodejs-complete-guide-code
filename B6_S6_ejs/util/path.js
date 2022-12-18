const path = require('path');

// c1
// module.exports = path.dirname(process.mainModule.filename);
// c2
module.exports = path.dirname(require.main.filename);
