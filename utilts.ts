export const getRandomValue = <T extends object>(enumObject: T): T[keyof T] => {
    const enumValues = Object.values(enumObject);
    const randomIndex = Math.floor(Math.random() * enumValues.length);
    return enumValues[randomIndex];
};
