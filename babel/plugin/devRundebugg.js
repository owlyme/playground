module.exports= ({types:t}) => {
    return {
        visitor: {
            ExpressionStatement(path) {
                console.log(path.node.trailingComments)
                if (path.node.trailingComments ) {
                    path.node.trailingComments= null
                    // (path.node.trailingComments || []).forEach(comment => {
                    //     comment.value = '132132'
                    // });
                }
               
            },
            Identifier(path, state) {
                const isIf = t.isIfStatement( path.parentPath);
                const isDebuggerID = path.node.name === '__DEBUGGER'
                if(isIf && isDebuggerID) {
                    // console.log("__DEBUGGER")
                    // 将 __DEBUGGER 替换为 “__DEBUGGER”

                    // 1
                    // path.replaceWithSourceString(`"__DEBUGGER"`)

                    // 2
                    path.replaceWith(t.stringLiteral("__DEBUGGER"))
                }
            },

            StringLiteral(path, state) {
                const isIf = t.isIfStatement( path.parentPath);
                const isDebugger = path.node.value === '__DEBUGGER'
                if (isIf && isDebugger) {
                    path.parentPath.remove()
                }
            }
        }
    }
}