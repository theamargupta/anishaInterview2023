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

