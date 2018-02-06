let state = {count: 0};

function changeState(state, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

function dispatch(action){
    state = changeState(state, action)
    render();
}

function render(){
    document.getElementById('daiso').innerHTML = state.count
}

//keep typing this in console to update the count
dispatch({type: 'INCREASE_COUNT'})
