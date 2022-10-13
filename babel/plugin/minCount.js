module.exports = function ({types}) {
    return {
        visitor: {
            StringLiteral(path, state) {
                state.stringPathMap = state.stringPathMap || {};
                const nodes = state.stringPathMap[path.node.value] || [];
                nodes.push(path);
                state.stringPathMap[path.node.value] = nodes;
            },
            Program: {
                exit(path, state) {
                    // console.log(state)
                    const {minCount =2 } = state.opts || {}
                    for (const [string, paths] of Object.entries(state.stringPathMap || {})) {
                        if (paths.length < minCount) {
                            continue;
                        }

                        const id = path.scope.generateUidIdentifier(string)
                        paths.forEach(p => {
                            p.replaceWith(id)
                        })

                        path.scope.push({id, init: types.stringLiteral(string)})
                    }
                }
            }
        }
    }
}