# requirement

node
mysql

# installation

1. configure `.env` file (you can copy and paste it from `.env.example` file)
2. run command `npm i`
3. run command `npm run start:dev`

# Testing

1. Create API Ecommerce Ke4ka checkout, dengan kondisi mempunyai voucher 50% dan harga barang Rp.5000.000, dan Ke4ka menggunakan voucher akan mendapatkan point sebesar 2% dari voucher yang digunakan.

url : /api/checkout

2. Sigin with oauth

open your browser and hit this url : /api/auth/google/login
url status : /api/auth/status

3. Manipulate data random user

url : /api/manipulate/random-users

4.  Manipulate array

url : /api/combination?colors=merah,kuning,hijau,pink,ungu,maroon&items=baju,celana,topi,jaket,sepatu&sales=Diskon,Sale,Diskon,Sale,Sale
