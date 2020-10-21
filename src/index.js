module.exports = function check(str, bracketsConfig) {
    let a = []
    let opens = [],
        closes = []
    for (let i = 0; i < bracketsConfig.length; i++) {
        opens.push(bracketsConfig[i][0])
        closes.push(bracketsConfig[i][1])
    }
    let char, last, idx
    debugger
    for (let i = 0; i < str.length; i++) {
        char = str.slice(i, i + 1)
        if (closes.includes(char) && last == closes.indexOf(char)) {
            a.pop()
            last = a[ a.length - 1 ]
        } else {
            idx = opens.indexOf(char)
            a.push(idx)
            last = idx
        }
    }
    return a.length ? false : true
}
