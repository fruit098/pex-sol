const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");
const generate = require("@babel/generator").default;
const fs = require("fs");

const f = fs.readFileSync("./challenge.js").toString();

let ast = parser.parse(f);
let reverseMapBody = t.program(ast.program.body.slice(0, 3));

// evaluate the correct order of array
eval(generate(reverseMapBody).code);

const reverseArrayName = "_0x1fa8";
let proxyFunctions = [reverseArrayName];

// the AST nodes and its types can be explored at the https://astexplorer.net
// find all the variables that are proxies to the original array getter
traverse(ast, {
  VariableDeclarator(path) {
    if (
      t.isIdentifier(path.node.id) &&
      t.isIdentifier(path.node.init) &&
      proxyFunctions.includes(path.node.init.name)
    ) {
      proxyFunctions.push(path.node.id.name);
    }
  },
});

// replace each array getting expression with its value from array directly
traverse(ast, {
  CallExpression(path) {
    if (
      t.isIdentifier(path.node.callee) &&
      proxyFunctions.includes(path.node.callee.name)
    ) {
      path.replaceWith(t.stringLiteral(_0x3c98[path.node.arguments[0].value]));
    }
  },
});

// evaluate each math expression that contains only numbers, so it can be done before runtime
traverse(ast, {
  BinaryExpression(path) {
    if (isOnlyMathExpression(path.node)) {
      path.replaceWith(t.numericLiteral(eval(generate(path.node).code)));
    }
  },
});

// recursively validate that each node in expression is number thus can be evaluated right now
function isOnlyMathExpression(node) {
  if (t.isBinaryExpression(node)) {
    return isOnlyMathExpression(node.left) && isOnlyMathExpression(node.right);
  } else if (t.isNumericLiteral(node)) {
    return true;
  } else if (t.isUnaryExpression(node)) {
    return isOnlyMathExpression(node.argument);
  } else {
    return false;
  }
}

// little help for knowning the name of property to the binary operators
let binaryOperatorReplaceMap = {
  _0x242da0: "<",
  _0x12ff00: "+",
  _0x318012: "%",
};

// replace each function call with the real operators according mapping, eg. fn(a1,a2) => a1 + a2
traverse(ast, {
  CallExpression(path) {
    if (
      t.isMemberExpression(path.node.callee) &&
      t.isIdentifier(path.node.callee.object) &&
      path.node.callee.object.name == "_0x3c6452" &&
      t.isStringLiteral(path.node.callee.property)
    ) {
      let fnKey = path.node.callee.property.value;
      let args = path.node.arguments;
      if (Object.keys(binaryOperatorReplaceMap).includes(fnKey)) {
        path.replaceWith(
          t.BinaryExpression(binaryOperatorReplaceMap[fnKey], ...args)
        );
      } else {
        path.replaceWith(t.CallExpression(args[0], args.slice(1)));
      }
    }
  },
});

// save the transformation
let transformedCode = generate(ast).code;
fs.writeFileSync('./transformed_challenge.js',transformedCode);
