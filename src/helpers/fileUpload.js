

export const fileUpload = async(file) => {
      const url = "https://api.cloudinary.com/v1_1/dtp6uf9vc/upload";
      const formData = new FormData();
      formData.append('upload_preset', 'agendas-digitales');
      formData.append('file', file);

      const resp = await fetch(url,
            {
                  method: 'POST',
                  body: formData
            })

      const urlCloud = await resp.json();
      return urlCloud.secure_url;
}
