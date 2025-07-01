module.exports = {
    // sử lý arr nhiều phần tử 
    mutipleMongooseToObject: function(mongooses) {
        return mongooses.map(mongoose => mongoose.toObject());
    },
    mongooseToObject: function(mongoose) {
        // Đoạn này kiểm tra nếu đối tượng truyền vào (mongoose) tồn tại thì chuyển đổi nó thành plain object bằng phương thức toObject().
        // Nếu không tồn tại (null/undefined) thì trả về chính nó (null/undefined).
        // Nếu mongoose có giá trị (không phải null/undefined), thì thực hiện mongoose.toObject().
        // Nếu mongoose không có giá trị (null/undefined), thì trả về chính nó (mongoose).
        return mongoose ? mongoose.toObject() : mongoose;
    }
}