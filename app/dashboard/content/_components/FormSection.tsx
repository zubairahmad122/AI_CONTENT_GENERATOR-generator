'use client'
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';

interface PROPS {
  selectedTemplates?: TEMPLATE;
  userFormInput: (data: any) => void;
  loading: boolean;
}

const FormSection = ({ selectedTemplates, userFormInput, loading }: PROPS) => {
  const [formData, setFormData] = useState<any>({});

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userFormInput(formData);
  }

  return (
    <div className='p-5 shadow-md editor border rounded-lg'>
      {/* Provide a default image or handle undefined case */}
      <Image 
        src={selectedTemplates?.icon || '/default-icon.png'} 
        alt='Icon' 
        width={70} 
        height={70} 
      />

      <h2 className='font-bold text-2xl mb-2 text-white'>{selectedTemplates?.name}</h2>
      <p className='text-sm text-gray-200'>{selectedTemplates?.desc}</p>

      <form className='mt-6' onSubmit={onSubmit}>
        {selectedTemplates?.form?.map((item, index) => (
          <div key={index} className='flex text-white flex-col gap-2 mb-7 my-2'>
            <label className='font-bold'>{item.label}</label>
            {item.field === "input" ? (
              <Input 
                className='text-white' 
                name={item.name} 
                required={item.required} 
                onChange={handleOnChange} 
              />
            ) : item.field === 'textarea' ? (
              <Textarea 
                className='text-white' 
                name={item.name} 
                required={item.required} 
                onChange={handleOnChange} 
              />
            ) : null}
          </div>
        ))}
        <Button type='submit' className='w-full py-6' disabled={loading}>
          {loading && <Loader2Icon className='mr-1 animate-spin' />} Generate Content
        </Button>
      </form>
    </div> 
  )
}

export default FormSection
