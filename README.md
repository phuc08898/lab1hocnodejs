# Lab 1 - Node.js Project

## Cài đặt

1. Clone repository:
```bash
git clone https://github.com/phuc08898/lab1hocnodejs.git
cd lab1hocnodejs
```

2. Cài đặt dependencies:
```bash
npm install
```

## Các công cụ được sử dụng

### Express
- Framework web cho Node.js
- Cài đặt: `npm install express`
- Sử dụng trong file `src/index.js`

### Express Handlebars
- Template engine cho Express
- Cài đặt: `npm install express-handlebars`
- Views được lưu trong thư mục `src/resource/views`

### SASS
- Preprocessor CSS
- Cài đặt: `npm install sass`
- File SCSS chính: `src/resource/scss/app.scss`
- Compile SCSS sang CSS: `npm run watch`

### Nodemon
- Tự động restart server khi có thay đổi code
- Cài đặt: `npm install nodemon --save-dev`
- Chạy server: `npm start`

## Cấu trúc thư mục

```
src/
├── index.js              # File chính của ứng dụng
├── public/              # Thư mục chứa file tĩnh
│   └── css/            # CSS đã được compile
├── resource/
│   ├── scss/           # SCSS files
│   └── views/          # Handlebars templates
```

## Scripts

- `npm start`: Chạy server với nodemon
- `npm run watch`: Watch và compile SCSS sang CSS

## Cách sử dụng

1. Chạy server:
```bash
npm start
```

2. Compile SCSS (trong terminal khác):
```bash
npm run watch
```

3. Truy cập ứng dụng tại: `http://localhost:3000` 