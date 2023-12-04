import validateUsername from '../validateName';

test.each([
  'PartyKing',
  'partyking',
  'party-king',
  'party_king',
  'par1yKing',
  'par12yKing',
  'par123yKing',
])('test validateUsername function with correct name %s', (username) => {
  expect(validateUsername(username)).toBeTruthy();
});

test.each([
  '-PartyKing',
  'partyking-',
  '_party-king',
  'party_king_',
  '1par1yKing',
  'par12yKing0',
  'par6666yKing',
  'Яpartyking',
  'party#king',
  'Party@king',
  'king.party',
])('test validateUsername function with incorrect name %s', (username) => {
  expect(validateUsername(username)).toBeFalsy();
});
