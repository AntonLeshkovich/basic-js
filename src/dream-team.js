const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let coolSecretName = '';
    if (members == null) {
      return false;
    }
    for (let i = 0; i < members.length; i++) {
      if (typeof(members[i]) == 'string') {
        let strWithoutSpaces = members[i].replace(/\s/g, "");
        if (arr_EN.includes(strWithoutSpaces[0].toUpperCase())) {
          coolSecretName += strWithoutSpaces[0].toUpperCase();
        }
      }
    }
    return coolSecretName.split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
