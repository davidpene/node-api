// this can be used to initially seed some default info
const defaultUser = {
    "id": "babebabe-babe-babe-babe-babebabebabe",
    "email": "babe@babe.com",
    "firstName": "Babe",
    "lastName": "Babe",
    "documents": [
        {
            "id": "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
            "title": "a text file",
            "extension": "txt"
        }
    ]
};

const inMemoryStore = {
    users: [
        defaultUser
    ]
};

module.exports = inMemoryStore;