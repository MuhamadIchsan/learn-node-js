const fs = require('fs')
const readline = require('readline')

//menulis string ke file secara asynchronus

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
rl.question('Masukan nama file (txt) : ', (nama) => {
  rl.question('Masukan isi file : ', (isiFile) => {
    fs.writeFile(`${nama}.txt`, `${isiFile}`, (e) => {
      console.log(e)
    })
    rl.close()
  })
})
