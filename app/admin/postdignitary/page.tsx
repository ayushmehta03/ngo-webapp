'use client';

import SubmitButton from '@/components/general/SumbitButton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Image } from 'lucide-react';
import { handleDignitary } from './action';
import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const DignitaryPost = () => {
  const [state, formAction] = useFormState(handleDignitary, null);

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
    } else if (state?.success === false) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <section className='flex flex-col justify-center items-center'>
      <div className='flex items-center gap-2 justify-center'>
        <h2>Upload Dignitary Images</h2>
        <Image className='text-blue-700 dark:text-blue-600' />
      </div>

      <div className='mt-6 flex-col gap-2 border-2 p-8 max-w-100 justify-center rounded-2xl h-100 items-center'>
        <form
          action={formAction}
          className='flex flex-col gap-4 justify-center items-center'
        >
          <h2>Upload your image below</h2>

          <div className='text-center mt-3 gap-4 flex flex-col'>
            <Label>Enter title for the post</Label>
            <Input
              placeholder='Visit of ..Minister'
              required
              type='text'
              name='title'
              className='w-72'
            />
          </div>

          <div className='text-center mt-3 gap-4 flex flex-col mb-4'>
            <Label>Upload the image</Label>
            <Input
              name='file'
              required
              type='file'
              accept='image/*'
              className='w-72'
            />
          </div>

          <SubmitButton />
        </form>
      </div>
    </section>
  );
};

export default DignitaryPost;
