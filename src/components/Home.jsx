import { useState } from "react";

export const Home = () => {
  const [formData, setFormData] = useState({
    email:"",
    password:"",
    username:""
  })

 const [isLogin, setIsLogin] = useState(true);
  
  const handleChange = (event) =>{
    setFormData(prev=>({
      ...prev,
      [event.target.name]:event.target.value
    }))
  }

  const handleSubmit =async (event) =>{
    console.log("hi")
    const res = await  fetch("http://localhost:8080/api/user/login", {
      method: "POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify(formData)
    })
    const data = await res.json();
    const {user} = data;


    // get user id and save in context (eg: use react useContext)
    // use navigate to route the page 
  }
  
return (
  <div>
    <div method="post" className="flex  gap-5 flex-col max-w-[350px] mx-auto items-center">
      <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="email"  className="border border-black"/>
      <input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="password" className="border border-black"/>
{!isLogin && 
      <input type="text" name="username" value={formData.username} onChange={handleChange} required placeholder="username" className="border border-black"/>
    }
      <button onClick={handleSubmit} type="submit">{isLogin?"login":"sign up"}</button>
      <button onClick={()=>{
        setIsLogin(!isLogin)
        setFormData(prev=>({
          ...prev, 
          username:""
        }))
      }}  >{isLogin?"go to sign up":"go to login"}</button>
    
    </div>

  </div>
);
};
