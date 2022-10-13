module.exports = ({ types: t }) => {
    return {
        visitor: {
            BinaryExpression(path) {
                console.log([path])
                if (path.node.operator !== "===") {
                    return;
                }

                path.node.left = t.identifier("sebmck");
                path.node.right = t.identifier("dork");
            },
            Identifier(path, state) {
             
                // const node = path.node;
                // if (node.name == 'b') {
                //     console.log(path.parentPath)
                // } 
                
            },
            ObjectExpression(path) {
                console.log(path.node.properties)
                t.ObjectExpression()
            },
            FunctionDeclaration(path) {
                path.insertBefore(
                    t.expressionStatement(
                        t.stringLiteral("Because I'm easy come, easy go.")
                    )
                );
                path.insertAfter(
                    t.expressionStatement(
                        t.stringLiteral("A little high, little low.")
                    )
                );
            }
        }
    }
};