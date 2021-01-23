import React, { useEffect, useState } from 'react';
import useClock from '../../hooks/useClock';

function Clock(props) {
    const { time } = useClock();

    return (
        <div>
            {time}
        </div>
    );
}

export default Clock;