//Global Execution Context -- only one
//create global object -- window for browser
//set this === global object
//push to execution stack 


/**  
 create phrase ---- 
 GlobalExectionContext = {
  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      // Identifier bindings go here
      a: < uninitialized >,
      b: < uninitialized >,
      first: < func >，
    }
    outer: <null>,
    ThisBinding: <Global Object>
  },
  VariableEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      // Identifier bindings go here
      c: undefined,
    }
    outer: <null>,
    ThisBinding: <Global Object>
  }

  execute phrase   --------

  GlobalExectionContext = {
    LexicalEnvironment: {
        EnvironmentRecord: {
        Type: "Object",
        // Identifier bindings go here
        a: Hello World!,
        b: undefined
        first: < func >
        }
        outer: <null>,
        ThisBinding: <Global Object>
    },
    VariableEnvironment: {
        EnvironmentRecord: {
        Type: "Object",
        // Identifier bindings go here
        c: global variable,
        }
        outer: <null>,
        ThisBinding: <Global Object>
    }
}
}
**/

let a = 'Hello World!';
let b;
var c = 'global variable'

//Functional Execution Context 
//stack execution Last in, First out
function first() {
    let g = 50;
    var v = 30;
    console.log('Inside first function');
    // created function execution context when invoke
    // push second to stack
    second();
    // pop second to stack
    console.log('Again inside first function');
}

function second() {
    console.log('Inside second function');
}

// created first function execution context

/**
 * //create phrase ------------
FunctionExectionContext = {
    LexicalEnvironment: {
        EnvironmentRecord: {
        Type: "Declarative",
        // Identifier bindings go here
        Arguments: {0: 20, 1: 30, length: 2},
        v: uninitialized
        },
        outer: <GlobalLexicalEnvironment>,
        ThisBinding: <Global Object or undefined>, // undefined when restrict 
    },
    VariableEnvironment: {
        EnvironmentRecord: {
        Type: "Declarative",
        // Identifier bindings go here
        g: undefined
        },
        outer: <GlobalLexicalEnvironment>,
        ThisBinding: <Global Object or undefined>
    }
}
    -- execute phrase 

FunctionExectionContext = {
    LexicalEnvironment: {
        EnvironmentRecord: {
        Type: "Declarative",
        // Identifier bindings go here
        Arguments: {0: 20, 1: 30, length: 2},
        v  = 30
        },
        outer: <GlobalLexicalEnvironment>,
        ThisBinding: <Global Object or undefined>, // undefined when restrict 
    },
    VariableEnvironment: {
        EnvironmentRecord: {
        Type: "Declarative",
        // Identifier bindings go here
        g: 50
        },
        outer: <GlobalLexicalEnvironment>,
        ThisBinding: <Global Object or undefined>
    }
}
 */
// push it to stack 
first(20, 30);
// pop it context to stack
console.log('Inside Global Execution Context');
// pop global context to stack


