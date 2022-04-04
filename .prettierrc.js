module.exports = {
  tabWidth: 2, //使用2个空格缩进
  printWidth: 180, //超过最180字符换行
  semi: true, //行尾需要有分号
  singleQuote: true, //使用单引号代替双引号
  jsxSingleQuote: true, //在jsx中使用单引号代替双引号
  bracketSpacing: false, //在对象，数组括号与文字之间加空格 "{ foo: bar }"
  useTabs: false, //不使用缩进符,而使用空格
  vueIndentScriptAndStyle: false, //是否在Vue文件中缩进脚本和样式标签
  htmlWhitespaceSensitivity: 'ignore', //html空白区域的敏感度
  trailingComma: 'all', //在对象或数组最后一个元素后面是否加逗号
  arrowParens: 'always', //箭头函数,只有一个参数的时候,也需要括号
  quoteProps: 'as-needed', //对象的 key 仅在必要时用引号
  proseWrap: 'preserve', //使用默认的折行标准
  endOfLine: 'lf', //使用unix的换行符
};
