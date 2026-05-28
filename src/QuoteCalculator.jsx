import { useState } from "react";
import { auth, db, storage } from "./firebase";
import { ref, uploadBytes } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

export default function QuoteCalculator() {

  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState("tshirt");
  const [printType, setPrintType] = useState("basic");
  const [file, setFile] = useState(null);

  let basePrice = 0;

  if (product === "tshirt") basePrice = 7;
  if (product === "hoodie") basePrice = 15;
  if (product === "polo") basePrice = 10;

  if (printType === "premium") basePrice += 3;

  if (quantity >= 3 && quantity < 10) basePrice -= 1;
  if (quantity >= 10) basePrice -= 2;

  const total = quantity * basePrice;

  const uploadFile = async () => {

    if (!file) {
      alert("Please select a design file.");
      return;
    }

    try {

      const fileRef = ref(
        storage,
        `designs/${Date.now()}-${file.name}`
      );

      await uploadBytes(fileRef, file);

      alert("Design uploaded successfully ✅");

    } catch (error) {

      console.error(error);

      alert("Upload failed ❌");

    }
  };

  const saveOrder = async () => {

    try {

      const user = auth.currentUser;

      if (!user) {
        alert("Please login first.");
        return;
      }

      await addDoc(collection(db, "orders"), {

        uid: user.uid,
        email: user.email,

        product,
        quantity,
        printType,
        total,

        fileName: file ? file.name : null,

        createdAt: new Date()

      });

      alert("Order saved successfully ✅");

    } catch (error) {

      console.error(error);

      alert("Failed to save order ❌");

    }
  };

  return (

    <div style={{
      background:"white",
      padding:"35px",
      borderRadius:"20px",
      width:"100%",
      maxWidth:"600px",
      boxShadow:"0 12px 35px rgba(0,0,0,0.12)"
    }}>

      <h2 style={{
        textAlign:"center",
        marginBottom:"30px",
        color:"#111"
      }}>
        Instant Quote Calculator
      </h2>

      {/* PRODUCT */}

      <label style={{fontWeight:"bold"}}>
        Product
      </label>

      <select
        value={product}
        onChange={(e)=>setProduct(e.target.value)}
        style={{
          width:"100%",
          padding:"14px",
          marginTop:"10px",
          marginBottom:"20px",
          borderRadius:"10px",
          border:"1px solid #ddd"
        }}
      >

        <option value="tshirt">
          T-Shirt (£7)
        </option>

        <option value="hoodie">
          Hoodie (£15)
        </option>

        <option value="polo">
          Polo (£10)
        </option>

      </select>

      {/* PRINT TYPE */}

      <label style={{fontWeight:"bold"}}>
        Print Type
      </label>

      <select
        value={printType}
        onChange={(e)=>setPrintType(e.target.value)}
        style={{
          width:"100%",
          padding:"14px",
          marginTop:"10px",
          marginBottom:"20px",
          borderRadius:"10px",
          border:"1px solid #ddd"
        }}
      >

        <option value="basic">
          Basic Print
        </option>

        <option value="premium">
          Premium Print (+£3)
        </option>

      </select>

      {/* QUANTITY */}

      <label style={{fontWeight:"bold"}}>
        Quantity
      </label>

      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e)=>
          setQuantity(Number(e.target.value))
        }
        style={{
          width:"100%",
          padding:"14px",
          marginTop:"10px",
          marginBottom:"25px",
          borderRadius:"10px",
          border:"1px solid #ddd"
        }}
      />

      {/* TOTAL */}

      <div style={{
        background:"#F8F9FA",
        padding:"20px",
        borderRadius:"12px",
        marginBottom:"25px",
        textAlign:"center"
      }}>

        <h3 style={{
          color:"#D62828",
          fontSize:"30px",
          margin:0
        }}>
          £{total}
        </h3>

        <small>
          Estimated Quote
        </small>

      </div>

      {/* FILE */}

      <label style={{fontWeight:"bold"}}>
        Upload Design
      </label>

      <input
        type="file"
        onChange={(e)=>
          setFile(e.target.files[0])
        }
        style={{
          width:"100%",
          marginTop:"12px",
          marginBottom:"25px"
        }}
      />

      {/* BUTTONS */}

      <div style={{
        display:"flex",
        gap:"15px",
        flexWrap:"wrap"
      }}>

        <button
          onClick={uploadFile}
          style={{
            flex:1,
            background:"#111",
            color:"white",
            border:"none",
            padding:"15px",
            borderRadius:"10px",
            cursor:"pointer",
            fontWeight:"bold"
          }}
        >
          Upload Design
        </button>

        <button
          onClick={saveOrder}
          style={{
            flex:1,
            background:"#D62828",
            color:"white",
            border:"none",
            padding:"15px",
            borderRadius:"10px",
            cursor:"pointer",
            fontWeight:"bold"
          }}
        >
          Save Order
        </button>

      </div>

    </div>

  );
}