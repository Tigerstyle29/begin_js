const firstName = 'Tigran'
const age = 17

function getAge() {
    return age
}

// const old = 'Hello my name is ' + name + 'and my age is ' + age
// const output = `Hello my name is ${name} and my age is ${getAge() > 18 ? 'Can drive' : `Can't drive`}`

// console.log(output)

console.log(firstName.length)
console.log(firstName)
console.log(firstName.toUpperCase())
console.log(firstName.toLowerCase())
console.log(firstName.charAt(2))
console.log(firstName.indexOf('a'))
console.log(firstName.toLowerCase().startsWith('tig'))
console.log(firstName.endsWith('ran'))
console.log(firstName.repeat(22))

const password = '    my super pass    '

console.log(password.trim())