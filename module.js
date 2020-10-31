/**
 *
 * Below fn returns text, number etc.
 * based on some length.
 *
 */

const url = require('url');

exports.words = ["a", "ac", "accumsan", "ad", "adipiscing", "aenean", "aenean", "aliquam", "aliquam", "aliquet", "amet", "ante", "aptent", "arcu", "at", "auctor", "augue", "bibendum", "blandit", "class", "commodo", "condimentum", "congue", "consectetur", "consequat", "conubia", "convallis", "cras", "cubilia", "curabitur", "curabitur", "curae", "cursus", "dapibus", "diam", "dictum", "dictumst", "dolor", "donec", "donec", "dui", "duis", "egestas", "eget", "eleifend", "elementum", "elit", "enim", "erat", "eros", "est", "et", "etiam", "etiam", "eu", "euismod", "facilisis", "fames", "faucibus", "felis", "fermentum", "feugiat", "fringilla", "fusce", "gravida", "habitant", "habitasse", "hac", "hendrerit", "himenaeos", "iaculis", "id", "imperdiet", "in", "inceptos", "integer", "interdum", "ipsum", "justo", "lacinia", "lacus", "laoreet", "lectus", "leo", "libero", "ligula", "litora", "lobortis", "lorem", "luctus", "maecenas", "magna", "malesuada", "massa", "mattis", "mauris", "metus", "mi", "molestie", "mollis", "morbi", "nam", "nec", "neque", "netus", "nibh", "nisi", "nisl", "non", "nostra", "nulla", "nullam", "nunc", "odio", "orci", "ornare", "pellentesque", "per", "pharetra", "phasellus", "placerat", "platea", "porta", "porttitor", "posuere", "potenti", "praesent", "pretium", "primis", "proin", "pulvinar", "purus", "quam", "quis", "quisque", "quisque", "rhoncus", "risus", "rutrum", "sagittis", "sapien", "scelerisque", "sed", "sem", "semper", "senectus", "sit", "sociosqu", "sodales", "sollicitudin", "suscipit", "suspendisse", "taciti", "tellus", "tempor", "tempus", "tincidunt", "torquent", "tortor", "tristique", "turpis", "ullamcorper", "ultrices", "ultricies", "urna", "ut", "ut", "varius", "vehicula", "vel", "velit", "venenatis", "vestibulum", "vitae", "vivamus", "viverra", "volutpat", "vulputate"];

exports.getRandomWord = () => {
    let indexNum = Math.floor(Math.random() * 178) + 1;
    return this.words[indexNum];
}

exports.getText = (length = 4) => {
    let result = [];
    while(result.length < length) {
        result.push(this.getRandomWord());
    }
    return result.join(' ');
}

exports.getNDigtNumber = (length = 4) => {
    return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
}

exports.getRandomBoolean = () => {
    return !Math.round(Math.random());
}

exports.getList = (length = 10) => {
    let result = [];
    while(result.length < parseInt(length)) {
        result.push(this.getRandomWord());
    }
    return result;
}

exports.getData = (object, splitter = ',') => {
    const objectArr = object.split(splitter);
    let response;
    switch(objectArr[0].toLowerCase()) {
        case 'number': {
            response = this.getNDigtNumber(objectArr[1]);
            break;
        }
        case 'text': {
            response = this.getText(objectArr[1]);
            break;
        }
        case 'boolean': {
            response = this.getRandomBoolean();
            break;
        }
        case 'list': {
            response = this.getList(objectArr[1]);
            break;
        }
        case 'datetime': {
            response = new Date();
            break;
        }
        default: {
            response = '';
        }
    }
    return response;
}

exports.getResponse = (urlStr) => {
    const urlObject = url.parse(urlStr, true);
    const requestedObject = {...urlObject.query};
    let res = [];
    let resObjLength;
    if(!requestedObject.length) {
        resObjLength = 1;
    } else {
        resObjLength = requestedObject.length;
    }
    while(res.length < resObjLength) {
        let resObj = {};
        Object.entries(requestedObject).forEach((obj) => {
            resObj[obj[0]] = this.getData(obj[1]);
        });
        delete resObj.length;
        res.push(resObj);
    }
    return res;
}
