import React, {useState,useEffect} from 'react';

function ExampleHook(){
    const [count,setCount] = useState(0);
    useEffect(() => {
        document.title = `Ban da bam vao ${count} lan`;
    })
    return (
        <div>
            <p>Bạn đã bấm {count} lần</p>
            <button onClick={() => setCount(count + 1)}>
                Bấm vào tôi
            </button>
        </div>
    );
}

export default ExampleHook ;