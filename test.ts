type ReturnObj<T extends string> = {
  [key in T]: any;
} & {
  add: <R extends string>(key: R) => ReturnObj<T | R>,
};

export function add<T extends string>(key: T): ReturnObj<T> {
  const obj = {
    [key]: 123,
    add: key => {
      obj[key] = 123;
      return obj;
    },
  };

  return obj as ReturnObj<T>;
}

const result = add('test').add('bbb').add('asda').add('ddd').add('kkk');
console.info(result);
