"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    const [secondName, firstName] = fio.split(" ");
    return `${firstName} ${secondName}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    const arrSet = new Set();
    array.forEach((item)  => arrSet.add(item));
    return Array.from(arrSet);
}


// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) {
    let min = 1;
    return array.length === 0 ? false : array.reduce((acc,item) => {
        if(acc < item){
            acc = item;
        } else min = item;
        return acc / min;
    },0);
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    constructor(){
        this.dict = new Map();
    }
    add(key, value){
        if(typeof(key) === 'string' && typeof(value) === 'string'){
            this.dict.set(key.toLowerCase(), value.toLowerCase());
        }
        else console.log('Keys and Values must be String');
    }
    getValue(key){
        if(typeof(key) === 'string' && this.dict.has(key.toLowerCase())) {
            return this.dict.get(key.toLowerCase());
        }
        else return"No Such Key";
    }
}


module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};