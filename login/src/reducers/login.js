/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import { combineReducers } from 'redux'
import {cr} from '../utils'
// 对action文件的引用，路径里没有用../，这样写是因为actions是一个别名，它代表actions目录的绝对路径，这是webpack帮我们做的。 当然你也可以定义自己的别名，修改cfg/base.js就行，比如在resolve.alias对象里加一个自己的工具集：“utils:srcPath + '/utils.js'”。
import {INPUT_USERNAME, INPUT_PASSWORD} from 'actions/login'

export default combineReducers({
  username: cr('', {
    [INPUT_USERNAME](state, {value}){return value}
  }),
  password: cr('', {
    [INPUT_PASSWORD](state, {value}){return value}
  })
})
