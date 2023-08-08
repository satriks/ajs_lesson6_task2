export default function getSpecialAttack(character) {
  const result = [];
  const { special } = character;

  for (const specialAttack of special) {
    const {
      id, name, icon, description = 'Описание отсутствует',
    } = specialAttack;
    result.push([id, name, icon, description]);
  }
  return result;
}
