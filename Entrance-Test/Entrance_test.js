// Viết hàm chuyển đổi các số nguyên về số La mã. Ví dụ nhập vào 6 => output là VI
const RomanMatrix = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
]

function Roman_Number_Converter (x){
    if (x == 0){
        return '';
    }
    for (let i = 0; i < RomanMatrix.length; i++){
        if (x >= RomanMatrix[i][0]){
            return RomanMatrix[i][1] + Roman_Number_Converter(x - RomanMatrix[i][0])
        }
    }
}

console.log(Roman_Number_Converter(900));

//(Không sử dụng cầu điều kiện) Viết hàm kiểm tra danh sách các hộ gia đình có số điện tiêu thụ vượt quá 100 số mỗi tháng. Danh sách chứa các object có key và value tương ứng ví dụ {soNha : "10", soDien: 101}
const Bill = [
    {
        soNha : "10", 
        soDien: 101
    },
    {
        soNha: "9",
        soDien: 99
    }
]

function Filter_Price(x){
    return x.filter(f => f.soDien >= 100)
}

console.log(Filter_Price(Bill));

