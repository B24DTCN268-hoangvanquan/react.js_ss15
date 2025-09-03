import React, { useState } from "react";

function Exercise01() {
    

    const [input,setInput] = useState(0)

    const handleChage = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value.length)
    }

    return ( 
        <>
            <h3>Kiểm tra độ dài chuỗi:</h3>
            <input type="text" placeholder="Nhap noi dung vao day" onChange={handleChage}></input>
            {input>=5 && <p>Chuỗi dài hơn 5 kí tự</p>}
        </>
     );
}

export default Exercise01;