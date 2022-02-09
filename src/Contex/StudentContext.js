import DataContext from "./DataContext";

const StudentReducer = (state,action) =>{
    switch(action.type){
        case 'add_student':
            return[...state, {id: Math.floor(Math.random() * 9999),name: action.payload.name, roll_no: action.payload.roll_no, photo_uri: action.payload.photo_uri}]
        default:
            return state;
    }
}

const addStudent = (dispatch) =>{
    return (name, roll_no, photo_uri, callback) =>{
        dispatch({type: 'add_student', payload: {name, roll_no, photo_uri}})
        
        callback()
    }
}

export const {Context, Provider} = DataContext(StudentReducer,{addStudent},[{id: 1, name: 'Dixit', roll_no: 1, photo_uri: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}])