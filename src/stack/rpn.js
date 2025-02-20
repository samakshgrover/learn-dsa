function evalRPN(tokens) {
  let st = [];

  for (let token of tokens) {
    switch (token) {
      case "+": {
        st.push(st.pop() + st.pop());
        break;
      }
      case "-": {
        let a = st.pop();
        let b = st.pop();
        st.push(b - a);
        break; // Add break here
      }
      case "*":
        st.push(st.pop() * st.pop());
        break;
      case "/": {
        let a = st.pop();
        let b = st.pop();
        st.push(Math.floor(b / a));
        break;
      }
      default: {
        st.push(+token);
      }
    }
  }
  return st[0];
}
