import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player score', () => {
  const appComponent = shallow(<App />);

  const players = [
    {
      name: 'Kunegunda',
      score: 5
    },
    {
      name: 'Antoni',
      score: 0
    }
  ]

  appComponent.setState({ players });
  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
  onScoreUpdate(0, 5);

  const playersAfterUpdate = appComponent.state().players;
  playersAfterUpdate[0].score
})

it('renders new player after onPlayerAdd callback', () => {
  const appComponent = shallow(<App />);

  const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd'); 
  onPlayerAdd('Ania');

  const players = appComponent.state('players');

  expect(players.length).toEqual(1); //czy liczba graczy po dodaniu jest równa 1,
  expect(players[0].name).toEqual('Ania'); //czy imię pierwszego gracza się zgadza,
  expect(players[0].score).toEqual(0); //czy nowo dodany gracz zaczyna z zerowym kontem (lub inną wartością ustaloną wartością).
});

it('should remove player after onPlayerRemove callback', () => {
	const appComponent = shallow(<App />);

	const players = [
		{
			name: 'Kunegunda',
			score: 5
		},
		{
			name: 'Antoni',
			score: 0
		}
	]

	appComponent.setState( { players });

	const onPlayerRemove = appComponent.find(PlayersList).prop('onPlayerRemove');
	onPlayerRemove(0, 5);

	const updatedPlayers = appComponent.state('players');

	expect(updatedPlayers.length).toEqual(1);
	expect(updatedPlayers[0].name).toEqual('Antoni');
	expect(updatedPlayers[0].score).toEqual(0);
});