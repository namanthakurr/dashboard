import React, { useState } from 'react';
import { Card } from 'react-bootstrap'
function Todolist() {
    const [data, setData] = useState([]);
    const [item, setItem] = useState('');
    const [edit, setEdit] = useState(null);

    const mydata = () => {
        if (edit !== null) {
            setData((oldData) =>
                oldData.map((v, i) => (i === edit ? { ...v, item } : v))
            );
            setEdit(null);
        } else {
            setData([...data, { item }]);
        }
        setItem('');
    };                                                                                                    

    const del = (i) => {
        const copy = [...data];
        copy.splice(i, 1);
        setData(copy);
    };

    const update = (i) => {
        setEdit(i);
        setItem(data[i].item);
    };

    return (
        <>

            <div style={{ backgroundColor: "coral", width: "26%", padding: "10px" }}>
                <form   className='m-auto'  onSubmit={(e) => { e.preventDefault();mydata();}} >
                    <input
                        type="text"
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                    />
                    <button type="submit">Add</button>
                </form>
                <div className='d-flex shadow' style={{ flexDirection: "row", marginTop: "10px" }}>
                    <ul >
                        {data.map((v, i) => (
                            <div key={i} style={{ marginTop: "10px" }}>
                                <h1>{v.item}</h1>
                                <button onClick={() => del(i)}>Delete</button> 
                                <button onClick={() => update(i)}>Update</button>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>

        </>
    );
}

export default Todolist;
