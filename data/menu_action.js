function randInt(upperBound) {
    return Math.floor(Math.random() * upperBound);
}

function selectRandom(array) {
    return array[randInt(array.length)];
}

function generateRandomPassword(length, chars) {
    var password = '';
    for(var i = 0; i < length; i++) {
        password += selectRandom(chars);
    }

    return password;
}

self.on('click', function(node, data) {
    var preferences = JSON.parse(data);

    
    var password = generateRandomPassword(preferences.passwordLength, preferences.passwordChars);

    
    node.value = password;

    
    self.postMessage(password);
});
