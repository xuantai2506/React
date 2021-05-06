import { useDispatch, useSelector } from "react-redux"
import HobbyList from "../components/Home/HobbyList";
import { addNewHobby, setActiveHobby } from "../actions/hobby";
// component pages
const HomePage = () => {
    const randomize = () => {
        return 1000 * Math.trunc((Math.random() * 9000));
    }
    // use selector
    const hobbyList = useSelector((state) => state.hobby.list);
    const activeHobbyId = useSelector((state) => state.hobby.idActiveHobby);
    const dispact = useDispatch();

    const onHandleRamdomHobby = () => {
        const newId = randomize();
        const newHobby = {
            id: newId,
            title: `Hobby random ${newId}`
        }
        const action = addNewHobby(newHobby);
        // dispact action add 
        dispact(action);
    }

    const onHandleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispact(action);
    }
    return (
        <>
            <div className="home-page">
                <h1>Home Page</h1>
                <button onClick={() => onHandleRamdomHobby()}>Random Hobby</button>
                <HobbyList
                    hobbyList={hobbyList}
                    activeHobbyId={activeHobbyId}
                    onHandleHobbyClick={onHandleHobbyClick}
                />
            </div>
        </>
    )
}

export default HomePage