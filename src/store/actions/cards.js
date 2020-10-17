export const editCard = (payload) => {
  return (dispatch, getState) => {
    if(payload) dispatch({ type: 'EDIT_CARD', payload });
  }
};

export const addCard = (payload) => {
  return (dispatch, getState) => {
    if(payload) dispatch({ type: 'ADD_CARD', payload });
  }
};