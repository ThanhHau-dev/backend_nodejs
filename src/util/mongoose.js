// đây là các công cụ sử dụng tỏng dự án này liên quan tới data

module.exports = {

    // chỗ này là hàm chuyển từ mảng(aray) về đối tượng (object)
    mutipleMongooseToObject: function (mongooses) {
        return mongooses.map(mongoose => mongoose.toObject()); 
    },
    // caí này code theo F8 chứ không hiểu
    mongooseToObject: function (mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }
};  





// viết theo cách của gemini sửa chứ không theo F8

// function multipleMongooseToObject(mongooses) {
//     return mongooses.map(mongoose => mongoose.toObject());
//   }
  
//   module.exports = {
//     multipleMongooseToObject
//   };

// // src/util/mongoose.js

// function mongooseToObject(mongoose) {
//     return mongoose ? mongoose.toObject() : null;
//   }
  
//   module.exports = {
//     mongooseToObject
//   };
  
  



