import ErrorRepository from '../app';

test('Тест успешного вызова translate()', () => {
  const received = new ErrorRepository().translate(200);
  const expected = 'Ok';

  expect(received).toEqual(expected);
});

test('Вызов не существующего значения', () => {
  const received = new ErrorRepository().translate(206);
  const expected = 'Unknown error';

  expect(received).toEqual(expected);
});
