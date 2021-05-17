import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import './Message.css';
function Message(props) {
    const {message,username} = props;
    const isUser = message.username === username ;
    return (
        <div className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? 'message__userCard' : "message__guestCard"}>
                <CardContent className="card__content">
                    <Typography
                        variant="h5"
                        component="h2"
                    >
                        {message.username} : {message.text}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Message
