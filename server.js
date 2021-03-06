const express = require("express")
const app = express()

//panggil router member
const member = require("./router/member")

app.use("/member",member)

//panggil router paket
const paket = require("./router/paket")

app.use("/paket", paket)

// panggil router users
const users = require("./router/users")

app.use("/users", users)


//panggil router transaksi
const transaksi = require("./router/transaksi")

app.use("/transaksi", transaksi)

app.listen(8000,() => {
    console.log(`Server run on port 8000`);
})


