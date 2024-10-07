import { v4 as uuid } from 'uuid';
import { databases, storage } from '@/appwriteconfig';

type Variant = {
  variation: string;
  sku: string;
  quantity: string;
  price: string;
};
type Product = {
  id?: string;
  name: string;
  description: string;
  category: string;
  variants: Variant[];
  images: File[];
};

const images: string[] = [];

//handle post product
const handlePostProduct = async (
  e: { preventDefault: () => void },
  product: Product,
  setIsLoading: (isLoading: boolean) => void,
  userId: string,
  showToast: (title: string, message: string) => void
) => {
  e.preventDefault();
  //show load spinner
  setIsLoading(true);

  //store product images in appwrite storage
  product.images.forEach(async (image) => {
    const response = await storage.createFile(
      import.meta.env.VITE_BUCKET_ID,
      uuid(),
      image
    );

    //convert photo to url
    const photoURL = await storage.getFileView(
      import.meta.env.VITE_BUCKET_ID,
      response.$id
    ).href;
    images.push(photoURL);
  });

  if (product.description.length > 1000) {
    showToast('Error', 'Description must be less than 1000 characters');

    setIsLoading(false);
    return;
  }

  //save product details to appwrite db
  const promise = databases.createDocument(
    import.meta.env.VITE_DATABASE_ID,
    import.meta.env.VITE_PRODUCT_COLLECTION_ID,
    uuid(),
    {
      ...product,
      variants: JSON.stringify(product.variants),
      //add photourl to appwrite db
      image: images,
      seller_id: userId,
    }
  );

  promise.then(
    function (_response) {
      setTimeout(() => {
        //redirect to dashboard after 5000 milliseconds
        window.location.href = '/vendor';
      }, 5000);

      showToast(
        'Product created successfully',
        'The product has been created successfully. You will be redirected to the dashboard in 5 seconds'
      );
    },
    function (error) {
      showToast('Error', error.message);
    }
  );

  //hide load spinner
  setIsLoading(false);
};

export { handlePostProduct };
