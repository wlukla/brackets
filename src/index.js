module.exports = function check(str, bracketsConfig) {
  let regex = '';
  for (let i = 0; i < bracketsConfig.length; i++) {
    if (isNaN(+(bracketsConfig[0][0])) !== true) {
      regex += bracketsConfig[i][0] + bracketsConfig[i][1] + '\|';
    } else {
      regex += '\\' + bracketsConfig[i][0] + '\\' + bracketsConfig[i][1] + '\|';
    }
  }
  regex = RegExp(regex.slice(0, -1), 'g')
  let str_length = str.length;
  let new_length = 0;
  while (str_length != new_length) {
    str_length = str.length;
    str = str.replace(regex, '');
    new_length = str.length;
  }
  return str.length == 0 ? true : false;
}
