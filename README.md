
## API Reference

#### Create API Ecommerce Ketika checkout, dengan kondisi mempunyai voucher 50% dan harga barang Rp.5000.000, dan Ke4ka menggunakan voucher akan mendapatkan point sebesar 2% dari voucher yang digunakan.

```http
  GET /api/checkout
```

#### Sigin with oauth
open your browser and hit this url :
```http
  /api/auth/google/login
```
and check status with url :
```http
  /api/auth/status
```

#### Manipulate data random user
```http
  GET /api/manipulate/random-users
```

#### Manipulate array
```http
  GET /api/combination?colors=merah,kuning,hijau,pink,ungu,maroon&items=baju,celana,topi,jaket,sepatu&sales=Diskon,Sale,Diskon,Sale,Sale
```