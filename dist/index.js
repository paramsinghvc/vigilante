var react = require('react');

var componentNameStyle = "color: #9c88ff";
var keyNameStyle = "color: #fd79a8; font-weight: bold";
var prevValStyle = "color: #F79F1F; font-weight: bold";
var newValStyle = "color: #38ada9; font-weight: bold";

function logVariable(keyName, prevVal, newVal) {
  console.group("%c" + keyName, keyNameStyle);
  console.info('%cPrevious Value:', prevValStyle, prevVal);
  console.info('%cNew Value: ', newValStyle, newVal);
  console.groupEnd();
}

function logComponentGroup(componentName, changedVariables) {
  console.group("%c" + componentName, componentNameStyle);
  Object.entries(changedVariables).forEach(function (_ref) {
    var key = _ref[0],
        _ref$ = _ref[1],
        prevVal = _ref$.prevVal,
        newVal = _ref$.newVal;
    logVariable(key, prevVal, newVal);
  });
  console.groupEnd();
}

function useVigilante(componentName, variables) {
  var variablesRef = react.useRef(variables);
  react.useEffect(function () {
    var prevVariablesRef = variablesRef.current;
    var changedVariables = Object.keys(variables).reduce(function (acc, key) {
      var prevVal = prevVariablesRef[key];
      var newVal = variables[key];

      if (!Object.is(prevVal, newVal)) {
        acc[key] = {
          prevVal: prevVal,
          newVal: newVal
        };
        prevVariablesRef[key] = newVal;
      }

      return acc;
    }, {});
    logComponentGroup(componentName, changedVariables);
  }, [].concat(Object.values(variables)));
}

module.exports = useVigilante;
//# sourceMappingURL=index.js.map
