'use client'
import React, { useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { chatSession } from '@/utlis/AiModel'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { db } from '@/utlis/db'
import { AIOutput } from '@/utlis/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment';
interface PROPS {
    params: {
        'slug': string
    }
}

const Page = (props: PROPS) => {
    const [loading,setLoading] = useState<boolean>(false)
    const [aiOutput,setAIoutput] = useState<string>("")
    const selectTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug === props.params['slug'])
    const {user} = useUser();

    const GenerateAIContent = async (formData:any) => {
        setLoading(true)
        const SelectPrompt = selectTemplate?.aiPrompt;

        const FinalAiPrompt = JSON.stringify(formData)+", "+SelectPrompt;

        const result = await chatSession.sendMessage(FinalAiPrompt)
        setAIoutput(result?.response.text());
        await SaveInDb(JSON.stringify(formData),selectTemplate?.slug,result?.response.text());
        setLoading(false)
    }
    
    const SaveInDb = async (formData:any,slug:any,aiResp:string) =>{

        console.log(aiResp)
        const result = await db.insert(AIOutput).values({
            formData:formData,
            slug:slug,
            aiResponse:aiResp,
            createdBy:user?.primaryEmailAddress?.emailAddress,
            createdAt:moment().format('DD/MM/YYYY')
        })

    }
  return (
    <div>
        <Link href='/dashboard'>
        <Button className='m-4 flex'> <ArrowLeft className='w-5 h-5 ml-1' /> Back</Button>
        </Link>
  
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
        
        {/* Form section  */}
        <FormSection selectedTemplates={selectTemplate} userFormInput={(data:any) => GenerateAIContent(data)} loading={loading}  />

        {/* outputsection  */}
        <div className='col-span-2'>
        <OutputSection aiOutput={aiOutput} />
        </div>
    </div>
    </div>
  )
}

export default Page