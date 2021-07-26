// selectors
export const getSearchString = ({searchString}) => searchString;
export const countAllCards = ({cards}) => cards.length;
export const countVisibleCards = ({cards}, searchName) => cards.filter(card => new RegExp(searchName[searchName.length - 1], 'i').test(card.title)).length;

// action name creator
const reducerName = 'search';
const createActionName = name => `app/${reducerName}/${name}`;
// actions types
export const CHANGE = createActionName('CHANGE');

// action creators
export const createAction_changeSearchString = payload => ({ payload, type: CHANGE });
// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE:
      return statePart, action.payload;
    default:
      return statePart;
  }
}

