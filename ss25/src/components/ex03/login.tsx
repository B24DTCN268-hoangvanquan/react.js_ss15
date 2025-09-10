import { Button, Input } from "antd";


function Login() {

  return (
    <div className="bg-stone-50 flex flex-col items-center p-4 m-4" style={{width:'350px' , height:'300px'}}>
        <h2>Login</h2>
        <div className="m-2" style={{width:'300px'}}>
            <p>Name:</p>
            <Input placeholder="Basic usage" />
        </div>
        <div className="m-2" style={{width:'300px'}}>
            <p>Pass:</p>
            <Input placeholder="Basic usage" />
        </div>
        <Button type="primary" className="m-4"style={{width:'300px'}}>Submit</Button>
        <p>Dont have acc? Creative acc</p>
    </div>
  );
}

export default Login;