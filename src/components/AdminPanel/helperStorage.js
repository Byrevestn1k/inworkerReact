import { getStorage, ref, getDownloadURL, uploadBytesResumable, listAll } from "firebase/storage";
import { useDispatch } from "react-redux";
import { PUSH_USEEFFECT_UPDATE } from "../../constants/actions";
import Modal from "./Components/Modal/Modal";
import { useState } from "react";


//upload File
export async function addFileToFirebaseStorage(images, file, metaData){
    let data;
  if(file==null)return;

    const storage = getStorage();
    
    // // Create the file metadata
    // /** @type {any} */
    // const metadata = {
    //   contentType: 'image/jpeg'
    // };
    
    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, `${images}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file, metaData||{});
    
    // Listen for state changes, errors, and completion of the upload.
      uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log('Upload is ' + progress + '% done');
        // switch (snapshot.state) {
        //   case 'paused':
        //     console.log('Upload is paused');
        //     break;
        //   case 'running':
        //     console.log('Upload is running');
        //     break;
        // }
      }, 
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;
    
          // ...
    
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      }, 
        () => {
  
        // Upload completed successfully, now we can get the download URL
         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
         console.log('Upload completed successfully', downloadURL);

        });

      }
      
    );
    

    
}

//download File
export async function downloadFileFromFirebaseStorage(route){
    const storage = getStorage();
    const starsRef = ref(storage, `${route}`);
    let data;

// Create a reference to the file we want to download

try {
    data = await getDownloadURL(starsRef).then((resp)=> console.log(`file is downloaded`));// addDoc/setDoc
  } 

 catch (error) {
    switch (error.code) {
        case 'storage/object-not-found':
          // File doesn't exist
          break;
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;

        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
      }
  }
return data;
}

export async function downloadListFileFromFirebaseStorage(route){
  const storage = getStorage();
  const listRef = ref(storage, `${route}/`);
    let urlList=[];
     listAll(listRef).then((resp)=>{
			resp.items.forEach((item)=>{
				
				getDownloadURL(item).then((url)=>{
					urlList.push(url) 
				})
				})
			})
return urlList
}

