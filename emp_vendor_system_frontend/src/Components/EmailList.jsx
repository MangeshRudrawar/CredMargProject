import React from "react";

const EmailList = ({emails}) => {
    return(
        <div className="list">
            <h2>Email List</h2>
            <ul>
                {emails.map((email)=>(
                    <li key={email.receiver}>
                    {email.receiver}, {email.subject}, {email.body}
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default EmailList