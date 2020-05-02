/*
Language: Aatbe
Requires: rust.js
Author: Andrei Dimitriu <author@aatbe-lang.org> (@Chronium)
Contributors:
Description: Syntax definition for aatbe-lang
Website: https://aatbe-lang.org
*/

function hljsDefineAatbe(hljs) {
  return {
    case_insensitive: true,
    contains: [
      {
        className: "string",
        begin: '"',
        end: '"',
      },
      hljs.COMMENT(/\\*/, /\\*/),
      hljs.COMMENT(/\/\//, /$/),
    ],
  };
}

module.exports = (hljs) => {
  hljs.registerLanguage("aatbe", hljsDefineAatbe);
};

module.exports.definer = hljsDefineAatbe;
