const data = [
  { country: { a: 1 }, name: "bnisha", fame: "cnisha" },
  { country: "anisha", name: "dnisha", fame: "enisha" },
  { country: "fnisha", name: "gnisha", fame: "hnisha" },
];

const searchByProperty = ({ data, propertyName, searchValue }) => {
  const resultOutput = data.filter((data) =>
    JSON.stringify(data[propertyName]).includes(JSON.stringify(searchValue))
  );
  return resultOutput;
};
const result = searchByProperty({
  data,
  propertyName: "country",
  searchValue: { a: 1 },
});
console.log(result);

console.log(JSON.stringify({ a: 2 }));
console.log(typeof JSON.stringify({ a: 2 }));
console.log(typeof JSON.stringify(data[0]["country"]));
console.log(JSON.stringify(data[0]["country"]) === JSON.stringify({ a: 1 }));

const obj = {};
// const arr = [1, 2, 2, 3,3, 4, 5, 5, 5, 5, 6, 7, 8];
const arr = [ 3, 3, 4, 5, 5, 5, 5, 6, 7, 8];
const func = () => {
  arr.forEach((data) => {

    obj[data] = obj[data] ? obj[data] + 1 : 1;
  });
  return [];
};
func();
console.log(obj);
console.log(arr.length);
// obj["anisha"]=
// 3 = undefined ? undefined+1 : 1
// 3 = 3 ? 1+1 : 1
// obj.amar = undefined? not working in this block : 1
// `${}` ""
// console.log(obj[data]=) key
// console.log(obj[data]) value
// obj["amar"]


function countOccurrences(arr, value) {
  if (value) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        count = count + 1;
      }
    }
    return count;
  } else {
    let count2 = {};
    for (let i = 0; i < arr.length; i++) {
      count2[arr[i]] = count2[arr[i]] ? count2[arr[i]] + 1 : 1;
    }
    return count2;
  }
}
console.log(countOccurrences(["amar", 2, 3, 4, 5, 5, 5],5));



const arr2 = ["amar1", "amar2"];
const obj2 = { 0: "amar1", 1: "amar2" };
// {1:"amar1"},{2:"amar2"}
console.log(arr2[1]);
console.log(obj2["anisha"]);
const val="anisha"
arr2[val]="amar3"
obj2[val]="amar3"

console.log(arr2[5])
console.log(obj2["amar"])