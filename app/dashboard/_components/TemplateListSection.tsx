import Templates from '@/app/(data)/Templates';
import React from 'react';
import Cards from './Cards';

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

const TemplateListSection = () => {
  return (
    <div className='grid gap-5 p-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
      {Templates?.map((item: TEMPLATE, index) => (
        <Cards {...item} />
      ))}
    </div>
  );
};

export default TemplateListSection;
