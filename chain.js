const calculator = (initial = 0) => {
  const obj = {
    total: initial,
    add: (num) => {
      obj.total += num;
      return obj;
    },
    sub: (num) => {
      obj.total -= num;
      return obj;
    },
    out: () => {
      console.log(obj.total);
      return obj;
    },
  };
  return obj;
};

calculator(10).add(10).out().sub(5).out();
