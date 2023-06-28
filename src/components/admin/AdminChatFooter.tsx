import React, {useState} from 'react'
import Image from "next/image";
import * as Icons from "react-icons/md";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { auth, db, storage } from '@/db/firebaseDb';
import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import useGetDocWithClause from '../hooks/UseGetDocWithClause';
import { useSelector } from 'react-redux';
import {RootState} from "@/redux/store"


function AdminChatFooter({scrollRef, userChatId}: {scrollRef: React.RefObject<HTMLDivElement>, userChatId: string}) {
  const [admin] = useGetDocWithClause({colls:"users",q:{path:"isAdmin", condition:"==", value:true}})

  const {currentUser} = useSelector((state: RootState) =>  state.auth)
  

    const combinedId:string = `${admin[0]?.uid}${userChatId}`

  const [message, setMessage] = useState("")
  const [file, setFile] = useState<Blob | null>(null)

  const handleSend = async() => {
     if(!message) return 
     if(!userChatId) return 
     try{
       await addDoc(collection(db, `chats/${combinedId}/messages`), {
        senderId: auth.currentUser?.uid,
        isAdmin: true,
        text: message,
        date:serverTimestamp(),
        senderPhoto:currentUser?.photo,
        img: ""
       })
       scrollRef.current?.scrollIntoView({behavior: "smooth"})
      
       setMessage("")
     }catch(err: any){
       console.log(err)
     }
  }

  const sendPhoto = async() => {
    if(!file) return
    const uuid = Math.random() + Date.now()
    try{

    const fileRef = ref(storage, `messages/${uuid.toString()}`)
     await uploadBytes(fileRef, file as Blob)
     const url = await getDownloadURL(fileRef)
     closeModal()
     await addDoc(collection(db, `chats/${combinedId}/messages`), {
      senderId: auth.currentUser?.uid,
      isAdmin: false,
      text: "",
      date:serverTimestamp(),
      senderPhoto:currentUser?.photo,
      img: url
     })
     scrollRef.current?.scrollIntoView({behavior: "smooth"})
     
    }catch(err: any){
      console.log(err)
    }
  }

  const openModal = () => {
    const el = document.getElementById("photoModal") as HTMLElement
    if(el){
      el.style.display = "block";
      el.classList.add("show");
  };
}
  //close modal
  const closeModal = () => { 
    setFile(null)
    const el = document.getElementById("photoModal") as HTMLElement
    if(el){
   el.style.display = "none";
   el.classList.remove("show");
   el.classList.add("hide");
  };

}



  return (
    <>
    <div className='modal fade' data-bs-keyboard="false" data-bs-backdrop="static" id="photoModal" >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content c-bg tw-rounded-lg tw-shadow-lg">
          <div className="modal-header">
            <button onClick={closeModal} className="btn-close">
            
            </button>
          </div>
          <div className="modal-body ">
           {file && <Image src={file && URL.createObjectURL(file) as string || ""} height={500} width={500} alt="photo" />}
          </div>
          <div className="modal-footer">
            <button onClick={sendPhoto} >
            <Icons.MdSend size={35} />
            </button>
          </div>
        </div>
      </div>

    </div>
    <div className="chat-footer tw-w-full tw-h-10 tw-mb-4 tw-flex tw-justify-center tw-items-center">
    <div className="tw-shadow-lg  tw-rounded-full tw-flex tw-justify-between tw-mx-auto tw-items-center chat-footer-container">
      <label className="mx-2" >
        <Icons.MdUpload size={35} className="tw-text-black" />
        <input hidden type="file" onChange={(e) => {
          setFile(e.target.files && e.target.files[0])
          openModal()
        }} />
      </label>
      <div className="tw-w-full tw-flex  tw-items-center">

      <textarea
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        placeholder="Type your message here"
        className="tw-overflow-hidden tw-block text-message tw-border  tw-resize-none  tw-text-black tw-w-full tw-border-none  tw-outline-none tw-bg-transparent"
      ></textarea>
      </div>

      <button className="tw-mx-2 tw-ml-4" onClick={handleSend}>
        <Icons.MdSend size={35} className="tw-text-black" />
      </button>
    </div>
  </div>
  </>
  )
}

export default AdminChatFooter