// Dấu => để thay thế cho từ khóa function
const logger = (log) =>
{
    console.log(log);
}
logger("Xin chào bạn đến thế giới này...")

// const sum = (a, b) => a + b; // function tính tổng
const sum = (x, y) => ({x: x, y: y }) // return luôn 1 object
// => có thể đóng vai trò như 1 lệnh return
console.log(sum(2, 7));

const course =
{
    name: "Javascript basic! ",
    getName: function()
    {
        return this.name;
    }
};
console.log(course.getName());

const khoa_hoc = function(ten, gia)
{
    this.ten = ten;
    this.gia = gia;
}
const khoa_hocjs = new khoa_hoc("Javascript", 3000)
console.log(khoa_hocjs);