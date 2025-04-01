import { useRef, useState } from 'react';
import { UseFormSetValue, FieldValues } from 'react-hook-form';

export default function useImageUpload(setValue: UseFormSetValue<FieldValues>) {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setValue('logo', file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return { image, fileInputRef, handleImageUpload, handleUploadClick };
}
