export const QuizData = [
    {
      id: 0,
      question: `var foo = function foo() {
        console.log(foo === foo);  
    };
    foo();`,
      options: [`True`, `False`, `RefrenceError`],
      answer: `True`
    },
    {
      id: 1,
      question: `function aaa() {
        return
        {
            test: 1
        };
    }
    alert(typeof aaa());`,
      options: [`function`, `number`, `undefined`],
      answer: `undefined`
    },
    {
      id: 3,
      question: `Number("1") - 1 == 0;`,
      options: [`True`, `False`, `TypeError`],
      answer: `True`
    },
    {
      id: 4,
      question: `(true + false) > 2 + true; `,
      options: [`True`, `False`, `TypeError`],
      answer: `False`
    },
    {
      id: 5,
      question: `"1" - - "1"; `,
      options: [`0`, `2`, `11`],
      answer: `2`
    },
    {
      id: 6,
      question: `new String("This is a string") instanceof String; `,
      options: [`True`, `False`, `TypeError`],
      answer: `True`
    },
    {
      id: 7,
      question: `[] + [] + 'foo'.split(''); `,
      options: [`f,o,o`, `TypeError`, `foo`],
      answer: `f,o,o`
    },
    {
      id: 8,
      question: `new Array(5).toString(); `,
      options: [`,,,,`, `[]`, `"[]"`],
      answer: `,,,,`
    },
    {
      id: 9,
      question: `String('Hello') === 'Hello'; `,
      options: [`True`, `False`, `TypeError`],
      answer: `True`
    },
    {
      id: 10,
      question: `"This is a string" instanceof String;`,
      options: [`True`, `False`, `TypeError`],
      answer: `False`
    }
  ];