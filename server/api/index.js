

function get(entityType, entityValue) {
    switch(entityType) {
        case 'address':
            return getAddress(entityValue)
            break
        case 'tx':
        case 'transaction':
            return getTransaction(entityValue)
            break
        case 'block': 
            return getBlock(entityValue)
            break
    }
}

module.exports = {
    get
}
