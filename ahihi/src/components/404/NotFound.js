import React from 'react';

const NotFound = () => {
    return (
        <div>
            <div id="oopss">
                <div id="error-text">
                    <img
                        src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
                        alt={404} style={{margin: "0 auto"}}
                    />
                    <h1 style={{fontSize: "60px",textAlign: "center", display: "block", color:"red"}}>Bạn đã đăng nhập vui lòng không đăng nhập nữa</h1>
                    <p style={{fontSize: "40px",textAlign: "center", display: "block"}} className="p-a">Bạn định hack website của tôi hay gì</p>
                    <p style={{fontSize: "40px",textAlign: "center", display: "block"}} className="p-b">Tui là 1 trùm code nên bạn đừng mong làm điều đó</p>
                </div>
            </div>

        </div>
    );
};

export default NotFound;