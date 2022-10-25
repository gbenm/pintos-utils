const { join: joinPath, resolve: resolvePath } = require('path');
const { readdirSync, writeFileSync } = require('fs');
const docs = readdirSync("./docs", { withFileTypes: true })

const docsJson = docs.filter(doc => doc.isDirectory()).map(doc => {
  const content = require(resolvePath(joinPath("docs", doc.name, "_info.json")))
  return {
    order: 0,
    ...content,
    path: `/${doc.name}`
  }
}).sort((a, b) => a.order - b.order)

writeFileSync(joinPath("src", "docs.json"), JSON.stringify(docsJson, null, 2))
