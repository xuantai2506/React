import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react'

function Message(props) {
    const {message,username} = props;
    const isUser = message.username === username ;
    return (
        <div>
            <Card className="message__card">
                <CardContent>
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
