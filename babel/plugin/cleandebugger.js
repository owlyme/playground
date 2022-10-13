module.exports = () => {
    return {
        visitor: {
            DebuggerStatement(path) {
                path.remove()
            }
        }
    }
}