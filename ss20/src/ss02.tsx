import React, { useState } from "react";

function Exercise02() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [show, setShow] = useState(false);

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.length > 0 && email.length > 0) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    return (
        <div>
            <h2>Thông tin người dùng</h2>
            <input
                type="text"
                placeholder="Nhập tên"
                value={name}
                onChange={handleChangeName}
            />
            <br />
            <input
                type="text"
                placeholder="Nhập email"
                value={email}
                onChange={handleChangeEmail}
            />
            <br />
            <button type="submit" onClick={handleSubmit}>
                Submit
            </button>

            {show && (
                <div>
                    <p>{name}</p>
                    <p>{email}</p>
                </div>
            )}
        </div>
    );
}

export default Exercise02;
