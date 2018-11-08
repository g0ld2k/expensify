import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <h2>
            <Link to={`/edit/${id}`}>{description}</Link>
        </h2>
        <p>
            {amount} - {createdAt}
        </p>
    </div>
);

export default ExpenseListItem;
