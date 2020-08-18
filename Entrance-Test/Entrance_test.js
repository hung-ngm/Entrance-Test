// Viết một hàm nhập vào một mảng các số nguyên arr và một hàm f, đầu ra của nó là một mảng mới gồm các số nguyên chia hết cho 2, lấy element cuối cùng của mảng thỏa mãn điều kiện. (nhớ sử dụng tham số là hàm f)

const NumArr = [1,2,3,4,5,6,7,8,9,10,11,12]
function dividebytwo(arr) { 
    // f is a function
	// output return new array include numbers divide by 2
    // requirement: need to use function f
   
    let NewArr = arr.filter(x => x % 2 == 0);
    console.log(NewArr[NewArr.length - 1]);
    return NewArr;
    
    
}

console.log(dividebytwo(NumArr));

// Viết một hàm nhập vào 2 mảng A1 và A2, đầu ra trả về một mảng mới chứa các phần tử không trùng nhau của hai mảng kia. Ví dụ A1 = [1, 2, "a"]; A2 = [1, 3, "b"] thì output ra được là [2, "a", "b"].
const A1 = [1, 2, "a"]; 
const A2 = [1, 3, "b"];
function Uncommon_Element(Arr1, Arr2){
    const Arr = []
    for (let i = 0; i < Arr1.length;i++){
        if (Arr2.includes(Arr1[i]) != true){
            Arr.push(Arr1[i])
        }
    }
    for (let j = 0; j < Arr2.length;j++){
        if (Arr1.includes(Arr2[j]) != true){
            Arr.push(Arr2[j])
        }
    }
   return Arr
}

console.log(Uncommon_Element(A1, A2));