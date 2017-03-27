import { combineReducers } from 'redux';

import AppReducer from './AppReducer';

// 使用redux的combineReducers方法将所有reducer打包起来
// 每当一个Action被调用，边执行所有的reducer方法
const rootReducer = combineReducers({
  AppReducer
});

export default rootReducer;
