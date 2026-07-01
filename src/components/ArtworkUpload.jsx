import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function ArtworkUpload({ onUpload }){

  const [file,setFile] = useState(null);
  const [uploading,setUploading] = useState(false);
  const [uploadedUrl,setUploadedUrl] = useState("");


  const uploadArtwork = async()=>{

    if(!file) return;


    setUploading(true);


    const fileName =
      `${Date.now()}-${file.name}`;


    const { error } =
      await supabase.storage
        .from("artwork")
        .upload(
          fileName,
          file
        );


    if(error){

      console.log(error);
      setUploading(false);
      return;

    }


    const publicUrl =
      supabase.storage
        .from("artwork")
        .getPublicUrl(fileName)
        .data.publicUrl;


    setUploadedUrl(publicUrl);
    onUpload(publicUrl);

    setUploading(false);

  };


  return (

    <div
      style={{
        marginTop:"20px"
      }}
    >

      <h3>
        Upload Artwork
      </h3>


      <input
        type="file"
        accept=".png,.jpg,.jpeg,.pdf,.svg"
        onChange={(e)=>
          setFile(e.target.files[0])
        }
      />


      <button
        onClick={uploadArtwork}
        disabled={uploading}
        style={{
          marginTop:"10px",
          padding:"12px 20px",
          cursor:"pointer"
        }}
      >

        {
          uploading
          ? "Uploading..."
          : "Upload Artwork"
        }

      </button>


      {
        uploadedUrl && (

          <p>
            Artwork uploaded successfully ✅
          </p>

        )
      }


    </div>

  );

}