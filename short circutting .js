const a = {
    num: 1,
    valueOf: function () {
      return this.num = (this.num + 2) ** 2;
    },
  };
  console.log(a == 5 || a == 9 || a == 9);
  // the || operator only check the first value if it is true then it willl return true and if it is false so it will return false and cannot check the others value (short circutting)

