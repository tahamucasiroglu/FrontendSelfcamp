const getTodos = async () => {
  let response = await fetch('example/can.json');

  if (response.status !== 200) {
    throw new Error('Doğru endpointe istek atmadınız');
  }
  const data = await response.json();
  return data;
};

getTodos()
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err.message);
  });

// console.log(getTodos());

// fetch('example/can.json')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
