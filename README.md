# React Redux setup
- import `npm install @reduxjs/toolkit react-redux`
    - `reduxjs/toolkit` is for configuring the store,
    - `react-redux` is for using the `Provider` component and `useSelector`, `useDispatch` hooks from react-redux.
    - don't worry about these fancy terms we'll discuss clearly in the further steps.
- Create a folder `redux` for keeping all the boilerplate code
- Create a `actionTypes` file for declaring all the types of actions that you want to perform and export them
    - ex: `export const UPDATE_USER = 'UPDATE_USER'`
- Create a `actionCreators` file for sending the actions to the reducer with the type and payload,
    - create all the functions for each actionType like below
        ```js
        export const updateUser = (payload) => {
            return {
                type: UPDATE_USER,
                payload: payload
            }
        }
        ```
        here type is the actionType you have created before, and payload is the new data that you want to update in the state.
- Create a reducer which will take the state and action as parameter and updates the state based on the action.
    - ex: 
    ```js

    const initialState = {
        username: '',
        password: ''
    }

    const userReducer = (state = initialState, action) => {
        switch(action.type) {
            case UPDATE_USER : {
                return {
                    email: action.payload.email,
                    password: action.payload.password
                }
            }
            default : return state
        }
    }
    ```
    - reducer need a initialState which will be updated in the components.
    - action is an object which will be passed using the actionCreater we have prepared before, it will consists of the data that needs to be updated and the type of action we are trying to perform.
    - by comparing the type we will perform the relavent action in returns the new state.
- Creating a `store` to save the state
    - store is where the state lands after dispatching from the reducer and from where we consume the state in components.
    - create a store as below
    ```
    export default configureStore({
        reducer: userReducer
    })
    ```
    - here configureStore will create a new store for you by taking all your reducers.
- Provide the store to application
    - It's time to make our store accessible throughout the application,
    - We have to wrap our `App.js` component with `Provider` component in `index.js` and it will take the store as prop.
    - ex:
    ```
    <Provider store={store}>
        <App />
    </Provider>
    ```
- Now our application is all set to consume the state from the store and update the states from the components, let's see how we'll do that,
    - To access the state we have a `hook` from `react-redux` called `useSelector`, it will take a function as argument which will send the state as parameter and returns the state from the store.
    ex: `const user = useSelector(state => state)`
    - Updating or dispatching a new data into the store.
    - We have to import `useDispatch` hook which will return a function(dispatch) to send an action to the reducer. ex: `const dispatch = useDispatch()`
    - we can call the dispatch by passing an actionCreator function which will take new state as argument.
    - ex:
    ```
    <button onClick={() => dispatch(updateUser(newUser))}>Submit</button>
    ```
    - here a complete component of how to consume and update state.
    ```js
    const Index = () => {

        const user = useSelector(state => state)
        const dispatch = useDispatch()

        return(
            <div>
                <input onChange={(e) => dispatch(userUpdate({email: e.target.value}))}/>
                <p>{user.email}</p>
            </div>
        )
    }
    ```