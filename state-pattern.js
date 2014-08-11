var Calculator = {
  result : "",
  currentNum : "",
  bufferNum : "",
  currentState : "",
  states : {
    add : {
      process : function() {
        Calculator.result = parseFloat(Calculator.bufferNum) + parseFloat(Calculator.currentNum);
      }
    },
    multiply : {
      process : function() {
        Calculator.result = parseFloat(Calculator.bufferNum) * parseFloat(Calculator.currentNum);
      }
    },
    div : {
      process : function() {
        Calculator.result = parseFloat(Calculator.bufferNum) / parseFloat(Calculator.currentNum);
      }
    },
    equal : {
      process : function() {
        Calculator.states[Calculator.currentState].process();
      }
    } 
  },
  populateBuffer : function() {
    Calculator.bufferNum = Calculator.currentNum;
    Calculator.currentNum = "";    
  },
  doAdd : function() {
    Calculator.currentState = "add";
    Calculator.populateBuffer();
  },
  doMulti : function() {
      Calculator.currentState = "multi";
      Calculator.populateBuffer();
  },
  doDiv : function() {
    Calculator.currentState = "div";
    Calculator.populateBuffer();
  },
  doEqual : function() {
    Calculator.states["equal"].process();
    Calculator.bufferNum = "";
    Calculator.currentNum = "";
  },
  click : function(num) {
    Calculator.currentNum = Calculator.currentNum + "" + num
    console.log(Calculator.currentNum)
  }
};

Calculator.click(1);
Calculator.click(2);
Calculator.doAdd();
Calculator.click(1);
Calculator.doEqual();
console.log(Calculator.result)

