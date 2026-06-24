import { useEffect, useState } from "react";

function App() {
const [products,setProducts]=useState([]);

useEffect(()=>{
fetch("http://localhost:5000/api/products")
.then(res=>res.json())
.then(data=>setProducts(data));
},[]);

return (
<div>
<h1>Products</h1>

{products.map((item,index)=>(
<div
key={index}
style={{
border:"1px solid black",
padding:"10px",
margin:"10px"
}}
>

<h2>{item.name}</h2>

<p>₹ {item.price}</p>

</div>
))}

</div>
);
}

export default App;