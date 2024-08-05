'use client'
import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { toast } from 'react-toastify';
interface PROPS{
  aiOutput:string
}
const OutputSection = ({aiOutput}:PROPS) => {


  const editorRef:any = useRef();

  const copyText = () => {
    navigator.clipboard.writeText(aiOutput);
    toast.success("Copy Successfuly")
  }

  useEffect(() =>{
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput)
  },[aiOutput])
  return (
    <div className='editor  shadow-lg border '>
      <div className="flex items-center p-5 justify-between">
        <h2 className='text-lg  text-white font-medium'>Your Result</h2>
        <Button onClick={copyText} className='flex items-center gap-2'> <Copy className='w-4 h-4' /> Copy </Button>
      </div>
      <Editor
    initialValue="Your result will apear here"
    ref={editorRef}
    height="600px"
    background="white"

    initialEditType="wysiwyg"
    useCommandShortcut={true}
    onChange={() => editorRef.current.getInstance().getMarkdown()}
  />
    </div>
  )
}

export default OutputSection