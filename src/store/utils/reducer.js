export default (handlers, defaultState) => (
  state = defaultState,
  { type, payload }
) => (handlers[type] || (f => f))(state, payload);
