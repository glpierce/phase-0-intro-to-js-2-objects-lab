const employee = {
    name: 'Julian',
    streetAddress: '301 Shore Road, Greenwich, CT 06830',
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = {...employee, [key]: value,};
    return newObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newObject = {...employee};
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
