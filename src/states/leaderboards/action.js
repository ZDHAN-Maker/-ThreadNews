import api from '../../utils/api';

const ActionType = {
  RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARDS',
};

function receiveLeaderboardsActionCreator(leaderboards) {
  return {
    type: ActionType.RECEIVE_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  };
}

function asyncReceiveLeaderboards() {
  return async (dispatch) => {
    try {
      const response = await api.getLeaderboards();
      dispatch(receiveLeaderboardsActionCreator(response.leaderboards));
    } catch (error) {
      console.error(error);
    }
  };
}

export { ActionType, receiveLeaderboardsActionCreator, asyncReceiveLeaderboards };
