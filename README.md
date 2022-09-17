# Seleksi Software Engineer (PT. Kasir Pintar Internasional)

<p align="center">
<a href="https://www.ukur.com/" target="_blank">
<img alt="alt text" src="https://kasirpintar.co.id/landing_page/img/logo_kasirpintar_new.webp" width=400"/>
</a>
</p>

Repository ini merupakan jawaban dari salah satu soal test seleksi pada perusahaan PT. Kasir Pintar Internasional. 

Proyek ini dibuat menggunakan framework **[Express](https://expressjs.com/)**

## Requirement
1. [Node JS](https://nodejs.org/) (16.17.0+)

## Installation
Lakukan perintah berikut untuk menginstall dependencies.
```bash
npm install
```
Ubah nama file **.example.env** menjadi **.env**, lalu isi file tersebut dengan nilai yang diinginkan

Contoh:
```sh
APP_PORT=8000
JWT_KEY=In14d@l@hK3yD4R1JWT
```
Setelah berhasil menginstall dan mengubah nama serta isi file, kita dapat menjalankan program dengan perintah.
```bash
npm start
```

## API Spec
Jika menggunakan **[Postman](https://www.postman.com/)**, dapat menggunakan Collection Postman pada file **[kaspin-collection.json](https://github.com/fahturr/kaspin-test/blob/master/kaspin-collection.json)**

### POST /user/login
**_Request_** Body :

Harus memasukkan "**root**" pada property **username**
```json
{
    "username": "root"
}
```
**_Response_** Body :
```json
{
    "message": "login success",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTUxMzQwOTkxMGU2NzM5MGZmNTM4OTAiLCJpYXQiOjE2NjMzNTM1OTQsImV4cCI6MTY2MzM1NzE5NH0.HzhJWCSK2WsxnBZzcXMVOMtdxy_ZF2oM_QIrsjMJZgo"
    }
}
```

### POST /location/id
**_Request_** Header :

Token JWT akan didapat setelah **login**.
```http request
Authorization: Bearer <Your_JWT_Token>
```
**_Request_** Body :
```json
{
    "id": "1101040"
}
```
**_Response_** Body :
```json
{
  "message": "success get location",
  "data": {
        "id": "1101040",
        "kota_id": "1101",
        "nama": "SALANG"
    }
}
```

### POST /location/kota_id
**_Request_** Header :

Token JWT akan didapat setelah **login**.
```http request
Authorization: Bearer <Your_JWT_Token>
```
**_Request_** Body :
```json
{
    "kota_id": "1104"
}
```
**_Response_** Body :
```json
{
    "message": "",
    "data": {
        "id": "1104032",
        "kota_id": "1104",
        "nama": "LAWE SUMUR"
    }
}
```
