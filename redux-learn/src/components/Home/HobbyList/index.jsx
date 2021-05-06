import { useEffect } from "react";
import './HobbyList.css';
const HobbyList = (props) => {
    const { hobbyList, activeHobbyId, onHandleHobbyClick } = props;

    const onHandleClick = (hobbyItem) => {
        onHandleHobbyClick(hobbyItem);
    }
    return (
        <>
            <ul className="hobby-list">
                {
                    hobbyList.map((hobbyItem) =>
                        <li
                            key={hobbyItem.id}
                            className={(hobbyItem.id == activeHobbyId) ? 'active' : ''}
                            onClick={() => onHandleClick(hobbyItem)}
                        >
                            {hobbyItem.title}
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default HobbyList;