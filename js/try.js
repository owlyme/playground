function tryfn () {
    try{
        
        return a
    } catch(e){
        throw new Error('error')
        return e
    }
}
function tryfn1 () {
    try{
        tryfn()
        return 1
    } catch(e){
        return e
    }
}

console.log(tryfn1())