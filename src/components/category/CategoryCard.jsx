import React from "react";
import { eventSetActive } from "../../actions/events";
import { useDispatch } from "react-redux";

export const CategoryCard = ({name}) => {
    const dispatch = useDispatch();

    const handleActiveCategory = () => {
        dispatch(eventSetActive({name}));
    };

    return (
        <button
            className="boxc"
            onClick={handleActiveCategory}
        >
            <h2>{name}</h2>
        </button>
    );
};
