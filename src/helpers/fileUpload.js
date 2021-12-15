

export const fileUpload = async(file) => {
      const url = "https://api.cloudinary.com/v1_1/dtp6uf9vc/upload";
      const formData = new FormData();
      formData.append('upload_preset', 'agendasdigitales');
      formData.append('file', file);
      console.log(file)
      try{
            const resp = await fetch(url, {
                method: 'POST',
                body: formData
            })
    
            if(resp.ok){
                const cloudResp = await resp.json();
                return cloudResp.secure_url;
            }else{
                throw await resp.json();
            }
    
        }catch(error){
            throw error;
        }
}
